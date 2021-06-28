// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.10.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1CronSchedule model module.
 * @module model/V1CronSchedule
 * @version 1.10.0
 */
class V1CronSchedule {
    /**
     * Constructs a new <code>V1CronSchedule</code>.
     * @alias module:model/V1CronSchedule
     */
    constructor() { 
        
        V1CronSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1CronSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1CronSchedule} obj Optional instance to populate.
     * @return {module:model/V1CronSchedule} The populated <code>V1CronSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1CronSchedule();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Date');
            }
            if (data.hasOwnProperty('endAt')) {
                obj['endAt'] = ApiClient.convertToType(data['endAt'], 'Date');
            }
            if (data.hasOwnProperty('maxRuns')) {
                obj['maxRuns'] = ApiClient.convertToType(data['maxRuns'], 'Number');
            }
            if (data.hasOwnProperty('cron')) {
                obj['cron'] = ApiClient.convertToType(data['cron'], 'String');
            }
            if (data.hasOwnProperty('dependsOnPast')) {
                obj['dependsOnPast'] = ApiClient.convertToType(data['dependsOnPast'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} kind
 * @default 'cron'
 */
V1CronSchedule.prototype['kind'] = 'cron';

/**
 * @member {Date} startAt
 */
V1CronSchedule.prototype['startAt'] = undefined;

/**
 * @member {Date} endAt
 */
V1CronSchedule.prototype['endAt'] = undefined;

/**
 * @member {Number} maxRuns
 */
V1CronSchedule.prototype['maxRuns'] = undefined;

/**
 * @member {String} cron
 */
V1CronSchedule.prototype['cron'] = undefined;

/**
 * @member {Boolean} dependsOnPast
 */
V1CronSchedule.prototype['dependsOnPast'] = undefined;






export default V1CronSchedule;

