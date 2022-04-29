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
import { AppCustomProductPage } from './appCustomProductPage';
import { AppCustomProductPage | AppCustomProductPageLocalization } from './appCustomProductPage | AppCustomProductPageLocalization';
import { AppCustomProductPageLocalization } from './appCustomProductPageLocalization';
import { AppCustomProductPageVersion } from './appCustomProductPageVersion';
import { DocumentLinks } from './documentLinks';

export class AppCustomProductPageVersionResponse {
    'data': AppCustomProductPageVersion;
    'included'?: Array<AppCustomProductPage | AppCustomProductPageLocalization>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppCustomProductPageVersion"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppCustomProductPage | AppCustomProductPageLocalization>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppCustomProductPageVersionResponse.attributeTypeMap;
    }
}

