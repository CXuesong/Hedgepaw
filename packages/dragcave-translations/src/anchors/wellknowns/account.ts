import { PageSectionAnchorGroup } from "../typings";

// Account
export const accountAnchors = {
  Username: {
    selector: "main section ul h3",
    innerText: "Username",
  },
  JoinedOn: {
    selector: "main section ul h3",
    innerText: "Joined on",
  },
  EmailAddress: {
    selector: "main section ul h3",
    innerText: "Email Address",
  },
  Password: {
    selector: "main section ul h3",
    innerText: "Password",
  },
  LoginSessions: {
    selector: "main section ul h3",
    innerText: "Login Sessions",
  },
  AccountSettings: {
    selector: "main section ul h3 a",
    innerText: "Account Settings",
  },
  AccountSettingsDescription: {
    selector: "main section ul li p",
    innerText: "Change scroll settings such as what dragons others can see, and site settings such as what features to display.",
  },
  AdvertisementRemovalSubscription: {
    selector: "main section ul h3 a",
    innerText: "Advertisement Removal Subscription",
  },
  AdvertisementRemovalSubscriptionDescription: {
    selector: "main section ul li p",
    innerText: "Remove all advertisements from the site for a monthly price.",
  },
  DragonEncyclopedia: {
    selector: "main section ul h3 a",
    innerText: "Dragon Encyclopedia",
  },
  DragonEncyclopediaDescription: {
    selector: "main section ul li p",
    innerText: "View detailed observations about dragons you’ve seen or raised.",
  },
  ReviewUserDescriptions: {
    selector: "main section ul h3 a",
    innerText: "Review User Descriptions",
  },
  ReviewUserDescriptionsDescription: {
    selector: "main section ul li p",
    innerText: "Review and critique user-submitted dragon descriptions.",
  },
  RaffleStatus: {
    selector: "main section ul h3 a",
    innerText: "Raffle Status",
  },
  RaffleStatusDescription: {
    selector: "main section ul li p",
    innerText: "Enter in monthly raffles to win exclusive dragons.",
  },
} satisfies PageSectionAnchorGroup;

export type AccountAnchorKey = keyof typeof accountAnchors;
