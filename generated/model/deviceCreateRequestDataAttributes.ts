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
import { BundleIdPlatform } from "./bundleIdPlatform";

export class DeviceCreateRequestDataAttributes {
  "name": string;
  "platform": BundleIdPlatform;
  "udid": string;

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
      name: "platform",
      baseName: "platform",
      type: "BundleIdPlatform",
    },
    {
      name: "udid",
      baseName: "udid",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return DeviceCreateRequestDataAttributes.attributeTypeMap;
  }
}