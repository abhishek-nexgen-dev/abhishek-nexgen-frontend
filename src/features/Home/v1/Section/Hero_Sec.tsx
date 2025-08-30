import React from 'react';
import { HERO_SECTION_CONSTANT } from '../constant/Hero_Sec.constant';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero_Sec = () => {
  return (
    <div className="flex items-center flex-col py-[5vh] w-full h-screen">
      <Image
        src={HERO_SECTION_CONSTANT.image}
        alt="Hero Image"
        width={120}
        height={120}
        className="rounded-full w-[13vw] h-[25vh] mt-[7vh]"
      />
      <div className="font-bold flex flex-col items-center justify-center text-[3vw]">
        <h1 className="text-white font-[var(--font-plus-jakarta-sans)] mt-[3vh]">
          {HERO_SECTION_CONSTANT.heading}
        </h1>
        <h2 className="text-white font-[var(--font-plus-jakarta-sans)] text-center flex gap-[1vw]">
          {HERO_SECTION_CONSTANT.subheading}
          <span className="bg-gradient-to-r from-red-300 via-red-400 to-purple-500 bg-clip-text text-transparent font-[var(--font-plus-jakarta-sans)]">
            {HERO_SECTION_CONSTANT.Hilted_text}
          </span>
        </h2>
      </div>
      <p className="text-[#C5C5C5] text-[1vw] font-[var(--font-plus-jakarta-sans)] text-center w-[40%] mt-[2vh]">
        {HERO_SECTION_CONSTANT.description}
      </p>
      <div className="Button_Container flex gap-1 mt-4 font-semibold">
        {HERO_SECTION_CONSTANT.links.map((button, index) => (
          <Button
            key={index}
            variant="outline"
            className={`mt-[2vh] text-[1.2vw] mx-[1vw] rounded-4xl px-[2.5vw] py-[2.8vh] font-[var(--font-plus-jakarta-sans)] ${button.className}}`}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Hero_Sec;
