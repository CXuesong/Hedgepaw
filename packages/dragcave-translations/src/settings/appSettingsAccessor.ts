import { KnownLanguage, knownLanguages } from "src/localization/languages";
import { parseBoolean } from "src/utils/conversions";

export class AppSettingsAccessor {
  public get language(): KnownLanguage | undefined {
    const value = localStorage.getItem("dc-translation.language") as KnownLanguage;
    if (value && knownLanguages.includes(value)) return value;
    return undefined;
  }
  public set language(value: KnownLanguage | undefined) {
    localStorage.setItem("dc-translation.language", value || "");
  }
  public get translationEnabled(): boolean {
    const value = localStorage.getItem("dc-translation.translationEnabled");
    return value ? parseBoolean(value) : true;
  }
  public set translationEnabled(value: boolean) {
    localStorage.setItem("dc-translation.translationEnabled", String(value));
  }
}
