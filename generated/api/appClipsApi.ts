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
import { AppClipAdvancedExperiencesResponse } from "../model/appClipAdvancedExperiencesResponse";
import { AppClipDefaultExperiencesResponse } from "../model/appClipDefaultExperiencesResponse";
import { AppClipResponse } from "../model/appClipResponse";
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

export enum AppClipsApiApiKeys {}

export class AppClipsApi {
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

  public setApiKey(key: AppClipsApiApiKeys, value: string) {
    (this.authentications as any)[AppClipsApiApiKeys[key]].apiKey = value;
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
   * @param filterAction filter by attribute \&#39;action\&#39;
   * @param filterPlaceStatus filter by attribute \&#39;placeStatus\&#39;
   * @param filterStatus filter by attribute \&#39;status\&#39;
   * @param fieldsAppClipAdvancedExperiences the fields to include for returned resources of type appClipAdvancedExperiences
   * @param fieldsAppClips the fields to include for returned resources of type appClips
   * @param fieldsAppClipAdvancedExperienceImages the fields to include for returned resources of type appClipAdvancedExperienceImages
   * @param fieldsAppClipAdvancedExperienceLocalizations the fields to include for returned resources of type appClipAdvancedExperienceLocalizations
   * @param limit maximum resources per page
   * @param limitLocalizations maximum number of related localizations returned (when they are included)
   * @param include comma-separated list of relationships to include
   */
  public async appClipsAppClipAdvancedExperiencesGetToManyRelated(
    id: string,
    filterAction?: Array<"OPEN" | "VIEW" | "PLAY">,
    filterPlaceStatus?: Array<"PENDING" | "MATCHED" | "NO_MATCH">,
    filterStatus?: Array<
      "RECEIVED" | "DEACTIVATED" | "APP_TRANSFER_IN_PROGRESS"
    >,
    fieldsAppClipAdvancedExperiences?: Array<
      | "action"
      | "appClip"
      | "businessCategory"
      | "defaultLanguage"
      | "headerImage"
      | "isPoweredBy"
      | "link"
      | "localizations"
      | "place"
      | "placeStatus"
      | "removed"
      | "status"
      | "version"
    >,
    fieldsAppClips?: Array<
      | "app"
      | "appClipAdvancedExperiences"
      | "appClipDefaultExperiences"
      | "bundleId"
    >,
    fieldsAppClipAdvancedExperienceImages?: Array<
      | "assetDeliveryState"
      | "fileName"
      | "fileSize"
      | "imageAsset"
      | "sourceFileChecksum"
      | "uploadOperations"
      | "uploaded"
    >,
    fieldsAppClipAdvancedExperienceLocalizations?: Array<
      "language" | "subtitle" | "title"
    >,
    limit?: number,
    limitLocalizations?: number,
    include?: Array<"appClip" | "headerImage" | "localizations">,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: AppClipAdvancedExperiencesResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/appClips/{id}/appClipAdvancedExperiences".replace(
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
        "Required parameter id was null or undefined when calling appClipsAppClipAdvancedExperiencesGetToManyRelated."
      );
    }

    if (filterAction !== undefined) {
      localVarQueryParameters["filter[action]"] = ObjectSerializer.serialize(
        filterAction,
        "Array<'OPEN' | 'VIEW' | 'PLAY'>"
      );
    }

    if (filterPlaceStatus !== undefined) {
      localVarQueryParameters["filter[placeStatus]"] =
        ObjectSerializer.serialize(
          filterPlaceStatus,
          "Array<'PENDING' | 'MATCHED' | 'NO_MATCH'>"
        );
    }

    if (filterStatus !== undefined) {
      localVarQueryParameters["filter[status]"] = ObjectSerializer.serialize(
        filterStatus,
        "Array<'RECEIVED' | 'DEACTIVATED' | 'APP_TRANSFER_IN_PROGRESS'>"
      );
    }

    if (fieldsAppClipAdvancedExperiences !== undefined) {
      localVarQueryParameters["fields[appClipAdvancedExperiences]"] =
        ObjectSerializer.serialize(
          fieldsAppClipAdvancedExperiences,
          "Array<'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version'>"
        );
    }

    if (fieldsAppClips !== undefined) {
      localVarQueryParameters["fields[appClips]"] = ObjectSerializer.serialize(
        fieldsAppClips,
        "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>"
      );
    }

    if (fieldsAppClipAdvancedExperienceImages !== undefined) {
      localVarQueryParameters["fields[appClipAdvancedExperienceImages]"] =
        ObjectSerializer.serialize(
          fieldsAppClipAdvancedExperienceImages,
          "Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>"
        );
    }

