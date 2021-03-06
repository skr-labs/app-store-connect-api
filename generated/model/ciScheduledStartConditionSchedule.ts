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

import { RequestFile } from "./models";

export class CiScheduledStartConditionSchedule {
  "frequency"?: CiScheduledStartConditionSchedule.FrequencyEnum;
  "days"?: Array<CiScheduledStartConditionSchedule.DaysEnum>;
  "hour"?: number;
  "minute"?: number;
  "timezone"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "frequency",
      baseName: "frequency",
      type: "CiScheduledStartConditionSchedule.FrequencyEnum",
    },
    {
      name: "days",
      baseName: "days",
      type: "Array<CiScheduledStartConditionSchedule.DaysEnum>",
    },
    {
      name: "hour",
      baseName: "hour",
      type: "number",
    },
    {
      name: "minute",
      baseName: "minute",
      type: "number",
    },
    {
      name: "timezone",
      baseName: "timezone",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return CiScheduledStartConditionSchedule.attributeTypeMap;
  }
}

export namespace CiScheduledStartConditionSchedule {
  export enum FrequencyEnum {
    Weekly = <any>"WEEKLY",
    Daily = <any>"DAILY",
    Hourly = <any>"HOURLY",
  }
  export enum DaysEnum {
    Sunday = <any>"SUNDAY",
    Monday = <any>"MONDAY",
    Tuesday = <any>"TUESDAY",
    Wednesday = <any>"WEDNESDAY",
    Thursday = <any>"THURSDAY",
    Friday = <any>"FRIDAY",
    Saturday = <any>"SATURDAY",
  }
}
