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

/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1ClaimConnection
 */
export interface V1ClaimConnection {
    /**
     * 
     * @type {string}
     * @memberof V1ClaimConnection
     */
    volume_claim?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ClaimConnection
     */
    mount_path?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1ClaimConnection
     */
    read_only?: boolean;
    /**
     * 
     * @type {object}
     * @memberof V1ClaimConnection
     */
    kind?: object;
}

export function V1ClaimConnectionFromJSON(json: any): V1ClaimConnection {
    return V1ClaimConnectionFromJSONTyped(json, false);
}

export function V1ClaimConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ClaimConnection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'volume_claim': !exists(json, 'volume_claim') ? undefined : json['volume_claim'],
        'mount_path': !exists(json, 'mount_path') ? undefined : json['mount_path'],
        'read_only': !exists(json, 'read_only') ? undefined : json['read_only'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
    };
}

export function V1ClaimConnectionToJSON(value?: V1ClaimConnection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'volume_claim': value.volume_claim,
        'mount_path': value.mount_path,
        'read_only': value.read_only,
        'kind': value.kind,
    };
}


