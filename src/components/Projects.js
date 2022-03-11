import "../styles/Projects.css";
import projectsData from "../data/projectsData";
import ProjectItem from "./project-item/ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="sections">
      <div className="container">
        <h2 className="section-heading">Featured Projects</h2>
        {projectsData.map((data) => (
          <ProjectItem
            key={data.id}
            name={data.name}
            image={data.image}
            description={data.description}
            techName={data.technology}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
