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
import { AppScreenshotSetAttributes } from "./appScreenshotSetAttributes";
import { AppScreenshotSetRelationships } from "./appScreenshotSetRelationships";
import { ResourceLinks } from "./resourceLinks";

export class AppScreenshotSet {
  "type": AppScreenshotSet.TypeEnum;
  "id": string;
  "attributes"?: AppScreenshotSetAttributes;
  "relationships"?: AppScreenshotSetRelationships;
  "links": ResourceLinks;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppScreenshotSet.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppScreenshotSetAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppScreenshotSetRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return AppScreenshotSet.attributeTypeMap;
  }
}

export namespace AppScreenshotSet {
  export enum TypeEnum {
    AppScreenshotSets = <any>"appScreenshotSets",
  }
}