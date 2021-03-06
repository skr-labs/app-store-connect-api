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
import { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from "./appClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion";
import { AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion } from "./appCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion";
import { ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent } from "./reviewSubmissionItemCreateRequestDataRelationshipsAppEvent";
import { ReviewSubmissionItemCreateRequestDataRelationshipsAppStoreVersionExperiment } from "./reviewSubmissionItemCreateRequestDataRelationshipsAppStoreVersionExperiment";
import { ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission } from "./reviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission";

export class ReviewSubmissionItemCreateRequestDataRelationships {
  "reviewSubmission": ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission;
  "appStoreVersion"?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
  "appCustomProductPageVersion"?: AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion;
  "appStoreVersionExperiment"?: ReviewSubmissionItemCreateRequestDataRelationshipsAppStoreVersionExperiment;
  "appEvent"?: ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "reviewSubmission",
      baseName: "reviewSubmission",
      type: "ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission",
    },
    {
      name: "appStoreVersion",
      baseName: "appStoreVersion",
      type: "AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion",
    },
    {
      name: "appCustomProductPageVersion",
      baseName: "appCustomProductPageVersion",
      type: "AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion",
    },
    {
      name: "appStoreVersionExperiment",
      baseName: "appStoreVersionExperiment",
      type: "ReviewSubmissionItemCreateRequestDataRelationshipsAppStoreVersionExperiment",
    },
    {
      name: "appEvent",
      baseName: "appEvent",
      type: "ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent",
    },
  ];

  static getAttributeTypeMap() {
    return ReviewSubmissionItemCreateRequestDataRelationships.attributeTypeMap;
  }
}
