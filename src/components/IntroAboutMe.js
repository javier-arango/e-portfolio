import React from "react";
import "../styles/IntroAboutMe.css";

const IntroAboutMe = () => {
  return (
    <div id="intro-about-me">
      <div className="container about-container">
        <div className="col">
          {/* Greetings */}
          <div className="row">
            <h1 className="h1 greetings"> Hi, my name is</h1>
          </div>
          {/* My name */}
          <div className="row">
            <h2 className="h2 my-name"> Javier Arango.</h2>
          </div>
          {/* Small fact */}
          <div className="row">
            <h3 className="h3 small-fact"> I build things for fun.</h3>
          </div>
          {/* Big fact */}
          <div className="row">
            <p className="big-fact">
              {" "}
              I am a third-year Computer Science undergraduate student at the
              University of Florida. Currently learning new technologies and
              getting ideas to start new projects.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAboutMe;
