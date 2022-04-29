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
import { AppClipAdvancedExperienceRelationshipsLocalizationsData } from "./appClipAdvancedExperienceRelationshipsLocalizationsData";
import { PagingInformation } from "./pagingInformation";

export class AppClipAdvancedExperienceRelationshipsLocalizations {
  "links"?: AppCategoryRelationshipsSubcategoriesLinks;
  "meta"?: PagingInformation;
  "data"?: Array<AppClipAdvancedExperienceRelationshipsLocalizationsData>;

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
      name: "meta",
      baseName: "meta",
      type: "PagingInformation",
    },
    {
      name: "data",
      baseName: "data",
      type: "Array<AppClipAdvancedExperienceRelationshipsLocalizationsData>",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipAdvancedExperienceRelationshipsLocalizations.attributeTypeMap;
  }
}
