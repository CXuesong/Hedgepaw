import * as Jscorlib from "jscorlib";
import Linq = Jscorlib.Linq;

export interface ILanguageInfo {
  autonym: string;
}

const knownLanguagesInfo = {
  cs: { autonym: "čeština" } as ILanguageInfo,
  de: { autonym: "Deutsch" },
  "en-us": { autonym: "English (United States)" },
  "en-gb": { autonym: "English (United Kingdom)" },
  es: { autonym: "español" },
  fi: { autonym: "suomi" },
  fr: { autonym: "français" },
  it: { autonym: "italiano" },
  "ja-jp": { autonym: "日本語 (日本)" },
  "ko-kr": { autonym: "한국어(대한민국)" },
  lt: { autonym: "lietuvių" },
  nl: { autonym: "Nederlands" },
  pl: { autonym: "polski" },
  ru: { autonym: "русский" },
  uk: { autonym: "українська" },
  "zh-hans": { autonym: "中文（简体）" },
  "zh-hant": { autonym: "中文（繁體）" },
};

export type KnownLanguage = keyof typeof knownLanguagesInfo;

// export type KnownLanguageWithFallback = keyof typeof knownLanguagesInfo | "en" | "zh";

const knownLanguageFallbacks: Record<string, KnownLanguage> = {
  "zh-cn": "zh-hans",
  "zh-tw": "zh-hant",
  "zh-sg": "zh-hans",
  "zh-hk": "zh-hant",
  "zh-mo": "zh-hant",
  "zh-my": "zh-hans",
  "zh": "zh-hans",
  "en": "en-us",
};

export const knownLanguages: readonly KnownLanguage[] = Object
  .keys(knownLanguagesInfo)
  .filter((k): k is KnownLanguage => Object.prototype.hasOwnProperty.call(knownLanguagesInfo, k))
  .sort();

export const languageInfo: Readonly<Record<KnownLanguage, ILanguageInfo>> = knownLanguagesInfo;

export function fallbackLanguageTag(language: string): string {
  const lastSeparatorPos = language.lastIndexOf("-");
  if (lastSeparatorPos < 0) return "";
  return language.substring(0, lastSeparatorPos);
}

function evaluateLanguageSimilarity(baseline: string, target: string): number {
  baseline = baseline.toLowerCase();
  target = target.toLowerCase();
  if (baseline === target) return 1;
  // zh, zh-cn
  if (target.startsWith(baseline)) return 1;
  const baselineParts = baseline.split("-");
  const targetParts = target.split("-");
  let commonParts = 0;
  for (; baselineParts[commonParts] && targetParts[commonParts]; commonParts++) {
    if (baselineParts[commonParts] !== targetParts[commonParts]) break;
  }
  
  const similarity = Math.min(1, commonParts / baselineParts.length);
  if (target in knownLanguageFallbacks)
    return Math.max(similarity, evaluateLanguageSimilarity(baseline, knownLanguageFallbacks[target]));
  return similarity;
}

export function choosePerferredLanguage<TBaseline extends string>(baselines: Iterable<TBaseline>, preferences: string | readonly string[]): TBaseline | undefined {
  if (!preferences || preferences.length === 0) return undefined;
  if (typeof preferences === "string") preferences = [preferences];
  return Linq.asLinq(baselines)
    .$(Linq.maxBy(baselineLang => Linq.asLinq(preferences)
      .$(Linq.select((lang, i) => [lang, evaluateLanguageSimilarity(baselineLang, lang) * Math.pow(0.5, i)] as const))
      .$(Linq.maxBy(t => t[1]))[1],
    ));
}

function detectBrowserLanguage(): KnownLanguage {
  return choosePerferredLanguage(
    knownLanguages,
    navigator.languages?.length
      ? Linq.asLinq(navigator.languages).$(Linq.distinct()).$(Linq.toArray())
      : navigator.language || "en-us",
  ) || "en-us";
}

export const browserLanguage = detectBrowserLanguage();

export function selectLocalizedResource<T>(resourceProvider: (language: string) => T | undefined, language: string, defaultValue: T): T;
export function selectLocalizedResource<T>(resourceProvider: (language: string) => T | undefined, language: string): T | undefined;
export function selectLocalizedResource<T>(resourceProvider: (language: string) => T | undefined, language: string, defaultValue?: T): T | undefined {
  let lang = language;
  while (lang) {
    const value = resourceProvider(lang);
    if (value !== undefined) return value;
    if (lang === "en") {
      break;
    }
    lang = fallbackLanguageTag(lang) || "en";
  }
  return defaultValue;
}
