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
import { AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip } from "./appClipAdvancedExperienceCreateRequestDataRelationshipsAppClip";
import { AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate } from "./appClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate";
import { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from "./appClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion";

export class AppClipDefaultExperienceCreateRequestDataRelationships {
  "appClip": AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip;
  "releaseWithAppStoreVersion"?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
  "appClipDefaultExperienceTemplate"?: AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "appClip",
      baseName: "appClip",
      type: "AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip",
    },
    {
      name: "releaseWithAppStoreVersion",
      baseName: "releaseWithAppStoreVersion",
      type: "AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion",
    },
    {
      name: "appClipDefaultExperienceTemplate",
      baseName: "appClipDefaultExperienceTemplate",
      type: "AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipDefaultExperienceCreateRequestDataRelationships.attributeTypeMap;
  }
}