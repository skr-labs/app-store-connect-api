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
import { AppPreOrderCreateRequestDataAttributes } from "./appPreOrderCreateRequestDataAttributes";

export class AppPreOrderUpdateRequestData {
  "type": AppPreOrderUpdateRequestData.TypeEnum;
  "id": string;
  "attributes"?: AppPreOrderCreateRequestDataAttributes;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "AppPreOrderUpdateRequestData.TypeEnum",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "AppPreOrderCreateRequestDataAttributes",
    },
  ];

  static getAttributeTypeMap() {
    return AppPreOrderUpdateRequestData.attributeTypeMap;
  }
}

export namespace AppPreOrderUpdateRequestData {
  export enum TypeEnum {
    AppPreOrders = <any>"appPreOrders",
  }
}
