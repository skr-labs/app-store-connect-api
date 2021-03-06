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

export class BuildBundleFileSizeAttributes {
  "deviceModel"?: string;
  "osVersion"?: string;
  "downloadBytes"?: number;
  "installBytes"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "deviceModel",
      baseName: "deviceModel",
      type: "string",
    },
    {
      name: "osVersion",
      baseName: "osVersion",
      type: "string",
    },
    {
      name: "downloadBytes",
      baseName: "downloadBytes",
      type: "number",
    },
    {
      name: "installBytes",
      baseName: "installBytes",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return BuildBundleFileSizeAttributes.attributeTypeMap;
  }
}
