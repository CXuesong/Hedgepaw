import { PageSectionAnchorGroup } from "../typings";

export const headerAnchors = {
  NavCave: {
    selector: "nav a[href]",
    innerText: "Cave",
  },
  NavAccount: {
    selector: "nav a[href]",
    innerText: "Account",
  },
  NavDragons: {
    selector: "nav a[href]",
    innerText: "Dragons",
  },
  NavTrading: {
    selector: "nav a[href]",
    innerText: "Trading",
  },
  NavHelp: {
    selector: "nav a[href]",
    innerText: "Help",
  },
  NavForum: {
    selector: "nav a[href]",
    innerText: "Forum",
  },
} satisfies PageSectionAnchorGroup;

export type HeaderAnchorKey = keyof typeof headerAnchors;
