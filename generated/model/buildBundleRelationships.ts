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
import { BuildBundleRelationshipsAppClipDomainCacheStatus } from "./buildBundleRelationshipsAppClipDomainCacheStatus";
import { BuildBundleRelationshipsBetaAppClipInvocations } from "./buildBundleRelationshipsBetaAppClipInvocations";
import { BuildBundleRelationshipsBuildBundleFileSizes } from "./buildBundleRelationshipsBuildBundleFileSizes";

export class BuildBundleRelationships {
  "appClipDomainCacheStatus"?: BuildBundleRelationshipsAppClipDomainCacheStatus;
  "appClipDomainDebugStatus"?: BuildBundleRelationshipsAppClipDomainCacheStatus;
  "betaAppClipInvocations"?: BuildBundleRelationshipsBetaAppClipInvocations;
  "buildBundleFileSizes"?: BuildBundleRelationshipsBuildBundleFileSizes;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "appClipDomainCacheStatus",
      baseName: "appClipDomainCacheStatus",
      type: "BuildBundleRelationshipsAppClipDomainCacheStatus",
    },
    {
      name: "appClipDomainDebugStatus",
      baseName: "appClipDomainDebugStatus",
      type: "BuildBundleRelationshipsAppClipDomainCacheStatus",
    },
    {
      name: "betaAppClipInvocations",
      baseName: "betaAppClipInvocations",
      type: "BuildBundleRelationshipsBetaAppClipInvocations",
    },
    {
      name: "buildBundleFileSizes",
      baseName: "buildBundleFileSizes",
      type: "BuildBundleRelationshipsBuildBundleFileSizes",
    },
  ];

  static getAttributeTypeMap() {
    return BuildBundleRelationships.attributeTypeMap;
  }
}