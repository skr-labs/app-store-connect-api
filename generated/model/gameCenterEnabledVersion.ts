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
import { GameCenterEnabledVersionAttributes } from "./gameCenterEnabledVersionAttributes";
import { GameCenterEnabledVersionRelationships } from "./gameCenterEnabledVersionRelationships";
import { ResourceLinks } from "./resourceLinks";

export class GameCenterEnabledVersion {
  "type": GameCenterEnabledVersion.TypeEnum;
  "id": string;
  "attributes"?: GameCenterEnabledVersionAttributes;
  "relationships"?: GameCenterEnabledVersionRelationships;
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
      type: "GameCenterEnabledVersion.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "GameCenterEnabledVersionAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "GameCenterEnabledVersionRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return GameCenterEnabledVersion.attributeTypeMap;
  }
}

export namespace GameCenterEnabledVersion {
  export enum TypeEnum {
    GameCenterEnabledVersions = <any>"gameCenterEnabledVersions",
  }
}