    if (fieldsAppClipAdvancedExperienceLocalizations !== undefined) {
      localVarQueryParameters[
        "fields[appClipAdvancedExperienceLocalizations]"
      ] = ObjectSerializer.serialize(
        fieldsAppClipAdvancedExperienceLocalizations,
        "Array<'language' | 'subtitle' | 'title'>"
      );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (limitLocalizations !== undefined) {
      localVarQueryParameters["limit[localizations]"] =
        ObjectSerializer.serialize(limitLocalizations, "number");
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'appClip' | 'headerImage' | 'localizations'>"
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
        body: AppClipAdvancedExperiencesResponse;
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
                "AppClipAdvancedExperiencesResponse"
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
   * @param existsReleaseWithAppStoreVersion filter by existence or non-existence of related \&#39;releaseWithAppStoreVersion\&#39;
   * @param fieldsAppClips the fields to include for returned resources of type appClips
   * @param fieldsAppClipAppStoreReviewDetails the fields to include for returned resources of type appClipAppStoreReviewDetails
   * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
   * @param fieldsAppClipDefaultExperiences the fields to include for returned resources of type appClipDefaultExperiences
   * @param fieldsAppClipDefaultExperienceLocalizations the fields to include for returned resources of type appClipDefaultExperienceLocalizations
   * @param limit maximum resources per page
   * @param limitAppClipDefaultExperienceLocalizations maximum number of related appClipDefaultExperienceLocalizations returned (when they are included)
   * @param include comma-separated list of relationships to include
   */
  public async appClipsAppClipDefaultExperiencesGetToManyRelated(
    id: string,
    existsReleaseWithAppStoreVersion?: Array<string>,
    fieldsAppClips?: Array<
      | "app"
      | "appClipAdvancedExperiences"
      | "appClipDefaultExperiences"
      | "bundleId"
    >,
    fieldsAppClipAppStoreReviewDetails?: Array<
      "appClipDefaultExperience" | "invocationUrls"
    >,
    fieldsAppStoreVersions?: Array<
      | "ageRatingDeclaration"
      | "app"
      | "appClipDefaultExperience"
      | "appStoreReviewDetail"
      | "appStoreState"
      | "appStoreVersionExperiments"
      | "appStoreVersionLocalizations"
      | "appStoreVersionPhasedRelease"
      | "appStoreVersionSubmission"
      | "build"
      | "copyright"
      | "createdDate"
      | "downloadable"
      | "earliestReleaseDate"
      | "idfaDeclaration"
      | "platform"
      | "releaseType"
      | "routingAppCoverage"
      | "usesIdfa"
      | "versionString"
    >,
    fieldsAppClipDefaultExperiences?: Array<
      | "action"
      | "appClip"
      | "appClipAppStoreReviewDetail"
      | "appClipDefaultExperienceLocalizations"
      | "appClipDefaultExperienceTemplate"
      | "releaseWithAppStoreVersion"
    >,
    fieldsAppClipDefaultExperienceLocalizations?: Array<
      "appClipDefaultExperience" | "appClipHeaderImage" | "locale" | "subtitle"
    >,
    limit?: number,
    limitAppClipDefaultExperienceLocalizations?: number,
    include?: Array<
      | "appClip"
      | "appClipAppStoreReviewDetail"
      | "appClipDefaultExperienceLocalizations"
      | "releaseWithAppStoreVersion"
    >,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: AppClipDefaultExperiencesResponse;
  }> {
    const localVarPath =
      this.basePath +
      "/v1/appClips/{id}/appClipDefaultExperiences".replace(
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
        "Required parameter id was null or undefined when calling appClipsAppClipDefaultExperiencesGetToManyRelated."
      );
    }

    if (existsReleaseWithAppStoreVersion !== undefined) {
      localVarQueryParameters["exists[releaseWithAppStoreVersion]"] =
        ObjectSerializer.serialize(
          existsReleaseWithAppStoreVersion,
          "Array<string>"
        );
    }

    if (fieldsAppClips !== undefined) {
      localVarQueryParameters["fields[appClips]"] = ObjectSerializer.serialize(
        fieldsAppClips,
        "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>"
      );
    }

    if (fieldsAppClipAppStoreReviewDetails !== undefined) {
      localVarQueryParameters["fields[appClipAppStoreReviewDetails]"] =
        ObjectSerializer.serialize(
          fieldsAppClipAppStoreReviewDetails,
          "Array<'appClipDefaultExperience' | 'invocationUrls'>"
        );
    }

    if (fieldsAppStoreVersions !== undefined) {
      localVarQueryParameters["fields[appStoreVersions]"] =
        ObjectSerializer.serialize(
          fieldsAppStoreVersions,
          "Array<'ageRatingDeclaration' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'copyright' | 'createdDate' | 'downloadable' | 'earliestReleaseDate' | 'idfaDeclaration' | 'platform' | 'releaseType' | 'routingAppCoverage' | 'usesIdfa' | 'versionString'>"
        );
    }

    if (fieldsAppClipDefaultExperiences !== undefined) {
      localVarQueryParameters["fields[appClipDefaultExperiences]"] =
        ObjectSerializer.serialize(
          fieldsAppClipDefaultExperiences,
          "Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>"
        );
    }

    if (fieldsAppClipDefaultExperienceLocalizations !== undefined) {
      localVarQueryParameters["fields[appClipDefaultExperienceLocalizations]"] =
        ObjectSerializer.serialize(
          fieldsAppClipDefaultExperienceLocalizations,
          "Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'>"
        );
    }

    if (limit !== undefined) {
      localVarQueryParameters["limit"] = ObjectSerializer.serialize(
        limit,
        "number"
      );
    }

    if (limitAppClipDefaultExperienceLocalizations !== undefined) {
      localVarQueryParameters["limit[appClipDefaultExperienceLocalizations]"] =
        ObjectSerializer.serialize(
          limitAppClipDefaultExperienceLocalizations,
          "number"
        );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'releaseWithAppStoreVersion'>"
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
        body: AppClipDefaultExperiencesResponse;
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
                "AppClipDefaultExperiencesResponse"
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
   * @param fieldsAppClips the fields to include for returned resources of type appClips
   * @param include comma-separated list of relationships to include
   * @param fieldsAppClipAdvancedExperiences the fields to include for returned resources of type appClipAdvancedExperiences
   * @param fieldsAppClipDefaultExperiences the fields to include for returned resources of type appClipDefaultExperiences
   * @param limitAppClipDefaultExperiences maximum number of related appClipDefaultExperiences returned (when they are included)
   */
  public async appClipsGetInstance(
    id: string,
    fieldsAppClips?: Array<
      | "app"
      | "appClipAdvancedExperiences"
      | "appClipDefaultExperiences"
      | "bundleId"
    >,
    include?: Array<"app" | "appClipDefaultExperiences">,
    fieldsAppClipAdvancedExperiences?: Array<
      | "action"
      | "appClip"
      | "businessCategory"
      | "defaultLanguage"
      | "headerImage"
      | "isPoweredBy"
      | "link"
      | "localizations"
      | "place"
      | "placeStatus"
      | "removed"
      | "status"
      | "version"
    >,
    fieldsAppClipDefaultExperiences?: Array<
      | "action"
      | "appClip"
      | "appClipAppStoreReviewDetail"
      | "appClipDefaultExperienceLocalizations"
      | "appClipDefaultExperienceTemplate"
      | "releaseWithAppStoreVersion"
    >,
    limitAppClipDefaultExperiences?: number,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: AppClipResponse }> {
    const localVarPath =
      this.basePath +
      "/v1/appClips/{id}".replace(
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
        "Required parameter id was null or undefined when calling appClipsGetInstance."
      );
    }

    if (fieldsAppClips !== undefined) {
      localVarQueryParameters["fields[appClips]"] = ObjectSerializer.serialize(
        fieldsAppClips,
        "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>"
      );
    }

    if (include !== undefined) {
      localVarQueryParameters["include"] = ObjectSerializer.serialize(
        include,
        "Array<'app' | 'appClipDefaultExperiences'>"
      );
    }

    if (fieldsAppClipAdvancedExperiences !== undefined) {
      localVarQueryParameters["fields[appClipAdvancedExperiences]"] =
        ObjectSerializer.serialize(
          fieldsAppClipAdvancedExperiences,
          "Array<'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version'>"
        );
    }

    if (fieldsAppClipDefaultExperiences !== undefined) {
      localVarQueryParameters["fields[appClipDefaultExperiences]"] =
        ObjectSerializer.serialize(
          fieldsAppClipDefaultExperiences,
          "Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>"
        );
    }

    if (limitAppClipDefaultExperiences !== undefined) {
      localVarQueryParameters["limit[appClipDefaultExperiences]"] =
        ObjectSerializer.serialize(limitAppClipDefaultExperiences, "number");
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
        body: AppClipResponse;
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
              body = ObjectSerializer.deserialize(body, "AppClipResponse");
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
