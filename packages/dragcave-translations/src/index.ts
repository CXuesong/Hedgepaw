import { getActiveAnchorGroupKeys, matchAnchorGroup, wellKnownAnchorGroups } from "./anchors";

const activeAnchorGroups = getActiveAnchorGroupKeys();
for (const g of activeAnchorGroups) {
  console.log(g);
  console.log(matchAnchorGroup(wellKnownAnchorGroups[g]));
}
