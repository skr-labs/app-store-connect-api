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
import { Build } from './build';
import { Build | CiWorkflow | CiProduct | ScmGitReference | ScmPullRequest } from './build | CiWorkflow | CiProduct | ScmGitReference | ScmPullRequest';
import { CiBuildRun } from './ciBuildRun';
import { CiProduct } from './ciProduct';
import { CiWorkflow } from './ciWorkflow';
import { DocumentLinks } from './documentLinks';
import { ScmGitReference } from './scmGitReference';
import { ScmPullRequest } from './scmPullRequest';

export class CiBuildRunResponse {
    'data': CiBuildRun;
    'included'?: Array<Build | CiWorkflow | CiProduct | ScmGitReference | ScmPullRequest>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "CiBuildRun"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<Build | CiWorkflow | CiProduct | ScmGitReference | ScmPullRequest>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return CiBuildRunResponse.attributeTypeMap;
    }
}

