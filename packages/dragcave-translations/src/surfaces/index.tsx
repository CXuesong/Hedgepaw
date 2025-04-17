import { Containers } from "jscorlib";
import { createHostedReactRoot } from "./reactHosting";
import { SettingsDialog, SettingsViewModel } from "./settings";

const lazySettingsViewModel = new Containers.Lazy(() => {
  const vm = new SettingsViewModel();
  const root = createHostedReactRoot();
  root.render(<SettingsDialog viewModel={vm} />);
  return vm;
});

export function renderSettingsLink(): void {
  const navBar = document.querySelector("nav");
  if (!navBar) return;
  const settingsLink = document.createElement("a");
  settingsLink.innerText = "DCT";
  settingsLink.href = "#";
  settingsLink.addEventListener("click", e => {
    e.preventDefault();
    lazySettingsViewModel.value.isOpened = true;
  });
  navBar.appendChild(settingsLink);
}
