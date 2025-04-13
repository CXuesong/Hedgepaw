import { Strings } from "jscorlib";
import { browserLanguage, KnownLanguage, selectLocalizedResource } from "./languages";
import { LocalizableMessageKey, LocalizableMessages, resourceTable } from "./messages";

const fallbackLanguageMapping: Record<string, KnownLanguage> = {
  "en": "en-us",
  "zh": "zh-hans",
};

export class ResourceManager {
  private _language: KnownLanguage;
  public constructor() {
    this._language = browserLanguage;
  }
  public get language(): KnownLanguage {
    return this._language;
  }
  public set language(language: KnownLanguage) {
    this._language = language;
  }
  public getMessageRaw<T extends LocalizableMessageKey>(key: T): Partial<LocalizableMessages>[T] {
    return resourceTable[this._language]?.[key];
  }
  public getMessage(key: LocalizableMessageKey, args?: string[]): string {
    let value = selectLocalizedResource(
      lang => {
        let v = resourceTable[lang as KnownLanguage]?.[key];
        if (v != null) return v;
        const fallback = fallbackLanguageMapping[lang];
        if (fallback) {
          v = resourceTable[fallback]?.[key];
          if (v != null) return v;
        }
        return undefined;
      },
      this._language, key);
    if (args) value = Strings.format(value, args);
    return value;
  }
}
