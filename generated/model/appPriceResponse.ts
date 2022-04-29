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
import { App | AppPriceTier } from './app | AppPriceTier';
import { AppPrice } from './appPrice';
import { AppPriceTier } from './appPriceTier';
import { DocumentLinks } from './documentLinks';

export class AppPriceResponse {
    'data': AppPrice;
    'included'?: Array<App | AppPriceTier>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppPrice"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<App | AppPriceTier>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppPriceResponse.attributeTypeMap;
    }
}
