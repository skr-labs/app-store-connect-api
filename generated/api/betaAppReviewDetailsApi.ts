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
import { AppResponse } from "../model/appResponse";
import { BetaAppReviewDetailResponse } from "../model/betaAppReviewDetailResponse";
import { BetaAppReviewDetailUpdateRequest } from "../model/betaAppReviewDetailUpdateRequest";
import { BetaAppReviewDetailsResponse } from "../model/betaAppReviewDetailsResponse";
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

export enum BetaAppReviewDetailsApiApiKeys {}

export class BetaAppReviewDetailsApi {
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

  public setApiKey(key: BetaAppReviewDetailsApiApiKeys, value: string) {
    (this.authentications as any)[BetaAppReviewDetailsApiApiKeys[key]].apiKey =
      value;
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
   * @param fieldsApps the fields to include for returned resources of type apps
   */
  public async betaAppReviewDetailsAppGetToOneRelated(
    id: string,
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
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: AppResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/betaAppReviewDetails/{id}/app".replace(
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
        "Required parameter id was null or undefined when calling betaAppReviewDetailsAppGetToOneRelated."
      );
    }

    if (fieldsApps !== undefined) {
      localVarQueryParameters["fields[apps]"] = ObjectSerializer.serialize(
        fieldsApps,
        "Array<'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'reviewSubmissions' | 'sku' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>"
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
      return new Promise<{ response: http.IncomingMessage; body: AppResponse }>(
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
                body = ObjectSerializer.deserialize(body, "AppResponse");
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
   * @param filterApp filter by id(s) of related \&#39;app\&#39;
   * @param fieldsBetaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
   * @param limit maximum resources per page
   * @param include comma-separated list of relationships to include
   * @param fieldsApps the fields to include for returned resources of type apps
   */
  public async betaAppReviewDetailsGetCollection(
    filterApp: Array<string>,
    fieldsBetaAppReviewDetails?: Array<
      | "app"
      | "contactEmail"
      | "contactFirstName"
      | "contactLastName"
      | "contactPhone"
      | "demoAccountName"
      | "demoAccountPassword"
      | "demoAccountRequired"
      | "notes"
    >,
    limit?: number,
    include?: Array<"app">,
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
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: BetaAppReviewDetailsResponse;
  }> {
    const localVarPath = this.basePath + "/v1/betaAppReviewDetails";
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

    // verify required parameter 'filterApp' is not null or undefined
    if (filterApp === null || filterApp === undefined) {
      throw new Error(
        "Required parameter filterApp was null or undefined when calling betaAppReviewDetailsGetCollection."
      );
    }

    if (filterApp !== undefined) {
      localVarQueryParameters["filter[app]"] = ObjectSerializer.serialize(
        filterApp,
        "Array<string>"
      );
    }

    if (fieldsBetaAppReviewDetails !== undefined) {
      localVarQueryParameters["fields[betaAppReviewDetails]"] =
        ObjectSerializer.serialize(
          fieldsBetaAppReviewDetails,
          "Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>"
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
        "Array<'app'>"
      );
    }

    if (fieldsApps !== undefined) {
      localVarQueryParameters["fields[apps]"] = ObjectSerializer.serialize(
        fieldsApps,
        "Array<'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'reviewSubmissions' | 'sku' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>"
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
        body: BetaAppReviewDetailsResponse;
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
                "BetaAppReviewDetailsResponse"
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
   * @param fieldsBetaAppReviewDetails the fields to include for returned resources of type betaAppReviewDetails
   * @param include comma-separated list of relationships to include
   * @param fieldsApps the fields to include for returned resources of type apps
   */
  public async betaAppReviewDetailsGetInstance(
    id: string,
    fieldsBetaAppReviewDetails?: Array<
      | "app"
      | "contactEmail"
      | "contactFirstName"
      | "contactLastName"
      | "contactPhone"
      | "demoAccountName"
      | "demoAccountPassword"
      | "demoAccountRequired"
      | "notes"
    >,
    include?: Array<"app">,
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
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: BetaAppReviewDetailResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/betaAppReviewDetails/{id}".replace(
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
        "Required parameter id was null or undefined when calling betaAppReviewDetailsGetInstance."
      );
    }

    if (fieldsBetaAppReviewDetails !== undefined) {
      localVarQueryParameters["fields[betaAppReviewDetails]"] =
        ObjectSerializer.serialize(
          fieldsBetaAppReviewDetails,
          "Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>"
        );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'app'>"
      );
    }

    if (fieldsApps !== undefined) {
      localVarQueryParameters["fields[apps]"] = ObjectSerializer.serialize(
        fieldsApps,
        "Array<'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'reviewSubmissions' | 'sku' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>"
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
        body: BetaAppReviewDetailResponse;
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
                "BetaAppReviewDetailResponse"
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
   * @param betaAppReviewDetailUpdateRequest BetaAppReviewDetail representation
   */
  public async betaAppReviewDetailsUpdateInstance(
    id: string,
    betaAppReviewDetailUpdateRequest: BetaAppReviewDetailUpdateRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: BetaAppReviewDetailResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/betaAppReviewDetails/{id}".replace(
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
        "Required parameter id was null or undefined when calling betaAppReviewDetailsUpdateInstance."
      );
    }

    // verify required parameter 'betaAppReviewDetailUpdateRequest' is not null or undefined
    if (
      betaAppReviewDetailUpdateRequest === null ||
      betaAppReviewDetailUpdateRequest === undefined
    ) {
      throw new Error(
        "Required parameter betaAppReviewDetailUpdateRequest was null or undefined when calling betaAppReviewDetailsUpdateInstance."
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
        betaAppReviewDetailUpdateRequest,
        "BetaAppReviewDetailUpdateRequest"
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
        body: BetaAppReviewDetailResponse;
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
                "BetaAppReviewDetailResponse"
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
