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
import { AppPricePoint } from './appPricePoint';
import { AppPriceTier } from './appPriceTier';
import { AppPriceTier | Territory } from './appPriceTier | Territory';
import { PagedDocumentLinks } from './pagedDocumentLinks';
import { PagingInformation } from './pagingInformation';
import { Territory } from './territory';

export class AppPricePointsResponse {
    'data': Array<AppPricePoint>;
    'included'?: Array<AppPriceTier | Territory>;
    'links': PagedDocumentLinks;
    'meta'?: PagingInformation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AppPricePoint>"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppPriceTier | Territory>"
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
        return AppPricePointsResponse.attributeTypeMap;
    }
}

