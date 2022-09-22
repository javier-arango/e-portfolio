import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { SocialIcons } from "../../model/types";
import { ISocialMedia } from "../../model/interfaces";

function IconSelector(iconName: SocialIcons, iconSize?: number) {
  const icons = {
    twitter: <FaTwitter size={iconSize} />,
    linkedinIn: <FaLinkedinIn size={iconSize} />,
    github: <FaGithubAlt size={iconSize} />,
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
          <a
            className="hover:text-white"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {IconSelector(iconName, iconSize)}
          </a>
        )}
      </div>
    </>
  );
};

export default SocialMediaIcon;
