// Copyright 2018-2020 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.1.8-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1HookTrigger from './V1HookTrigger';
import V1Param from './V1Param';

/**
 * The V1Hook model module.
 * @module model/V1Hook
 * @version 1.1.8-rc0
 */
class V1Hook {
    /**
     * Constructs a new <code>V1Hook</code>.
     * @alias module:model/V1Hook
     */
    constructor() { 
        
        V1Hook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Hook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Hook} obj Optional instance to populate.
     * @return {module:model/V1Hook} The populated <code>V1Hook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Hook();

            if (data.hasOwnProperty('hub_ref')) {
                obj['hub_ref'] = ApiClient.convertToType(data['hub_ref'], 'String');
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = V1HookTrigger.constructFromObject(data['trigger']);
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = ApiClient.convertToType(data['connection'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': V1Param});
            }
            if (data.hasOwnProperty('run_patch')) {
                obj['run_patch'] = ApiClient.convertToType(data['run_patch'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} hub_ref
 */
V1Hook.prototype['hub_ref'] = undefined;

/**
 * @member {module:model/V1HookTrigger} trigger
 */
V1Hook.prototype['trigger'] = undefined;

/**
 * @member {String} connection
 */
V1Hook.prototype['connection'] = undefined;

/**
 * @member {Object.<String, module:model/V1Param>} params
 */
V1Hook.prototype['params'] = undefined;

/**
 * @member {Object} run_patch
 */
V1Hook.prototype['run_patch'] = undefined;






export default V1Hook;
