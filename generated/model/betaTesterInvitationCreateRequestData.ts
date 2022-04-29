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
import { BetaTesterInvitationCreateRequestDataRelationships } from "./betaTesterInvitationCreateRequestDataRelationships";

export class BetaTesterInvitationCreateRequestData {
  "type": BetaTesterInvitationCreateRequestData.TypeEnum;
  "relationships": BetaTesterInvitationCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "BetaTesterInvitationCreateRequestData.TypeEnum",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "BetaTesterInvitationCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return BetaTesterInvitationCreateRequestData.attributeTypeMap;
  }
}

export namespace BetaTesterInvitationCreateRequestData {
  export enum TypeEnum {
    BetaTesterInvitations = <any>"betaTesterInvitations",
  }
}
