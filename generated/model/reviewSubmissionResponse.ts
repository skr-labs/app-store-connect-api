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
import { App } from './app';
import { App | ReviewSubmissionItem | AppStoreVersion } from './app | ReviewSubmissionItem | AppStoreVersion';
import { AppStoreVersion } from './appStoreVersion';
import { DocumentLinks } from './documentLinks';
import { ReviewSubmission } from './reviewSubmission';
import { ReviewSubmissionItem } from './reviewSubmissionItem';

export class ReviewSubmissionResponse {
    'data': ReviewSubmission;
    'included'?: Array<App | ReviewSubmissionItem | AppStoreVersion>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ReviewSubmission"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<App | ReviewSubmissionItem | AppStoreVersion>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return ReviewSubmissionResponse.attributeTypeMap;
    }
}
