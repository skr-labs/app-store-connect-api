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
import { AppPriceTierRelationships } from "./appPriceTierRelationships";
import { ResourceLinks } from "./resourceLinks";

export class AppPriceTier {
  "type": AppPriceTier.TypeEnum;
  "id": string;
  "relationships"?: AppPriceTierRelationships;
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
      type: "AppPriceTier.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppPriceTierRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return AppPriceTier.attributeTypeMap;
  }
}

export namespace AppPriceTier {
  export enum TypeEnum {
    AppPriceTiers = <any>"appPriceTiers",
  }
}