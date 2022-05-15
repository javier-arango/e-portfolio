import React from "react";
import styles from "./EmailLink.module.css";

const EmailLink = () => {
  return (
    <div className={styles["content-container-right"]}>
      <div className={styles["email-content"]}>
        <a
          className={`link ${styles.email}`}
          href="mailto:javierarango.business@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          javierarango.business@gmail.com
        </a>
      </div>
    </div>
  );
};

export default EmailLink;
