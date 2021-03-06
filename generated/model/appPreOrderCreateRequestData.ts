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
import { AppEventCreateRequestDataRelationships } from "./appEventCreateRequestDataRelationships";
import { AppPreOrderCreateRequestDataAttributes } from "./appPreOrderCreateRequestDataAttributes";

export class AppPreOrderCreateRequestData {
  "type": AppPreOrderCreateRequestData.TypeEnum;
  "attributes"?: AppPreOrderCreateRequestDataAttributes;
  "relationships": AppEventCreateRequestDataRelationships;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppPreOrderCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppPreOrderCreateRequestDataAttributes",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "AppEventCreateRequestDataRelationships",
    },
  ];

  static getAttributeTypeMap() {
    return AppPreOrderCreateRequestData.attributeTypeMap;
  }
}

export namespace AppPreOrderCreateRequestData {
  export enum TypeEnum {
    AppPreOrders = <any>"appPreOrders",
  }
}
