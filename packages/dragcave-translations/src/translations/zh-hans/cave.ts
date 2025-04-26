import { CaveAnchorKey } from "../../anchors/wellknowns";
import { resources as CR } from "./common";

export const resources: Record<CaveAnchorKey, string> = {
  TheCave: CR.Cave,
  TheCaveP1: "你进入洞穴，看到四周有很多大型龙。有些龙带着幼龙，正在金子堆上睡觉。",
  TheCaveP2: "你还看到地上有一堆卷轴。你之前来过这里，并且已经在{C|RecordingInformation|记录龙蛋的生长和进展}。",
  TheCaveP3: "在洞穴入口附近，有一些被遗弃的蛋。如果你不想让蛋中的龙死去，也可以{C|TakeOneOfThose|选择其中一个}带走。",
  TheCaveP4: "在这堆卷轴中，有一张地图。它记录了Galsreim及周边地区的龙的栖息地。你想去哪儿看看？",
  TravelAlpine: "高山",
  TravelCoast: "海岸",
  TravelDesert: "沙漠",
  TravelForest: "森林",
  TravelJungle: "丛林",
  TravelVolcano: "火山",
  RecentNews: "最新消息",
  Connect: "联系我们",
};
