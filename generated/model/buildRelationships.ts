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
import { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion } from "./appClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion";
import { AppClipRelationshipsApp } from "./appClipRelationshipsApp";
import { AppRelationshipsBetaGroups } from "./appRelationshipsBetaGroups";
import { BetaGroupRelationshipsBetaTesters } from "./betaGroupRelationshipsBetaTesters";
import { BuildRelationshipsAppEncryptionDeclaration } from "./buildRelationshipsAppEncryptionDeclaration";
import { BuildRelationshipsBetaAppReviewSubmission } from "./buildRelationshipsBetaAppReviewSubmission";
import { BuildRelationshipsBetaBuildLocalizations } from "./buildRelationshipsBetaBuildLocalizations";
import { BuildRelationshipsBuildBetaDetail } from "./buildRelationshipsBuildBetaDetail";
import { BuildRelationshipsBuildBundles } from "./buildRelationshipsBuildBundles";
import { BuildRelationshipsIcons } from "./buildRelationshipsIcons";
import { BuildRelationshipsPreReleaseVersion } from "./buildRelationshipsPreReleaseVersion";

export class BuildRelationships {
  "preReleaseVersion"?: BuildRelationshipsPreReleaseVersion;
  "individualTesters"?: BetaGroupRelationshipsBetaTesters;
  "betaGroups"?: AppRelationshipsBetaGroups;
  "betaBuildLocalizations"?: BuildRelationshipsBetaBuildLocalizations;
  "appEncryptionDeclaration"?: BuildRelationshipsAppEncryptionDeclaration;
  "betaAppReviewSubmission"?: BuildRelationshipsBetaAppReviewSubmission;
  "app"?: AppClipRelationshipsApp;
  "buildBetaDetail"?: BuildRelationshipsBuildBetaDetail;
  "appStoreVersion"?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion;
  "icons"?: BuildRelationshipsIcons;
  "buildBundles"?: BuildRelationshipsBuildBundles;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "preReleaseVersion",
      baseName: "preReleaseVersion",
      type: "BuildRelationshipsPreReleaseVersion",
    },
    {
      name: "individualTesters",
      baseName: "individualTesters",
      type: "BetaGroupRelationshipsBetaTesters",
    },
    {
      name: "betaGroups",
      baseName: "betaGroups",
      type: "AppRelationshipsBetaGroups",
    },
    {
      name: "betaBuildLocalizations",
      baseName: "betaBuildLocalizations",
      type: "BuildRelationshipsBetaBuildLocalizations",
    },
    {
      name: "appEncryptionDeclaration",
      baseName: "appEncryptionDeclaration",
      type: "BuildRelationshipsAppEncryptionDeclaration",
    },
    {
      name: "betaAppReviewSubmission",
      baseName: "betaAppReviewSubmission",
      type: "BuildRelationshipsBetaAppReviewSubmission",
    },
    {
      name: "app",
      baseName: "app",
      type: "AppClipRelationshipsApp",
    },
    {
      name: "buildBetaDetail",
      baseName: "buildBetaDetail",
      type: "BuildRelationshipsBuildBetaDetail",
    },
    {
      name: "appStoreVersion",
      baseName: "appStoreVersion",
      type: "AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion",
    },
    {
      name: "icons",
      baseName: "icons",
      type: "BuildRelationshipsIcons",
    },
    {
      name: "buildBundles",
      baseName: "buildBundles",
      type: "BuildRelationshipsBuildBundles",
    },
  ];

  static getAttributeTypeMap() {
    return BuildRelationships.attributeTypeMap;
  }
}
