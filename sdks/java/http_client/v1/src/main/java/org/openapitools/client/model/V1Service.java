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


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1Environment;
import org.openapitools.client.model.V1Init;

/**
 * V1Service
 */

public class V1Service {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "service";

  public static final String SERIALIZED_NAME_ENVIRONMENT = "environment";
  @SerializedName(SERIALIZED_NAME_ENVIRONMENT)
  private V1Environment environment;

  public static final String SERIALIZED_NAME_CONNECTIONS = "connections";
  @SerializedName(SERIALIZED_NAME_CONNECTIONS)
  private List<String> connections = null;

  public static final String SERIALIZED_NAME_VOLUMES = "volumes";
  @SerializedName(SERIALIZED_NAME_VOLUMES)
  private List<Object> volumes = null;

  public static final String SERIALIZED_NAME_INIT = "init";
  @SerializedName(SERIALIZED_NAME_INIT)
  private List<V1Init> init = null;

  public static final String SERIALIZED_NAME_SIDECARS = "sidecars";
  @SerializedName(SERIALIZED_NAME_SIDECARS)
  private List<Object> sidecars = null;

  public static final String SERIALIZED_NAME_CONTAINER = "container";
  @SerializedName(SERIALIZED_NAME_CONTAINER)
  private Object container;

  public static final String SERIALIZED_NAME_PORTS = "ports";
  @SerializedName(SERIALIZED_NAME_PORTS)
  private List<Integer> ports = null;

  public static final String SERIALIZED_NAME_REWRITE_PATH = "rewritePath";
  @SerializedName(SERIALIZED_NAME_REWRITE_PATH)
  private Boolean rewritePath;


  public V1Service kind(String kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1Service environment(V1Environment environment) {
    
    this.environment = environment;
    return this;
  }

   /**
   * Get environment
   * @return environment
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Environment getEnvironment() {
    return environment;
  }


  public void setEnvironment(V1Environment environment) {
    this.environment = environment;
  }


  public V1Service connections(List<String> connections) {
    
    this.connections = connections;
    return this;
  }

  public V1Service addConnectionsItem(String connectionsItem) {
    if (this.connections == null) {
      this.connections = new ArrayList<String>();
    }
    this.connections.add(connectionsItem);
    return this;
  }

   /**
   * Get connections
   * @return connections
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getConnections() {
    return connections;
  }


  public void setConnections(List<String> connections) {
    this.connections = connections;
  }


  public V1Service volumes(List<Object> volumes) {
    
    this.volumes = volumes;
    return this;
  }

  public V1Service addVolumesItem(Object volumesItem) {
    if (this.volumes == null) {
      this.volumes = new ArrayList<Object>();
    }
    this.volumes.add(volumesItem);
    return this;
  }

   /**
   * Volumes is a list of volumes that can be mounted.
   * @return volumes
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Volumes is a list of volumes that can be mounted.")

  public List<Object> getVolumes() {
    return volumes;
  }


  public void setVolumes(List<Object> volumes) {
    this.volumes = volumes;
  }


  public V1Service init(List<V1Init> init) {
    
    this.init = init;
    return this;
  }

  public V1Service addInitItem(V1Init initItem) {
    if (this.init == null) {
      this.init = new ArrayList<V1Init>();
    }
    this.init.add(initItem);
    return this;
  }

   /**
   * Get init
   * @return init
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1Init> getInit() {
    return init;
  }


  public void setInit(List<V1Init> init) {
    this.init = init;
  }


  public V1Service sidecars(List<Object> sidecars) {
    
    this.sidecars = sidecars;
    return this;
  }

  public V1Service addSidecarsItem(Object sidecarsItem) {
    if (this.sidecars == null) {
      this.sidecars = new ArrayList<Object>();
    }
    this.sidecars.add(sidecarsItem);
    return this;
  }

   /**
   * Get sidecars
   * @return sidecars
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Object> getSidecars() {
    return sidecars;
  }


  public void setSidecars(List<Object> sidecars) {
    this.sidecars = sidecars;
  }


  public V1Service container(Object container) {
    
    this.container = container;
    return this;
  }

   /**
   * Get container
   * @return container
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getContainer() {
    return container;
  }


  public void setContainer(Object container) {
    this.container = container;
  }


  public V1Service ports(List<Integer> ports) {
    
    this.ports = ports;
    return this;
  }

  public V1Service addPortsItem(Integer portsItem) {
    if (this.ports == null) {
      this.ports = new ArrayList<Integer>();
    }
    this.ports.add(portsItem);
    return this;
  }

   /**
   * Get ports
   * @return ports
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Integer> getPorts() {
    return ports;
  }


  public void setPorts(List<Integer> ports) {
    this.ports = ports;
  }


  public V1Service rewritePath(Boolean rewritePath) {
    
    this.rewritePath = rewritePath;
    return this;
  }

   /**
   * Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/). Default is false, the service shoud handle a base url.
   * @return rewritePath
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Rewrite path to remove polyaxon base url(i.e. /v1/services/namespace/owner/project/). Default is false, the service shoud handle a base url.")

  public Boolean getRewritePath() {
    return rewritePath;
  }


  public void setRewritePath(Boolean rewritePath) {
    this.rewritePath = rewritePath;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Service v1Service = (V1Service) o;
    return Objects.equals(this.kind, v1Service.kind) &&
        Objects.equals(this.environment, v1Service.environment) &&
        Objects.equals(this.connections, v1Service.connections) &&
        Objects.equals(this.volumes, v1Service.volumes) &&
        Objects.equals(this.init, v1Service.init) &&
        Objects.equals(this.sidecars, v1Service.sidecars) &&
        Objects.equals(this.container, v1Service.container) &&
        Objects.equals(this.ports, v1Service.ports) &&
        Objects.equals(this.rewritePath, v1Service.rewritePath);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, environment, connections, volumes, init, sidecars, container, ports, rewritePath);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Service {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    environment: ").append(toIndentedString(environment)).append("\n");
    sb.append("    connections: ").append(toIndentedString(connections)).append("\n");
    sb.append("    volumes: ").append(toIndentedString(volumes)).append("\n");
    sb.append("    init: ").append(toIndentedString(init)).append("\n");
    sb.append("    sidecars: ").append(toIndentedString(sidecars)).append("\n");
    sb.append("    container: ").append(toIndentedString(container)).append("\n");
    sb.append("    ports: ").append(toIndentedString(ports)).append("\n");
    sb.append("    rewritePath: ").append(toIndentedString(rewritePath)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

