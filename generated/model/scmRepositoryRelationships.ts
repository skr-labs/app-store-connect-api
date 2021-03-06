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
import { CiBuildRunRelationshipsSourceBranchOrTag } from "./ciBuildRunRelationshipsSourceBranchOrTag";
import { ScmRepositoryRelationshipsScmProvider } from "./scmRepositoryRelationshipsScmProvider";

export class ScmRepositoryRelationships {
  "scmProvider"?: ScmRepositoryRelationshipsScmProvider;
  "defaultBranch"?: CiBuildRunRelationshipsSourceBranchOrTag;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "scmProvider",
      baseName: "scmProvider",
      type: "ScmRepositoryRelationshipsScmProvider",
    },
    {
      name: "defaultBranch",
      baseName: "defaultBranch",
      type: "CiBuildRunRelationshipsSourceBranchOrTag",
    },
  ];

  static getAttributeTypeMap() {
    return ScmRepositoryRelationships.attributeTypeMap;
  }
}
