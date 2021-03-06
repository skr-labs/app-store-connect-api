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
import { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from "./appClipAdvancedExperienceImageCreateRequestDataAttributes";
import { AppClipHeaderImageCreateRequestDataRelationships } from "./appClipHeaderImageCreateRequestDataRelationships";

export class AppClipHeaderImageCreateRequestData {
  "type": AppClipHeaderImageCreateRequestData.TypeEnum;
  "attributes": AppClipAdvancedExperienceImageCreateRequestDataAttributes;
  "relationships": AppClipHeaderImageCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppClipHeaderImageCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppClipAdvancedExperienceImageCreateRequestDataAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppClipHeaderImageCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipHeaderImageCreateRequestData.attributeTypeMap;
  }
}

export namespace AppClipHeaderImageCreateRequestData {
  export enum TypeEnum {
    AppClipHeaderImages = <any>"appClipHeaderImages",
  }
}
