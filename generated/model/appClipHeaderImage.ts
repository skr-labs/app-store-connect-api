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
import { AppClipAdvancedExperienceImageAttributes } from "./appClipAdvancedExperienceImageAttributes";
import { AppClipHeaderImageRelationships } from "./appClipHeaderImageRelationships";
import { ResourceLinks } from "./resourceLinks";

export class AppClipHeaderImage {
  "type": AppClipHeaderImage.TypeEnum;
  "id": string;
  "attributes"?: AppClipAdvancedExperienceImageAttributes;
  "relationships"?: AppClipHeaderImageRelationships;
  "links": ResourceLinks;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppClipHeaderImage.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppClipAdvancedExperienceImageAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppClipHeaderImageRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipHeaderImage.attributeTypeMap;
  }
}

export namespace AppClipHeaderImage {
  export enum TypeEnum {
    AppClipHeaderImages = <any>"appClipHeaderImages",
  }
}