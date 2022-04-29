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

export class PagedDocumentLinks {
  "self": string;
  "first"?: string;
  "next"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "self",
      baseName: "self",
      type: "string",
    },
    {
      name: "first",
      baseName: "first",
      type: "string",
    },
    {
      name: "next",
      baseName: "next",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return PagedDocumentLinks.attributeTypeMap;
  }
}
