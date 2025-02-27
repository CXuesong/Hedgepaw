import { PageSectionAnchorGroup } from "../typings";

// The Cave
export const caveAnchors = {
  // The Cave
  TheCave: {
    selector: "main section:nth-of-type(1) > h2:nth-of-type(1)",
    innerText: "The Cave",
  },
  TheCaveP1: {
    selector: "main section:nth-of-type(1) > p:nth-of-type(1)",
    innerText: "You enter the cave and see many large dragons scattered about, some with hatchlings, sleeping on piles of gold.",
  },
  TheCaveP2: {
    selector: "main section:nth-of-type(1) > p:nth-of-type(2)",
    innerText: "You also see a pile of scrolls on the ground. Having been here before, you have started recording information about the growth and progress of your eggs.",
  },
  TheCaveP3: {
    selector: "main section:nth-of-type(1) > p:nth-of-type(3)",
    innerText: "Near the entrance to the cave, there are some abandoned eggs. If you don’t want the dragons inside to die, you can take one of those instead.",
  },
  TheCaveP4: {
    selector: "main section:nth-of-type(1) > p:nth-of-type(4)",
    innerText: "One of the scrolls in the pile contains a map charting dragon habitats across Galsreim and the surrounding area. Where would you like to travel?",
  },
  TravelAlpine: {
    selector: "main section:nth-of-type(1) > ul[id] li a[href]",
    innerText: "Alpine",
  },
  TravelCoast: {
    selector: "main section:nth-of-type(1) > ul[id] a[href]",
    innerText: "Coast",
  },
  TravelDesert: {
    selector: "main section:nth-of-type(1) > ul[id] a[href]",
    innerText: "Desert",
  },
  TravelForest: {
    selector: "main section:nth-of-type(1) > ul[id] a[href]",
    innerText: "Forest",
  },
  TravelJungle: {
    selector: "main section:nth-of-type(1) > ul[id] a[href]",
    innerText: "Jungle",
  },
  TravelVolcano: {
    selector: "main section:nth-of-type(1) > ul[id] a[href]",
    innerText: "Volcano",
  },
  // Recent News
  RecentNews: {
    selector: "main section:nth-of-type(2) h2:nth-of-type(1)",
    innerText: "Recent News",
  },
  // Connect
  Connect: {
    selector: "main section:nth-of-type(3) h2:nth-of-type(3)",
    innerText: "Connect",
  },
} satisfies PageSectionAnchorGroup;

export type CaveAnchorKey = keyof typeof caveAnchors;
