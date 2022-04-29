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
import { AppClip | AppStoreVersion | AppClipDefaultExperienceLocalization | AppClipAppStoreReviewDetail } from './appClip | AppStoreVersion | AppClipDefaultExperienceLocalization | AppClipAppStoreReviewDetail';
import { AppClipAppStoreReviewDetail } from './appClipAppStoreReviewDetail';
import { AppClipDefaultExperience } from './appClipDefaultExperience';
import { AppClipDefaultExperienceLocalization } from './appClipDefaultExperienceLocalization';
import { AppStoreVersion } from './appStoreVersion';
import { DocumentLinks } from './documentLinks';

export class AppClipDefaultExperienceResponse {
    'data': AppClipDefaultExperience;
    'included'?: Array<AppClip | AppStoreVersion | AppClipDefaultExperienceLocalization | AppClipAppStoreReviewDetail>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppClipDefaultExperience"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppClip | AppStoreVersion | AppClipDefaultExperienceLocalization | AppClipAppStoreReviewDetail>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppClipDefaultExperienceResponse.attributeTypeMap;
    }
}
