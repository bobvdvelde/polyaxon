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

from polyaxon import types
from polycommon.options import option_namespaces, option_subjects
from polycommon.options.option import Option, OptionScope, OptionStores

# Global Async Countdown
SCHEDULER_GLOBAL_COUNTDOWN = "{}_{}".format(
    option_namespaces.SCHEDULER,
    option_subjects.GLOBAL_COUNTDOWN,
)

OPTIONS = {
    SCHEDULER_GLOBAL_COUNTDOWN,
}


class SchedulerCountdown(Option):
    key = SCHEDULER_GLOBAL_COUNTDOWN
    scope = OptionScope.GLOBAL
    is_secret = False
    is_optional = True
    is_list = False
    typing = types.INT
    store = OptionStores.SETTINGS
    default = 1
    options = None
    description = "Global count down for scheduler"
