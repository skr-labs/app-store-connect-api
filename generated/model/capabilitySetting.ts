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
import { CapabilityOption } from "./capabilityOption";

export class CapabilitySetting {
  "key"?: CapabilitySetting.KeyEnum;
  "name"?: string;
  "description"?: string;
  "enabledByDefault"?: boolean;
  "visible"?: boolean;
  "allowedInstances"?: CapabilitySetting.AllowedInstancesEnum;
  "minInstances"?: number;
  "options"?: Array<CapabilityOption>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "key",
      baseName: "key",
      type: "CapabilitySetting.KeyEnum",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "description",
      baseName: "description",
      type: "string",
    },
    {
      name: "enabledByDefault",
      baseName: "enabledByDefault",
      type: "boolean",
    },
    {
      name: "visible",
      baseName: "visible",
      type: "boolean",
    },
    {
      name: "allowedInstances",
      baseName: "allowedInstances",
      type: "CapabilitySetting.AllowedInstancesEnum",
    },
    {
      name: "minInstances",
      baseName: "minInstances",
      type: "number",
    },
    {
      name: "options",
      baseName: "options",
      type: "Array<CapabilityOption>",
    },
  ];

  static getAttributeTypeMap() {
    return CapabilitySetting.attributeTypeMap;
  }
}

export namespace CapabilitySetting {
  export enum KeyEnum {
    IcloudVersion = <any>"ICLOUD_VERSION",
    DataProtectionPermissionLevel = <any>"DATA_PROTECTION_PERMISSION_LEVEL",
    AppleIdAuthAppConsent = <any>"APPLE_ID_AUTH_APP_CONSENT",
  }
  export enum AllowedInstancesEnum {
    Entry = <any>"ENTRY",
    Single = <any>"SINGLE",
    Multiple = <any>"MULTIPLE",
  }
}
