import { PageSectionAnchorGroup } from "../typings";

// Teleport
export const teleportAnchors = {
  // The Cave
  OneWayTransferPrompt: {
    selector: "main > section:nth-of-type(1) > p:nth-of-type(1)",
    innerText: "The following egg(s)/hatchling(s) are part of a one-way transfer.",
  },
  EnterPasswordToAccept: {
    selector: "main > section:nth-of-type(3) > p:nth-of-type(1)",
    innerText: "Enter your password to confirm and accept this transfer.",
  },
  YouCannotAcceptDueToEggLimit: {
    selector: "main > section:nth-of-type(3) div[aria-hidden]",
    innerText: "You cannot accept this offer because you have too many eggs or hatchlings.",
  },
  Accept: {
    selector: "main > section:nth-of-type(3) form button",
    innerText: "Accept",
  },
} satisfies PageSectionAnchorGroup;

export type TeleportAnchorKey = keyof typeof teleportAnchors;
