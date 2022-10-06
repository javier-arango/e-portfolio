import { SocialIcons } from "./types";

export interface ISocialMedia {
  iconName: SocialIcons;
  link?: string;
  iconSize?: number;
}

export interface ILogo {
  image: string;
  alt: string;
  destination: string;
  width: number;
  height: number;
}

export interface INavItem {
  name?: string;
  destination?: string;
}

export type ICredits = {
  authorsName: string;
  authorsLink: string;
};
