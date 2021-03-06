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
import { AppStoreVersionExperiment } from './appStoreVersionExperiment';
import { AppStoreVersionExperiment | AppStoreVersionExperimentTreatmentLocalization } from './appStoreVersionExperiment | AppStoreVersionExperimentTreatmentLocalization';
import { AppStoreVersionExperimentTreatment } from './appStoreVersionExperimentTreatment';
import { AppStoreVersionExperimentTreatmentLocalization } from './appStoreVersionExperimentTreatmentLocalization';
import { DocumentLinks } from './documentLinks';

export class AppStoreVersionExperimentTreatmentResponse {
    'data': AppStoreVersionExperimentTreatment;
    'included'?: Array<AppStoreVersionExperiment | AppStoreVersionExperimentTreatmentLocalization>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppStoreVersionExperimentTreatment"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppStoreVersionExperiment | AppStoreVersionExperimentTreatmentLocalization>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionExperimentTreatmentResponse.attributeTypeMap;
    }
}

