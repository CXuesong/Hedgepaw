<script lang="ts">
  import { RM } from "src/localization";
  import { browserLanguage, knownLanguages, languageInfo } from "src/localization/languages";
  import { appSettings } from "src/settings";

  interface SettingsDialogProps {
    onclose?: (accepted: boolean) => void;
  }

  let language = $state(appSettings.language || ("" as const));
  let translationEnabled = $state(appSettings.translationEnabled);
  const autoLanguageAutonym = languageInfo[browserLanguage].autonym;
  const props: SettingsDialogProps = $props();

  const onDialogClose = () => {
    if (dialogEl.returnValue === "ok") {
      appSettings.language = language || undefined;
      appSettings.translationEnabled = translationEnabled;
      props.onclose?.(true);
    } else {
      props.onclose?.(false);
    }
  };

  let dialogEl: HTMLDialogElement;
  $effect(() => {
    dialogEl.showModal();
  });
</script>

<dialog bind:this={dialogEl} onclose={onDialogClose}>
  <h2>{RM.getMessage("AppName")}</h2>
  <h3>{RM.getMessage("Settings")}</h3>
  <form method="dialog">
    <div>
      <div>
        <label for="settings-language">{RM.getMessage("Language")}: </label>
        <select id="settings-language" name="language" bind:value={language}>
          <option value="">
            {RM.getMessage("AutoDetect")}: {autoLanguageAutonym}
          </option>
          {#each knownLanguages as lang (lang)}
            <option value={lang}>{languageInfo[lang].autonym}</option>
          {/each}
        </select>
      </div>
      <div>
        <label for="translation-enabled">
          <input id="translation-enabled" type="checkbox" bind:checked={translationEnabled} />{RM.getMessage("EnableTranslation")}
        </label>
      </div>
      <div>{RM.getMessage("SomeSettingsNeedsRefreshToTakeEffect")}</div>
    </div>
    <menu>
      <button type="submit" value="ok">{RM.getMessage("OK")}</button>
      <button value="cancel">{RM.getMessage("Cancel")}</button>
    </menu>
  </form>
</dialog>
