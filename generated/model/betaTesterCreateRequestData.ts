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
import { BetaTesterCreateRequestDataAttributes } from "./betaTesterCreateRequestDataAttributes";
import { BetaTesterCreateRequestDataRelationships } from "./betaTesterCreateRequestDataRelationships";

export class BetaTesterCreateRequestData {
  "type": BetaTesterCreateRequestData.TypeEnum;
  "attributes": BetaTesterCreateRequestDataAttributes;
  "relationships"?: BetaTesterCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "BetaTesterCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "BetaTesterCreateRequestDataAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "BetaTesterCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return BetaTesterCreateRequestData.attributeTypeMap;
  }
}

export namespace BetaTesterCreateRequestData {
  export enum TypeEnum {
    BetaTesters = <any>"betaTesters",
  }
}