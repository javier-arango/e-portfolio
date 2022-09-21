import SocialMediaContainer from "./SocialMedia/SocialMediaContainer";
import SocialMediaIconContainer from "./SocialMedia/SocialMediaIconContainer";
import SocialMediaIcon, {
  SocialMediaIconProps,
} from "./SocialMedia/SocialMediaIcon";

type Props = {
  socialMedia: SocialMediaIconProps[];
};

const SocialMedia = ({ socialMedia }: Props) => {
  if (!socialMedia) return null;

  return (
    <>
      <SocialMediaContainer>
        <SocialMediaIconContainer>
          {socialMedia.map((social) => (
            <li key={social.icon}>
              <SocialMediaIcon icon={social.icon} link={social.link} />
            </li>
          ))}
        </SocialMediaIconContainer>
      </SocialMediaContainer>
    </>
  );
};

export default SocialMedia;
