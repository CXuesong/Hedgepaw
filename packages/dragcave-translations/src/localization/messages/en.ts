/*eslint sort-keys: "error"*/
export const localizableMessages = {
  AppName: "Dragon Cave translations",
  AutoDetect: "Auto detect",
  Cancel: "Cancel",
  EnableTranslation: "Enable translation",
  Language: "Language",
  OK: "OK",
  Settings: "Settings",
  SomeSettingsNeedsRefreshToTakeEffect: "Some settings may require you to refresh the browser to take effect.",
} satisfies Record<string, string>;

export type LocalizableMessages = typeof localizableMessages;
export type LocalizableMessageKey = keyof typeof localizableMessages;
