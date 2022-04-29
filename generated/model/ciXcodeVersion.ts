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
import { CiXcodeVersionAttributes } from "./ciXcodeVersionAttributes";
import { CiXcodeVersionRelationships } from "./ciXcodeVersionRelationships";
import { ResourceLinks } from "./resourceLinks";

export class CiXcodeVersion {
  "type": CiXcodeVersion.TypeEnum;
  "id": string;
  "attributes"?: CiXcodeVersionAttributes;
  "relationships"?: CiXcodeVersionRelationships;
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
      type: "CiXcodeVersion.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "CiXcodeVersionAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "CiXcodeVersionRelationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return CiXcodeVersion.attributeTypeMap;
  }
}

export namespace CiXcodeVersion {
  export enum TypeEnum {
    CiXcodeVersions = <any>"ciXcodeVersions",
  }
}