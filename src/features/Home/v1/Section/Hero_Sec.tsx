'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HERO_SECTION_CONSTANT } from '../constant/Hero_Sec.constant';



const Hero_Sec = () => {
 
  


  return (
    <div className="flex items-center flex-col py-[8vh] w-full">
      <Image
        src={HERO_SECTION_CONSTANT.image}
        alt="Hero Image"
        width={120}
        height={120}
        className="rounded-full mt-[7vh] w-[35%] lg:w-[13%] object-cover border-4 border-[#E2E8F0] dark:border-white"
        priority
      />
      <div className="font-bold flex flex-col items-center justify-center text-[5.1vw] min-[1000px]:text-[3vw]">
        <h1 className="text-[#1E293B] dark:text-white font-[var(--font-plus-jakarta-sans)] mt-[3vh]">
          {HERO_SECTION_CONSTANT.heading}
        </h1>
        <h2 className="text-[#334155] dark:text-[#e5e7eb] font-[var(--font-plus-jakarta-sans)] text-center flex gap-[1vw]">
          {HERO_SECTION_CONSTANT.subheading}
          <span className="bg-gradient-to-r from-[#FF8660] via-[#FFB86B] to-[#D5491D] bg-clip-text text-transparent font-[var(--font-plus-jakarta-sans)]">
            {HERO_SECTION_CONSTANT.Hilted_text}
          </span>
        </h2>
      </div>
      <p className="text-[#64748B] dark:text-[#C5C5C5] text-[2.5vw] min-[1000px]:text-[1vw] font-[var(--font-plus-jakarta-sans)] text-center w-[85%] min-[1000px]:w-[40%] mt-[2vh]">
        {HERO_SECTION_CONSTANT.description}
      </p>
      <div className="Button_Container flex gap-2 mt-4 font-semibold">
        {HERO_SECTION_CONSTANT.links?.map((button, index) => (
          <Button
            key={index}
            variant={'outline'}
            className={`mt-[2vh] text-[1.2vw] mx-[1vw] rounded-full px-[2.5vw] py-[2.8vh] font-[var(--font-plus-jakarta-sans)]
              transition ${button.className}`}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Hero_Sec;
