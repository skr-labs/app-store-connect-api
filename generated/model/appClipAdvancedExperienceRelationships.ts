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
import { AppClipAdvancedExperienceRelationshipsAppClip } from "./appClipAdvancedExperienceRelationshipsAppClip";
import { AppClipAdvancedExperienceRelationshipsHeaderImage } from "./appClipAdvancedExperienceRelationshipsHeaderImage";
import { AppClipAdvancedExperienceRelationshipsLocalizations } from "./appClipAdvancedExperienceRelationshipsLocalizations";

export class AppClipAdvancedExperienceRelationships {
  "appClip"?: AppClipAdvancedExperienceRelationshipsAppClip;
  "headerImage"?: AppClipAdvancedExperienceRelationshipsHeaderImage;
  "localizations"?: AppClipAdvancedExperienceRelationshipsLocalizations;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "appClip",
      baseName: "appClip",
      type: "AppClipAdvancedExperienceRelationshipsAppClip",
    },
    {
      name: "headerImage",
      baseName: "headerImage",
      type: "AppClipAdvancedExperienceRelationshipsHeaderImage",
    },
    {
      name: "localizations",
      baseName: "localizations",
      type: "AppClipAdvancedExperienceRelationshipsLocalizations",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipAdvancedExperienceRelationships.attributeTypeMap;
  }
}