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
import { Build } from './build';
import { Build | App } from './build | App';
import { DocumentLinks } from './documentLinks';
import { PrereleaseVersion } from './prereleaseVersion';

export class PrereleaseVersionResponse {
    'data': PrereleaseVersion;
    'included'?: Array<Build | App>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "PrereleaseVersion"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<Build | App>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return PrereleaseVersionResponse.attributeTypeMap;
    }
}
