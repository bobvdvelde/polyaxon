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
 * The version of the OpenAPI document: 1.0.89
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Version from './V1Version';

/**
 * The V1Versions model module.
 * @module model/V1Versions
 * @version 1.0.89
 */
class V1Versions {
    /**
     * Constructs a new <code>V1Versions</code>.
     * @alias module:model/V1Versions
     */
    constructor() { 
        
        V1Versions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Versions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Versions} obj Optional instance to populate.
     * @return {module:model/V1Versions} The populated <code>V1Versions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Versions();

            if (data.hasOwnProperty('platform_version')) {
                obj['platform_version'] = ApiClient.convertToType(data['platform_version'], 'String');
            }
            if (data.hasOwnProperty('cli')) {
                obj['cli'] = V1Version.constructFromObject(data['cli']);
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = V1Version.constructFromObject(data['platform']);
            }
            if (data.hasOwnProperty('agent')) {
                obj['agent'] = V1Version.constructFromObject(data['agent']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} platform_version
 */
V1Versions.prototype['platform_version'] = undefined;

/**
 * @member {module:model/V1Version} cli
 */
V1Versions.prototype['cli'] = undefined;

/**
 * @member {module:model/V1Version} platform
 */
V1Versions.prototype['platform'] = undefined;

/**
 * @member {module:model/V1Version} agent
 */
V1Versions.prototype['agent'] = undefined;






export default V1Versions;

