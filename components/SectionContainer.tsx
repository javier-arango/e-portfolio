const SectionContainer = () => {
  return (
    <>
      <div className="container flex flex-wrap justify-between items-center mx-auto h-screen bg-gray-900">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-white">
            Hi<span className="text-gray-400">,</span>
          </h3>
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-white">
            I am <span className="text-yellow-500">Javier Arango</span>
          </h1>

          {/* <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-200 font-medium">
            Passionate Software Engineer
          </h2> */}

          <p className="text-2xl mb-8 text-gray-200 font-light">
            Passionate Software Engineer with desire of learning new
            technologies.
          </p>

          <div className="container flex flex-wrap justify-start items-center mx-auto">
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-gray-900 mr-10 w-40">
              Resume
            </button>
          </div>
        </div>
      </div>

      <div className="h-screen px-10 pt-40 pb-20 bg-blue-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Smart Health Monitoring Wristwatch!
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Monitor your health vitals smartly anywhere you go.
          </h3>

          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionContainer;
