/*eslint sort-keys: "error"*/
export const localizableMessages = {
  AppName: "Dragon Cave translations",
  Cancel: "Cancel",
  Language: "Language",
  OK: "OK",
  Settings: "Settings",
} satisfies Record<string, string>;

export type LocalizableMessages = typeof localizableMessages;
export type LocalizableMessageKey = keyof typeof localizableMessages;
