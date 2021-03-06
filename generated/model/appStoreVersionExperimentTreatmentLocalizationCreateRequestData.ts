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
import { AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes } from "./appStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes";
import { AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships } from "./appStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships";

export class AppStoreVersionExperimentTreatmentLocalizationCreateRequestData {
  "type": AppStoreVersionExperimentTreatmentLocalizationCreateRequestData.TypeEnum;
  "attributes": AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes;
  "relationships": AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppStoreVersionExperimentTreatmentLocalizationCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return AppStoreVersionExperimentTreatmentLocalizationCreateRequestData.attributeTypeMap;
  }
}

export namespace AppStoreVersionExperimentTreatmentLocalizationCreateRequestData {
  export enum TypeEnum {
    AppStoreVersionExperimentTreatmentLocalizations = <any>(
      "appStoreVersionExperimentTreatmentLocalizations"
    ),
  }
}
