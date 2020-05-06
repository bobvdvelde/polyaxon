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
import {
    V1Cache,
    V1CacheFromJSON,
    V1CacheFromJSONTyped,
    V1CacheToJSON,
    V1IO,
    V1IOFromJSON,
    V1IOFromJSONTyped,
    V1IOToJSON,
    V1Plugins,
    V1PluginsFromJSON,
    V1PluginsFromJSONTyped,
    V1PluginsToJSON,
    V1Termination,
    V1TerminationFromJSON,
    V1TerminationFromJSONTyped,
    V1TerminationToJSON,
    V1TriggerPolicy,
    V1TriggerPolicyFromJSON,
    V1TriggerPolicyFromJSONTyped,
    V1TriggerPolicyToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1CompiledOperation
 */
export interface V1CompiledOperation {
    /**
     * 
     * @type {number}
     * @memberof V1CompiledOperation
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof V1CompiledOperation
     */
    kind?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CompiledOperation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CompiledOperation
     */
    tag?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CompiledOperation
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1CompiledOperation
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1CompiledOperation
     */
    profile?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CompiledOperation
     */
    queue?: string;
    /**
     * 
     * @type {V1Cache}
     * @memberof V1CompiledOperation
     */
    cache?: V1Cache;
    /**
     * 
     * @type {object}
     * @memberof V1CompiledOperation
     */
    schedule?: object;
    /**
     * 
     * @type {object}
     * @memberof V1CompiledOperation
     */
    parallel?: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1CompiledOperation
     */
    dependencies?: Array<string>;
    /**
     * 
     * @type {V1TriggerPolicy}
     * @memberof V1CompiledOperation
     */
    trigger?: V1TriggerPolicy;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1CompiledOperation
     */
    conditions?: Array<object>;
    /**
     * 
     * @type {boolean}
     * @memberof V1CompiledOperation
     */
    skip_on_upstream_skip?: boolean;
    /**
     * 
     * @type {V1Termination}
     * @memberof V1CompiledOperation
     */
    termination?: V1Termination;
    /**
     * 
     * @type {V1Plugins}
     * @memberof V1CompiledOperation
     */
    plugins?: V1Plugins;
    /**
     * 
     * @type {Array<V1IO>}
     * @memberof V1CompiledOperation
     */
    inputs?: Array<V1IO>;
    /**
     * 
     * @type {Array<V1IO>}
     * @memberof V1CompiledOperation
     */
    outputs?: Array<V1IO>;
    /**
     * 
     * @type {object}
     * @memberof V1CompiledOperation
     */
    run?: object;
}

export function V1CompiledOperationFromJSON(json: any): V1CompiledOperation {
    return V1CompiledOperationFromJSONTyped(json, false);
}

export function V1CompiledOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CompiledOperation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'profile': !exists(json, 'profile') ? undefined : json['profile'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'cache': !exists(json, 'cache') ? undefined : V1CacheFromJSON(json['cache']),
        'schedule': !exists(json, 'schedule') ? undefined : json['schedule'],
        'parallel': !exists(json, 'parallel') ? undefined : json['parallel'],
        'dependencies': !exists(json, 'dependencies') ? undefined : json['dependencies'],
        'trigger': !exists(json, 'trigger') ? undefined : V1TriggerPolicyFromJSON(json['trigger']),
        'conditions': !exists(json, 'conditions') ? undefined : json['conditions'],
        'skip_on_upstream_skip': !exists(json, 'skip_on_upstream_skip') ? undefined : json['skip_on_upstream_skip'],
        'termination': !exists(json, 'termination') ? undefined : V1TerminationFromJSON(json['termination']),
        'plugins': !exists(json, 'plugins') ? undefined : V1PluginsFromJSON(json['plugins']),
        'inputs': !exists(json, 'inputs') ? undefined : ((json['inputs'] as Array<any>).map(V1IOFromJSON)),
        'outputs': !exists(json, 'outputs') ? undefined : ((json['outputs'] as Array<any>).map(V1IOFromJSON)),
        'run': !exists(json, 'run') ? undefined : json['run'],
    };
}

export function V1CompiledOperationToJSON(value?: V1CompiledOperation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'kind': value.kind,
        'name': value.name,
        'tag': value.tag,
        'description': value.description,
        'tags': value.tags,
        'profile': value.profile,
        'queue': value.queue,
        'cache': V1CacheToJSON(value.cache),
        'schedule': value.schedule,
        'parallel': value.parallel,
        'dependencies': value.dependencies,
        'trigger': V1TriggerPolicyToJSON(value.trigger),
        'conditions': value.conditions,
        'skip_on_upstream_skip': value.skip_on_upstream_skip,
        'termination': V1TerminationToJSON(value.termination),
        'plugins': V1PluginsToJSON(value.plugins),
        'inputs': value.inputs === undefined ? undefined : ((value.inputs as Array<any>).map(V1IOToJSON)),
        'outputs': value.outputs === undefined ? undefined : ((value.outputs as Array<any>).map(V1IOToJSON)),
        'run': value.run,
    };
}


