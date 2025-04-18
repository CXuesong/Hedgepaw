import { useMergedRefs } from "@fluentui/react-utilities";
import * as React from "react";
import { RM } from "src/localization";
import { browserLanguage, KnownLanguage, knownLanguages, languageInfo } from "src/localization/languages";
import { useObservableViewModelSelector } from "src/utils/observableViewModel";
import { SettingsViewModel } from "./settingsViewModel";
import { appSettings } from "src/settings";

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
  const autoLanguageAutonym = React.useMemo(() => languageInfo[browserLanguage].autonym, []);
  const onSubmit = React.useCallback((formData: FormData) => {
    appSettings.language = formData.get("language") as KnownLanguage;
    viewModel.isOpened = false;
  }, []);
  if (!isOpened) return null;
  return <dialog ref={dialogRef}>
    <h2>{RM.getMessage("AppName")}</h2>
    <h3>{RM.getMessage("Settings")}</h3>
    <form action={onSubmit}>
      <div>
        <label htmlFor="settings-language">{RM.getMessage("Language")}: </label>
        <select id="settings-language" name="language" defaultValue={appSettings.language || ""}>
          <option value="">{RM.getMessage("AutoDetect")}: {autoLanguageAutonym}</option>
          {knownLanguages.map(l => <option key={l} value={l}>{languageInfo[l].autonym}</option>)}
        </select>
      </div>
      <menu>
        <button type="submit">{RM.getMessage("OK")}</button>
        <button onClick={() => viewModel.isOpened = false}>{RM.getMessage("Cancel")}</button>
      </menu>
    </form>
  </dialog>;
};
