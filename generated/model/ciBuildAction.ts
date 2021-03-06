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
import { CiBuildActionAttributes } from "./ciBuildActionAttributes";
import { CiBuildActionRelationships } from "./ciBuildActionRelationships";
import { ResourceLinks } from "./resourceLinks";

export class CiBuildAction {
  "type": CiBuildAction.TypeEnum;
  "id": string;
  "attributes"?: CiBuildActionAttributes;
  "relationships"?: CiBuildActionRelationships;
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
      type: "CiBuildAction.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "CiBuildActionAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "CiBuildActionRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return CiBuildAction.attributeTypeMap;
  }
}

export namespace CiBuildAction {
  export enum TypeEnum {
    CiBuildActions = <any>"ciBuildActions",
  }
}
