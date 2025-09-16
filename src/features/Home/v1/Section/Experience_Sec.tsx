import React from 'react';
import Experience_Card from '../components/Experience_Card';


const Experience_Sec: React.FC = () => {

  return (
    <section className="Experience_Sec w-screen py-[12vh] flex flex-col items-center">
      <h2
        className="text-[1.5rem] lg:text-[1.8vw] font-bold text-center mt-[7vh] mb-6 
             bg-gradient-to-r from-[#5BADFF] to-[#1373D1]
             bg-clip-text text-transparent"
      >
        Experience
      </h2>

      <div className="w-[90%] md:w-[70%] lg:w-1/2  lg:h-1/2 mt-[4vh]">
        <Experience_Card />
      </div>
    </section>
  );
};

export default Experience_Sec;
