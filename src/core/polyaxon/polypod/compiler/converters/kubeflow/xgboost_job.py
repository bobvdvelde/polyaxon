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

from typing import Dict, Iterable, Optional

from polyaxon import pkg
from polyaxon.polyflow import V1CompiledOperation, V1KFReplica, V1Plugins, V1XGBoostJob
from polyaxon.polypod.compiler.converters import BaseConverter
from polyaxon.polypod.compiler.converters.base import PlatformConverterMixin
from polyaxon.polypod.custom_resources import get_xgb_job_custom_resource
from polyaxon.polypod.mixins import XGBoostJobMixin
from polyaxon.polypod.specs.contexts import PluginsContextsSpec
from polyaxon.polypod.specs.replica import ReplicaSpec
from polyaxon.schemas.types import V1ConnectionType, V1K8sResourceType


class XGBoostJobConverter(XGBoostJobMixin, BaseConverter):
    def get_resource(
        self,
        compiled_operation: V1CompiledOperation,
        artifacts_store: V1ConnectionType,
        connection_by_names: Dict[str, V1ConnectionType],
        secrets: Optional[Iterable[V1K8sResourceType]],
        config_maps: Optional[Iterable[V1K8sResourceType]],
        default_sa: str = None,
        default_auth: bool = False,
    ) -> Dict:
        job = compiled_operation.run  # type: V1XGBoostJob

        def _get_replica(replica: Optional[V1KFReplica]) -> Optional[ReplicaSpec]:
            if not replica:
                return None
            return self.get_replica_resource(
                plugins=plugins,
                contexts=contexts,
                environment=replica.environment,
                volumes=replica.volumes or [],
                init=replica.init or [],
                sidecars=replica.sidecars or [],
                container=replica.container,
                artifacts_store=artifacts_store,
                connections=replica.connections or [],
                connection_by_names=connection_by_names,
                secrets=secrets,
                config_maps=config_maps,
                kv_env_vars=kv_env_vars,
                default_sa=default_sa,
                num_replicas=replica.replicas,
            )

        kv_env_vars = compiled_operation.get_env_io()
        plugins = compiled_operation.plugins or V1Plugins()
        contexts = PluginsContextsSpec.from_config(plugins, default_auth=default_auth)
        master = _get_replica(job.master)
        worker = _get_replica(job.worker)
        labels = self.get_labels(version=pkg.VERSION, labels={})

        return get_xgb_job_custom_resource(
            namespace=self.namespace,
            resource_name=self.resource_name,
            master=master,
            worker=worker,
            termination=compiled_operation.termination,
            collect_logs=contexts.collect_logs,
            clean_pod_policy=job.clean_pod_policy,
            scheduling_policy=job.scheduling_policy,
            sync_statuses=contexts.sync_statuses,
            notifications=plugins.notifications,
            labels=labels,
            annotations=self.annotations,
        )


class PlatformXGBoostJobConverter(PlatformConverterMixin, XGBoostJobConverter):
    pass
