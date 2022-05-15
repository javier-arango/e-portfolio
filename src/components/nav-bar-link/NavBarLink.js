import React from "react";
import styles from "./NavBarLink.module.css";

const NavBarLink = (props) => {
  return (
    <div>
      <li className="nav-item">
        <a
          className={
            props.button === "no"
              ? `nav-link link ${styles["nav-link-custom"]}`
              : `btn btn-outline-primary ${styles["resume-btn"]}`
          }
          href={props.link}
          target={props.target}
        >
          {props.name}
        </a>
      </li>
    </div>
  );
};

export default NavBarLink;
