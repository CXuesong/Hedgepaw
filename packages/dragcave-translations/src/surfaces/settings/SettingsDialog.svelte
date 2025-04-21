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

  const closeDialog = (accepted: boolean) => {
    if (accepted) {
      appSettings.language = language || undefined;
      appSettings.translationEnabled = translationEnabled;
    }
    dialogEl.close();
    props.onclose?.(accepted);
  };

  let dialogEl: HTMLDialogElement;
  $effect(() => {
    dialogEl.showModal();
  });
</script>

<dialog bind:this={dialogEl}>
  <h2>{RM.getMessage("AppName")}</h2>
  <h3>{RM.getMessage("Settings")}</h3>
  <form>
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
      <button type="submit" onclick={(e) => {
        e.preventDefault();
        closeDialog(true);
      }}>{RM.getMessage("OK")}</button>
      <button onclick={() => closeDialog(false)}>{RM.getMessage("Cancel")}</button>
    </menu>
  </form>
</dialog>
