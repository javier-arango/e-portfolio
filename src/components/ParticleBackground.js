import React from "react";
import styles from "../styles/ParticleBackground.module.css";
import Particles from "react-tsparticles";
import particles from "../assets/particles.json";

const ParticleBackground = () => {
  return (
    <div className={styles["particle-box"]}>
      <Particles height="95vh" style={{ left: 0, top: 0 }} params={particles} />
    </div>
  );
};

export default ParticleBackground;
