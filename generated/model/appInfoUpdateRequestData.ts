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
import { AppInfoUpdateRequestDataRelationships } from "./appInfoUpdateRequestDataRelationships";

export class AppInfoUpdateRequestData {
  "type": AppInfoUpdateRequestData.TypeEnum;
  "id": string;
  "relationships"?: AppInfoUpdateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppInfoUpdateRequestData.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppInfoUpdateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return AppInfoUpdateRequestData.attributeTypeMap;
  }
}

export namespace AppInfoUpdateRequestData {
  export enum TypeEnum {
    AppInfos = <any>"appInfos",
  }
}
