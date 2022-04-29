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

export class AppMediaStateError {
  "code"?: string;
  "description"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "code",
      baseName: "code",
      type: "string",
    },
    {
      name: "description",
      baseName: "description",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return AppMediaStateError.attributeTypeMap;
  }
}
