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
import { CiMacOsVersionsResponse } from "../model/ciMacOsVersionsResponse";
import { CiXcodeVersionResponse } from "../model/ciXcodeVersionResponse";
import { CiXcodeVersionsResponse } from "../model/ciXcodeVersionsResponse";
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

export enum CiXcodeVersionsApiApiKeys {}

export class CiXcodeVersionsApi {
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

  public setApiKey(key: CiXcodeVersionsApiApiKeys, value: string) {
    (this.authentications as any)[CiXcodeVersionsApiApiKeys[key]].apiKey =
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
   * @param fieldsCiXcodeVersions the fields to include for returned resources of type ciXcodeVersions
   * @param limit maximum resources per page
   * @param include comma-separated list of relationships to include
   * @param fieldsCiMacOsVersions the fields to include for returned resources of type ciMacOsVersions
   * @param limitMacOsVersions maximum number of related macOsVersions returned (when they are included)
   */
  public async ciXcodeVersionsGetCollection(
    fieldsCiXcodeVersions?: Array<
      "macOsVersions" | "name" | "testDestinations" | "version"
    >,
    limit?: number,
    include?: Array<"macOsVersions">,
    fieldsCiMacOsVersions?: Array<"name" | "version" | "xcodeVersions">,
    limitMacOsVersions?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: CiXcodeVersionsResponse;
  }> {
    const localVarPath = this.basePath + "/v1/ciXcodeVersions";
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

    if (fieldsCiXcodeVersions !== undefined) {
      localVarQueryParameters["fields[ciXcodeVersions]"] =
        ObjectSerializer.serialize(
          fieldsCiXcodeVersions,
          "Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>"
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
        "Array<'macOsVersions'>"
      );
    }

    if (fieldsCiMacOsVersions !== undefined) {
      localVarQueryParameters["fields[ciMacOsVersions]"] =
        ObjectSerializer.serialize(
          fieldsCiMacOsVersions,
          "Array<'name' | 'version' | 'xcodeVersions'>"
        );
    }

    if (limitMacOsVersions !== undefined) {
      localVarQueryParameters["limit[macOsVersions]"] =
        ObjectSerializer.serialize(limitMacOsVersions, "number");
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
        body: CiXcodeVersionsResponse;
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
                "CiXcodeVersionsResponse"
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
   * @param fieldsCiXcodeVersions the fields to include for returned resources of type ciXcodeVersions
   * @param include comma-separated list of relationships to include
   * @param fieldsCiMacOsVersions the fields to include for returned resources of type ciMacOsVersions
   * @param limitMacOsVersions maximum number of related macOsVersions returned (when they are included)
   */
  public async ciXcodeVersionsGetInstance(
    id: string,
    fieldsCiXcodeVersions?: Array<
      "macOsVersions" | "name" | "testDestinations" | "version"
    >,
    include?: Array<"macOsVersions">,
    fieldsCiMacOsVersions?: Array<"name" | "version" | "xcodeVersions">,
    limitMacOsVersions?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: CiXcodeVersionResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/ciXcodeVersions/{id}".replace(
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
        "Required parameter id was null or undefined when calling ciXcodeVersionsGetInstance."
      );
    }

    if (fieldsCiXcodeVersions !== undefined) {
      localVarQueryParameters["fields[ciXcodeVersions]"] =
        ObjectSerializer.serialize(
          fieldsCiXcodeVersions,
          "Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>"
        );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'macOsVersions'>"
      );
    }

    if (fieldsCiMacOsVersions !== undefined) {
      localVarQueryParameters["fields[ciMacOsVersions]"] =
        ObjectSerializer.serialize(
          fieldsCiMacOsVersions,
          "Array<'name' | 'version' | 'xcodeVersions'>"
        );
    }

    if (limitMacOsVersions !== undefined) {
      localVarQueryParameters["limit[macOsVersions]"] =
        ObjectSerializer.serialize(limitMacOsVersions, "number");
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
        body: CiXcodeVersionResponse;
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
                "CiXcodeVersionResponse"
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
   * @param fieldsCiXcodeVersions the fields to include for returned resources of type ciXcodeVersions
   * @param fieldsCiMacOsVersions the fields to include for returned resources of type ciMacOsVersions
   * @param limit maximum resources per page
   * @param limitXcodeVersions maximum number of related xcodeVersions returned (when they are included)
   * @param include comma-separated list of relationships to include
   */
  public async ciXcodeVersionsMacOsVersionsGetToManyRelated(
    id: string,
    fieldsCiXcodeVersions?: Array<
      "macOsVersions" | "name" | "testDestinations" | "version"
    >,
    fieldsCiMacOsVersions?: Array<"name" | "version" | "xcodeVersions">,
    limit?: number,
    limitXcodeVersions?: number,
    include?: Array<"xcodeVersions">,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: CiMacOsVersionsResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/ciXcodeVersions/{id}/macOsVersions".replace(
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
        "Required parameter id was null or undefined when calling ciXcodeVersionsMacOsVersionsGetToManyRelated."
      );
    }

    if (fieldsCiXcodeVersions !== undefined) {
      localVarQueryParameters["fields[ciXcodeVersions]"] =
        ObjectSerializer.serialize(
          fieldsCiXcodeVersions,
          "Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>"
        );
    }

    if (fieldsCiMacOsVersions !== undefined) {
      localVarQueryParameters["fields[ciMacOsVersions]"] =
        ObjectSerializer.serialize(
          fieldsCiMacOsVersions,
          "Array<'name' | 'version' | 'xcodeVersions'>"
        );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (limitXcodeVersions !== undefined) {
      localVarQueryParameters["limit[xcodeVersions]"] =
        ObjectSerializer.serialize(limitXcodeVersions, "number");
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'xcodeVersions'>"
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
        body: CiMacOsVersionsResponse;
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
                "CiMacOsVersionsResponse"
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
