import React from "react";
import styles from "./SocialMediaLink.module.css";

const SocialMediaLink = (props) => {
  return (
    <li>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-icon ${styles.link}`}
      >
        <img
          src={props.icon}
          className={styles.icons}
          alt="social media icons"
        />
      </a>
    </li>
  );
};

export default SocialMediaLink;
