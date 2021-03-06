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
import { AppCustomProductPageLocalization } from './appCustomProductPageLocalization';
import { AppCustomProductPageVersion } from './appCustomProductPageVersion';
import { AppCustomProductPageVersion | AppScreenshotSet | AppPreviewSet } from './appCustomProductPageVersion | AppScreenshotSet | AppPreviewSet';
import { AppPreviewSet } from './appPreviewSet';
import { AppScreenshotSet } from './appScreenshotSet';
import { PagedDocumentLinks } from './pagedDocumentLinks';
import { PagingInformation } from './pagingInformation';

export class AppCustomProductPageLocalizationsResponse {
    'data': Array<AppCustomProductPageLocalization>;
    'included'?: Array<AppCustomProductPageVersion | AppScreenshotSet | AppPreviewSet>;
    'links': PagedDocumentLinks;
    'meta'?: PagingInformation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AppCustomProductPageLocalization>"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppCustomProductPageVersion | AppScreenshotSet | AppPreviewSet>"
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
        return AppCustomProductPageLocalizationsResponse.attributeTypeMap;
    }
}

