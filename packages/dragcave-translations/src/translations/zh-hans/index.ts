/* eslint sort-keys: "error" */

import { WellknownAnchorGroupTranslationResources } from "../typings";
import * as Account from "./account";
import * as Cave from "./cave";
import * as Dragons from "./dragons";
import * as Header from "./header";
import * as Teleport from "./teleport";
import * as Trading from "./trading";

export const anchorGroupResources: WellknownAnchorGroupTranslationResources = {
  Account: Account.resources,
  Cave: Cave.resources,
  Dragons: Dragons.resources,
  Header: Header.resources,
  Teleport: Teleport.resources,
  Trading: Trading.resources,
};
