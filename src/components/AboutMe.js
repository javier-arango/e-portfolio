import React from "react";
import styles from "../styles/AboutMe.module.css";
import profileImg from "../assets/profile-image.svg";
import TechnologyList from "./technology-list/TechnologyList";
import programingLanguages from "../data/programingLanguagesData";

const AboutMe = () => {
  return (
    <>
      <div id="about-me" className="sections container">
        <h2 className="section-heading">About Me</h2>
        <div className={`row ${styles["inner-content"]}`}>
          <div className="col">
            <p>
              Hello there! My name is Javier, and I was born and raised in Cuba.
              I came to the United States when I was 15 years old. My love for
              technology started when I was little, but sadly Cuba didn't have
              the technological advances to pursue my career.
            </p>
            <p>
              When I came to the United States, I focused on leaning English,
              programming languages, and new technologies. After my hard work
              and dedication, I graduated high school on time and joined the Top
              University in Florida (The University of Florida), where I am
              currently pursuing a Bachelor's degree in Computer Science.
            </p>
            <p className={styles["technology-message"]}>
              Recent technologies I've been working with include:
            </p>

            <div className={`row ${styles["programing-languages"]}`}>
              {/* Technologies learned and Used */}
              <div className="col-sm">
                <ul className={styles["languages-ul"]}>
                  {programingLanguages.map((techName) => (
                    <TechnologyList
                      key={techName.id}
                      name={techName.name}
                      iconName={
                        techName.hasOwnProperty("iconName")
                          ? techName.iconName
                          : ""
                      }
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={`col ${styles["profile"]}`}>
            <img
              className={`img-fluid ${styles["profile-image"]}`}
              src={profileImg}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
