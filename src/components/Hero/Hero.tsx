import Image from "next/image";
import { Button } from "../SharedComponents";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={`padding-responsive ${styles.contentWrapper}`}>
        <div className={styles.heroImageWrapper}>
          <Image
            className={styles.heroImage}
            src="/images/profile-emoji.png"
            alt="Profile Emoji Image of Javier Arango"
            fill
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,LpLNiB%MkWof_NWCV@aeX9j[oJj@"
          />
        </div>

        <h1 className={`display-sm ${styles.displayText}`}>
          <span className={styles.displayGradient}>
            {"Hello, I'm Javier, "}
          </span>
          Passionate Software Engineer
        </h1>

        <p className={`label-lg ${styles.paragraphText}`}>
          Computer science student at the University of Florida, passionate
          about software development, with a successful track record in
          academics, internships and personal projects.
        </p>

        <div className={styles.buttonGroupWrapper}>
          <Button
            label="Get In Touch"
            onClick={() => {
              console.log("Clicked Me");
            }}
          />

          <Button
            label="View All Projects"
            variant="secondary"
            onClick={() => {
              console.log("Clicked Me");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
