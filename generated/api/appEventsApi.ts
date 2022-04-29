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
import { AppEventCreateRequest } from "../model/appEventCreateRequest";
import { AppEventLocalizationsResponse } from "../model/appEventLocalizationsResponse";
import { AppEventResponse } from "../model/appEventResponse";
import { AppEventUpdateRequest } from "../model/appEventUpdateRequest";
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

export enum AppEventsApiApiKeys {}

export class AppEventsApi {
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

  public setApiKey(key: AppEventsApiApiKeys, value: string) {
    (this.authentications as any)[AppEventsApiApiKeys[key]].apiKey = value;
  }

  set accessToken(accessToken: string | (() => string)) {
    this.authentications["itc-bearer-token"].accessToken = accessToken;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   *
   * @param appEventCreateRequest AppEvent representation
   */
  public async appEventsCreateInstance(
    appEventCreateRequest: AppEventCreateRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: AppEventResponse }> {
    const localVarPath = this.basePath + "/v1/appEvents";
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

    // verify required parameter 'appEventCreateRequest' is not null or undefined
    if (appEventCreateRequest === null || appEventCreateRequest === undefined) {
      throw new Error(
        "Required parameter appEventCreateRequest was null or undefined when calling appEventsCreateInstance."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "POST",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        appEventCreateRequest,
        "AppEventCreateRequest"
      ),
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
        body: AppEventResponse;
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
              body = ObjectSerializer.deserialize(body, "AppEventResponse");
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
   */
  public async appEventsDeleteInstance(
    id: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/v1/appEvents/{id}".replace(
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
        "Required parameter id was null or undefined when calling appEventsDeleteInstance."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "DELETE",
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
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
  /**
   *
   * @param id the id of the requested resource
   * @param fieldsAppEvents the fields to include for returned resources of type appEvents
   * @param include comma-separated list of relationships to include
   * @param fieldsAppEventLocalizations the fields to include for returned resources of type appEventLocalizations
   * @param limitLocalizations maximum number of related localizations returned (when they are included)
   */
  public async appEventsGetInstance(
    id: string,
    fieldsAppEvents?: Array<
      | "app"
      | "archivedTerritorySchedules"
      | "badge"
      | "deepLink"
      | "eventState"
      | "localizations"
      | "primaryLocale"
      | "priority"
      | "purchaseRequirement"
      | "purpose"
      | "referenceName"
      | "territorySchedules"
    >,
    include?: Array<"localizations">,
    fieldsAppEventLocalizations?: Array<
      | "appEvent"
      | "appEventScreenshots"
      | "appEventVideoClips"
      | "locale"
      | "longDescription"
      | "name"
      | "shortDescription"
    >,
    limitLocalizations?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: AppEventResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/appEvents/{id}".replace(
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
        "Required parameter id was null or undefined when calling appEventsGetInstance."
      );
    }

    if (fieldsAppEvents !== undefined) {
      localVarQueryParameters["fields[appEvents]"] = ObjectSerializer.serialize(
        fieldsAppEvents,
        "Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>"
      );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'localizations'>"
      );
    }

    if (fieldsAppEventLocalizations !== undefined) {
      localVarQueryParameters["fields[appEventLocalizations]"] =
        ObjectSerializer.serialize(
          fieldsAppEventLocalizations,
          "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>"
        );
    }

    if (limitLocalizations !== undefined) {
      localVarQueryParameters["limit[localizations]"] =
        ObjectSerializer.serialize(limitLocalizations, "number");
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
        body: AppEventResponse;
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
              body = ObjectSerializer.deserialize(body, "AppEventResponse");
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
   * @param fieldsAppEventScreenshots the fields to include for returned resources of type appEventScreenshots
   * @param fieldsAppEventVideoClips the fields to include for returned resources of type appEventVideoClips
   * @param fieldsAppEventLocalizations the fields to include for returned resources of type appEventLocalizations
   * @param fieldsAppEvents the fields to include for returned resources of type appEvents
   * @param limit maximum resources per page
   * @param limitAppEventScreenshots maximum number of related appEventScreenshots returned (when they are included)
   * @param limitAppEventVideoClips maximum number of related appEventVideoClips returned (when they are included)
   * @param include comma-separated list of relationships to include
   */
  public async appEventsLocalizationsGetToManyRelated(
    id: string,
    fieldsAppEventScreenshots?: Array<
      | "appEventAssetType"
      | "appEventLocalization"
      | "assetDeliveryState"
      | "assetToken"
      | "fileName"
      | "fileSize"
      | "imageAsset"
      | "uploadOperations"
      | "uploaded"
    >,
    fieldsAppEventVideoClips?: Array<
      | "appEventAssetType"
      | "appEventLocalization"
      | "assetDeliveryState"
      | "fileName"
      | "fileSize"
      | "previewFrameTimeCode"
      | "previewImage"
      | "uploadOperations"
      | "uploaded"
      | "videoUrl"
    >,
    fieldsAppEventLocalizations?: Array<
      | "appEvent"
      | "appEventScreenshots"
      | "appEventVideoClips"
      | "locale"
      | "longDescription"
      | "name"
      | "shortDescription"
    >,
    fieldsAppEvents?: Array<
      | "app"
      | "archivedTerritorySchedules"
      | "badge"
      | "deepLink"
      | "eventState"
      | "localizations"
      | "primaryLocale"
      | "priority"
      | "purchaseRequirement"
      | "purpose"
      | "referenceName"
      | "territorySchedules"
    >,
    limit?: number,
    limitAppEventScreenshots?: number,
    limitAppEventVideoClips?: number,
    include?: Array<"appEvent" | "appEventScreenshots" | "appEventVideoClips">,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: AppEventLocalizationsResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/appEvents/{id}/localizations".replace(
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
        "Required parameter id was null or undefined when calling appEventsLocalizationsGetToManyRelated."
      );
    }

    if (fieldsAppEventScreenshots !== undefined) {
      localVarQueryParameters["fields[appEventScreenshots]"] =
        ObjectSerializer.serialize(
          fieldsAppEventScreenshots,
          "Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'>"
        );
    }

    if (fieldsAppEventVideoClips !== undefined) {
      localVarQueryParameters["fields[appEventVideoClips]"] =
        ObjectSerializer.serialize(
          fieldsAppEventVideoClips,
          "Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'>"
        );
    }

    if (fieldsAppEventLocalizations !== undefined) {
      localVarQueryParameters["fields[appEventLocalizations]"] =
        ObjectSerializer.serialize(
          fieldsAppEventLocalizations,
          "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>"
        );
    }

    if (fieldsAppEvents !== undefined) {
      localVarQueryParameters["fields[appEvents]"] = ObjectSerializer.serialize(
        fieldsAppEvents,
        "Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>"
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (limitAppEventScreenshots !== undefined) {
      localVarQueryParameters["limit[appEventScreenshots]"] =
        ObjectSerializer.serialize(limitAppEventScreenshots, "number");
    }

    if (limitAppEventVideoClips !== undefined) {
      localVarQueryParameters["limit[appEventVideoClips]"] =
        ObjectSerializer.serialize(limitAppEventVideoClips, "number");
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips'>"
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
        body: AppEventLocalizationsResponse;
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
                "AppEventLocalizationsResponse"
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
   * @param appEventUpdateRequest AppEvent representation
   */
  public async appEventsUpdateInstance(
    id: string,
    appEventUpdateRequest: AppEventUpdateRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: AppEventResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/appEvents/{id}".replace(
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
        "Required parameter id was null or undefined when calling appEventsUpdateInstance."
      );
    }

    // verify required parameter 'appEventUpdateRequest' is not null or undefined
    if (appEventUpdateRequest === null || appEventUpdateRequest === undefined) {
      throw new Error(
        "Required parameter appEventUpdateRequest was null or undefined when calling appEventsUpdateInstance."
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: "PATCH",
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        appEventUpdateRequest,
        "AppEventUpdateRequest"
      ),
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
        body: AppEventResponse;
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
              body = ObjectSerializer.deserialize(body, "AppEventResponse");
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
