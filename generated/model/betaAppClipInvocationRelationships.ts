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
import { BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations } from "./betaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations";

export class BetaAppClipInvocationRelationships {
  "betaAppClipInvocationLocalizations"?: BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "betaAppClipInvocationLocalizations",
      baseName: "betaAppClipInvocationLocalizations",
      type: "BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations",
    },
  ];

  static getAttributeTypeMap() {
    return BetaAppClipInvocationRelationships.attributeTypeMap;
  }
}
