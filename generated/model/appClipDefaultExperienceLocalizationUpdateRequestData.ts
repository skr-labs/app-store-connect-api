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
import { AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes } from "./appClipDefaultExperienceLocalizationUpdateRequestDataAttributes";

export class AppClipDefaultExperienceLocalizationUpdateRequestData {
  "type": AppClipDefaultExperienceLocalizationUpdateRequestData.TypeEnum;
  "id": string;
  "attributes"?: AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppClipDefaultExperienceLocalizationUpdateRequestData.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipDefaultExperienceLocalizationUpdateRequestData.attributeTypeMap;
  }
}

export namespace AppClipDefaultExperienceLocalizationUpdateRequestData {
  export enum TypeEnum {
    AppClipDefaultExperienceLocalizations = <any>(
      "appClipDefaultExperienceLocalizations"
    ),
  }
}