import React from "react";
import "./SocialMediaLink.css";

const SocialMediaLink = (props) => {
  return (
    <li>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <img src={props.icon} className="icons" alt="social media icons" />
      </a>
    </li>
  );
};

export default SocialMediaLink;
