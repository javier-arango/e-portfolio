import NavBarLink from "./nav-bar-link/NavBarLink";
import Logo from "../assets/logo.svg";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          {/* Left Side Logo */}
          <a className="navbar-brand" href="">
            <img src={Logo} width="100px" />
          </a>
          {/* Button when collapsing */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Nav Navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Center Side | Nav Bar content */}
            <ul className="navbar-nav text-center ms-auto">
              <NavBarLink name="About Me" link="#about-me" button="no" />
              <NavBarLink name="Projects" link="#projects" button="no" />
              <NavBarLink name="Contact" link="#contact-me" button="no" />
              {/* Right Side | Resume */}
              <NavBarLink
                name="Resume"
                link="../assets/resume.pdf"
                button="yes"
                target="_blank"
              />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
