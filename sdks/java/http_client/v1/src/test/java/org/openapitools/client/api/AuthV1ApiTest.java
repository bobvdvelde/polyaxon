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
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1Auth;
import org.openapitools.client.model.V1Credentials;
import org.openapitools.client.model.V1PasswordChange;
import org.openapitools.client.model.V1TrialStart;
import org.openapitools.client.model.V1UserEmail;
import org.openapitools.client.model.V1UserSingup;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for AuthV1Api
 */
@Ignore
public class AuthV1ApiTest {

    private final AuthV1Api api = new AuthV1Api();

    
    /**
     * Change password
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void changePasswordTest() throws ApiException {
        V1PasswordChange body = null;
        api.changePassword(body);

        // TODO: test validations
    }
    
    /**
     * Login
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void loginTest() throws ApiException {
        V1Credentials body = null;
        V1Auth response = api.login(body);

        // TODO: test validations
    }
    
    /**
     * Reset password
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void resetPasswordTest() throws ApiException {
        V1UserEmail body = null;
        api.resetPassword(body);

        // TODO: test validations
    }
    
    /**
     * Reset password confirm
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void resetPasswordConfirmTest() throws ApiException {
        V1PasswordChange body = null;
        V1Auth response = api.resetPasswordConfirm(body);

        // TODO: test validations
    }
    
    /**
     * Signup
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void signupTest() throws ApiException {
        V1UserSingup body = null;
        V1Auth response = api.signup(body);

        // TODO: test validations
    }
    
    /**
     * Trial Start
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void trialTest() throws ApiException {
        V1TrialStart body = null;
        api.trial(body);

        // TODO: test validations
    }
    
}
