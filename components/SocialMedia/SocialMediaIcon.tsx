import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export enum Icon {
  TWITTER = "twitter",
  LINKEDIN_IN = "linkedinIn",
  GITHUB = "github",
}

function IconSwitch(iconName: Icon, iconSize?: number) {
  const icons = {
    twitter: <FaTwitter size={iconSize} />,
    linkedinIn: <FaLinkedinIn size={iconSize} />,
    github: <FaGithubAlt size={iconSize} />,
  };

  return icons[iconName];
}

export type SocialMediaIconProps = {
  icon: Icon;
  link?: string;
  size?: number;
};

const SocialMediaIcon = ({ icon, link, size }: SocialMediaIconProps) => {
  return (
    <>
      <div className="mr-4 md:mr-6">
        {!link ? (
          IconSwitch(icon, size)
        ) : (
          <a
            className="hover:text-white"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {IconSwitch(icon, size)}
          </a>
        )}
      </div>
    </>
  );
};

export default SocialMediaIcon;
