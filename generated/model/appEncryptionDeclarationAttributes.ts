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
import { AppEncryptionDeclarationState } from "./appEncryptionDeclarationState";
import { Platform } from "./platform";

export class AppEncryptionDeclarationAttributes {
  "usesEncryption"?: boolean;
  "exempt"?: boolean;
  "containsProprietaryCryptography"?: boolean;
  "containsThirdPartyCryptography"?: boolean;
  "availableOnFrenchStore"?: boolean;
  "platform"?: Platform;
  "uploadedDate"?: Date;
  "documentUrl"?: string;
  "documentName"?: string;
  "documentType"?: string;
  "appEncryptionDeclarationState"?: AppEncryptionDeclarationState;
  "codeValue"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "usesEncryption",
      baseName: "usesEncryption",
      type: "boolean",
    },
    {
      name: "exempt",
      baseName: "exempt",
      type: "boolean",
    },
    {
      name: "containsProprietaryCryptography",
      baseName: "containsProprietaryCryptography",
      type: "boolean",
    },
    {
      name: "containsThirdPartyCryptography",
      baseName: "containsThirdPartyCryptography",
      type: "boolean",
    },
    {
      name: "availableOnFrenchStore",
      baseName: "availableOnFrenchStore",
      type: "boolean",
    },
    {
      name: "platform",
      baseName: "platform",
      type: "Platform",
    },
    {
      name: "uploadedDate",
      baseName: "uploadedDate",
      type: "Date",
    },
    {
      name: "documentUrl",
      baseName: "documentUrl",
      type: "string",
    },
    {
      name: "documentName",
      baseName: "documentName",
      type: "string",
    },
    {
      name: "documentType",
      baseName: "documentType",
      type: "string",
    },
    {
      name: "appEncryptionDeclarationState",
      baseName: "appEncryptionDeclarationState",
      type: "AppEncryptionDeclarationState",
    },
    {
      name: "codeValue",
      baseName: "codeValue",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return AppEncryptionDeclarationAttributes.attributeTypeMap;
  }
}
