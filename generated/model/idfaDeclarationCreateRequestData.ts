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
import { AppStoreReviewDetailCreateRequestDataRelationships } from "./appStoreReviewDetailCreateRequestDataRelationships";
import { IdfaDeclarationCreateRequestDataAttributes } from "./idfaDeclarationCreateRequestDataAttributes";

export class IdfaDeclarationCreateRequestData {
  "type": IdfaDeclarationCreateRequestData.TypeEnum;
  "attributes": IdfaDeclarationCreateRequestDataAttributes;
  "relationships": AppStoreReviewDetailCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "IdfaDeclarationCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "IdfaDeclarationCreateRequestDataAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppStoreReviewDetailCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return IdfaDeclarationCreateRequestData.attributeTypeMap;
  }
}

export namespace IdfaDeclarationCreateRequestData {
  export enum TypeEnum {
    IdfaDeclarations = <any>"idfaDeclarations",
  }
}
