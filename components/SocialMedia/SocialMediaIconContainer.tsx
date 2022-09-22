import { Alignment } from "../../model/types";

type Props = {
  alignIcon?: Alignment;
  children?: JSX.Element | JSX.Element[];
};

const SocialMediaIconContainer = ({ children, alignIcon }: Props) => {
  if (!children) return null;

  return (
    <ul
      className={`flex flex-wrap items-center justify-${
        alignIcon ? alignIcon : "center"
      } mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400`}
    >
      {children}
    </ul>
  );
};

export default SocialMediaIconContainer;
