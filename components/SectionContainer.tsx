const SectionContainer = () => {
  return (
    <>
      <div className="container flex flex-wrap justify-between items-center mx-auto h-screen ">
        <div className="container mx-auto px-6">
          <h3 className="text-base mb-8 text-gray-200">Hi, My name is</h3>
          <h1 className="text-4xl font-bold mb-2 text-white">Javier Arango</h1>

          <h2 className="text-2xl mb-8 text-gray-200">
            I am a passionate Software Engineer
          </h2>

          <p className="text-lg mb-8 text-gray-200">
            I am a third-year Computer Science undergraduate student at the
            University of Florida, currently learning new technologies and
            working on new projects.
          </p>

          <div className="container flex flex-wrap justify-start items-center mx-auto">
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-gray-900 mr-10 w-40">
              Resume
            </button>

            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-gray-900 mr-10 w-40">
              Say Hi!
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
