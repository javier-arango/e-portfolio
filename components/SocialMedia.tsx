import SocialMediaContainer from "./SocialMedia/SocialMediaContainer";
import SocialMediaIconContainer from "./SocialMedia/SocialMediaIconContainer";
import SocialMediaIcon from "./SocialMedia/SocialMediaIcon";

import { ISocialMedia } from "../model/interfaces";
import { Alignment } from "../model/types";

type Props = {
  socialMedia: ISocialMedia[];
  alignItems?: Alignment;
};

const SocialMedia = ({ socialMedia, alignItems }: Props) => {
  if (!socialMedia) return null;

  return (
    <>
      <SocialMediaContainer>
        <SocialMediaIconContainer alignIcon={alignItems}>
          {socialMedia.map((social) => (
            <li key={social.iconName}>
              <SocialMediaIcon iconName={social.iconName} link={social.link} />
            </li>
          ))}
        </SocialMediaIconContainer>
      </SocialMediaContainer>
    </>
  );
};

export default SocialMedia;
