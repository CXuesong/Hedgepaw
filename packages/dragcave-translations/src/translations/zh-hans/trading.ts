import { TradingAnchorKey } from "../../anchors/wellknowns";

export const resources: Record<TradingAnchorKey, string> = {
  TradingHub: "交易中心",
  TradingHistory: "{C|Icon} 交易历史",
  ActiveTransfers: "已发起的传送请求",
  NoActiveTransfersPrompt: "你当前没有任何已经发起的传送请求。",
  CreateNewTeleport: "新建传送请求",
  NothingToTeleportPrompt: "你当前没有可用于传送的龙。",
  PublicTrades: "公开交易",
  FilterByBreed: "品种",
  FilterByType: "成长阶段",
  FilterByTypeAny: "{C|Input} 任意",
  FilterByTypeEgg: "{C|Input} 蛋",
  FilterByTypeHatchling: "{C|Input} 幼龙",
  FilterByWants: "需求",
  FilterButton: "筛选",
};
