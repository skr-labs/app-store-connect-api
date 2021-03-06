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
import { BetaAppReviewSubmissionRelationships } from "./betaAppReviewSubmissionRelationships";
import { BuildBetaDetailAttributes } from "./buildBetaDetailAttributes";
import { ResourceLinks } from "./resourceLinks";

export class BuildBetaDetail {
  "type": BuildBetaDetail.TypeEnum;
  "id": string;
  "attributes"?: BuildBetaDetailAttributes;
  "relationships"?: BetaAppReviewSubmissionRelationships;
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
      type: "BuildBetaDetail.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "BuildBetaDetailAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "BetaAppReviewSubmissionRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return BuildBetaDetail.attributeTypeMap;
  }
}

export namespace BuildBetaDetail {
  export enum TypeEnum {
    BuildBetaDetails = <any>"buildBetaDetails",
  }
}
