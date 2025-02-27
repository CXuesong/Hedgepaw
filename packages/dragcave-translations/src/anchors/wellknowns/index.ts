import { PageSectionAnchorGroup } from "../typings";
import * as Cave from "./cave";
import * as Dragons from "./dragons";
import * as Header from "./header";

export const wellKnownAnchorGroups = {
  Cave: Cave.caveAnchors,
  Header: Header.headerAnchors,
  Dragons: Dragons.dragonsAnchors,
} satisfies Record<string, PageSectionAnchorGroup>;

export type WellKnownAnchorGroupKey = keyof typeof wellKnownAnchorGroups;

export function getActiveAnchorGroupKeys(): WellKnownAnchorGroupKey[] {
  switch (location.pathname) {
    case "/": return ["Header", "Cave"];
    case "/dragons": return ["Header", "Dragons"];
    default: return ["Header"];
  }
}
