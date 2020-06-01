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

from django.core.validators import validate_unicode_slug
from django.db import models

from coredb.abstracts.diff import DiffModel
from coredb.abstracts.uid import UuidModel


class Owner(UuidModel, DiffModel):
    name = models.CharField(
        max_length=150, unique=True, validators=[validate_unicode_slug]
    )

    class Meta:
        app_label = "coredb"
        db_table = "db_owner"

    def __str__(self):
        return self.name
