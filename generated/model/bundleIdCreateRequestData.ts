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
import { BundleIdCreateRequestDataAttributes } from "./bundleIdCreateRequestDataAttributes";

export class BundleIdCreateRequestData {
  "type": BundleIdCreateRequestData.TypeEnum;
  "attributes": BundleIdCreateRequestDataAttributes;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "BundleIdCreateRequestData.TypeEnum",
    },
    {
      name: "attributes",
      baseName: "attributes",
      type: "BundleIdCreateRequestDataAttributes",
    },
  ];

  static getAttributeTypeMap() {
    return BundleIdCreateRequestData.attributeTypeMap;
  }
}

export namespace BundleIdCreateRequestData {
  export enum TypeEnum {
    BundleIds = <any>"bundleIds",
  }
}
