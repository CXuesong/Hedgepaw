import { TeleportAnchorKey } from "../../anchors/wellknowns";
import { resources as CR } from "./common";

export const resources: Record<TeleportAnchorKey, string> = {
  OneWayTransferPrompt: "此单向传送包含以下龙蛋或幼体：",
  EnterPasswordToAccept: "请输入密码以确认并接受此交易。",
  YouCannotAcceptDueToEggLimit: "你已经达到龙蛋或幼体饲养数量限制，因此无法接受交易。",
  Accept: CR.Accept,
};
