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
import { CiBuildRunCreateRequestDataRelationshipsBuildRun } from "./ciBuildRunCreateRequestDataRelationshipsBuildRun";
import { CiBuildRunCreateRequestDataRelationshipsPullRequest } from "./ciBuildRunCreateRequestDataRelationshipsPullRequest";
import { CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag } from "./ciBuildRunCreateRequestDataRelationshipsSourceBranchOrTag";
import { CiBuildRunCreateRequestDataRelationshipsWorkflow } from "./ciBuildRunCreateRequestDataRelationshipsWorkflow";

export class CiBuildRunCreateRequestDataRelationships {
  "buildRun"?: CiBuildRunCreateRequestDataRelationshipsBuildRun;
  "workflow"?: CiBuildRunCreateRequestDataRelationshipsWorkflow;
  "sourceBranchOrTag"?: CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag;
  "pullRequest"?: CiBuildRunCreateRequestDataRelationshipsPullRequest;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "buildRun",
      baseName: "buildRun",
      type: "CiBuildRunCreateRequestDataRelationshipsBuildRun",
    },
    {
      name: "workflow",
      baseName: "workflow",
      type: "CiBuildRunCreateRequestDataRelationshipsWorkflow",
    },
    {
      name: "sourceBranchOrTag",
      baseName: "sourceBranchOrTag",
      type: "CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag",
    },
    {
      name: "pullRequest",
      baseName: "pullRequest",
      type: "CiBuildRunCreateRequestDataRelationshipsPullRequest",
    },
  ];

  static getAttributeTypeMap() {
    return CiBuildRunCreateRequestDataRelationships.attributeTypeMap;
  }
}
