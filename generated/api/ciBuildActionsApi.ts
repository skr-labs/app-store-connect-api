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
import { CiArtifactsResponse } from "../model/ciArtifactsResponse";
import { CiBuildActionResponse } from "../model/ciBuildActionResponse";
import { CiBuildRunResponse } from "../model/ciBuildRunResponse";
import { CiIssuesResponse } from "../model/ciIssuesResponse";
import { CiTestResultsResponse } from "../model/ciTestResultsResponse";
import { ErrorResponse } from "../model/errorResponse";

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

export enum CiBuildActionsApiApiKeys {}

export class CiBuildActionsApi {
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

  public setApiKey(key: CiBuildActionsApiApiKeys, value: string) {
    (this.authentications as any)[CiBuildActionsApiApiKeys[key]].apiKey = value;
  }

  set accessToken(accessToken: string | (() => string)) {
    this.authentications["itc-bearer-token"].accessToken = accessToken;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   *
   * @param id the id of the requested resource
   * @param fieldsCiArtifacts the fields to include for returned resources of type ciArtifacts
   * @param limit maximum resources per page
   */
  public async ciBuildActionsArtifactsGetToManyRelated(
    id: string,
    fieldsCiArtifacts?: Array<
      "downloadUrl" | "fileName" | "fileSize" | "fileType"
    >,
    limit?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: CiArtifactsResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/ciBuildActions/{id}/artifacts".replace(
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
        "Required parameter id was null or undefined when calling ciBuildActionsArtifactsGetToManyRelated."
      );
    }

    if (fieldsCiArtifacts !== undefined) {
      localVarQueryParameters["fields[ciArtifacts]"] =
        ObjectSerializer.serialize(
          fieldsCiArtifacts,
          "Array<'downloadUrl' | 'fileName' | 'fileSize' | 'fileType'>"
        );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
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
        body: CiArtifactsResponse;
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
              body = ObjectSerializer.deserialize(body, "CiArtifactsResponse");
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
   * @param fieldsScmGitReferences the fields to include for returned resources of type scmGitReferences
   * @param fieldsCiBuildRuns the fields to include for returned resources of type ciBuildRuns
   * @param fieldsCiWorkflows the fields to include for returned resources of type ciWorkflows
   * @param fieldsScmPullRequests the fields to include for returned resources of type scmPullRequests
   * @param fieldsCiProducts the fields to include for returned resources of type ciProducts
   * @param fieldsBuilds the fields to include for returned resources of type builds
   * @param limitBuilds maximum number of related builds returned (when they are included)
   * @param include comma-separated list of relationships to include
   */
  public async ciBuildActionsBuildRunGetToOneRelated(
    id: string,
    fieldsScmGitReferences?: Array<
      "canonicalName" | "isDeleted" | "kind" | "name" | "repository"
    >,
    fieldsCiBuildRuns?: Array<
      | "actions"
      | "buildRun"
      | "builds"
      | "cancelReason"
      | "clean"
      | "completionStatus"
      | "createdDate"
      | "destinationBranch"
      | "destinationCommit"
      | "executionProgress"
      | "finishedDate"
      | "isPullRequestBuild"
      | "issueCounts"
      | "number"
      | "product"
      | "pullRequest"
      | "sourceBranchOrTag"
      | "sourceCommit"
      | "startReason"
      | "startedDate"
      | "workflow"
    >,
    fieldsCiWorkflows?: Array<
      | "actions"
      | "branchStartCondition"
      | "buildRuns"
      | "clean"
      | "containerFilePath"
      | "description"
      | "isEnabled"
      | "isLockedForEditing"
      | "lastModifiedDate"
      | "macOsVersion"
      | "name"
      | "product"
      | "pullRequestStartCondition"
      | "repository"
      | "scheduledStartCondition"
      | "tagStartCondition"
      | "xcodeVersion"
    >,
    fieldsScmPullRequests?: Array<
      | "destinationBranchName"
      | "destinationRepositoryName"
      | "destinationRepositoryOwner"
      | "isClosed"
      | "isCrossRepository"
      | "number"
      | "repository"
      | "sourceBranchName"
      | "sourceRepositoryName"
      | "sourceRepositoryOwner"
      | "title"
      | "webUrl"
    >,
    fieldsCiProducts?: Array<
      | "additionalRepositories"
      | "app"
      | "buildRuns"
      | "bundleId"
      | "createdDate"
      | "name"
      | "primaryRepositories"
      | "productType"
      | "workflows"
    >,
    fieldsBuilds?: Array<
      | "app"
      | "appEncryptionDeclaration"
      | "appStoreVersion"
      | "betaAppReviewSubmission"
      | "betaBuildLocalizations"
      | "betaGroups"
      | "buildAudienceType"
      | "buildBetaDetail"
      | "buildBundles"
      | "computedMinMacOsVersion"
      | "diagnosticSignatures"
      | "expirationDate"
      | "expired"
      | "iconAssetToken"
      | "icons"
      | "individualTesters"
      | "lsMinimumSystemVersion"
      | "minOsVersion"
      | "perfPowerMetrics"
      | "preReleaseVersion"
      | "processingState"
      | "uploadedDate"
      | "usesNonExemptEncryption"
      | "version"
    >,
    limitBuilds?: number,
    include?: Array<
      | "builds"
      | "destinationBranch"
      | "product"
      | "pullRequest"
      | "sourceBranchOrTag"
      | "workflow"
    >,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: CiBuildRunResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/ciBuildActions/{id}/buildRun".replace(
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
        "Required parameter id was null or undefined when calling ciBuildActionsBuildRunGetToOneRelated."
      );
    }

