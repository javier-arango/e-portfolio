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

export interface ICredits {
  authorsName: string;
  authorsLink: string;
}

export interface IButton {
  cta: string;
  bgColor?: string;
  btRadius?: string;
  textColor?: string;
  width?: number;
  className?: string;
  iconSide?: "left" | "right";
  onClick?: () => void;
}
