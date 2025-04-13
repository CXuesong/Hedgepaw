import templateHtml from "./settings.template.html?raw";

export function renderSettingsLink(): void {
  const navBar = document.querySelector("nav");
  if (!navBar) return;
  const settingsLink = document.createElement("a");
  settingsLink.innerText = "DCT";
  settingsLink.href = "#";
  settingsLink.addEventListener("click", e => {
    e.preventDefault();
    openSettingsDialog();
  });
  navBar.appendChild(settingsLink);
}

export function openSettingsDialog(): void {
  let settingsDialog = document.querySelector<HTMLDialogElement>(".dct-settings-dialog");
  if (!settingsDialog) {
    document.body.insertAdjacentHTML("beforeend", templateHtml);
    settingsDialog = document.querySelector<HTMLDialogElement>(".dct-settings-dialog")!;
  }
  settingsDialog.showModal();
}
