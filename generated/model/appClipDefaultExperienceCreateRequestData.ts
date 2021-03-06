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
import { AppClipDefaultExperienceAttributes } from "./appClipDefaultExperienceAttributes";
import { AppClipDefaultExperienceCreateRequestDataRelationships } from "./appClipDefaultExperienceCreateRequestDataRelationships";

export class AppClipDefaultExperienceCreateRequestData {
  "type": AppClipDefaultExperienceCreateRequestData.TypeEnum;
  "attributes"?: AppClipDefaultExperienceAttributes;
  "relationships": AppClipDefaultExperienceCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppClipDefaultExperienceCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppClipDefaultExperienceAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppClipDefaultExperienceCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipDefaultExperienceCreateRequestData.attributeTypeMap;
  }
}

export namespace AppClipDefaultExperienceCreateRequestData {
  export enum TypeEnum {
    AppClipDefaultExperiences = <any>"appClipDefaultExperiences",
  }
}
