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
import { ReviewSubmissionUpdateRequestDataAttributes } from "./reviewSubmissionUpdateRequestDataAttributes";

export class ReviewSubmissionUpdateRequestData {
  "type": ReviewSubmissionUpdateRequestData.TypeEnum;
  "id": string;
  "attributes"?: ReviewSubmissionUpdateRequestDataAttributes;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "ReviewSubmissionUpdateRequestData.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "ReviewSubmissionUpdateRequestDataAttributes",
    },
  ];

  static getAttributeTypeMap() {
    return ReviewSubmissionUpdateRequestData.attributeTypeMap;
  }
}

export namespace ReviewSubmissionUpdateRequestData {
  export enum TypeEnum {
    ReviewSubmissions = <any>"reviewSubmissions",
  }
}
