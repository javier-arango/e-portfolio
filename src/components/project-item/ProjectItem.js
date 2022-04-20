import React from "react";
import "./ProjectItem.css";
import ProjectTechItem from "./ProjectTechItem";

const ProjectItem = (props) => {
  return (
    <div>
      <div className="row project-detail">
        {/* Project image */}
        <div className="col project-image">
          {props.link.length === 0 ? (
            <a href="#projects">
              <img src={props.image} alt="showcase for the project I did." />
            </a>
          ) : (
            <a target="_blank" rel="noopener noreferrer" href={props.link}>
              <img src={props.image} alt="" />
            </a>
          )}
        </div>

        <div className="col">
          {/* Project name */}
          <h3 className="project-name">
            {props.link.length === 0 ? (
              <a href="#projects">{props.name}</a>
            ) : (
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.name}
              </a>
            )}
          </h3>

          <div className="col">
            {/* Peoject description */}
            <div className="col project-description">
              <p>{props.description}</p>
            </div>
            {/* Technology used names */}
            <div className="col project-tech-use">
              <ul className="tech-list">
                {props.techName.map((tech) => (
                  <ProjectTechItem key={tech.id} name={tech.name} />
                ))}
              </ul>
            </div>
            {/* Learn more button */}
            <div className="project-link">
              {props.link.length !== 0 ? (
                <a
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Learn More
                </a>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
