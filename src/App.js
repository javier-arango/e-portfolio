import React from "react";
import "./styles/GlobalStyles.css";
import socialMediaData from "./data/socialMediaData";

import ParticleBackground from "./components/ParticleBackground";
import NavBar from "./components/NavBar";
import SocialMedia from "./components/social-link/SocialMedia";
import EmailLink from "./components/email-link/EmailLink";
import IntroAboutMe from "./components/IntroAboutMe";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ParticleBackground />
      <NavBar />
      <SocialMedia type="left" socials={socialMediaData} />
      <EmailLink />

      <div id="body-content">
        <IntroAboutMe />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
