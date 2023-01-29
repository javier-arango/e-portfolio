import { TButtonType, TButtonVariant } from "../types";

export default interface IButton {
  label: string;
  type?: TButtonType;
  variant?: TButtonVariant;
  className?: string;
  onClick?: () => void;
}
