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

export class AppStoreVersionLocalizationUpdateRequestDataAttributes {
  "description"?: string;
  "keywords"?: string;
  "marketingUrl"?: string;
  "promotionalText"?: string;
  "supportUrl"?: string;
  "whatsNew"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "description",
      baseName: "description",
      type: "string",
    },
    {
      name: "keywords",
      baseName: "keywords",
      type: "string",
    },
    {
      name: "marketingUrl",
      baseName: "marketingUrl",
      type: "string",
    },
    {
      name: "promotionalText",
      baseName: "promotionalText",
      type: "string",
    },
    {
      name: "supportUrl",
      baseName: "supportUrl",
      type: "string",
    },
    {
      name: "whatsNew",
      baseName: "whatsNew",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return AppStoreVersionLocalizationUpdateRequestDataAttributes.attributeTypeMap;
  }
}
