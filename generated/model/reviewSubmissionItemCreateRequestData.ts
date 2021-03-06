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
import { ReviewSubmissionItemCreateRequestDataRelationships } from "./reviewSubmissionItemCreateRequestDataRelationships";

export class ReviewSubmissionItemCreateRequestData {
  "type": ReviewSubmissionItemCreateRequestData.TypeEnum;
  "relationships": ReviewSubmissionItemCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "ReviewSubmissionItemCreateRequestData.TypeEnum",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "ReviewSubmissionItemCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return ReviewSubmissionItemCreateRequestData.attributeTypeMap;
  }
}

export namespace ReviewSubmissionItemCreateRequestData {
  export enum TypeEnum {
    ReviewSubmissionItems = <any>"reviewSubmissionItems",
  }
}
