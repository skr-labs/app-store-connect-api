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
import { AppClipRelationshipsApp } from "./appClipRelationshipsApp";
import { AppRelationshipsBuilds } from "./appRelationshipsBuilds";
import { BetaGroupRelationshipsBetaTesters } from "./betaGroupRelationshipsBetaTesters";

export class BetaGroupRelationships {
  "app"?: AppClipRelationshipsApp;
  "builds"?: AppRelationshipsBuilds;
  "betaTesters"?: BetaGroupRelationshipsBetaTesters;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "app",
      baseName: "app",
      type: "AppClipRelationshipsApp",
    },
    {
      name: "builds",
      baseName: "builds",
      type: "AppRelationshipsBuilds",
    },
    {
      name: "betaTesters",
      baseName: "betaTesters",
      type: "BetaGroupRelationshipsBetaTesters",
    },
  ];

  static getAttributeTypeMap() {
    return BetaGroupRelationships.attributeTypeMap;
  }
}