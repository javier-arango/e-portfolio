import React from "react";
import styles from "./TechnologyList.module.css";

const TechnologyList = (props) => {
  return (
    <li className={styles["technology-list"]}>
      {/* Icon */}
      <i
        className={
          props.iconName.length !== 0
            ? `devicon-${props.iconName}-plain`
            : `devicon-${props.name.toLowerCase()}-plain`
        }
      >
        {" "}
      </i>
      {/* Name */}
      {props.name}
    </li>
  );
};

export default TechnologyList;
