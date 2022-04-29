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
import { AgeRatingDeclarationAttributes } from "./ageRatingDeclarationAttributes";
import { ResourceLinks } from "./resourceLinks";

export class AgeRatingDeclaration {
  "type": AgeRatingDeclaration.TypeEnum;
  "id": string;
  "attributes"?: AgeRatingDeclarationAttributes;
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
      type: "AgeRatingDeclaration.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AgeRatingDeclarationAttributes",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return AgeRatingDeclaration.attributeTypeMap;
  }
}

export namespace AgeRatingDeclaration {
  export enum TypeEnum {
    AgeRatingDeclarations = <any>"ageRatingDeclarations",
  }
}
