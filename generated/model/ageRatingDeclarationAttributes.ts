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
import { KidsAgeBand } from "./kidsAgeBand";

export class AgeRatingDeclarationAttributes {
  "alcoholTobaccoOrDrugUseOrReferences"?: AgeRatingDeclarationAttributes.AlcoholTobaccoOrDrugUseOrReferencesEnum;
  "contests"?: AgeRatingDeclarationAttributes.ContestsEnum;
  "gamblingAndContests"?: boolean;
  "gambling"?: boolean;
  "gamblingSimulated"?: AgeRatingDeclarationAttributes.GamblingSimulatedEnum;
  "kidsAgeBand"?: KidsAgeBand;
  "medicalOrTreatmentInformation"?: AgeRatingDeclarationAttributes.MedicalOrTreatmentInformationEnum;
  "profanityOrCrudeHumor"?: AgeRatingDeclarationAttributes.ProfanityOrCrudeHumorEnum;
  "sexualContentGraphicAndNudity"?: AgeRatingDeclarationAttributes.SexualContentGraphicAndNudityEnum;
  "sexualContentOrNudity"?: AgeRatingDeclarationAttributes.SexualContentOrNudityEnum;
  "seventeenPlus"?: boolean;
  "horrorOrFearThemes"?: AgeRatingDeclarationAttributes.HorrorOrFearThemesEnum;
  "matureOrSuggestiveThemes"?: AgeRatingDeclarationAttributes.MatureOrSuggestiveThemesEnum;
  "unrestrictedWebAccess"?: boolean;
  "violenceCartoonOrFantasy"?: AgeRatingDeclarationAttributes.ViolenceCartoonOrFantasyEnum;
  "violenceRealisticProlongedGraphicOrSadistic"?: AgeRatingDeclarationAttributes.ViolenceRealisticProlongedGraphicOrSadisticEnum;
  "violenceRealistic"?: AgeRatingDeclarationAttributes.ViolenceRealisticEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "alcoholTobaccoOrDrugUseOrReferences",
      baseName: "alcoholTobaccoOrDrugUseOrReferences",
      type: "AgeRatingDeclarationAttributes.AlcoholTobaccoOrDrugUseOrReferencesEnum",
    },
    {
      name: "contests",
      baseName: "contests",
      type: "AgeRatingDeclarationAttributes.ContestsEnum",
    },
    {
      name: "gamblingAndContests",
      baseName: "gamblingAndContests",
      type: "boolean",
    },
    {
      name: "gambling",
      baseName: "gambling",
      type: "boolean",
    },
    {
      name: "gamblingSimulated",
      baseName: "gamblingSimulated",
      type: "AgeRatingDeclarationAttributes.GamblingSimulatedEnum",
    },
    {
      name: "kidsAgeBand",
      baseName: "kidsAgeBand",
      type: "KidsAgeBand",
    },
    {
      name: "medicalOrTreatmentInformation",
      baseName: "medicalOrTreatmentInformation",
      type: "AgeRatingDeclarationAttributes.MedicalOrTreatmentInformationEnum",
    },
    {
      name: "profanityOrCrudeHumor",
      baseName: "profanityOrCrudeHumor",
      type: "AgeRatingDeclarationAttributes.ProfanityOrCrudeHumorEnum",
    },
    {
      name: "sexualContentGraphicAndNudity",
      baseName: "sexualContentGraphicAndNudity",
      type: "AgeRatingDeclarationAttributes.SexualContentGraphicAndNudityEnum",
    },
    {
      name: "sexualContentOrNudity",
      baseName: "sexualContentOrNudity",
      type: "AgeRatingDeclarationAttributes.SexualContentOrNudityEnum",
    },
    {
      name: "seventeenPlus",
      baseName: "seventeenPlus",
      type: "boolean",
    },
    {
      name: "horrorOrFearThemes",
      baseName: "horrorOrFearThemes",
      type: "AgeRatingDeclarationAttributes.HorrorOrFearThemesEnum",
    },
    {
      name: "matureOrSuggestiveThemes",
      baseName: "matureOrSuggestiveThemes",
      type: "AgeRatingDeclarationAttributes.MatureOrSuggestiveThemesEnum",
    },
    {
      name: "unrestrictedWebAccess",
      baseName: "unrestrictedWebAccess",
      type: "boolean",
    },
    {
      name: "violenceCartoonOrFantasy",
      baseName: "violenceCartoonOrFantasy",
      type: "AgeRatingDeclarationAttributes.ViolenceCartoonOrFantasyEnum",
    },
    {
      name: "violenceRealisticProlongedGraphicOrSadistic",
      baseName: "violenceRealisticProlongedGraphicOrSadistic",
      type: "AgeRatingDeclarationAttributes.ViolenceRealisticProlongedGraphicOrSadisticEnum",
    },
    {
      name: "violenceRealistic",
      baseName: "violenceRealistic",
      type: "AgeRatingDeclarationAttributes.ViolenceRealisticEnum",
    },
  ];

  static getAttributeTypeMap() {
    return AgeRatingDeclarationAttributes.attributeTypeMap;
  }
}

export namespace AgeRatingDeclarationAttributes {
  export enum AlcoholTobaccoOrDrugUseOrReferencesEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum ContestsEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum GamblingSimulatedEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum MedicalOrTreatmentInformationEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum ProfanityOrCrudeHumorEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum SexualContentGraphicAndNudityEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum SexualContentOrNudityEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum HorrorOrFearThemesEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum MatureOrSuggestiveThemesEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum ViolenceCartoonOrFantasyEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum ViolenceRealisticProlongedGraphicOrSadisticEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
  export enum ViolenceRealisticEnum {
    None = <any>"NONE",
    InfrequentOrMild = <any>"INFREQUENT_OR_MILD",
    FrequentOrIntense = <any>"FREQUENT_OR_INTENSE",
  }
}
