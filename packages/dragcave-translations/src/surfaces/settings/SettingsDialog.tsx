import { useMergedRefs } from "@fluentui/react-utilities";
import * as React from "react";
import { RM } from "src/localization";
import { knownLanguages, languageInfo } from "src/localization/languages";
import { useObservableViewModelSelector } from "../observableViewModel";
import { SettingsViewModel } from "./settingsViewModel";

export interface SettingsDialogProps {
  viewModel: SettingsViewModel;
}

export const SettingsDialog: React.FC<SettingsDialogProps> = props => {
  const { viewModel } = props;
  const dialogRef = useMergedRefs<HTMLDialogElement>(e => {
    if (!e) return;
    e.showModal();
  });
  const isOpened = useObservableViewModelSelector(viewModel, vm => vm.isOpened);
  if (!isOpened) return null;
  return <dialog ref={dialogRef}>
    <h2>{RM.getMessage("AppName")}</h2>
    <h3>{RM.getMessage("Settings")}</h3>
    <div>
      <label>{RM.getMessage("Language")}: </label>
      <select>
        {knownLanguages.map(l => <option key={l} value={l}>{languageInfo[l].autonym}</option>)}
      </select>
    </div>
    <menu>
      <button>{RM.getMessage("OK")}</button>
      <button onClick={() => viewModel.isOpened = false}>{RM.getMessage("Cancel")}</button>
    </menu>
  </dialog>;
};
