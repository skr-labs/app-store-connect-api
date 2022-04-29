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
import { AppCustomProductPageLocalizationUpdateRequestDataAttributes } from "./appCustomProductPageLocalizationUpdateRequestDataAttributes";

export class AppCustomProductPageLocalizationUpdateRequestData {
  "type": AppCustomProductPageLocalizationUpdateRequestData.TypeEnum;
  "id": string;
  "attributes"?: AppCustomProductPageLocalizationUpdateRequestDataAttributes;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppCustomProductPageLocalizationUpdateRequestData.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppCustomProductPageLocalizationUpdateRequestDataAttributes",
    },
  ];

  static getAttributeTypeMap() {
    return AppCustomProductPageLocalizationUpdateRequestData.attributeTypeMap;
  }
}

export namespace AppCustomProductPageLocalizationUpdateRequestData {
  export enum TypeEnum {
    AppCustomProductPageLocalizations = <any>(
      "appCustomProductPageLocalizations"
    ),
  }
}
