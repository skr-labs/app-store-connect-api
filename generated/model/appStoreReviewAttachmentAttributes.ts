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
import { AppMediaAssetState } from "./appMediaAssetState";
import { UploadOperation } from "./uploadOperation";

export class AppStoreReviewAttachmentAttributes {
  "fileSize"?: number;
  "fileName"?: string;
  "sourceFileChecksum"?: string;
  "uploadOperations"?: Array<UploadOperation>;
  "assetDeliveryState"?: AppMediaAssetState;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "fileSize",
      baseName: "fileSize",
      type: "number",
    },
    {
      name: "fileName",
      baseName: "fileName",
      type: "string",
    },
    {
      name: "sourceFileChecksum",
      baseName: "sourceFileChecksum",
      type: "string",
    },
    {
      name: "uploadOperations",
      baseName: "uploadOperations",
      type: "Array<UploadOperation>",
    },
    {
      name: "assetDeliveryState",
      baseName: "assetDeliveryState",
      type: "AppMediaAssetState",
    },
  ];

  static getAttributeTypeMap() {
    return AppStoreReviewAttachmentAttributes.attributeTypeMap;
  }
}
