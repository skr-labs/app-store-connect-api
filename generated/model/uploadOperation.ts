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
import { HttpHeader } from "./httpHeader";

export class UploadOperation {
  "method"?: string;
  "url"?: string;
  "length"?: number;
  "offset"?: number;
  "requestHeaders"?: Array<HttpHeader>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "method",
      baseName: "method",
      type: "string",
    },
    {
      name: "url",
      baseName: "url",
      type: "string",
    },
    {
      name: "length",
      baseName: "length",
      type: "number",
    },
    {
      name: "offset",
      baseName: "offset",
      type: "number",
    },
    {
      name: "requestHeaders",
      baseName: "requestHeaders",
      type: "Array<HttpHeader>",
    },
  ];

  static getAttributeTypeMap() {
    return UploadOperation.attributeTypeMap;
  }
}
