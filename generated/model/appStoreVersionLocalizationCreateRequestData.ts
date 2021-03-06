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
import { AppStoreReviewDetailCreateRequestDataRelationships } from "./appStoreReviewDetailCreateRequestDataRelationships";
import { AppStoreVersionLocalizationCreateRequestDataAttributes } from "./appStoreVersionLocalizationCreateRequestDataAttributes";

export class AppStoreVersionLocalizationCreateRequestData {
  "type": AppStoreVersionLocalizationCreateRequestData.TypeEnum;
  "attributes": AppStoreVersionLocalizationCreateRequestDataAttributes;
  "relationships": AppStoreReviewDetailCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppStoreVersionLocalizationCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppStoreVersionLocalizationCreateRequestDataAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppStoreReviewDetailCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return AppStoreVersionLocalizationCreateRequestData.attributeTypeMap;
  }
}

export namespace AppStoreVersionLocalizationCreateRequestData {
  export enum TypeEnum {
    AppStoreVersionLocalizations = <any>"appStoreVersionLocalizations",
  }
}
