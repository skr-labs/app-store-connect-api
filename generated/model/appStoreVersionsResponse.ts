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
import { AgeRatingDeclaration } from './ageRatingDeclaration';
import { App } from './app';
import { App | AgeRatingDeclaration | AppStoreVersionLocalization | Build | AppStoreVersionPhasedRelease | RoutingAppCoverage | AppStoreReviewDetail | AppStoreVersionSubmission | IdfaDeclaration | AppClipDefaultExperience | AppStoreVersionExperiment } from './app | AgeRatingDeclaration | AppStoreVersionLocalization | Build | AppStoreVersionPhasedRelease | RoutingAppCoverage | AppStoreReviewDetail | AppStoreVersionSubmission | IdfaDeclaration | AppClipDefaultExperience | AppStoreVersionExperiment';
import { AppClipDefaultExperience } from './appClipDefaultExperience';
import { AppStoreReviewDetail } from './appStoreReviewDetail';
import { AppStoreVersion } from './appStoreVersion';
import { AppStoreVersionExperiment } from './appStoreVersionExperiment';
import { AppStoreVersionLocalization } from './appStoreVersionLocalization';
import { AppStoreVersionPhasedRelease } from './appStoreVersionPhasedRelease';
import { AppStoreVersionSubmission } from './appStoreVersionSubmission';
import { Build } from './build';
import { IdfaDeclaration } from './idfaDeclaration';
import { PagedDocumentLinks } from './pagedDocumentLinks';
import { PagingInformation } from './pagingInformation';
import { RoutingAppCoverage } from './routingAppCoverage';

export class AppStoreVersionsResponse {
    'data': Array<AppStoreVersion>;
    'included'?: Array<App | AgeRatingDeclaration | AppStoreVersionLocalization | Build | AppStoreVersionPhasedRelease | RoutingAppCoverage | AppStoreReviewDetail | AppStoreVersionSubmission | IdfaDeclaration | AppClipDefaultExperience | AppStoreVersionExperiment>;
    'links': PagedDocumentLinks;
    'meta'?: PagingInformation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AppStoreVersion>"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<App | AgeRatingDeclaration | AppStoreVersionLocalization | Build | AppStoreVersionPhasedRelease | RoutingAppCoverage | AppStoreReviewDetail | AppStoreVersionSubmission | IdfaDeclaration | AppClipDefaultExperience | AppStoreVersionExperiment>"
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
        return AppStoreVersionsResponse.attributeTypeMap;
    }
}

