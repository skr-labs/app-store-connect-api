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
import { BetaGroupAttributes } from "./betaGroupAttributes";
import { BetaGroupRelationships } from "./betaGroupRelationships";
import { ResourceLinks } from "./resourceLinks";

export class BetaGroup {
  "type": BetaGroup.TypeEnum;
  "id": string;
  "attributes"?: BetaGroupAttributes;
  "relationships"?: BetaGroupRelationships;
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
      type: "BetaGroup.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "BetaGroupAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "BetaGroupRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return BetaGroup.attributeTypeMap;
  }
}

export namespace BetaGroup {
  export enum TypeEnum {
    BetaGroups = <any>"betaGroups",
  }
}