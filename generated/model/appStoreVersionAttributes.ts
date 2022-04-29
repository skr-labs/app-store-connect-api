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

import { RequestFile } from "./models";
import { AppStoreVersionState } from "./appStoreVersionState";
import { Platform } from "./platform";

export class AppStoreVersionAttributes {
  "platform"?: Platform;
  "versionString"?: string;
  "appStoreState"?: AppStoreVersionState;
  "copyright"?: string;
  "releaseType"?: AppStoreVersionAttributes.ReleaseTypeEnum;
  "earliestReleaseDate"?: Date;
  "usesIdfa"?: boolean;
  "downloadable"?: boolean;
  "createdDate"?: Date;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "platform",
      baseName: "platform",
      type: "Platform",
    },
    {
      name: "versionString",
      baseName: "versionString",
      type: "string",
    },
    {
      name: "appStoreState",
      baseName: "appStoreState",
      type: "AppStoreVersionState",
    },
    {
      name: "copyright",
      baseName: "copyright",
      type: "string",
    },
    {
      name: "releaseType",
      baseName: "releaseType",
      type: "AppStoreVersionAttributes.ReleaseTypeEnum",
    },
    {
      name: "earliestReleaseDate",
      baseName: "earliestReleaseDate",
      type: "Date",
    },
    {
      name: "usesIdfa",
      baseName: "usesIdfa",
      type: "boolean",
    },
    {
      name: "downloadable",
      baseName: "downloadable",
      type: "boolean",
    },
    {
      name: "createdDate",
      baseName: "createdDate",
      type: "Date",
    },
  ];

  static getAttributeTypeMap() {
    return AppStoreVersionAttributes.attributeTypeMap;
  }
}

export namespace AppStoreVersionAttributes {
  export enum ReleaseTypeEnum {
    Manual = <any>"MANUAL",
    AfterApproval = <any>"AFTER_APPROVAL",
    Scheduled = <any>"SCHEDULED",
  }
}