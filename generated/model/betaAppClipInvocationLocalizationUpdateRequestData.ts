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
import { BetaAppClipInvocationLocalizationUpdateRequestDataAttributes } from "./betaAppClipInvocationLocalizationUpdateRequestDataAttributes";

export class BetaAppClipInvocationLocalizationUpdateRequestData {
  "type": BetaAppClipInvocationLocalizationUpdateRequestData.TypeEnum;
  "id": string;
  "attributes"?: BetaAppClipInvocationLocalizationUpdateRequestDataAttributes;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "BetaAppClipInvocationLocalizationUpdateRequestData.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "BetaAppClipInvocationLocalizationUpdateRequestDataAttributes",
    },
  ];

  static getAttributeTypeMap() {
    return BetaAppClipInvocationLocalizationUpdateRequestData.attributeTypeMap;
  }
}

export namespace BetaAppClipInvocationLocalizationUpdateRequestData {
  export enum TypeEnum {
    BetaAppClipInvocationLocalizations = <any>(
      "betaAppClipInvocationLocalizations"
    ),
  }
}
