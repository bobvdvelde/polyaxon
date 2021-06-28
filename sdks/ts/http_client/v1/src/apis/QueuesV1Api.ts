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

/* tslint:disable */
/* eslint-disable */
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
 */


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ListQueuesResponse,
    V1ListQueuesResponseFromJSON,
    V1ListQueuesResponseToJSON,
    V1Queue,
    V1QueueFromJSON,
    V1QueueToJSON,
} from '../models';

export interface CreateQueueRequest {
    owner: string;
    agent: string;
    body: V1Queue;
}

export interface DeleteQueueRequest {
    owner: string;
    entity: string;
    uuid: string;
}

export interface GetQueueRequest {
    owner: string;
    entity: string;
    uuid: string;
}

export interface ListOrganizationQueueNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListOrganizationQueuesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListQueueNamesRequest {
    owner: string;
    name: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    mode?: string;
}

export interface ListQueuesRequest {
    owner: string;
    name: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    mode?: string;
}

export interface PatchQueueRequest {
    owner: string;
    agent: string;
    queueUuid: string;
    body: V1Queue;
}

export interface UpdateQueueRequest {
    owner: string;
    agent: string;
    queueUuid: string;
    body: V1Queue;
}

/**
 * 
 */
export class QueuesV1Api extends runtime.BaseAPI {

    /**
     * Create queue
     */
    async createQueueRaw(requestParameters: CreateQueueRequest): Promise<runtime.ApiResponse<V1Queue>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createQueue.');
        }

        if (requestParameters.agent === null || requestParameters.agent === undefined) {
            throw new runtime.RequiredError('agent','Required parameter requestParameters.agent was null or undefined when calling createQueue.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createQueue.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{agent}/queues`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent"}}`, encodeURIComponent(String(requestParameters.agent))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1QueueToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1QueueFromJSON(jsonValue));
    }

    /**
     * Create queue
     */
    async createQueue(requestParameters: CreateQueueRequest): Promise<V1Queue> {
        const response = await this.createQueueRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete queue
     */
    async deleteQueueRaw(requestParameters: DeleteQueueRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteQueue.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling deleteQueue.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteQueue.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete queue
     */
    async deleteQueue(requestParameters: DeleteQueueRequest): Promise<void> {
        await this.deleteQueueRaw(requestParameters);
    }

    /**
     * Get queue
     */
    async getQueueRaw(requestParameters: GetQueueRequest): Promise<runtime.ApiResponse<V1Queue>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getQueue.');
        }

        if (requestParameters.entity === null || requestParameters.entity === undefined) {
            throw new runtime.RequiredError('entity','Required parameter requestParameters.entity was null or undefined when calling getQueue.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getQueue.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"entity"}}`, encodeURIComponent(String(requestParameters.entity))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1QueueFromJSON(jsonValue));
    }

    /**
     * Get queue
     */
    async getQueue(requestParameters: GetQueueRequest): Promise<V1Queue> {
        const response = await this.getQueueRaw(requestParameters);
        return await response.value();
    }

    /**
     * List organization level queues names
     */
    async listOrganizationQueueNamesRaw(requestParameters: ListOrganizationQueueNamesRequest): Promise<runtime.ApiResponse<V1ListQueuesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listOrganizationQueueNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/queues/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListQueuesResponseFromJSON(jsonValue));
    }

    /**
     * List organization level queues names
     */
    async listOrganizationQueueNames(requestParameters: ListOrganizationQueueNamesRequest): Promise<V1ListQueuesResponse> {
        const response = await this.listOrganizationQueueNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List organization level queues
     */
    async listOrganizationQueuesRaw(requestParameters: ListOrganizationQueuesRequest): Promise<runtime.ApiResponse<V1ListQueuesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listOrganizationQueues.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/queues`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListQueuesResponseFromJSON(jsonValue));
    }

    /**
     * List organization level queues
     */
    async listOrganizationQueues(requestParameters: ListOrganizationQueuesRequest): Promise<V1ListQueuesResponse> {
        const response = await this.listOrganizationQueuesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List queues names
     */
    async listQueueNamesRaw(requestParameters: ListQueueNamesRequest): Promise<runtime.ApiResponse<V1ListQueuesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listQueueNames.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling listQueueNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{name}/queues/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListQueuesResponseFromJSON(jsonValue));
    }

    /**
     * List queues names
     */
    async listQueueNames(requestParameters: ListQueueNamesRequest): Promise<V1ListQueuesResponse> {
        const response = await this.listQueueNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List queues
     */
    async listQueuesRaw(requestParameters: ListQueuesRequest): Promise<runtime.ApiResponse<V1ListQueuesResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listQueues.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling listQueues.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{name}/queues`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListQueuesResponseFromJSON(jsonValue));
    }

    /**
     * List queues
     */
    async listQueues(requestParameters: ListQueuesRequest): Promise<V1ListQueuesResponse> {
        const response = await this.listQueuesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch queue
     */
    async patchQueueRaw(requestParameters: PatchQueueRequest): Promise<runtime.ApiResponse<V1Queue>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchQueue.');
        }

        if (requestParameters.agent === null || requestParameters.agent === undefined) {
            throw new runtime.RequiredError('agent','Required parameter requestParameters.agent was null or undefined when calling patchQueue.');
        }

        if (requestParameters.queueUuid === null || requestParameters.queueUuid === undefined) {
            throw new runtime.RequiredError('queueUuid','Required parameter requestParameters.queueUuid was null or undefined when calling patchQueue.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchQueue.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent"}}`, encodeURIComponent(String(requestParameters.agent))).replace(`{${"queue.uuid"}}`, encodeURIComponent(String(requestParameters.queueUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1QueueToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1QueueFromJSON(jsonValue));
    }

    /**
     * Patch queue
     */
    async patchQueue(requestParameters: PatchQueueRequest): Promise<V1Queue> {
        const response = await this.patchQueueRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update queue
     */
    async updateQueueRaw(requestParameters: UpdateQueueRequest): Promise<runtime.ApiResponse<V1Queue>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateQueue.');
        }

        if (requestParameters.agent === null || requestParameters.agent === undefined) {
            throw new runtime.RequiredError('agent','Required parameter requestParameters.agent was null or undefined when calling updateQueue.');
        }

        if (requestParameters.queueUuid === null || requestParameters.queueUuid === undefined) {
            throw new runtime.RequiredError('queueUuid','Required parameter requestParameters.queueUuid was null or undefined when calling updateQueue.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateQueue.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent"}}`, encodeURIComponent(String(requestParameters.agent))).replace(`{${"queue.uuid"}}`, encodeURIComponent(String(requestParameters.queueUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1QueueToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1QueueFromJSON(jsonValue));
    }

    /**
     * Update queue
     */
    async updateQueue(requestParameters: UpdateQueueRequest): Promise<V1Queue> {
        const response = await this.updateQueueRaw(requestParameters);
        return await response.value();
    }

}
