import { getActiveAnchorGroupKeys, tryMatchAnchors, wellKnownAnchorGroups } from "./anchors";
import { RM } from "./localization";
import { appSettings } from "./settings";
import { renderSettingsLink } from "./surfaces";
import { localizeAnchoredNodes } from "./translations/localization";
import { anchorGroupResources } from "./translations/zh-hans";

if (appSettings.language) RM.language = appSettings.language;
renderSettingsLink();

if (appSettings.translationEnabled) {
  const activeAnchorGroups = getActiveAnchorGroupKeys();
  console.log("Groups to localize:");

  for (const key of activeAnchorGroups) {
    const matches = tryMatchAnchors(wellKnownAnchorGroups[key]);
    console.log(key, matches);
    localizeAnchoredNodes(matches, anchorGroupResources[key]);
  }
} else {
  console.warn("Translation disabled, skipping localization.");
}
