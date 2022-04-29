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
import { CiMacOsVersion } from './ciMacOsVersion';
import { CiProduct } from './ciProduct';
import { CiProduct | ScmRepository | CiXcodeVersion | CiMacOsVersion } from './ciProduct | ScmRepository | CiXcodeVersion | CiMacOsVersion';
import { CiWorkflow } from './ciWorkflow';
import { CiXcodeVersion } from './ciXcodeVersion';
import { DocumentLinks } from './documentLinks';
import { ScmRepository } from './scmRepository';

export class CiWorkflowResponse {
    'data': CiWorkflow;
    'included'?: Array<CiProduct | ScmRepository | CiXcodeVersion | CiMacOsVersion>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "CiWorkflow"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<CiProduct | ScmRepository | CiXcodeVersion | CiMacOsVersion>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return CiWorkflowResponse.attributeTypeMap;
    }
}

