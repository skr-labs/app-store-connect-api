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
import { BuildAttributes } from "./buildAttributes";
import { BuildRelationships } from "./buildRelationships";
import { ResourceLinks } from "./resourceLinks";

export class Build {
  "type": Build.TypeEnum;
  "id": string;
  "attributes"?: BuildAttributes;
  "relationships"?: BuildRelationships;
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
      type: "Build.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "BuildAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "BuildRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return Build.attributeTypeMap;
  }
}

export namespace Build {
  export enum TypeEnum {
    Builds = <any>"builds",
  }
}
