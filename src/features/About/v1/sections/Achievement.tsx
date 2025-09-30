import React from 'react';
import Achievement_Calendar from '../Components/Achievement_Calendar';

const Achievement = () => {
  return (
    <div className=" w-screen relative">
      <div className="mt-8 hidden md:block lg:mt-[12vh]">
        <div className="w-full bg-amber-600 ">
          <Achievement_Calendar />
        </div>
        <div className="h-screen w-full bg-amber-600"></div>
      </div>
    </div>
  );
};

export default Achievement;
