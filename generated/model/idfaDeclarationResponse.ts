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
import { AppStoreVersion } from "./appStoreVersion";
import { DocumentLinks } from "./documentLinks";
import { IdfaDeclaration } from "./idfaDeclaration";

export class IdfaDeclarationResponse {
  "data": IdfaDeclaration;
  "included"?: Array<AppStoreVersion>;
  "links": DocumentLinks;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "data",
      baseName: "data",
      type: "IdfaDeclaration",
    },
    {
      name: "included",
      baseName: "included",
      type: "Array<AppStoreVersion>",
    },
    {
      name: "links",
      baseName: "links",
      type: "DocumentLinks",
    },
  ];

  static getAttributeTypeMap() {
    return IdfaDeclarationResponse.attributeTypeMap;
  }
}
