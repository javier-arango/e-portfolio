import Image from "next/image";
import { SectionContainer } from "./index";

const Hero = () => {
  return (
    <SectionContainer>
      <div className="container flex flex-col justify-start">
        <h3 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-white">
          Hi<span className="text-gray-400">,</span>
        </h3>
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
          I am <span className="text-yellow-500">Javier Arango</span>
        </h1>

        <p className="text-2xl mb-5 font-regular">
          Passionate Software Engineer
        </p>

        <p className="mb-8 font-light">
          I am a third-year Computer Science undergraduate student at the
          University of Florida, currently learning new technologies and working
          on new projects.
        </p>

        <button className="bg-white font-bold rounded-full py-3 shadow-lg uppercase tracking-wider text-gray-900 mr-10 w-40">
          Resume
        </button>
      </div>
    </SectionContainer>
  );
};

export default Hero;
