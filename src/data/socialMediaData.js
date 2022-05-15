import { v4 as uuidv4 } from "uuid";
import Linkedin from "../assets/social-icons/linkedin.svg";
import Github from "../assets/social-icons/github.svg";
import Twitter from "../assets/social-icons/twitter.svg";

const socialMediaData = [
  {
    id: uuidv4(),
    icon: Linkedin,
    link: "http://linkedin.com/in/javier-arango",
  },
  { id: uuidv4(), icon: Github, link: "https://github.com/javier-arango" },
  { id: uuidv4(), icon: Twitter, link: "https://twitter.com/Javier_Arango_" },
];

export default socialMediaData;