    if (fieldsScmGitReferences !== undefined) {
      localVarQueryParameters["fields[scmGitReferences]"] =
        ObjectSerializer.serialize(
          fieldsScmGitReferences,
          "Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>"
        );
    }

    if (fieldsCiBuildRuns !== undefined) {
      localVarQueryParameters["fields[ciBuildRuns]"] =
        ObjectSerializer.serialize(
          fieldsCiBuildRuns,
          "Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>"
        );
    }

    if (fieldsCiWorkflows !== undefined) {
      localVarQueryParameters["fields[ciWorkflows]"] =
        ObjectSerializer.serialize(
          fieldsCiWorkflows,
          "Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>"
        );
    }

    if (fieldsScmPullRequests !== undefined) {
      localVarQueryParameters["fields[scmPullRequests]"] =
        ObjectSerializer.serialize(
          fieldsScmPullRequests,
          "Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'>"
        );
    }

    if (fieldsCiProducts !== undefined) {
      localVarQueryParameters["fields[ciProducts]"] =
        ObjectSerializer.serialize(
          fieldsCiProducts,
          "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>"
        );
    }

    if (fieldsBuilds !== undefined) {
      localVarQueryParameters["fields[builds]"] = ObjectSerializer.serialize(
        fieldsBuilds,
        "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>"
      );
    }

    if (limitBuilds !== undefined) {
      localVarQueryParameters["limit[builds]"] = ObjectSerializer.serialize(
        limitBuilds,
        "number"
      );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'>"
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
        body: CiBuildRunResponse;
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
              body = ObjectSerializer.deserialize(body, "CiBuildRunResponse");
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
   * @param fieldsCiBuildActions the fields to include for returned resources of type ciBuildActions
   * @param include comma-separated list of relationships to include
   * @param fieldsCiIssues the fields to include for returned resources of type ciIssues
   * @param fieldsCiBuildRuns the fields to include for returned resources of type ciBuildRuns
   * @param fieldsCiTestResults the fields to include for returned resources of type ciTestResults
   * @param fieldsCiArtifacts the fields to include for returned resources of type ciArtifacts
   */
  public async ciBuildActionsGetInstance(
    id: string,
    fieldsCiBuildActions?: Array<
      | "actionType"
      | "artifacts"
      | "buildRun"
      | "completionStatus"
      | "executionProgress"
      | "finishedDate"
      | "isRequiredToPass"
      | "issueCounts"
      | "issues"
      | "name"
      | "startedDate"
      | "testResults"
    >,
    include?: Array<"buildRun">,
    fieldsCiIssues?: Array<"category" | "fileSource" | "issueType" | "message">,
    fieldsCiBuildRuns?: Array<
      | "actions"
      | "buildRun"
      | "builds"
      | "cancelReason"
      | "clean"
      | "completionStatus"
      | "createdDate"
      | "destinationBranch"
      | "destinationCommit"
      | "executionProgress"
      | "finishedDate"
      | "isPullRequestBuild"
      | "issueCounts"
      | "number"
      | "product"
      | "pullRequest"
      | "sourceBranchOrTag"
      | "sourceCommit"
      | "startReason"
      | "startedDate"
      | "workflow"
    >,
    fieldsCiTestResults?: Array<
      | "className"
      | "destinationTestResults"
      | "fileSource"
      | "message"
      | "name"
      | "status"
    >,
    fieldsCiArtifacts?: Array<
      "downloadUrl" | "fileName" | "fileSize" | "fileType"
    >,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: CiBuildActionResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/ciBuildActions/{id}".replace(
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
        "Required parameter id was null or undefined when calling ciBuildActionsGetInstance."
      );
    }

