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
import { AppStoreReviewAttachmentAttributes } from "./appStoreReviewAttachmentAttributes";
import { AppStoreReviewAttachmentRelationships } from "./appStoreReviewAttachmentRelationships";
import { ResourceLinks } from "./resourceLinks";

export class AppStoreReviewAttachment {
  "type": AppStoreReviewAttachment.TypeEnum;
  "id": string;
  "attributes"?: AppStoreReviewAttachmentAttributes;
  "relationships"?: AppStoreReviewAttachmentRelationships;
  "links": ResourceLinks;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppStoreReviewAttachment.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppStoreReviewAttachmentAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppStoreReviewAttachmentRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return AppStoreReviewAttachment.attributeTypeMap;
  }
}

export namespace AppStoreReviewAttachment {
  export enum TypeEnum {
    AppStoreReviewAttachments = <any>"appStoreReviewAttachments",
  }
}
