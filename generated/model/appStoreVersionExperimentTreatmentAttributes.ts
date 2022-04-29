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
import { ImageAsset } from "./imageAsset";

export class AppStoreVersionExperimentTreatmentAttributes {
  "name"?: string;
  "appIcon"?: ImageAsset;
  "appIconName"?: string;
  "promotedDate"?: Date;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "appIcon",
      baseName: "appIcon",
      type: "ImageAsset",
    },
    {
      name: "appIconName",
      baseName: "appIconName",
      type: "string",
    },
    {
      name: "promotedDate",
      baseName: "promotedDate",
      type: "Date",
    },
  ];

  static getAttributeTypeMap() {
    return AppStoreVersionExperimentTreatmentAttributes.attributeTypeMap;
  }
}
