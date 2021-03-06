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
import { ResourceLinks } from "./resourceLinks";
import { UserInvitationAttributes } from "./userInvitationAttributes";
import { UserInvitationRelationships } from "./userInvitationRelationships";

export class UserInvitation {
  "type": UserInvitation.TypeEnum;
  "id": string;
  "attributes"?: UserInvitationAttributes;
  "relationships"?: UserInvitationRelationships;
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
      type: "UserInvitation.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "UserInvitationAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "UserInvitationRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return UserInvitation.attributeTypeMap;
  }
}

export namespace UserInvitation {
  export enum TypeEnum {
    UserInvitations = <any>"userInvitations",
  }
}
