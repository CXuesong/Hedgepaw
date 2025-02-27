import { PageSectionAnchorGroup } from "../typings";

// Dragons
export const dragonsAnchors = {
  // The Cave
  Dragons: {
    selector: "main > h1:nth-of-type(1)",
    innerText: "Dragons",
  },
  ActionActionLog: {
    selector: "main > ul:nth-of-type(1) li a[href]",
    innerText: "Action Log",
  },
  ActionGroups: {
    selector: "main > ul:nth-of-type(1) li a[href]",
    innerText: "Groups",
  },
  ActionSort: {
    selector: "main > ul:nth-of-type(1) li a[href]",
    innerText: "Change Sort Order",
  },
  ActionShare: {
    selector: "main > ul:nth-of-type(1) li a[href]",
    innerText: "Share Dragons",
  },
  // Tutorial matching is not trivial
  SctionShare: {
    selector: "main > div > section:nth-of-type(1) h3:nth-of-type(1)",
    innerText: "Share",
  },
  SctionBadges: {
    selector: "main > div > section:nth-of-type(2) h3:nth-of-type(1)",
    innerText: "Badges",
  },
  SctionStats: {
    selector: "main > div > section:nth-of-type(3) h3:nth-of-type(1)",
    innerText: "Stats",
  },
  // Dragon list
  FilterShowAll: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(1) select option",
    innerText: "Show All",
  },
  FilterByEggsHatchlings: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(1) select option",
    innerText: "Eggs/Unfrozen Hatchlings",
  },
  FilterByUnnamed: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(1) select option",
    innerText: "Unnamed Hatchlings/Adults",
  },
  FilterByAvailableForBreeding: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(1) select option",
    innerText: "Available for breeding",
  },
  FilterByAvailableForBSA: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(1) select option",
    innerText: "Available for BSA",
  },
  FilterByAvailableForSummon: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(1) select option",
    innerText: "Available for Summon",
  },
  FilterByUngrouped: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(1) select option",
    innerText: "Ungrouped",
  },
  SortByDefault: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(2) select option",
    innerText: "Default",
  },
  SortByName: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(2) select option",
    innerText: "Name",
  },
  SortByAge: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(2) select option",
    innerText: "Age",
  },
  SortByBreed: {
    selector: "main > section:nth-of-type(1) > div:nth-of-type(1) > label:nth-of-type(2) select option",
    innerText: "Breed",
  },
} satisfies PageSectionAnchorGroup;

export type DragonsAnchorKey = keyof typeof dragonsAnchors;
