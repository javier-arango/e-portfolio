import { SectionContainer } from "./index";
import { Button } from "./General/index";
import { IoMdOpen } from "react-icons/io";

const openResume = () => {
  window.open(`/resume.pdf`, "_blank");
};

const Hero = () => {
  return (
    <SectionContainer>
      <div className="flex flex-row justify-center items-start overflow-hidden">
        {/* Left side container */}
        <div className="w-full lg:w-1/2 mx-auto text-center md:text-left">
          <h3 className="text-lg mb:text-xl lg:text-xl font-thin mb-2 text-white">
            Hi there &#128075;
          </h3>

          <h3 className="text-1xl sm:text-1xl md:text-2xl font-light mb-2 md:mb-1 text-gray-400 inline-block md:transform md:scale-100 md:-rotate-3 ">
            I am
          </h3>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-yellow-500">Javier Arango</span>
          </h1>

          <p className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 font-medium">
            Passionate Software Engineer
          </p>

          <p className="text-sm mb-8 font-thin text-gray-400 sm:text-sm md:text-md lg:text-lg">
            I am a third-year Computer Science undergraduate student at the
            University of Florida, currently learning new technologies and
            working on new projects.
          </p>

          <Button cta="Resume" onClick={openResume} className="mb-3">
            <IoMdOpen size={20} />
          </Button>
        </div>

        {/* Right side container */}
        <div className="hidden lg:block relative w-full md:w-1/2 -mr-40">
          <div className="w-3/4">
            <img src={"/profile-emoji.png"} alt="Javier Arango profile image" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
