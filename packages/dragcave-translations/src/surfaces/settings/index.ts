import SettingsDialog from "./SettingsDialog.svelte";
import { mount, unmount } from "svelte";

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
        onclose: () => {
          settingsDialog = undefined;
          void unmount(sd);
        },
      },
    });
    settingsDialog = sd;
  });
  navBar.appendChild(settingsLink);
}
