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

import { RequestFile } from './models';
import { AppClip } from './appClip';
import { AppClip | AppClipAdvancedExperienceImage | AppClipAdvancedExperienceLocalization } from './appClip | AppClipAdvancedExperienceImage | AppClipAdvancedExperienceLocalization';
import { AppClipAdvancedExperience } from './appClipAdvancedExperience';
import { AppClipAdvancedExperienceImage } from './appClipAdvancedExperienceImage';
import { AppClipAdvancedExperienceLocalization } from './appClipAdvancedExperienceLocalization';
import { DocumentLinks } from './documentLinks';

export class AppClipAdvancedExperienceResponse {
    'data': AppClipAdvancedExperience;
    'included'?: Array<AppClip | AppClipAdvancedExperienceImage | AppClipAdvancedExperienceLocalization>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppClipAdvancedExperience"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppClip | AppClipAdvancedExperienceImage | AppClipAdvancedExperienceLocalization>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppClipAdvancedExperienceResponse.attributeTypeMap;
    }
}

