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
import { BetaGroupCreateRequestDataRelationshipsBuilds } from "./betaGroupCreateRequestDataRelationshipsBuilds";
import { BetaTesterCreateRequestDataRelationshipsBetaGroups } from "./betaTesterCreateRequestDataRelationshipsBetaGroups";

export class BetaTesterCreateRequestDataRelationships {
  "betaGroups"?: BetaTesterCreateRequestDataRelationshipsBetaGroups;
  "builds"?: BetaGroupCreateRequestDataRelationshipsBuilds;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "betaGroups",
      baseName: "betaGroups",
      type: "BetaTesterCreateRequestDataRelationshipsBetaGroups",
    },
    {
      name: "builds",
      baseName: "builds",
      type: "BetaGroupCreateRequestDataRelationshipsBuilds",
    },
  ];

  static getAttributeTypeMap() {
    return BetaTesterCreateRequestDataRelationships.attributeTypeMap;
  }
}
