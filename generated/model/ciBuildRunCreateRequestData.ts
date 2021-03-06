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
import { CiBuildRunCreateRequestDataAttributes } from "./ciBuildRunCreateRequestDataAttributes";
import { CiBuildRunCreateRequestDataRelationships } from "./ciBuildRunCreateRequestDataRelationships";

export class CiBuildRunCreateRequestData {
  "type": CiBuildRunCreateRequestData.TypeEnum;
  "attributes"?: CiBuildRunCreateRequestDataAttributes;
  "relationships"?: CiBuildRunCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "CiBuildRunCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "CiBuildRunCreateRequestDataAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "CiBuildRunCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return CiBuildRunCreateRequestData.attributeTypeMap;
  }
}

export namespace CiBuildRunCreateRequestData {
  export enum TypeEnum {
    CiBuildRuns = <any>"ciBuildRuns",
  }
}
