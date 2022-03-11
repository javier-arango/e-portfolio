import "./SocialMedia.css";
import SocialMediaLink from "./SocialMediaLink";
import Linkedin from "./assets/linkedin.svg";
import Github from "./assets/github.svg";
import Twitter from "./assets/twitter.svg";

const SocialMedia = () => {
  return (
    <div className="content-container-left">
      <ul className="social-content">
        <SocialMediaLink
          icon={Linkedin}
          link="http://linkedin.com/in/javier-arango"
        />
        <SocialMediaLink
          icon={Github}
          link="https://github.com/javier-arango"
        />
        <SocialMediaLink
          icon={Twitter}
          link="https://twitter.com/Javier_Arango_"
        />
      </ul>
    </div>
  );
};

export default SocialMedia;
