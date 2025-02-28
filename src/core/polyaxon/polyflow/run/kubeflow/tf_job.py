#!/usr/bin/python
#
# Copyright 2018-2021 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import polyaxon_sdk

from marshmallow import fields, validate

from polyaxon.k8s.k8s_schemas import V1Container
from polyaxon.polyflow.run.base import BaseRun
from polyaxon.polyflow.run.kinds import V1RunKind
from polyaxon.polyflow.run.kubeflow.clean_pod_policy import V1CleanPodPolicy
from polyaxon.polyflow.run.kubeflow.replica import KFReplicaSchema
from polyaxon.polyflow.run.kubeflow.scheduling_policy import SchedulingPolicySchema
from polyaxon.polyflow.run.resources import V1RunResources
from polyaxon.polyflow.run.utils import DestinationImageMixin
from polyaxon.schemas.base import BaseCamelSchema, BaseConfig


class TFJobSchema(BaseCamelSchema):
    kind = fields.Str(allow_none=True, validate=validate.Equal(V1RunKind.TFJOB))
    clean_pod_policy = fields.Str(
        allow_none=True, validate=validate.OneOf(V1CleanPodPolicy.allowable_values)
    )
    scheduling_policy = fields.Nested(SchedulingPolicySchema, allow_none=True)
    chief = fields.Nested(KFReplicaSchema, allow_none=True)
    ps = fields.Nested(KFReplicaSchema, allow_none=True)
    worker = fields.Nested(KFReplicaSchema, allow_none=True)
    evaluator = fields.Nested(KFReplicaSchema, allow_none=True)

    @staticmethod
    def schema_config():
        return V1TFJob


class V1TFJob(BaseConfig, BaseRun, DestinationImageMixin, polyaxon_sdk.V1TFJob):
    """Kubeflow TF-Job provides an interface to train distributed experiments with TensorFlow.

    Args:
        kind: str, should be equal `tfjob`
        clean_pod_policy: str, one of [`All`, `Running`, `None`]
        scheduling_policy: [V1SchedulingPolicy](/docs/experimentation/distributed/scheduling-policy/), optional  # noqa
        chief: [V1KFReplica](/docs/experimentation/distributed/kubeflow-replica/), optional
        ps: [V1KFReplica](/docs/experimentation/distributed/kubeflow-replica/), optional
        worker: [V1KFReplica](/docs/experimentation/distributed/kubeflow-replica/), optional
        evaluator: [V1KFReplica](/docs/experimentation/distributed/kubeflow-replica/), optional

    ## YAML usage

    ```yaml
    >>> run:
    >>>   kind: tfjob
    >>>   cleanPodPolicy:
    >>>   schedulingPolicy:
    >>>   chief:
    >>>   ps:
    >>>   worker:
    >>>   evaluator:
    ```

    ## Python usage

    ```python
    >>> from polyaxon.polyflow import V1KFReplica, V1TFJob
    >>> from polyaxon.k8s import k8s_schemas
    >>> tf_job = V1TFJob(
    >>>     clean_pod_policy='All',
    >>>     chief=V1KFReplica(...),
    >>>     ps=V1KFReplica(...),
    >>>     worker=V1KFReplica(...),
    >>>     evaluator=V1KFReplica(...),
    >>> )
    ```

    ## Fields

    ### kind

    The kind signals to the CLI, client, and other tools that this component's runtime is a tfjob.

    If you are using the python client to create the runtime,
    this field is not required and is set by default.

    ```yaml
    >>> run:
    >>>   kind: tfjob
    ```

    ### cleanPodPolicy

    Controls the deletion of pods when a job terminates.
    The policy can be one of the following values: [`All`, `Running`, `None`]


    ```yaml
    >>> run:
    >>>   kind: tfjob
    >>>   cleanPodPolicy: 'All'
    >>>  ...
    ```

    ### schedulingPolicy

    SchedulingPolicy encapsulates various scheduling policies of the distributed training
    job, for example `minAvailable` for gang-scheduling.


    ```yaml
    >>> run:
    >>>   kind: tfjob
    >>>   schedulingPolicy:
    >>>     ...
    >>>  ...
    ```

    ### chief

    The chief is responsible for orchestrating training and performing
    tasks like checkpointing the model.

    ```yaml
    >>> run:
    >>>   kind: tfjob
    >>>   chief:
    >>>     replicas: 1
    >>>     container:
    >>>       ...
    >>>  ...
    ```

    ### ps

    The ps are parameter servers; these servers provide a distributed data store
    for the model parameters.

    ```yaml
    >>> run:
    >>>   kind: tfjob
    >>>   ps:
    >>>     replicas: 2
    >>>     container:
    >>>       ...
    >>>  ...
    ```

    ### worker

    The workers do the actual work of training the model. In some cases,
    worker 0 might also act as the chief.

    ```yaml
    >>> run:
    >>>   kind: tfjob
    >>>   worker:
    >>>     replicas: 2
    >>>     container:
    >>>       ...
    >>>  ...
    ```

    ### evaluator

    The evaluators can be used to compute evaluation metrics as the model is trained.

    ```yaml
    >>> run:
    >>>   kind: tfjob
    >>>   evaluator:
    >>>     replicas: 1
    >>>     container:
    >>>       ...
    >>>  ...
    ```
    """

    SCHEMA = TFJobSchema
    IDENTIFIER = V1RunKind.TFJOB
    REDUCED_ATTRIBUTES = [
        "cleanPodPolicy",
        "schedulingPolicy",
        "chief",
        "ps",
        "worker",
        "evaluator",
    ]

    def apply_image_destination(self, image: str):
        if self.chief:
            self.chief.container = self.chief.container or V1Container()
            self.chief.container.image = image
        if self.ps:
            self.ps.container = self.ps.container or V1Container()
            self.ps.container.image = image
        if self.worker:
            self.worker.container = self.worker.container or V1Container()
            self.worker.container.image = image
        if self.evaluator:
            self.evaluator.container = self.evaluator.container or V1Container()
            self.evaluator.container.image = image

    def get_resources(self):
        resources = V1RunResources()
        if self.chief:
            resources += self.chief.get_resources()
        if self.ps:
            resources += self.ps.get_resources()
        if self.worker:
            resources += self.worker.get_resources()
        if self.evaluator:
            resources += self.evaluator.get_resources()
        return resources

    def get_all_containers(self):
        containers = []
        if self.chief:
            containers += self.chief.get_all_containers()
        if self.ps:
            containers += self.ps.get_all_containers()
        if self.worker:
            containers += self.worker.get_all_containers()
        if self.evaluator:
            containers += self.evaluator.get_all_containers()
        return containers

    def get_all_connections(self):
        connections = []
        if self.chief:
            connections += self.chief.get_all_connections()
        if self.ps:
            connections += self.ps.get_all_connections()
        if self.worker:
            connections += self.worker.get_all_connections()
        if self.evaluator:
            connections += self.evaluator.get_all_connections()
        return connections

    def get_all_init(self):
        init = []
        if self.chief:
            init += self.chief.get_all_init()
        if self.ps:
            init += self.ps.get_all_init()
        if self.worker:
            init += self.worker.get_all_init()
        if self.evaluator:
            init += self.evaluator.get_all_init()
        return init
