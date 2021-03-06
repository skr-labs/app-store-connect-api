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
import { AppCustomProductPageLocalizationCreateRequestDataRelationships } from "./appCustomProductPageLocalizationCreateRequestDataRelationships";
import { AppCustomProductPageLocalizationInlineCreateAttributes } from "./appCustomProductPageLocalizationInlineCreateAttributes";

export class AppCustomProductPageLocalizationCreateRequestData {
  "type": AppCustomProductPageLocalizationCreateRequestData.TypeEnum;
  "attributes": AppCustomProductPageLocalizationInlineCreateAttributes;
  "relationships": AppCustomProductPageLocalizationCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppCustomProductPageLocalizationCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppCustomProductPageLocalizationInlineCreateAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppCustomProductPageLocalizationCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return AppCustomProductPageLocalizationCreateRequestData.attributeTypeMap;
  }
}

export namespace AppCustomProductPageLocalizationCreateRequestData {
  export enum TypeEnum {
    AppCustomProductPageLocalizations = <any>(
      "appCustomProductPageLocalizations"
    ),
  }
}
