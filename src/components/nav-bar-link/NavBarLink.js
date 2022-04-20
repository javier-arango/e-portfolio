import React from "react";
import "./NavBarLink.css";

const NavBarLink = (props) => {
  return (
    <div>
      <li className="nav-item">
        <a
          className={
            props.button === "no" ? "nav-link" : "btn btn-outline-primary"
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
