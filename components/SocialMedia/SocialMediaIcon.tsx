import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { SocialIcons } from "../../model/types";
import { ISocialMedia } from "../../model/interfaces";

function IconSelector(iconName: SocialIcons, iconSize?: number) {
  const hoverEffect = "hover:bg-yellow-500 rounded-md py-1 hover:text-gray-50";

  const icons = {
    twitter: <FaTwitter size={iconSize} className={hoverEffect} />,
    linkedinIn: <FaLinkedinIn size={iconSize} className={hoverEffect} />,
    github: <FaGithubAlt size={iconSize} className={hoverEffect} />,
  };

  return icons[iconName];
}

const SocialMediaIcon = ({ iconName, link, iconSize }: ISocialMedia) => {
  return (
    <>
      <div className="mr-4 md:mr-6">
        {!link ? (
          IconSelector(iconName, iconSize)
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {IconSelector(iconName, iconSize)}
          </a>
        )}
      </div>
    </>
  );
};

export default SocialMediaIcon;
