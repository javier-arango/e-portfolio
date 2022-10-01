import {
  SocialMediaContainer,
  SocialMediaIconContainer,
  SocialMediaIcon,
} from "./SocialMedia/index";

import { ISocialMedia, Alignment } from "../model/index";

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
