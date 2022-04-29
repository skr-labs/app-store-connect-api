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
import { AppStoreVersionExperimentCreateRequest } from "../model/appStoreVersionExperimentCreateRequest";
import { AppStoreVersionExperimentResponse } from "../model/appStoreVersionExperimentResponse";
import { AppStoreVersionExperimentTreatmentsResponse } from "../model/appStoreVersionExperimentTreatmentsResponse";
import { AppStoreVersionExperimentUpdateRequest } from "../model/appStoreVersionExperimentUpdateRequest";
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

export enum AppStoreVersionExperimentsApiApiKeys {}

export class AppStoreVersionExperimentsApi {
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

  public setApiKey(key: AppStoreVersionExperimentsApiApiKeys, value: string) {
    (this.authentications as any)[
      AppStoreVersionExperimentsApiApiKeys[key]
    ].apiKey = value;
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
   * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
   * @param fieldsAppStoreVersionExperimentTreatments the fields to include for returned resources of type appStoreVersionExperimentTreatments
   * @param fieldsAppStoreVersionExperimentTreatmentLocalizations the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
   * @param limit maximum resources per page
   * @param limitAppStoreVersionExperimentTreatmentLocalizations maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included)
   * @param include comma-separated list of relationships to include
   */
  public async appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated(
    id: string,
    fieldsAppStoreVersionExperiments?: Array<
      | "appStoreVersion"
      | "appStoreVersionExperimentTreatments"
      | "endDate"
      | "name"
      | "reviewRequired"
      | "startDate"
      | "started"
      | "state"
      | "trafficProportion"
    >,
    fieldsAppStoreVersionExperimentTreatments?: Array<
      | "appIcon"
      | "appIconName"
      | "appStoreVersionExperiment"
      | "appStoreVersionExperimentTreatmentLocalizations"
      | "name"
      | "promotedDate"
    >,
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<
      | "appPreviewSets"
      | "appScreenshotSets"
      | "appStoreVersionExperimentTreatment"
      | "locale"
    >,
    limit?: number,
    limitAppStoreVersionExperimentTreatmentLocalizations?: number,
    include?: Array<
      | "appStoreVersionExperiment"
      | "appStoreVersionExperimentTreatmentLocalizations"
    >,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: AppStoreVersionExperimentTreatmentsResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/appStoreVersionExperiments/{id}/appStoreVersionExperimentTreatments".replace(
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
        "Required parameter id was null or undefined when calling appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated."
      );
    }

    if (fieldsAppStoreVersionExperiments !== undefined) {
      localVarQueryParameters["fields[appStoreVersionExperiments]"] =
        ObjectSerializer.serialize(
          fieldsAppStoreVersionExperiments,
          "Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'endDate' | 'name' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>"
        );
    }

    if (fieldsAppStoreVersionExperimentTreatments !== undefined) {
      localVarQueryParameters["fields[appStoreVersionExperimentTreatments]"] =
        ObjectSerializer.serialize(
          fieldsAppStoreVersionExperimentTreatments,
          "Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'name' | 'promotedDate'>"
        );
    }

    if (fieldsAppStoreVersionExperimentTreatmentLocalizations !== undefined) {
      localVarQueryParameters[
        "fields[appStoreVersionExperimentTreatmentLocalizations]"
      ] = ObjectSerializer.serialize(
        fieldsAppStoreVersionExperimentTreatmentLocalizations,
        "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'>"
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (limitAppStoreVersionExperimentTreatmentLocalizations !== undefined) {
      localVarQueryParameters[
        "limit[appStoreVersionExperimentTreatmentLocalizations]"
      ] = ObjectSerializer.serialize(
        limitAppStoreVersionExperimentTreatmentLocalizations,
        "number"
      );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations'>"
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
        body: AppStoreVersionExperimentTreatmentsResponse;
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
                "AppStoreVersionExperimentTreatmentsResponse"
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
   * @param appStoreVersionExperimentCreateRequest AppStoreVersionExperiment representation
   */
  public async appStoreVersionExperimentsCreateInstance(
    appStoreVersionExperimentCreateRequest: AppStoreVersionExperimentCreateRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: AppStoreVersionExperimentResponse;
  }> {
    const localVarPath = this.basePath + "/v1/appStoreVersionExperiments";
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

    // verify required parameter 'appStoreVersionExperimentCreateRequest' is not null or undefined
    if (
      appStoreVersionExperimentCreateRequest === null ||
      appStoreVersionExperimentCreateRequest === undefined
    ) {
      throw new Error(
        "Required parameter appStoreVersionExperimentCreateRequest was null or undefined when calling appStoreVersionExperimentsCreateInstance."
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
        appStoreVersionExperimentCreateRequest,
        "AppStoreVersionExperimentCreateRequest"
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
        body: AppStoreVersionExperimentResponse;
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
                "AppStoreVersionExperimentResponse"
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
   */
  public async appStoreVersionExperimentsDeleteInstance(
    id: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/v1/appStoreVersionExperiments/{id}".replace(
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
        "Required parameter id was null or undefined when calling appStoreVersionExperimentsDeleteInstance."
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
   * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
   * @param include comma-separated list of relationships to include
   * @param fieldsAppStoreVersionExperimentTreatments the fields to include for returned resources of type appStoreVersionExperimentTreatments
   * @param limitAppStoreVersionExperimentTreatments maximum number of related appStoreVersionExperimentTreatments returned (when they are included)
   */
  public async appStoreVersionExperimentsGetInstance(
    id: string,
    fieldsAppStoreVersionExperiments?: Array<
      | "appStoreVersion"
      | "appStoreVersionExperimentTreatments"
      | "endDate"
      | "name"
      | "reviewRequired"
      | "startDate"
      | "started"
      | "state"
      | "trafficProportion"
    >,
    include?: Array<"appStoreVersion" | "appStoreVersionExperimentTreatments">,
    fieldsAppStoreVersionExperimentTreatments?: Array<
      | "appIcon"
      | "appIconName"
      | "appStoreVersionExperiment"
      | "appStoreVersionExperimentTreatmentLocalizations"
      | "name"
      | "promotedDate"
    >,
    limitAppStoreVersionExperimentTreatments?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: AppStoreVersionExperimentResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/appStoreVersionExperiments/{id}".replace(
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
        "Required parameter id was null or undefined when calling appStoreVersionExperimentsGetInstance."
      );
    }

    if (fieldsAppStoreVersionExperiments !== undefined) {
      localVarQueryParameters["fields[appStoreVersionExperiments]"] =
        ObjectSerializer.serialize(
          fieldsAppStoreVersionExperiments,
          "Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'endDate' | 'name' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>"
        );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments'>"
      );
    }

    if (fieldsAppStoreVersionExperimentTreatments !== undefined) {
      localVarQueryParameters["fields[appStoreVersionExperimentTreatments]"] =
        ObjectSerializer.serialize(
          fieldsAppStoreVersionExperimentTreatments,
          "Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'name' | 'promotedDate'>"
        );
    }

    if (limitAppStoreVersionExperimentTreatments !== undefined) {
      localVarQueryParameters["limit[appStoreVersionExperimentTreatments]"] =
        ObjectSerializer.serialize(
          limitAppStoreVersionExperimentTreatments,
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
        body: AppStoreVersionExperimentResponse;
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
                "AppStoreVersionExperimentResponse"
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
   * @param appStoreVersionExperimentUpdateRequest AppStoreVersionExperiment representation
   */
  public async appStoreVersionExperimentsUpdateInstance(
    id: string,
    appStoreVersionExperimentUpdateRequest: AppStoreVersionExperimentUpdateRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: AppStoreVersionExperimentResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/appStoreVersionExperiments/{id}".replace(
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
        "Required parameter id was null or undefined when calling appStoreVersionExperimentsUpdateInstance."
      );
    }

    // verify required parameter 'appStoreVersionExperimentUpdateRequest' is not null or undefined
    if (
      appStoreVersionExperimentUpdateRequest === null ||
      appStoreVersionExperimentUpdateRequest === undefined
    ) {
      throw new Error(
        "Required parameter appStoreVersionExperimentUpdateRequest was null or undefined when calling appStoreVersionExperimentsUpdateInstance."
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
        appStoreVersionExperimentUpdateRequest,
        "AppStoreVersionExperimentUpdateRequest"
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
        body: AppStoreVersionExperimentResponse;
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
                "AppStoreVersionExperimentResponse"
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
