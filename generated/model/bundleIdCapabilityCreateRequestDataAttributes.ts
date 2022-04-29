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
import { CapabilitySetting } from "./capabilitySetting";
import { CapabilityType } from "./capabilityType";

export class BundleIdCapabilityCreateRequestDataAttributes {
  "capabilityType": CapabilityType;
  "settings"?: Array<CapabilitySetting>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "capabilityType",
      baseName: "capabilityType",
      type: "CapabilityType",
    },
    {
      name: "settings",
      baseName: "settings",
      type: "Array<CapabilitySetting>",
    },
  ];

  static getAttributeTypeMap() {
    return BundleIdCapabilityCreateRequestDataAttributes.attributeTypeMap;
  }
}
