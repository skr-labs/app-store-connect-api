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
import { AppClipAdvancedExperienceAttributesPlaceDisplayPoint } from "./appClipAdvancedExperienceAttributesPlaceDisplayPoint";
import { AppClipAdvancedExperienceAttributesPlaceMainAddress } from "./appClipAdvancedExperienceAttributesPlaceMainAddress";
import { AppClipAdvancedExperienceAttributesPlacePhoneNumber } from "./appClipAdvancedExperienceAttributesPlacePhoneNumber";

export class AppClipAdvancedExperienceAttributesPlace {
  "placeId"?: string;
  "names"?: Array<string>;
  "mainAddress"?: AppClipAdvancedExperienceAttributesPlaceMainAddress;
  "displayPoint"?: AppClipAdvancedExperienceAttributesPlaceDisplayPoint;
  "mapAction"?: AppClipAdvancedExperienceAttributesPlace.MapActionEnum;
  "relationship"?: AppClipAdvancedExperienceAttributesPlace.RelationshipEnum;
  "phoneNumber"?: AppClipAdvancedExperienceAttributesPlacePhoneNumber;
  "homePage"?: string;
  "categories"?: Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "placeId",
      baseName: "placeId",
      type: "string",
    },
    {
      name: "names",
      baseName: "names",
      type: "Array<string>",
    },
    {
      name: "mainAddress",
      baseName: "mainAddress",
      type: "AppClipAdvancedExperienceAttributesPlaceMainAddress",
    },
    {
      name: "displayPoint",
      baseName: "displayPoint",
      type: "AppClipAdvancedExperienceAttributesPlaceDisplayPoint",
    },
    {
      name: "mapAction",
      baseName: "mapAction",
      type: "AppClipAdvancedExperienceAttributesPlace.MapActionEnum",
    },
    {
      name: "relationship",
      baseName: "relationship",
      type: "AppClipAdvancedExperienceAttributesPlace.RelationshipEnum",
    },
    {
      name: "phoneNumber",
      baseName: "phoneNumber",
      type: "AppClipAdvancedExperienceAttributesPlacePhoneNumber",
    },
    {
      name: "homePage",
      baseName: "homePage",
      type: "string",
    },
    {
      name: "categories",
      baseName: "categories",
      type: "Array<string>",
    },
  ];

  static getAttributeTypeMap() {
    return AppClipAdvancedExperienceAttributesPlace.attributeTypeMap;
  }
}

export namespace AppClipAdvancedExperienceAttributesPlace {
  export enum MapActionEnum {
    BuyTickets = <any>"BUY_TICKETS",
    ViewAvailability = <any>"VIEW_AVAILABILITY",
    ViewPricing = <any>"VIEW_PRICING",
    HotelBookRoom = <any>"HOTEL_BOOK_ROOM",
    ParkingReserveParking = <any>"PARKING_RESERVE_PARKING",
    RestaurantJoinWaitlist = <any>"RESTAURANT_JOIN_WAITLIST",
    RestaurantOrderDelivery = <any>"RESTAURANT_ORDER_DELIVERY",
    RestaurantOrderFood = <any>"RESTAURANT_ORDER_FOOD",
    RestaurantOrderTakeout = <any>"RESTAURANT_ORDER_TAKEOUT",
    RestaurantReservation = <any>"RESTAURANT_RESERVATION",
    ScheduleAppointment = <any>"SCHEDULE_APPOINTMENT",
    RestaurantViewMenu = <any>"RESTAURANT_VIEW_MENU",
    TheaterNowPlaying = <any>"THEATER_NOW_PLAYING",
  }
  export enum RelationshipEnum {
    Owner = <any>"OWNER",
    Authorized = <any>"AUTHORIZED",
    Other = <any>"OTHER",
  }
}
