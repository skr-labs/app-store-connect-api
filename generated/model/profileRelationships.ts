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
import { CiProductRelationshipsBundleId } from "./ciProductRelationshipsBundleId";
import { ProfileRelationshipsCertificates } from "./profileRelationshipsCertificates";
import { ProfileRelationshipsDevices } from "./profileRelationshipsDevices";

export class ProfileRelationships {
  "bundleId"?: CiProductRelationshipsBundleId;
  "devices"?: ProfileRelationshipsDevices;
  "certificates"?: ProfileRelationshipsCertificates;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "bundleId",
      baseName: "bundleId",
      type: "CiProductRelationshipsBundleId",
    },
    {
      name: "devices",
      baseName: "devices",
      type: "ProfileRelationshipsDevices",
    },
    {
      name: "certificates",
      baseName: "certificates",
      type: "ProfileRelationshipsCertificates",
    },
  ];

  static getAttributeTypeMap() {
    return ProfileRelationships.attributeTypeMap;
  }
}
