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
import { CiXcodeVersionAttributesTestDestinations } from "./ciXcodeVersionAttributesTestDestinations";

export class CiXcodeVersionAttributes {
  "version"?: string;
  "name"?: string;
  "testDestinations"?: Array<CiXcodeVersionAttributesTestDestinations>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "version",
      baseName: "version",
      type: "string",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "testDestinations",
      baseName: "testDestinations",
      type: "Array<CiXcodeVersionAttributesTestDestinations>",
    },
  ];

  static getAttributeTypeMap() {
    return CiXcodeVersionAttributes.attributeTypeMap;
  }
}
