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

export class BetaGroupAttributes {
  "name"?: string;
  "createdDate"?: Date;
  "isInternalGroup"?: boolean;
  "hasAccessToAllBuilds"?: boolean;
  "publicLinkEnabled"?: boolean;
  "publicLinkId"?: string;
  "publicLinkLimitEnabled"?: boolean;
  "publicLinkLimit"?: number;
  "publicLink"?: string;
  "feedbackEnabled"?: boolean;
  "iosBuildsAvailableForAppleSiliconMac"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "createdDate",
      baseName: "createdDate",
      type: "Date",
    },
    {
      name: "isInternalGroup",
      baseName: "isInternalGroup",
      type: "boolean",
    },
    {
      name: "hasAccessToAllBuilds",
      baseName: "hasAccessToAllBuilds",
      type: "boolean",
    },
    {
      name: "publicLinkEnabled",
      baseName: "publicLinkEnabled",
      type: "boolean",
    },
    {
      name: "publicLinkId",
      baseName: "publicLinkId",
      type: "string",
    },
    {
      name: "publicLinkLimitEnabled",
      baseName: "publicLinkLimitEnabled",
      type: "boolean",
    },
    {
      name: "publicLinkLimit",
      baseName: "publicLinkLimit",
      type: "number",
    },
    {
      name: "publicLink",
      baseName: "publicLink",
      type: "string",
    },
    {
      name: "feedbackEnabled",
      baseName: "feedbackEnabled",
      type: "boolean",
    },
    {
      name: "iosBuildsAvailableForAppleSiliconMac",
      baseName: "iosBuildsAvailableForAppleSiliconMac",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap() {
    return BetaGroupAttributes.attributeTypeMap;
  }
}
