import { resourceManager } from "src/localization";
import { browserLanguage } from "src/localization/languages";
import { appSettings } from "src/settings";
import { mount, unmount } from "svelte";
import SettingsDialog from "./SettingsDialog.svelte";

let settingsDialog: Record<never, never> | undefined;

export function renderSettingsLink(): void {
  const navBar = document.querySelector("nav");
  if (!navBar) return;
  const settingsLink = document.createElement("a");
  settingsLink.innerText = "DCT";
  settingsLink.href = "#";
  settingsLink.addEventListener("click", e => {
    e.preventDefault();
    if (settingsDialog) return;
    const sd = mount(SettingsDialog, {
      // Existing children of target are left where they are.
      target: document.body,
      props: {
        onclose: (accepted: boolean) => {
          settingsDialog = undefined;
          void unmount(sd);
          // Apply settings
          if (accepted) {
            resourceManager.language = appSettings.language || browserLanguage;
          }
        },
      },
    });
    settingsDialog = sd;
  });
  navBar.appendChild(settingsLink);
}
