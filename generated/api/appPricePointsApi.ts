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
import { AppPricePointResponse } from "../model/appPricePointResponse";
import { AppPricePointsResponse } from "../model/appPricePointsResponse";
import { ErrorResponse } from "../model/errorResponse";
import { TerritoryResponse } from "../model/territoryResponse";

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

export enum AppPricePointsApiApiKeys {}

export class AppPricePointsApi {
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

  public setApiKey(key: AppPricePointsApiApiKeys, value: string) {
    (this.authentications as any)[AppPricePointsApiApiKeys[key]].apiKey = value;
  }

  set accessToken(accessToken: string | (() => string)) {
    this.authentications["itc-bearer-token"].accessToken = accessToken;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   *
   * @param filterPriceTier filter by id(s) of related \&#39;priceTier\&#39;
   * @param filterTerritory filter by id(s) of related \&#39;territory\&#39;
   * @param fieldsAppPricePoints the fields to include for returned resources of type appPricePoints
   * @param limit maximum resources per page
   * @param include comma-separated list of relationships to include
   * @param fieldsTerritories the fields to include for returned resources of type territories
   */
  public async appPricePointsGetCollection(
    filterPriceTier?: Array<string>,
    filterTerritory?: Array<string>,
    fieldsAppPricePoints?: Array<
      "customerPrice" | "priceTier" | "proceeds" | "territory"
    >,
    limit?: number,
    include?: Array<"priceTier" | "territory">,
    fieldsTerritories?: Array<"currency">,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: AppPricePointsResponse }> {
    const localVarPath = this.basePath + "/v1/appPricePoints";
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

    if (filterPriceTier !== undefined) {
      localVarQueryParameters["filter[priceTier]"] = ObjectSerializer.serialize(
        filterPriceTier,
        "Array<string>"
      );
    }

    if (filterTerritory !== undefined) {
      localVarQueryParameters["filter[territory]"] = ObjectSerializer.serialize(
        filterTerritory,
        "Array<string>"
      );
    }

    if (fieldsAppPricePoints !== undefined) {
      localVarQueryParameters["fields[appPricePoints]"] =
        ObjectSerializer.serialize(
          fieldsAppPricePoints,
          "Array<'customerPrice' | 'priceTier' | 'proceeds' | 'territory'>"
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
        "Array<'priceTier' | 'territory'>"
      );
    }

    if (fieldsTerritories !== undefined) {
      localVarQueryParameters["fields[territories]"] =
        ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>");
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
        body: AppPricePointsResponse;
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
                "AppPricePointsResponse"
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
   * @param fieldsAppPricePoints the fields to include for returned resources of type appPricePoints
   * @param include comma-separated list of relationships to include
   * @param fieldsTerritories the fields to include for returned resources of type territories
   */
  public async appPricePointsGetInstance(
    id: string,
    fieldsAppPricePoints?: Array<
      "customerPrice" | "priceTier" | "proceeds" | "territory"
    >,
    include?: Array<"priceTier" | "territory">,
    fieldsTerritories?: Array<"currency">,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: AppPricePointResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/appPricePoints/{id}".replace(
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
        "Required parameter id was null or undefined when calling appPricePointsGetInstance."
      );
    }

    if (fieldsAppPricePoints !== undefined) {
      localVarQueryParameters["fields[appPricePoints]"] =
        ObjectSerializer.serialize(
          fieldsAppPricePoints,
          "Array<'customerPrice' | 'priceTier' | 'proceeds' | 'territory'>"
        );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'priceTier' | 'territory'>"
      );
    }

    if (fieldsTerritories !== undefined) {
      localVarQueryParameters["fields[territories]"] =
        ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>");
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
        body: AppPricePointResponse;
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
                "AppPricePointResponse"
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
   * @param fieldsTerritories the fields to include for returned resources of type territories
   */
  public async appPricePointsTerritoryGetToOneRelated(
    id: string,
    fieldsTerritories?: Array<"currency">,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: TerritoryResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/appPricePoints/{id}/territory".replace(
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
        "Required parameter id was null or undefined when calling appPricePointsTerritoryGetToOneRelated."
      );
    }

    if (fieldsTerritories !== undefined) {
      localVarQueryParameters["fields[territories]"] =
        ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>");
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
        body: TerritoryResponse;
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
              body = ObjectSerializer.deserialize(body, "TerritoryResponse");
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
