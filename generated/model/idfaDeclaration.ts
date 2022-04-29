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
import { AppStoreVersionSubmissionRelationships } from "./appStoreVersionSubmissionRelationships";
import { IdfaDeclarationAttributes } from "./idfaDeclarationAttributes";
import { ResourceLinks } from "./resourceLinks";

export class IdfaDeclaration {
  "type": IdfaDeclaration.TypeEnum;
  "id": string;
  "attributes"?: IdfaDeclarationAttributes;
  "relationships"?: AppStoreVersionSubmissionRelationships;
  "links": ResourceLinks;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "IdfaDeclaration.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "IdfaDeclarationAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppStoreVersionSubmissionRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return IdfaDeclaration.attributeTypeMap;
  }
}

export namespace IdfaDeclaration {
  export enum TypeEnum {
    IdfaDeclarations = <any>"idfaDeclarations",
  }
}