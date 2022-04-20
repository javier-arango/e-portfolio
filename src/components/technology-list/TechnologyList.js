import "./TechnologyList.css";

const TechnologyList = (props) => {
  return (
    <li className="technology-list">
      {/* Icon */}
      <i
        className={
          props.iconName.length !== 0
            ? `devicon-${props.iconName}-plain`
            : `devicon-${props.name.toLowerCase()}-plain`
        }
      >
        {" "}
      </i>
      {/* Name */}
      {props.name}
    </li>
  );
};

export default TechnologyList;
