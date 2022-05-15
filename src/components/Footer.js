import SocialMedia from "./social-link/SocialMedia";
import socialMediaData from "../data/socialMediaData";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <SocialMedia type="button" socials={socialMediaData} />
      <p className={styles["my-credit"]}>
        Created with &#9829; by Javier Arango
      </p>
      <p className={styles["credits"]}>
        Inspired by{" "}
        <a
          className="link"
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>
      </p>
    </div>
  );
};

export default Footer;
