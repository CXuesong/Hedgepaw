import { WellKnownAnchorGroupKey, WellKnownAnchorKey } from "../anchors";

export type WellknownAnchorGroupTranslationResources = {
  [key in WellKnownAnchorGroupKey]: Record<WellKnownAnchorKey<key>, string | undefined>;
};
