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
import { AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates } from "./appClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates";

export class AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
  "coordinates"?: AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates;
  "source"?: AppClipAdvancedExperienceAttributesPlaceDisplayPoint.SourceEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "coordinates",
      baseName: "coordinates",
      type: "AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates",
    },
    {
      name: "source",
      baseName: "source",
      type: "AppClipAdvancedExperienceAttributesPlaceDisplayPoint.SourceEnum",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipAdvancedExperienceAttributesPlaceDisplayPoint.attributeTypeMap;
  }
}

export namespace AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
  export enum SourceEnum {
    Calculated = <any>"CALCULATED",
    ManuallyPlaced = <any>"MANUALLY_PLACED",
  }
}
