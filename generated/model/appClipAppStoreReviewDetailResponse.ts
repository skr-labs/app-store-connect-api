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
import { AppClipAppStoreReviewDetail } from "./appClipAppStoreReviewDetail";
import { AppClipDefaultExperience } from "./appClipDefaultExperience";
import { DocumentLinks } from "./documentLinks";

export class AppClipAppStoreReviewDetailResponse {
  "data": AppClipAppStoreReviewDetail;
  "included"?: Array<AppClipDefaultExperience>;
  "links": DocumentLinks;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "data",
      baseName: "data",
      type: "AppClipAppStoreReviewDetail",
    },
    {
      name: "included",
      baseName: "included",
      type: "Array<AppClipDefaultExperience>",
    },
    {
      name: "links",
      baseName: "links",
      type: "DocumentLinks",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipAppStoreReviewDetailResponse.attributeTypeMap;
  }
}
