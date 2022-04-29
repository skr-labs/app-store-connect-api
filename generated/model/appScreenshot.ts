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
import { AppScreenshotAttributes } from "./appScreenshotAttributes";
import { AppScreenshotRelationships } from "./appScreenshotRelationships";
import { ResourceLinks } from "./resourceLinks";

export class AppScreenshot {
  "type": AppScreenshot.TypeEnum;
  "id": string;
  "attributes"?: AppScreenshotAttributes;
  "relationships"?: AppScreenshotRelationships;
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
      type: "AppScreenshot.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppScreenshotAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppScreenshotRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return AppScreenshot.attributeTypeMap;
  }
}

export namespace AppScreenshot {
  export enum TypeEnum {
    AppScreenshots = <any>"appScreenshots",
  }
}
