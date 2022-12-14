import { FooterContainer, FooterCredits } from "./Footer/index";
import SocialMedia from "./SocialMedia";

import { ISocialMedia, ICredits } from "../model/index";

const socialMediaData: ISocialMedia[] = [
  {
    iconName: "linkedinIn",
    link: "http://linkedin.com/in/javier-arango",
    iconSize: 25,
  },
  {
    iconName: "github",
    link: "https://github.com/javier-arango",
    iconSize: 25,
  },
  {
    iconName: "twitter",
    link: "https://twitter.com/Javier_Arango_",
    iconSize: 25,
  },
];

const credits: ICredits = {
  authorsName: "Javier Arango",
  authorsLink: "https://github.com/javier-arango/ePortafolio",
};

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SocialMedia socialMedia={socialMediaData} alignItems="center" />

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <FooterCredits credits={credits} alignItems="center" />
      </FooterContainer>
    </>
  );
};

export default Footer;
