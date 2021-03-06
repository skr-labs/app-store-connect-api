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
import { App | BetaGroup | Build } from './app | BetaGroup | Build';
import { BetaGroup } from './betaGroup';
import { BetaTester } from './betaTester';
import { Build } from './build';
import { DocumentLinks } from './documentLinks';

export class BetaTesterResponse {
    'data': BetaTester;
    'included'?: Array<App | BetaGroup | Build>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BetaTester"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<App | BetaGroup | Build>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return BetaTesterResponse.attributeTypeMap;
    }
}

