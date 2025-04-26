import { PageSectionAnchorGroup } from "../typings";

// Trading
export const tradingAnchors = {
  TradingHub: {
    selector: "main h1",
    innerText: "Trading Hub",
  },
  TradingHistory: {
    selector: "main > a[href]",
    innerText: "Trading History",
    children: {
      Icon: {
        selector: "i",
      },
    },
  },
  ActiveTransfers: {
    selector: "main > div:nth-of-type(1) h2",
    innerText: "Active Transfers",
  },
  NoActiveTransfersPrompt: {
    selector: "main > div:nth-of-type(1) > section:nth-of-type(1) > p",
    innerText: "You don’t currently have any active transfers.",
  },
  CreateNewTeleport: {
    selector: "main > div:nth-of-type(1) > section:nth-of-type(2) div > h3",
    innerText: "Create new Teleport",
  },
  NothingToTeleportPrompt: {
    selector: "main > div:nth-of-type(1) > section:nth-of-type(2) div > div",
    innerText: "You currently have no dragons available to use Teleport.",
  },
  PublicTrades: {
    selector: "main > div:nth-of-type(2) h2",
    innerText: "Public Trades",
  },
  FilterByBreed: {
    selector: "main > div:nth-of-type(2) section:nth-of-type(1) form th",
    innerText: "Breed",
  },
  FilterByType: {
    selector: "main > div:nth-of-type(2) section:nth-of-type(1) form th",
    innerText: "Type",
  },
  FilterByTypeAny: {
    selector: "main > div:nth-of-type(2) section:nth-of-type(1) form td label",
    innerText: "Any",
    children: {
      Input: {
        selector: "input[type='radio']",
      },
    },
  },
  FilterByTypeEgg: {
    selector: "main > div:nth-of-type(2) section:nth-of-type(1) form td label",
    innerText: "Egg",
    children: {
      Input: {
        selector: "input[type='radio']",
      },
    },
  },
  FilterByTypeHatchling: {
    selector: "main > div:nth-of-type(2) section:nth-of-type(1) form td label",
    innerText: "Hatchling",
    children: {
      Input: {
        selector: "input[type='radio']",
      },
    },
  },
  FilterByWants: {
    selector: "main > div:nth-of-type(2) section:nth-of-type(1) form th",
    innerText: "Wants",
  },
  FilterButton: {
    selector: "main > div:nth-of-type(2) section:nth-of-type(1) form td button",
    innerText: "Filter",
  },
} satisfies PageSectionAnchorGroup;

export type TradingAnchorKey = keyof typeof tradingAnchors;
