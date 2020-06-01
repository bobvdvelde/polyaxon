#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
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

from django.db import models

from coredb.managers.deleted import ArchivedManager, LiveManager


class DeletedModel(models.Model):
    deleted = models.BooleanField(default=False)

    objects = LiveManager()
    all = models.Manager()
    archived = ArchivedManager()

    class Meta:
        abstract = True

    def archive(self) -> bool:
        if self.deleted:
            return False

        self.deleted = True
        self.save(update_fields=["deleted"])
        return True

    def restore(self) -> bool:
        if not self.deleted:
            return False

        self.deleted = False
        self.save(update_fields=["deleted"])
        return True
