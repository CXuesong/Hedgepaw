import { KnownLanguage } from "../languages";
import * as LangEn from "./en";
import * as LangZhHans from "./zh-hans";
import * as LangZhHant from "./zh-hant";

export const resourceTable: Partial<Record<KnownLanguage, Partial<LangEn.LocalizableMessages>>> = {
  // cs,
  // de,
  "en-us": LangEn.localizableMessages,
  // es,
  // fi,
  // fr,
  // it,
  // "ja-jp": ja_jp,
  // "ko-kr": ko_kr,
  // lt,
  // nl,
  // pl,
  // ru,
  // uk,
  "zh-hans": LangZhHans.localizableMessages,
  "zh-hant": LangZhHant.localizableMessages,
};

export type { LocalizableMessageKey, LocalizableMessages } from "./en";
