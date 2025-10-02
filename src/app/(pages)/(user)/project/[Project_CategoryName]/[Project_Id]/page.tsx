import ShinyText from '@/components/ShinyText';
import React from 'react';

import { MdArrowOutward } from 'react-icons/md';

const features = [
  'Responsive design',
  'Modern UI/UX',
  'Authentication & Authorization',
  'RESTful API integration',
  'Optimized performance',
];

const page = () => {
  return (
    <div className="min-h-screen w-full text-white flex flex-col-reverse justify-center lg:flex-row-reverse bg-[#181818] py-8 md:py-6 overflow-x-hidden">
      <div className="w-full lg:w-1/2 min-h-[70vh] lg:min-h-screen px-4 sm:px-8 lg:pl-[2.5vw] lg:pr-[4.5vw] py-8 lg:py-[1vh] flex flex-col justify-center ">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[3vw] font-bold mb-4 md:mb-6 text-transparent bg-gradient-to-r from-[#FF8660] to-[#D5491D] bg-clip-text">
          Projects Category
        </h1>

        <div className="mb-6">
          <h2 className="text-[#616060] text-lg sm:text-xl flex items-center mb-2">
            <span className="mr-2 md:mr-3">📄</span> Description
          </h2>

          <ShinyText
            text=" 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            
            "
            disabled={false}
            speed={5}
            className="text-xl"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-[#FF8660] text-lg sm:text-xl font-bold flex items-center mb-2">
            <span className="mr-2">🚀</span> Features
          </h2>
          <ul className="list-disc ml-5 md:ml-6 text-[#FDFDFD] text-sm sm:text-base md:text-lg space-y-2 flex justify-between">
            <div className="">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </div>

            <div className="">
              {features.slice(3).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </div>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 md:mt-8">
          <button className="bg-white text-black font-bold py-2 px-4 sm:py-3 sm:px-8 rounded-3xl transition-all transform  hover:bg-[#FF8660] hover:text-white text-sm sm:text-base w-full flex gap-x-2.5 items-center justify-center">
            View Source Code <MdArrowOutward className="text-[2.5vh]" />
          </button>
          <button className="bg-transparent text-white border-2 border-white font-bold py-2 px-4 sm:py-3 sm:px-8 rounded-3xl transition-all transform hover:bg-[#FF8660] hover:border-[#FF8660] hover:text-white text-sm sm:text-base w-full">
            View Project
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-r   mt-10 lg:mt-0 py-6 lg:py-0">
        <div className="w-[90%] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[60%] rounded-xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 transition-transform hover:shadow-[0_0_30px_rgba(255,134,96,0.6)] relative">
          <div className="absolute inset-0 bg-black opacity-30 rounded-xl md:rounded-3xl"></div>

          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/scKC-P_rNpA?si=1aJlcr_vq016riFE"
            title="Project Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full relative z-10"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
