import React from "react";
import styles from "./ProjectItem.module.css";
import ProjectTechItem from "./ProjectTechItem";

const ProjectItem = (props) => {
  return (
    <>
      <div className={`row ${styles["project-detail"]}`}>
        {/* Project image */}
        <div className={`col ${styles["project-image"]}`}>
          {props.link.length === 0 ? (
            <a href="#projects">
              <img src={props.image} alt="showcase of the project" />
            </a>
          ) : (
            <a target="_blank" rel="noopener noreferrer" href={props.link}>
              <img src={props.image} alt="" />
            </a>
          )}
        </div>

        {/* Project details */}
        <div className={`col ${styles["project-details"]}`}>
          {/* Project name */}
          <div className="col">
            <h3 className={styles["project-name"]}>
              {props.link.length === 0 ? (
                <a className="link" href="#projects">
                  {props.name}
                </a>
              ) : (
                <a
                  className="link"
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.name}
                </a>
              )}
            </h3>
          </div>

          {/* Project description */}
          <div className={`col ${styles["project-description"]}`}>
            <p>{props.description}</p>
          </div>

          {/* Technology used */}
          <div className={`col ${styles["project-tech-use"]}`}>
            <ul className={`${styles["tech-list"]}`}>
              {props.techName.map((tech) => (
                <ProjectTechItem key={tech.id} name={tech.name} />
              ))}
            </ul>
          </div>

          {/* Learn more | button */}
          <div className={`col ${styles["project-link"]}`}>
            {props.link.length !== 0 ? (
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                Learn More
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
