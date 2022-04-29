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
import { BundleId } from './bundleId';
import { BundleIdCapability } from './bundleIdCapability';
import { PagedDocumentLinks } from './pagedDocumentLinks';
import { PagingInformation } from './pagingInformation';
import { Profile } from './profile';
import { Profile | BundleIdCapability | App } from './profile | BundleIdCapability | App';

export class BundleIdsResponse {
    'data': Array<BundleId>;
    'included'?: Array<Profile | BundleIdCapability | App>;
    'links': PagedDocumentLinks;
    'meta'?: PagingInformation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<BundleId>"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<Profile | BundleIdCapability | App>"
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
        return BundleIdsResponse.attributeTypeMap;
    }
}

