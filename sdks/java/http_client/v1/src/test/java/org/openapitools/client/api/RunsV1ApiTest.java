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

/*
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


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import java.io.File;
import org.threeten.bp.OffsetDateTime;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ArtifactTree;
import org.openapitools.client.model.V1Auth;
import org.openapitools.client.model.V1EntitiesTags;
import org.openapitools.client.model.V1EntityNotificationBody;
import org.openapitools.client.model.V1EntityStatusBodyRequest;
import org.openapitools.client.model.V1EventsResponse;
import org.openapitools.client.model.V1ListBookmarksResponse;
import org.openapitools.client.model.V1ListRunArtifactsResponse;
import org.openapitools.client.model.V1ListRunConnectionsResponse;
import org.openapitools.client.model.V1ListRunEdgesResponse;
import org.openapitools.client.model.V1ListRunsResponse;
import org.openapitools.client.model.V1Logs;
import org.openapitools.client.model.V1OperationBody;
import org.openapitools.client.model.V1OwnerSubEntityResourceRequestByUid;
import org.openapitools.client.model.V1Run;
import org.openapitools.client.model.V1RunArtifact;
import org.openapitools.client.model.V1RunArtifacts;
import org.openapitools.client.model.V1RunSettings;
import org.openapitools.client.model.V1Status;
import org.openapitools.client.model.V1Uuids;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for RunsV1Api
 */
@Ignore
public class RunsV1ApiTest {

