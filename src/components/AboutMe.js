import "../styles/AboutMe.css";
import profileImg from "../assets/profile-image.svg";
import TechnologyList from "./technology-list/TechnologyList";

const programingLanguages = [
  { id: "e0", name: "C++", iconName: "cplusplus" },
  { id: "e1", name: "Python" },
  { id: "e2", name: "Java" },
  { id: "e3", name: "Javascript" },
  { id: "e4", name: "HTML", iconName: "html5" },
  { id: "e5", name: "CSS", iconName: "css3" },
  { id: "e6", name: "MySQL" },
  { id: "e7", name: "Swift" },
  { id: "e8", name: "React" },
  { id: "e9", name: "Node.js", iconName: "nodejs" },
];

const AboutMe = () => {
  return (
    <div id="about-me" className="sections">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <div className="row inner-content">
          <div className="col about-me-text">
            <p>
              Hello there! My name is Javier, and I was born and raised in Cuba.
              I came to the United States when I was 15 years old. My love for
              technology started when I was little, but sadly Cuba didn't have
              the technological advances to pursue my career.
            </p>
            <p>
              When I came to the United States, I was learning English and many
              programming languages and technologies that I could possibly
              learn. After my hard work and dedication, I graduated high school
              on time and joined the Top 5 University in the USA. I'm currently
              studying Computer Science at the University of Florida, where I'm
              doing my third year.
            </p>
            <p className="technology-message">
              I have been using the following technologies recently:
            </p>

            <div className="row programing-languages">
              {/* Technologies learned and Used */}
              <div className="col-sm">
                <ul className="languages-ul">
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

          <div className="col profile">
            <img
              className="img-fluid profile-image"
              src={profileImg}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
