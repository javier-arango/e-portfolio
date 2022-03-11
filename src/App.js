import "./styles/App.css";
import particles from "./assets/particles.json";

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
      <SocialMedia />
      <EmailLink />

      <div id="body-content">
        <IntroAboutMe />
        <AboutMe />
        <Projects />
        <ContactMe />

        <div className="footer">
          <p>Created with &#9829; by Javier Arango</p>
          <p>Thank You for Your Visit</p>
        </div>
      </div>
    </div>
  );
}

export default App;
