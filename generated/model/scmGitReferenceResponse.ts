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
import { DocumentLinks } from "./documentLinks";
import { ScmGitReference } from "./scmGitReference";
import { ScmRepository } from "./scmRepository";

export class ScmGitReferenceResponse {
  "data": ScmGitReference;
  "included"?: Array<ScmRepository>;
  "links": DocumentLinks;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "data",
      baseName: "data",
      type: "ScmGitReference",
    },
    {
      name: "included",
      baseName: "included",
      type: "Array<ScmRepository>",
    },
    {
      name: "links",
      baseName: "links",
      type: "DocumentLinks",
    },
  ];

  static getAttributeTypeMap() {
    return ScmGitReferenceResponse.attributeTypeMap;
  }
}