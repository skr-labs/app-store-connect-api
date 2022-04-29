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
import { CiBuildRunAttributesSourceCommit } from "./ciBuildRunAttributesSourceCommit";
import { CiCompletionStatus } from "./ciCompletionStatus";
import { CiExecutionProgress } from "./ciExecutionProgress";
import { CiIssueCounts } from "./ciIssueCounts";

export class CiBuildRunAttributes {
  "number"?: number;
  "createdDate"?: Date;
  "startedDate"?: Date;
  "finishedDate"?: Date;
  "sourceCommit"?: CiBuildRunAttributesSourceCommit;
  "destinationCommit"?: CiBuildRunAttributesSourceCommit;
  "isPullRequestBuild"?: boolean;
  "issueCounts"?: CiIssueCounts;
  "executionProgress"?: CiExecutionProgress;
  "completionStatus"?: CiCompletionStatus;
  "startReason"?: CiBuildRunAttributes.StartReasonEnum;
  "cancelReason"?: CiBuildRunAttributes.CancelReasonEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "number",
      baseName: "number",
      type: "number",
    },
    {
      name: "createdDate",
      baseName: "createdDate",
      type: "Date",
    },
    {
      name: "startedDate",
      baseName: "startedDate",
      type: "Date",
    },
    {
      name: "finishedDate",
      baseName: "finishedDate",
      type: "Date",
    },
    {
      name: "sourceCommit",
      baseName: "sourceCommit",
      type: "CiBuildRunAttributesSourceCommit",
    },
    {
      name: "destinationCommit",
      baseName: "destinationCommit",
      type: "CiBuildRunAttributesSourceCommit",
    },
    {
      name: "isPullRequestBuild",
      baseName: "isPullRequestBuild",
      type: "boolean",
    },
    {
      name: "issueCounts",
      baseName: "issueCounts",
      type: "CiIssueCounts",
    },
    {
      name: "executionProgress",
      baseName: "executionProgress",
      type: "CiExecutionProgress",
    },
    {
      name: "completionStatus",
      baseName: "completionStatus",
      type: "CiCompletionStatus",
    },
    {
      name: "startReason",
      baseName: "startReason",
      type: "CiBuildRunAttributes.StartReasonEnum",
    },
    {
      name: "cancelReason",
      baseName: "cancelReason",
      type: "CiBuildRunAttributes.CancelReasonEnum",
    },
  ];

  static getAttributeTypeMap() {
    return CiBuildRunAttributes.attributeTypeMap;
  }
}

export namespace CiBuildRunAttributes {
  export enum StartReasonEnum {
    GitRefChange = <any>"GIT_REF_CHANGE",
    Manual = <any>"MANUAL",
    ManualRebuild = <any>"MANUAL_REBUILD",
    PullRequestOpen = <any>"PULL_REQUEST_OPEN",
    PullRequestUpdate = <any>"PULL_REQUEST_UPDATE",
    Schedule = <any>"SCHEDULE",
  }
  export enum CancelReasonEnum {
    AutomaticallyByNewerBuild = <any>"AUTOMATICALLY_BY_NEWER_BUILD",
    ManuallyByUser = <any>"MANUALLY_BY_USER",
  }
}