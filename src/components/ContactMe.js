import React from "react";
import styles from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <>
      <div id="contact-me" className={`container ${styles["contact"]}`}>
        <h2 className={styles["contact-title"]}>Contact Me</h2>
        <p className={styles["contact-description"]}>
          I am open to new opportunities for work or starting projects. Please
          send me an email if you have any questions or just want to say hi, and
          I'll do my best to respond!
        </p>
        <a
          href="mailto:javierarango.business@gmail.com"
          className={`btn btn-outline-primary ${styles["contact-button"]}`}
        >
          <span role="img" alt="waive hand emoji" aria-label="emoji">
            👋
          </span>{" "}
          Say Hello
        </a>
      </div>
    </>
  );
};

export default ContactMe;
