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
import { UserRole } from "./userRole";

export class UserInvitationCreateRequestDataAttributes {
  "email": string;
  "firstName": string;
  "lastName": string;
  "roles": Array<UserRole>;
  "allAppsVisible"?: boolean;
  "provisioningAllowed"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "email",
      baseName: "email",
      type: "string",
    },
    {
      name: "firstName",
      baseName: "firstName",
      type: "string",
    },
    {
      name: "lastName",
      baseName: "lastName",
      type: "string",
    },
    {
      name: "roles",
      baseName: "roles",
      type: "Array<UserRole>",
    },
    {
      name: "allAppsVisible",
      baseName: "allAppsVisible",
      type: "boolean",
    },
    {
      name: "provisioningAllowed",
      baseName: "provisioningAllowed",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap() {
    return UserInvitationCreateRequestDataAttributes.attributeTypeMap;
  }
}
