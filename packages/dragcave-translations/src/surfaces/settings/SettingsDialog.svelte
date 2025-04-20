<script lang="ts">
  import { RM } from "src/localization";
  import { browserLanguage, knownLanguages, languageInfo } from "src/localization/languages";
  import { appSettings } from "src/settings";

  interface SettingsDialogProps {
    onclose?: () => void;
  }

  let language = $state(appSettings.language || "" as const);
  const autoLanguageAutonym = languageInfo[browserLanguage].autonym;
  const props: SettingsDialogProps = $props();

  const saveSettings = () => {
    appSettings.language = language || undefined;
  }

  const closeDialog = () => {
    dialogEl.close();
    props.onclose?.();
  }

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
      <label for="settings-language">{RM.getMessage("Language")}: </label>
      <select id="settings-language" name="language" bind:value={language}>
        <option value=""
          >{RM.getMessage("AutoDetect")}: {autoLanguageAutonym}</option
        >
        {#each knownLanguages as lang}
          <option value={lang}>{languageInfo[lang].autonym}</option>
        {/each}
      </select>
    </div>
    <menu>
      <button type="submit" onclick={() => {
        saveSettings();
        closeDialog();
      }}>{RM.getMessage("OK")}</button>
      <button onclick={closeDialog}>{RM.getMessage("Cancel")}</button>
    </menu>
  </form>
</dialog>
