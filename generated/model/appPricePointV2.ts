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
import { AppPricePointV2Attributes } from "./appPricePointV2Attributes";
import { AppPricePointV2Relationships } from "./appPricePointV2Relationships";
import { ResourceLinks } from "./resourceLinks";

export class AppPricePointV2 {
  "type": AppPricePointV2.TypeEnum;
  "id": string;
  "attributes"?: AppPricePointV2Attributes;
  "relationships"?: AppPricePointV2Relationships;
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
      type: "AppPricePointV2.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppPricePointV2Attributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppPricePointV2Relationships",
    },
    {
      name: "links",
      baseName: "links",
      type: "ResourceLinks",
    },
  ];

  static getAttributeTypeMap() {
    return AppPricePointV2.attributeTypeMap;
  }
}

export namespace AppPricePointV2 {
  export enum TypeEnum {
    AppPricePoints = <any>"appPricePoints",
  }
}
