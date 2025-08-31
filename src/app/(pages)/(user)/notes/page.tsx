import React from 'react';
import Download_Notes_Sec from '@/features/Notes/Section/Download_Notes_Sec';

const page = () => {
  return (
    <div className="flex flex-col w-full py-[8vh]">
      <h2
        className="text-[3.8vw] lg:text-[1.8vw] font-bold text-center mt-[7vh] mb-6 
             bg-gradient-to-r from-gray-900 to-gray-700 
             dark:from-[#FF8660] dark:to-[#D5491D] 
             bg-clip-text text-transparent"
      >
        Notes
      </h2>
      <Download_Notes_Sec />
    </div>
  );
};

export default page;
