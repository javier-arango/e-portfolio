import React from "react";
import "./SocialMedia.css";
import SocialMediaLink from "./SocialMediaLink";

const SocialMedia = (props) => {
  return (
    <div className={`content-container-${props.type}`}>
      <ul className={`social-content-${props.type}`}>
        {props.socials.map((social) => (
          <SocialMediaLink
            key={social.id}
            icon={social.icon}
            link={social.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
