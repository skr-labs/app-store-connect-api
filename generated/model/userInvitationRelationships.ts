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
import { BetaTesterRelationshipsApps } from "./betaTesterRelationshipsApps";

export class UserInvitationRelationships {
  "visibleApps"?: BetaTesterRelationshipsApps;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "visibleApps",
      baseName: "visibleApps",
      type: "BetaTesterRelationshipsApps",
    },
  ];

  static getAttributeTypeMap() {
    return UserInvitationRelationships.attributeTypeMap;
  }
}
