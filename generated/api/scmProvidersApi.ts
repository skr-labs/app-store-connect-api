/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.8
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from "request";
import http from "http";

/* tslint:disable:no-unused-locals */
import { ErrorResponse } from "../model/errorResponse";
import { ScmProviderResponse } from "../model/scmProviderResponse";
import { ScmProvidersResponse } from "../model/scmProvidersResponse";
import { ScmRepositoriesResponse } from "../model/scmRepositoriesResponse";

import {
  ObjectSerializer,
  Authentication,
  VoidAuth,
  Interceptor,
} from "../model/models";
import {
  HttpBasicAuth,
  HttpBearerAuth,
  ApiKeyAuth,
  OAuth,
} from "../model/models";

import { HttpError, RequestFile } from "./apis";

let defaultBasePath = "https://api.appstoreconnect.apple.com";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ScmProvidersApiApiKeys {}

export class ScmProvidersApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;

  protected authentications = {
    default: <Authentication>new VoidAuth(),
    "itc-bearer-token": new HttpBearerAuth(),
  };

  protected interceptors: Interceptor[] = [];

  constructor(basePath?: string);
  constructor(
    basePathOrUsername: string,
    password?: string,
    basePath?: string
  ) {
    if (password) {
      if (basePath) {
        this.basePath = basePath;
      }
    } else {
      if (basePathOrUsername) {
        this.basePath = basePathOrUsername;
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  set defaultHeaders(defaultHeaders: any) {
    this._defaultHeaders = defaultHeaders;
  }

  get defaultHeaders() {
    return this._defaultHeaders;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: ScmProvidersApiApiKeys, value: string) {
    (this.authentications as any)[ScmProvidersApiApiKeys[key]].apiKey = value;
  }

  set accessToken(accessToken: string | (() => string)) {
    this.authentications["itc-bearer-token"].accessToken = accessToken;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   *
   * @param fieldsScmProviders the fields to include for returned resources of type scmProviders
   * @param limit maximum resources per page
   * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
   */
  public async scmProvidersGetCollection(
    fieldsScmProviders?: Array<"repositories" | "scmProviderType" | "url">,
    limit?: number,
    fieldsScmRepositories?: Array<
      | "defaultBranch"
      | "gitReferences"
      | "httpCloneUrl"
      | "lastAccessedDate"
      | "ownerName"
      | "pullRequests"
      | "repositoryName"
      | "scmProvider"
      | "sshCloneUrl"
    >,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: ScmProvidersResponse }> {
    const localVarPath = this.basePath + "/v1/scmProviders";
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    if (fieldsScmProviders !== undefined) {
      localVarQueryParameters["fields[scmProviders]"] =
        ObjectSerializer.serialize(
          fieldsScmProviders,
          "Array<'repositories' | 'scmProviderType' | 'url'>"
        );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (fieldsScmRepositories !== undefined) {
      localVarQueryParameters["fields[scmRepositories]"] =
        ObjectSerializer.serialize(
          fieldsScmRepositories,
          "Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>"
        );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications["itc-bearer-token"].accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications["itc-bearer-token"].applyToRequest(
          localVarRequestOptions
        )
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: ScmProvidersResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "ScmProvidersResponse");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   *
   * @param id the id of the requested resource
   * @param fieldsScmProviders the fields to include for returned resources of type scmProviders
   * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
   */
  public async scmProvidersGetInstance(
    id: string,
    fieldsScmProviders?: Array<"repositories" | "scmProviderType" | "url">,
    fieldsScmRepositories?: Array<
      | "defaultBranch"
      | "gitReferences"
      | "httpCloneUrl"
      | "lastAccessedDate"
      | "ownerName"
      | "pullRequests"
      | "repositoryName"
      | "scmProvider"
      | "sshCloneUrl"
    >,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: ScmProviderResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/scmProviders/{id}".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling scmProvidersGetInstance."
      );
    }

    if (fieldsScmProviders !== undefined) {
      localVarQueryParameters["fields[scmProviders]"] =
        ObjectSerializer.serialize(
          fieldsScmProviders,
          "Array<'repositories' | 'scmProviderType' | 'url'>"
        );
    }

    if (fieldsScmRepositories !== undefined) {
      localVarQueryParameters["fields[scmRepositories]"] =
        ObjectSerializer.serialize(
          fieldsScmRepositories,
          "Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>"
        );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications["itc-bearer-token"].accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications["itc-bearer-token"].applyToRequest(
          localVarRequestOptions
        )
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: ScmProviderResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, "ScmProviderResponse");
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   *
   * @param id the id of the requested resource
   * @param filterId filter by id(s)
   * @param fieldsScmGitReferences the fields to include for returned resources of type scmGitReferences
   * @param fieldsScmProviders the fields to include for returned resources of type scmProviders
   * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
   * @param limit maximum resources per page
   * @param include comma-separated list of relationships to include
   */
  public async scmProvidersRepositoriesGetToManyRelated(
    id: string,
    filterId?: Array<string>,
    fieldsScmGitReferences?: Array<
      "canonicalName" | "isDeleted" | "kind" | "name" | "repository"
    >,
    fieldsScmProviders?: Array<"repositories" | "scmProviderType" | "url">,
    fieldsScmRepositories?: Array<
      | "defaultBranch"
      | "gitReferences"
      | "httpCloneUrl"
      | "lastAccessedDate"
      | "ownerName"
      | "pullRequests"
      | "repositoryName"
      | "scmProvider"
      | "sshCloneUrl"
    >,
    limit?: number,
    include?: Array<"defaultBranch" | "scmProvider">,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: ScmRepositoriesResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/scmProviders/{id}/repositories".replace(
        "{" + "id" + "}",
        encodeURIComponent(String(id))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ["application/json"];
    // give precedence to 'application/json'
    if (produces.indexOf("application/json") >= 0) {
      localVarHeaderParams.Accept = "application/json";
    } else {
      localVarHeaderParams.Accept = produces.join(",");
    }
    let localVarFormParams: any = {};

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        "Required parameter id was null or undefined when calling scmProvidersRepositoriesGetToManyRelated."
      );
    }

    if (filterId !== undefined) {
      localVarQueryParameters["filter[id]"] = ObjectSerializer.serialize(
        filterId,
        "Array<string>"
      );
    }

    if (fieldsScmGitReferences !== undefined) {
      localVarQueryParameters["fields[scmGitReferences]"] =
        ObjectSerializer.serialize(
          fieldsScmGitReferences,
          "Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>"
        );
    }

    if (fieldsScmProviders !== undefined) {
      localVarQueryParameters["fields[scmProviders]"] =
        ObjectSerializer.serialize(
          fieldsScmProviders,
          "Array<'repositories' | 'scmProviderType' | 'url'>"
        );
    }

    if (fieldsScmRepositories !== undefined) {
      localVarQueryParameters["fields[scmRepositories]"] =
        ObjectSerializer.serialize(
          fieldsScmRepositories,
          "Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>"
        );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'defaultBranch' | 'scmProvider'>"
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "GET",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications["itc-bearer-token"].accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications["itc-bearer-token"].applyToRequest(
          localVarRequestOptions
        )
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: ScmRepositoriesResponse;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(
                body,
                "ScmRepositoriesResponse"
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
}
