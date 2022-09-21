import Link from "next/link";
import FooterContainer from "./Footer/FooterContainer";
import FooterCredits, { CreditsProps } from "./Footer/FooterCredits";
import SocialMedia from "./SocialMedia";
import { Icon, SocialMediaIconProps } from "./SocialMedia/SocialMediaIcon";

const socialMediaData: SocialMediaIconProps[] = [
  { icon: Icon.LINKEDIN_IN, link: "http://linkedin.com/in/javier-arango" },
  { icon: Icon.GITHUB, link: "https://github.com/javier-arango" },
  { icon: Icon.TWITTER, link: "https://twitter.com/Javier_Arango_" },
];

const credits: CreditsProps = {
  name: "Javier Arango",
  link: "https://github.com/javier-arango/ePortafolio",
};

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SocialMedia socialMedia={socialMediaData} />

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <FooterCredits name={credits.name} link={credits.link} />
      </FooterContainer>
    </>
  );
};

export default Footer;
