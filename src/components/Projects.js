import React from "react";
import styles from "../styles/Projects.module.css";
import projectsData from "../data/projectsData";
import ProjectItem from "./project-item/ProjectItem";

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className={`container sections ${styles["project-container"]}`}
      >
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
    </>
  );
};

export default Projects;
