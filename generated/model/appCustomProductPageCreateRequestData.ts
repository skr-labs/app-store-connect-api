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
import { AppCustomProductPageCreateRequestDataAttributes } from "./appCustomProductPageCreateRequestDataAttributes";
import { AppCustomProductPageCreateRequestDataRelationships } from "./appCustomProductPageCreateRequestDataRelationships";

export class AppCustomProductPageCreateRequestData {
  "type": AppCustomProductPageCreateRequestData.TypeEnum;
  "attributes": AppCustomProductPageCreateRequestDataAttributes;
  "relationships": AppCustomProductPageCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppCustomProductPageCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppCustomProductPageCreateRequestDataAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppCustomProductPageCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return AppCustomProductPageCreateRequestData.attributeTypeMap;
  }
}

export namespace AppCustomProductPageCreateRequestData {
  export enum TypeEnum {
    AppCustomProductPages = <any>"appCustomProductPages",
  }
}
