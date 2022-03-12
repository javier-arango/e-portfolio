import "./styles/App.css";
import socialMediaData from "./data/socialMediaData";

import ParticleBackground from "./components/ParticleBackground";
import NavBar from "./components/NavBar";
import SocialMedia from "./components/social-link/SocialMedia";
import EmailLink from "./components/email-link/EmailLink";
import IntroAboutMe from "./components/IntroAboutMe";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <ParticleBackground />
      <NavBar />
      <SocialMedia type="left" socials={socialMediaData} />
      <EmailLink />

      <div id="body-content">
        <IntroAboutMe />
        <AboutMe />
        <Projects />
        <ContactMe />

        <div className="footer">
          <SocialMedia type="button" socials={socialMediaData} />
          <p className="my-credit">Created with &#9829; by Javier Arango</p>
          <p className="credits">
            Inspired by{" "}
            <a href="https://github.com/bchiang7/v4" target="_blank">
              Brittany Chiang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
