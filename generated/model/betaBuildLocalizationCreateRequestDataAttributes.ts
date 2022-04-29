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

export class BetaBuildLocalizationCreateRequestDataAttributes {
  "whatsNew"?: string;
  "locale": string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "whatsNew",
      baseName: "whatsNew",
      type: "string",
    },
    {
      name: "locale",
      baseName: "locale",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return BetaBuildLocalizationCreateRequestDataAttributes.attributeTypeMap;
  }
}
