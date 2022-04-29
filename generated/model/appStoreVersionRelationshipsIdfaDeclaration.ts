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
import { AppCategoryRelationshipsSubcategoriesLinks } from "./appCategoryRelationshipsSubcategoriesLinks";
import { AppStoreVersionRelationshipsIdfaDeclarationData } from "./appStoreVersionRelationshipsIdfaDeclarationData";

export class AppStoreVersionRelationshipsIdfaDeclaration {
  "links"?: AppCategoryRelationshipsSubcategoriesLinks;
  "data"?: AppStoreVersionRelationshipsIdfaDeclarationData;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "links",
      baseName: "links",
      type: "AppCategoryRelationshipsSubcategoriesLinks",
    },
    {
      name: "data",
      baseName: "data",
      type: "AppStoreVersionRelationshipsIdfaDeclarationData",
    },
  ];

  static getAttributeTypeMap() {
    return AppStoreVersionRelationshipsIdfaDeclaration.attributeTypeMap;
  }
}
