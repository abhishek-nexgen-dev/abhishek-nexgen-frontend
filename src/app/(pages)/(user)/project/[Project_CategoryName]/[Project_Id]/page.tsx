import React from 'react';

const features = [
  'Responsive design',
  'Modern UI/UX',
  'Authentication & Authorization',
  'RESTful API integration',
  'Optimized performance',
];

const page = () => {
  return (
    <div className="h-screen w-screen text-white flex bg-[#181818]">
      {/* Left Section */}
      <div className="About_Project w-full md:w-1/2 h-full py-[1vh] px-[2vw] flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-[3vw] md:text-[2vw] font-bold mb-6 text-transparent bg-gradient-to-r from-[#FF8660] to-[#D5491D] bg-clip-text">
          Projects Category
        </h1>

        {/* Description */}
        <h2 className="text-[#616060] text-[1.2vw] md:text-[1vw] mb-3 flex items-center">
          <span className="mr-[1vw]">📄</span> Description
        </h2>
        <p className="text-[1vw] md:text-[0.95vw] text-justify mt-[1vh] text-[#C8D7C7] mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        {/* Features Section */}
        <h2 className="text-[#FF8660] text-[1.2vw] md:text-[1vw] font-bold mb-3 flex items-center">
          🚀 Features
        </h2>
        <ul className="list-disc ml-6 mb-6 text-[#FDFDFD] text-[1vw] md:text-[0.95vw]">
          {features.map((feature, idx) => (
            <li key={idx} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-6 mt-8 text-[1vw] md:text-[0.9vw]">
          <button className="bg-white text-black font-bold py-3 px-8 rounded-3xl transition-transform transform hover:scale-105 hover:bg-[#FF8660] hover:text-white">
            Buy Source Code
          </button>
          <button className="bg-black text-white border-2 border-white font-bold py-3 px-8 rounded-3xl transition-transform transform hover:scale-105 hover:bg-[#FF8660] hover:text-black">
            View Project
          </button>
        </div>
      </div>

      {/* Right Section (Video) */}
      <div className="Project_Video w-full md:w-1/2 h-full flex  justify-center bg-gradient-to-r from-[#181818] to-[#232323]">
        <div className="w-[90%] mt- h-[70%] md:w-[80%] md:h-[60%] rounded-3xl mt-[7vh] overflow-hidden shadow-2xl border-4 transform transition-transform  hover:shadow-lg border-[#ffffff] relative">
          {/* Background overlay to create a focus effect */}
          <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>

          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/scKC-P_rNpA?si=1aJlcr_vq016riFE"
            title="Project Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full relative z-10"
            style={{ background: '#000', borderRadius: 'inherit' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
