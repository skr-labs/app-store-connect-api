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
import { GameCenterEnabledVersionCompatibleVersionsLinkagesRequest } from "../model/gameCenterEnabledVersionCompatibleVersionsLinkagesRequest";
import { GameCenterEnabledVersionCompatibleVersionsLinkagesResponse } from "../model/gameCenterEnabledVersionCompatibleVersionsLinkagesResponse";
import { GameCenterEnabledVersionsResponse } from "../model/gameCenterEnabledVersionsResponse";

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

export enum GameCenterEnabledVersionsApiApiKeys {}

export class GameCenterEnabledVersionsApi {
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

  public setApiKey(key: GameCenterEnabledVersionsApiApiKeys, value: string) {
    (this.authentications as any)[
      GameCenterEnabledVersionsApiApiKeys[key]
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
   * @param gameCenterEnabledVersionCompatibleVersionsLinkagesRequest List of related linkages
   */
  public async gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship(
    id: string,
    gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions".replace(
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
        "Required parameter id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship."
      );
    }

    // verify required parameter 'gameCenterEnabledVersionCompatibleVersionsLinkagesRequest' is not null or undefined
    if (
      gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === null ||
      gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === undefined
    ) {
      throw new Error(
        "Required parameter gameCenterEnabledVersionCompatibleVersionsLinkagesRequest was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship."
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
        gameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
        "GameCenterEnabledVersionCompatibleVersionsLinkagesRequest"
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
   * @param gameCenterEnabledVersionCompatibleVersionsLinkagesRequest List of related linkages
   */
  public async gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship(
    id: string,
    gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions".replace(
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
        "Required parameter id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship."
      );
    }

    // verify required parameter 'gameCenterEnabledVersionCompatibleVersionsLinkagesRequest' is not null or undefined
    if (
      gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === null ||
      gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === undefined
    ) {
      throw new Error(
        "Required parameter gameCenterEnabledVersionCompatibleVersionsLinkagesRequest was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship."
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
      body: ObjectSerializer.serialize(
        gameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
        "GameCenterEnabledVersionCompatibleVersionsLinkagesRequest"
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
   * @param filterPlatform filter by attribute \&#39;platform\&#39;
   * @param filterVersionString filter by attribute \&#39;versionString\&#39;
   * @param filterApp filter by id(s) of related \&#39;app\&#39;
   * @param filterId filter by id(s)
   * @param sort comma-separated list of sort expressions; resources will be sorted as specified
   * @param fieldsGameCenterEnabledVersions the fields to include for returned resources of type gameCenterEnabledVersions
   * @param fieldsApps the fields to include for returned resources of type apps
   * @param limit maximum resources per page
   * @param limitCompatibleVersions maximum number of related compatibleVersions returned (when they are included)
   * @param include comma-separated list of relationships to include
   */
  public async gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated(
    id: string,
    filterPlatform?: Array<"IOS" | "MAC_OS" | "TV_OS">,
    filterVersionString?: Array<string>,
    filterApp?: Array<string>,
    filterId?: Array<string>,
    sort?: Array<"versionString" | "-versionString">,
    fieldsGameCenterEnabledVersions?: Array<
      "app" | "compatibleVersions" | "iconAsset" | "platform" | "versionString"
    >,
    fieldsApps?: Array<
      | "appClips"
      | "appCustomProductPages"
      | "appEvents"
      | "appInfos"
      | "appStoreVersions"
      | "availableInNewTerritories"
      | "availableTerritories"
      | "betaAppLocalizations"
      | "betaAppReviewDetail"
      | "betaGroups"
      | "betaLicenseAgreement"
      | "betaTesters"
      | "builds"
      | "bundleId"
      | "ciProduct"
      | "contentRightsDeclaration"
      | "endUserLicenseAgreement"
      | "gameCenterEnabledVersions"
      | "inAppPurchases"
      | "isOrEverWasMadeForKids"
      | "name"
      | "perfPowerMetrics"
      | "preOrder"
      | "preReleaseVersions"
      | "pricePoints"
      | "prices"
      | "primaryLocale"
      | "reviewSubmissions"
      | "sku"
      | "subscriptionStatusUrl"
      | "subscriptionStatusUrlForSandbox"
      | "subscriptionStatusUrlVersion"
      | "subscriptionStatusUrlVersionForSandbox"
    >,
    limit?: number,
    limitCompatibleVersions?: number,
    include?: Array<"app" | "compatibleVersions">,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GameCenterEnabledVersionsResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/gameCenterEnabledVersions/{id}/compatibleVersions".replace(
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
        "Required parameter id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated."
      );
    }

    if (filterPlatform !== undefined) {
      localVarQueryParameters["filter[platform]"] = ObjectSerializer.serialize(
        filterPlatform,
        "Array<'IOS' | 'MAC_OS' | 'TV_OS'>"
      );
    }

    if (filterVersionString !== undefined) {
      localVarQueryParameters["filter[versionString]"] =
        ObjectSerializer.serialize(filterVersionString, "Array<string>");
    }

    if (filterApp !== undefined) {
      localVarQueryParameters["filter[app]"] = ObjectSerializer.serialize(
        filterApp,
        "Array<string>"
      );
    }

    if (filterId !== undefined) {
      localVarQueryParameters["filter[id]"] = ObjectSerializer.serialize(
        filterId,
        "Array<string>"
      );
    }

    if (sort !== undefined) {
      localVarQueryParameters["sort"] = ObjectSerializer.serialize(
        sort,
        "Array<'versionString' | '-versionString'>"
      );
    }

    if (fieldsGameCenterEnabledVersions !== undefined) {
      localVarQueryParameters["fields[gameCenterEnabledVersions]"] =
        ObjectSerializer.serialize(
          fieldsGameCenterEnabledVersions,
          "Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'>"
        );
    }

    if (fieldsApps !== undefined) {
      localVarQueryParameters["fields[apps]"] = ObjectSerializer.serialize(
        fieldsApps,
        "Array<'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'reviewSubmissions' | 'sku' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>"
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (limitCompatibleVersions !== undefined) {
      localVarQueryParameters["limit[compatibleVersions]"] =
        ObjectSerializer.serialize(limitCompatibleVersions, "number");
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'app' | 'compatibleVersions'>"
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
        body: GameCenterEnabledVersionsResponse;
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
                "GameCenterEnabledVersionsResponse"
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
   * @param limit maximum resources per page
   */
  public async gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship(
    id: string,
    limit?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: GameCenterEnabledVersionCompatibleVersionsLinkagesResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions".replace(
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
        "Required parameter id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship."
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
        body: GameCenterEnabledVersionCompatibleVersionsLinkagesResponse;
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
                "GameCenterEnabledVersionCompatibleVersionsLinkagesResponse"
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
   * @param gameCenterEnabledVersionCompatibleVersionsLinkagesRequest List of related linkages
   */
  public async gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship(
    id: string,
    gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      "/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions".replace(
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
        "Required parameter id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship."
      );
    }

    // verify required parameter 'gameCenterEnabledVersionCompatibleVersionsLinkagesRequest' is not null or undefined
    if (
      gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === null ||
      gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === undefined
    ) {
      throw new Error(
        "Required parameter gameCenterEnabledVersionCompatibleVersionsLinkagesRequest was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship."
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
        gameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
        "GameCenterEnabledVersionCompatibleVersionsLinkagesRequest"
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
}
