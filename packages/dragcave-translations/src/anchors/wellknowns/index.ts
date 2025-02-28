import { PageSectionAnchorGroup } from "../typings";
import * as Cave from "./cave";
import * as Dragons from "./dragons";
import * as Header from "./header";
import * as Teleport from "./teleport";

export type { CaveAnchorKey } from "./cave";
export type { DragonsAnchorKey } from "./dragons";
export type { HeaderAnchorKey } from "./header";
export type { TeleportAnchorKey } from "./teleport";

export const wellKnownAnchorGroups = {
  Cave: Cave.caveAnchors,
  Header: Header.headerAnchors,
  Dragons: Dragons.dragonsAnchors,
  Teleport: Teleport.teleportAnchors,
} satisfies Record<string, PageSectionAnchorGroup>;

export type WellKnownAnchorGroupKey = keyof typeof wellKnownAnchorGroups;
export type WellKnownAnchorKey<TGroupKey extends WellKnownAnchorGroupKey> = keyof typeof wellKnownAnchorGroups[TGroupKey];

export function getActiveAnchorGroupKeys(): WellKnownAnchorGroupKey[] {
  switch (location.pathname) {
    case "/": return ["Header", "Cave"];
  }
  if (location.pathname.match(/^\/dragons(\/|$)/g)) return ["Header", "Dragons"];
  if (location.pathname.match(/^\/teleport(\/|$)/g)) return ["Header", "Teleport"];
  return ["Header"];
}
