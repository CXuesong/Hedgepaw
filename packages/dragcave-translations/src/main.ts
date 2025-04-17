import { getActiveAnchorGroupKeys, tryMatchAnchors, wellKnownAnchorGroups } from "./anchors";
import { renderSettingsLink } from "./surfaces";
import { initializeReactHosting } from "./surfaces/reactHosting";
import { localizeAnchoredNodes } from "./translations/localization";
import { anchorGroupResources } from "./translations/zh-hans";

initializeReactHosting();
renderSettingsLink();
const activeAnchorGroups = getActiveAnchorGroupKeys();
console.log("Groups to localize:");

for (const key of activeAnchorGroups) {
  const matches = tryMatchAnchors(wellKnownAnchorGroups[key]);
  console.log(key, matches);
  localizeAnchoredNodes(matches, anchorGroupResources[key]);
}
