import "./SocialMediaLink.css";

const SocialMediaLink = (props) => {
  return (
    <li>
      <a href={props.link} target="_blank" className="link">
        <img src={props.icon} className="icons" />
      </a>
    </li>
  );
};

export default SocialMediaLink;
