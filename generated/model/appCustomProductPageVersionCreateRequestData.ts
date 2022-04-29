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
import { AppCustomProductPageVersionCreateRequestDataRelationships } from "./appCustomProductPageVersionCreateRequestDataRelationships";

export class AppCustomProductPageVersionCreateRequestData {
  "type": AppCustomProductPageVersionCreateRequestData.TypeEnum;
  "relationships": AppCustomProductPageVersionCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppCustomProductPageVersionCreateRequestData.TypeEnum",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppCustomProductPageVersionCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return AppCustomProductPageVersionCreateRequestData.attributeTypeMap;
  }
}

export namespace AppCustomProductPageVersionCreateRequestData {
  export enum TypeEnum {
    AppCustomProductPageVersions = <any>"appCustomProductPageVersions",
  }
}