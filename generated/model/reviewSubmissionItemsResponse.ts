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
import { AppCustomProductPageVersion } from './appCustomProductPageVersion';
import { AppEvent } from './appEvent';
import { AppStoreVersion } from './appStoreVersion';
import { AppStoreVersion | AppCustomProductPageVersion | AppStoreVersionExperiment | AppEvent } from './appStoreVersion | AppCustomProductPageVersion | AppStoreVersionExperiment | AppEvent';
import { AppStoreVersionExperiment } from './appStoreVersionExperiment';
import { PagedDocumentLinks } from './pagedDocumentLinks';
import { PagingInformation } from './pagingInformation';
import { ReviewSubmissionItem } from './reviewSubmissionItem';

export class ReviewSubmissionItemsResponse {
    'data': Array<ReviewSubmissionItem>;
    'included'?: Array<AppStoreVersion | AppCustomProductPageVersion | AppStoreVersionExperiment | AppEvent>;
    'links': PagedDocumentLinks;
    'meta'?: PagingInformation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ReviewSubmissionItem>"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppStoreVersion | AppCustomProductPageVersion | AppStoreVersionExperiment | AppEvent>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "PagedDocumentLinks"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PagingInformation"
        }    ];

    static getAttributeTypeMap() {
        return ReviewSubmissionItemsResponse.attributeTypeMap;
    }
}
