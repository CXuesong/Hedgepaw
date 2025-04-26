import { AccountAnchorKey } from "../../anchors/wellknowns";
import { resources as CR } from "./common";

export const resources: Record<AccountAnchorKey, string> = {
  Username: CR.Username,
  JoinedOn: "注册日期",
  EmailAddress: "电子邮件地址",
  Password: CR.Password,
  LoginSessions: "登录会话",
  AccountSettings: "账户设置",
  AccountSettingsDescription: "更改卷轴设置（例如其他人可以看到哪些龙）以及网站设置（例如显示哪些功能）。",
  AdvertisementRemovalSubscription: "通过订阅移除广告",
  AdvertisementRemovalSubscriptionDescription: "每月支付一定金额以移除网站上的所有广告。",
  DragonEncyclopedia: "龙百科",
  DragonEncyclopediaDescription: "浏览你见过或养过的龙的详细观察记录。",
  ReviewUserDescriptions: "审核用户描述",
  ReviewUserDescriptionsDescription: "审核并评论用户提交的龙描述。",
  RaffleStatus: "抽奖状态",
  RaffleStatusDescription: "参加每月抽奖以赢得独家龙。",
};
