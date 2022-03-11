import "../styles/ParticleBackground.css";
import Particles from "react-tsparticles";
import particles from "../assets/particles.json";

const ParticleBackground = () => {
  return (
    <div className="particle-box">
      <Particles height="95vh" style={{ left: 0, top: 0 }} params={particles} />
    </div>
  );
};

export default ParticleBackground;
