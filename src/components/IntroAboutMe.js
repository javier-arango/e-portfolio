import React from "react";
import styles from "../styles/IntroAboutMe.module.css";

const IntroAboutMe = () => {
  return (
    <>
      <div
        id={styles["intro-about-me"]}
        className={`container ${styles["about-container"]}`}
      >
        <div className="row">
          {/* Greetings */}
          <div className="col">
            <h1 className={styles["greetings"]}> Hi, my name is</h1>
          </div>

          <div className="w-100"></div>

          {/* My name */}
          <div className="col">
            <h2 className={styles["my-name"]}> Javier Arango.</h2>
          </div>

          <div className="w-100"></div>

          {/* Small fact */}
          <div className="col">
            <h3 className={styles["small-fact"]}> I build things for fun.</h3>
          </div>

          <div className="w-100"></div>

          {/* Big fact */}
          <div className="col">
            <p className={styles["big-fact"]}>
              I am a third-year Computer Science undergraduate student at the
              University of Florida, currently learning new technologies
              and working on new projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroAboutMe;
