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

export enum InternalBetaState {
  Processing = <any>"PROCESSING",
  ProcessingException = <any>"PROCESSING_EXCEPTION",
  MissingExportCompliance = <any>"MISSING_EXPORT_COMPLIANCE",
  ReadyForBetaTesting = <any>"READY_FOR_BETA_TESTING",
  InBetaTesting = <any>"IN_BETA_TESTING",
  Expired = <any>"EXPIRED",
  InExportComplianceReview = <any>"IN_EXPORT_COMPLIANCE_REVIEW",
}
