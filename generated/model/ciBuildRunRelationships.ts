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
import { AppRelationshipsBuilds } from "./appRelationshipsBuilds";
import { AppRelationshipsCiProduct } from "./appRelationshipsCiProduct";
import { CiBuildRunRelationshipsPullRequest } from "./ciBuildRunRelationshipsPullRequest";
import { CiBuildRunRelationshipsSourceBranchOrTag } from "./ciBuildRunRelationshipsSourceBranchOrTag";
import { CiBuildRunRelationshipsWorkflow } from "./ciBuildRunRelationshipsWorkflow";

export class CiBuildRunRelationships {
  "builds"?: AppRelationshipsBuilds;
  "workflow"?: CiBuildRunRelationshipsWorkflow;
  "product"?: AppRelationshipsCiProduct;
  "sourceBranchOrTag"?: CiBuildRunRelationshipsSourceBranchOrTag;
  "destinationBranch"?: CiBuildRunRelationshipsSourceBranchOrTag;
  "pullRequest"?: CiBuildRunRelationshipsPullRequest;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "builds",
      baseName: "builds",
      type: "AppRelationshipsBuilds",
    },
    {
      name: "workflow",
      baseName: "workflow",
      type: "CiBuildRunRelationshipsWorkflow",
    },
    {
      name: "product",
      baseName: "product",
      type: "AppRelationshipsCiProduct",
    },
    {
      name: "sourceBranchOrTag",
      baseName: "sourceBranchOrTag",
      type: "CiBuildRunRelationshipsSourceBranchOrTag",
    },
    {
      name: "destinationBranch",
      baseName: "destinationBranch",
      type: "CiBuildRunRelationshipsSourceBranchOrTag",
    },
    {
      name: "pullRequest",
      baseName: "pullRequest",
      type: "CiBuildRunRelationshipsPullRequest",
    },
  ];

  static getAttributeTypeMap() {
    return CiBuildRunRelationships.attributeTypeMap;
  }
}