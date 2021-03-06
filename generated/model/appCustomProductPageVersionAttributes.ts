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

export class AppCustomProductPageVersionAttributes {
  "version"?: string;
  "state"?: AppCustomProductPageVersionAttributes.StateEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "version",
      baseName: "version",
      type: "string",
    },
    {
      name: "state",
      baseName: "state",
      type: "AppCustomProductPageVersionAttributes.StateEnum",
    },
  ];

  static getAttributeTypeMap() {
    return AppCustomProductPageVersionAttributes.attributeTypeMap;
  }
}

export namespace AppCustomProductPageVersionAttributes {
  export enum StateEnum {
    PrepareForSubmission = <any>"PREPARE_FOR_SUBMISSION",
    ReadyForReview = <any>"READY_FOR_REVIEW",
    WaitingForReview = <any>"WAITING_FOR_REVIEW",
    InReview = <any>"IN_REVIEW",
    Accepted = <any>"ACCEPTED",
    Approved = <any>"APPROVED",
    ReplacedWithNewVersion = <any>"REPLACED_WITH_NEW_VERSION",
    Rejected = <any>"REJECTED",
  }
}