    private final RunsV1Api api = new RunsV1Api();

    
    /**
     * Approve run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void approveRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.approveRun(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Approve runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void approveRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1Uuids body = null;
        api.approveRuns(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Archive run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void archiveRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.archiveRun(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Bookmark run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void bookmarkRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.bookmarkRun(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Bookmark runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void bookmarkRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1Uuids body = null;
        api.bookmarkRuns(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Collect run logs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void collectRunLogsTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        String kind = null;
        api.collectRunLogs(namespace, owner, project, uuid, kind);

        // TODO: test validations
    }
    
    /**
     * Restart run with copy
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void copyRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String runUuid = null;
        V1Run body = null;
        V1Run response = api.copyRun(owner, project, runUuid, body);

        // TODO: test validations
    }
    
    /**
     * Create new run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createRunTest() throws ApiException {
        String owner = null;
        String project = null;
        V1OperationBody body = null;
        V1Run response = api.createRun(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Create bulk run artifacts lineage
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createRunArtifactsLineageTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1RunArtifacts body = null;
        api.createRunArtifactsLineage(owner, project, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Create new run status
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createRunStatusTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        V1EntityStatusBodyRequest body = null;
        V1Status response = api.createRunStatus(owner, project, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Delete run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.deleteRun(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Delete run artifact
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteRunArtifactTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        String path = null;
        api.deleteRunArtifact(namespace, owner, project, uuid, path);

        // TODO: test validations
    }
    
    /**
     * Delete run artifact lineage
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteRunArtifactLineageTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        String name = null;
        String namespace = null;
        api.deleteRunArtifactLineage(owner, project, uuid, name, namespace);

        // TODO: test validations
    }
    
    /**
     * Delete run artifacts
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteRunArtifactsTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        String path = null;
        api.deleteRunArtifacts(namespace, owner, project, uuid, path);

        // TODO: test validations
    }
    
    /**
     * Delete runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1Uuids body = null;
        api.deleteRuns(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Get multi runs events
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getMultiRunEventsTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String kind = null;
        String names = null;
        String runs = null;
        String orient = null;
        Boolean force = null;
        V1EventsResponse response = api.getMultiRunEvents(namespace, owner, project, kind, names, runs, orient, force);

        // TODO: test validations
    }
    
    /**
     * Get run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        V1Run response = api.getRun(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Get run artifact
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunArtifactTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        String path = null;
        Boolean stream = null;
        Boolean force = null;
        String response = api.getRunArtifact(namespace, owner, project, uuid, path, stream, force);

        // TODO: test validations
    }
    
    /**
     * Get run artifacts lineage
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunArtifactLineageTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        String name = null;
        String namespace = null;
        V1RunArtifact response = api.getRunArtifactLineage(owner, project, uuid, name, namespace);

        // TODO: test validations
    }
    
    /**
     * Get run artifacts
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunArtifactsTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        String path = null;
        Boolean force = null;
        String response = api.getRunArtifacts(namespace, owner, project, uuid, path, force);

        // TODO: test validations
    }
    
    /**
     * Get run artifacts lineage
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunArtifactsLineageTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListRunArtifactsResponse response = api.getRunArtifactsLineage(owner, entity, uuid, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Get run artifacts lineage names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunArtifactsLineageNamesTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListRunArtifactsResponse response = api.getRunArtifactsLineageNames(owner, entity, uuid, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Get run artifacts tree
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunArtifactsTreeTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        String path = null;
        V1ArtifactTree response = api.getRunArtifactsTree(namespace, owner, project, uuid, path);

        // TODO: test validations
    }
    
    /**
     * Get run clones lineage
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunClonesLineageTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListRunsResponse response = api.getRunClonesLineage(owner, entity, uuid, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Get run connections lineage
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunConnectionsLineageTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListRunConnectionsResponse response = api.getRunConnectionsLineage(owner, entity, uuid, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Get run downstream lineage
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunDownstreamLineageTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListRunEdgesResponse response = api.getRunDownstreamLineage(owner, entity, uuid, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Get run events
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunEventsTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        String kind = null;
        String names = null;
        String orient = null;
        Boolean force = null;
        V1EventsResponse response = api.getRunEvents(namespace, owner, project, uuid, kind, names, orient, force);

        // TODO: test validations
    }
    
    /**
     * Get run logs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunLogsTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        OffsetDateTime lastTime = null;
        String lastFile = null;
        Boolean force = null;
        V1Logs response = api.getRunLogs(namespace, owner, project, uuid, lastTime, lastFile, force);

        // TODO: test validations
    }
    
    /**
     * Get Run namespace
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunNamespaceTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        V1RunSettings response = api.getRunNamespace(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Get run resources events
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunResourcesTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        String names = null;
        Boolean tail = null;
        Boolean force = null;
        V1EventsResponse response = api.getRunResources(namespace, owner, project, uuid, names, tail, force);

        // TODO: test validations
    }
    
    /**
     * Get Run settings
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunSettingsTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        V1RunSettings response = api.getRunSettings(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Get run stats
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunStatsTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        String kind = null;
        String aggregate = null;
        String groupby = null;
        String trunc = null;
        Object response = api.getRunStats(owner, entity, uuid, offset, limit, sort, query, kind, aggregate, groupby, trunc);

        // TODO: test validations
    }
    
    /**
     * Get run statuses
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunStatusesTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        V1Status response = api.getRunStatuses(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Get run upstream lineage
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunUpstreamLineageTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListRunEdgesResponse response = api.getRunUpstreamLineage(owner, entity, uuid, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Get runs artifacts lineage
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunsArtifactsLineageTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        String mode = null;
        V1ListRunArtifactsResponse response = api.getRunsArtifactsLineage(owner, name, offset, limit, sort, query, mode);

        // TODO: test validations
    }
    
    /**
     * Impersonate run token
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void impersonateTokenTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        V1Auth response = api.impersonateToken(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Invalidate run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void invalidateRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.invalidateRun(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Invalidate runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void invalidateRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1Uuids body = null;
        api.invalidateRuns(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * List archived runs for user
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listArchivedRunsTest() throws ApiException {
        String user = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListRunsResponse response = api.listArchivedRuns(user, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List bookmarked runs for user
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listBookmarkedRunsTest() throws ApiException {
        String user = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListBookmarksResponse response = api.listBookmarkedRuns(user, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        String mode = null;
        V1ListRunsResponse response = api.listRuns(owner, name, offset, limit, sort, query, mode);

        // TODO: test validations
    }
    
    /**
     * Notify run status
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void notifyRunStatusTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String project = null;
        String uuid = null;
        V1EntityNotificationBody body = null;
        api.notifyRunStatus(namespace, owner, project, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Patch run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String runUuid = null;
        V1Run body = null;
        V1Run response = api.patchRun(owner, project, runUuid, body);

        // TODO: test validations
    }
    
    /**
     * Restart run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void restartRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String runUuid = null;
        V1Run body = null;
        V1Run response = api.restartRun(owner, project, runUuid, body);

        // TODO: test validations
    }
    
    /**
     * Restore run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void restoreRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.restoreRun(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Resume run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void resumeRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String runUuid = null;
        V1Run body = null;
        V1Run response = api.resumeRun(owner, project, runUuid, body);

        // TODO: test validations
    }
    
    /**
     * Start run tensorboard
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void startRunTensorboardTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        V1OwnerSubEntityResourceRequestByUid body = null;
        api.startRunTensorboard(owner, entity, uuid, body);

        // TODO: test validations
    }
    
    /**
     * Stop run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void stopRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.stopRun(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Stop run tensorboard
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void stopRunTensorboardTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.stopRunTensorboard(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Stop runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void stopRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1Uuids body = null;
        api.stopRuns(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Sync offline run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void syncRunTest() throws ApiException {
        String owner = null;
        String project = null;
        V1Run body = null;
        api.syncRun(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Tag runs
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void tagRunsTest() throws ApiException {
        String owner = null;
        String project = null;
        V1EntitiesTags body = null;
        api.tagRuns(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Unbookmark run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void unbookmarkRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.unbookmarkRun(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Update run
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateRunTest() throws ApiException {
        String owner = null;
        String project = null;
        String runUuid = null;
        V1Run body = null;
        V1Run response = api.updateRun(owner, project, runUuid, body);

        // TODO: test validations
    }
    
    /**
     * Upload an artifact file to a store via run access
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void uploadRunArtifactTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        File uploadfile = null;
        String path = null;
        Boolean overwrite = null;
        api.uploadRunArtifact(owner, project, uuid, uploadfile, path, overwrite);

        // TODO: test validations
    }
    
    /**
     * Upload a logs file to a store via run access
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void uploadRunLogsTest() throws ApiException {
        String owner = null;
        String project = null;
        String uuid = null;
        File uploadfile = null;
        String path = null;
        Boolean overwrite = null;
        api.uploadRunLogs(owner, project, uuid, uploadfile, path, overwrite);

        // TODO: test validations
    }
    
}
