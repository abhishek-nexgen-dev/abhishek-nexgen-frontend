import ShinyText from '@/components/ShinyText';
import React from 'react';

const Achievement = () => {
  return (
    <div className=" w-screen relative">
      <div className="mt-8 hidden md:block lg:mt-[12vh]">
        <div className="w-full ">
          <h2
            className="text-[3.8vw] lg:text-[1.8vw] font-bold text-center mb-6 
             bg-gradient-to-r from-gray-900 to-gray-700 
             dark:from-[#FF8660] dark:to-[#D5491D] 
             bg-clip-text text-transparent"
          >
            Achievements
          </h2>
        </div>
        <div className="w-screen h-[45vh]   ">
          <ShinyText
            speed={10}
            className="text-[5vw] lg:text-[2.5vw] font-bold text-center mt-[10vh]  bg-gradient-to-r from-gray-900 to-gray-700 dark:from-[#FF8660] dark:to-[#D5491D] bg-clip-text text-transparent"
          >
            ffff
          </ShinyText>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
