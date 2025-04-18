import { KnownLanguage, knownLanguages } from "src/localization/languages";

export class AppSettingsAccessor {
  public get language(): KnownLanguage | undefined {
    const value = localStorage.getItem("dc-translation.language") as KnownLanguage;
    if (value && knownLanguages.includes(value)) return value;
    return undefined;
  }
  public set language(value: KnownLanguage | undefined) {
    localStorage.setItem("dc-translation.language", value || "");
  }
}
