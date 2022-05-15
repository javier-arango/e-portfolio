import React from "react";
import styles from "./SocialMedia.module.css";
import SocialMediaLink from "./SocialMediaLink";

const SocialMedia = (props) => {
  return (
    <div className={`${styles[`content-container-${props.type}`]}`}>
      <ul className={`${styles[`social-content-${props.type}`]}`}>
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