    if (fieldsCiBuildActions !== undefined) {
      localVarQueryParameters["fields[ciBuildActions]"] =
        ObjectSerializer.serialize(
          fieldsCiBuildActions,
          "Array<'actionType' | 'artifacts' | 'buildRun' | 'completionStatus' | 'executionProgress' | 'finishedDate' | 'isRequiredToPass' | 'issueCounts' | 'issues' | 'name' | 'startedDate' | 'testResults'>"
        );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'buildRun'>"
      );
    }

    if (fieldsCiIssues !== undefined) {
      localVarQueryParameters["fields[ciIssues]"] = ObjectSerializer.serialize(
        fieldsCiIssues,
        "Array<'category' | 'fileSource' | 'issueType' | 'message'>"
      );
    }

    if (fieldsCiBuildRuns !== undefined) {
      localVarQueryParameters["fields[ciBuildRuns]"] =
        ObjectSerializer.serialize(
          fieldsCiBuildRuns,
          "Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>"
        );
    }

    if (fieldsCiTestResults !== undefined) {
      localVarQueryParameters["fields[ciTestResults]"] =
        ObjectSerializer.serialize(
          fieldsCiTestResults,
          "Array<'className' | 'destinationTestResults' | 'fileSource' | 'message' | 'name' | 'status'>"
        );
    }

    if (fieldsCiArtifacts !== undefined) {
      localVarQueryParameters["fields[ciArtifacts]"] =
        ObjectSerializer.serialize(
          fieldsCiArtifacts,
          "Array<'downloadUrl' | 'fileName' | 'fileSize' | 'fileType'>"
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
        body: CiBuildActionResponse;
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
                "CiBuildActionResponse"
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
  /**
   *
   * @param id the id of the requested resource
   * @param fieldsCiIssues the fields to include for returned resources of type ciIssues
   * @param limit maximum resources per page
   */
  public async ciBuildActionsIssuesGetToManyRelated(
    id: string,
    fieldsCiIssues?: Array<"category" | "fileSource" | "issueType" | "message">,
    limit?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: CiIssuesResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/ciBuildActions/{id}/issues".replace(
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
        "Required parameter id was null or undefined when calling ciBuildActionsIssuesGetToManyRelated."
      );
    }

    if (fieldsCiIssues !== undefined) {
      localVarQueryParameters["fields[ciIssues]"] = ObjectSerializer.serialize(
        fieldsCiIssues,
        "Array<'category' | 'fileSource' | 'issueType' | 'message'>"
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
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
        body: CiIssuesResponse;
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
              body = ObjectSerializer.deserialize(body, "CiIssuesResponse");
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
   * @param fieldsCiTestResults the fields to include for returned resources of type ciTestResults
   * @param limit maximum resources per page
   */
  public async ciBuildActionsTestResultsGetToManyRelated(
    id: string,
    fieldsCiTestResults?: Array<
      | "className"
      | "destinationTestResults"
      | "fileSource"
      | "message"
      | "name"
      | "status"
    >,
    limit?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: CiTestResultsResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/ciBuildActions/{id}/testResults".replace(
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
        "Required parameter id was null or undefined when calling ciBuildActionsTestResultsGetToManyRelated."
      );
    }

    if (fieldsCiTestResults !== undefined) {
      localVarQueryParameters["fields[ciTestResults]"] =
        ObjectSerializer.serialize(
          fieldsCiTestResults,
          "Array<'className' | 'destinationTestResults' | 'fileSource' | 'message' | 'name' | 'status'>"
        );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
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
        body: CiTestResultsResponse;
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
                "CiTestResultsResponse"
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
