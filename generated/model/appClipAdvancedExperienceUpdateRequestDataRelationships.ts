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
import { AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip } from "./appClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip";
import { AppClipAdvancedExperienceUpdateRequestDataRelationshipsHeaderImage } from "./appClipAdvancedExperienceUpdateRequestDataRelationshipsHeaderImage";
import { AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations } from "./appClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations";

export class AppClipAdvancedExperienceUpdateRequestDataRelationships {
  "appClip"?: AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip;
  "headerImage"?: AppClipAdvancedExperienceUpdateRequestDataRelationshipsHeaderImage;
  "localizations"?: AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "appClip",
      baseName: "appClip",
      type: "AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip",
    },
    {
      name: "headerImage",
      baseName: "headerImage",
      type: "AppClipAdvancedExperienceUpdateRequestDataRelationshipsHeaderImage",
    },
    {
      name: "localizations",
      baseName: "localizations",
      type: "AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipAdvancedExperienceUpdateRequestDataRelationships.attributeTypeMap;
  }
}
