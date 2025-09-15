'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HERO_SECTION_CONSTANT } from '../constant/Hero_Sec.constant';
import { gsap } from 'gsap/gsap-core';
import { useCursor } from '@/context/CursorContext';
import LightRays from '@/components/LightRays'; // Assuming LightRays is a custom component

const Hero_Sec = () => {
  let { cursorRef } = useCursor();

  const Handle_Paragraph_Mouse_Enter = (
    event: React.MouseEvent<HTMLParagraphElement>
  ) => {
    if (cursorRef && cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 2, ease: 'power2.out' });
    }
  };

  const Handle_Paragraph_Mouse_Leave = (
    event: React.MouseEvent<HTMLParagraphElement>
  ) => {
    if (cursorRef && cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 1, ease: 'power2.out' });
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#161513]">
      {/* Light Rays Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#FF8660"
        raysSpeed={1.3}
        lightSpread={1}
        rayLength={1.9}
        followMouse={true}
        mouseInfluence={0.2}
        noiseAmount={0.1}
        distortion={0.08}
        className="relative inset-0 z-0 h-screen w-screen"
      />

      <div className="absolute z-10 flex flex-col items-center text-center">
        <Image
          src={HERO_SECTION_CONSTANT.image}
          alt="Hero Image"
          width={1000}
          height={1000}
          className="rounded-full mt-[7vh] w-[35%] lg:w-[13%] object-cover border-4 border-[#E2E8F0] dark:border-[#FF8660]"
          priority
        />

        <div className="font-bold flex flex-col items-center justify-center text-[7vw] min-[1000px]:text-[3vw]">
          <h1 className="text-[#FF8660] font-[var(--font-plus-jakarta-sans)] mt-[1vh]">
            {HERO_SECTION_CONSTANT.heading}
          </h1>
          <h2 className="text-[#FFB86B] font-[var(--font-plus-jakarta-sans)] text-center flex gap-[1vw]">
            {HERO_SECTION_CONSTANT.subheading}
            <span className="bg-gradient-to-r from-[#FF8660] via-[#FFB86B] to-[#D5491D] bg-clip-text text-transparent font-[var(--font-plus-jakarta-sans)]">
              {HERO_SECTION_CONSTANT.Hilted_text}
            </span>
          </h2>
        </div>

        <p
          onMouseEnter={Handle_Paragraph_Mouse_Enter}
          onMouseLeave={Handle_Paragraph_Mouse_Leave}
          className="text-[#C5C5C5] text-[0.8rem] min-[1000px]:text-[1vw] font-[var(--font-plus-jakarta-sans)] text-center w-[85%] min-[1000px]:w-[40%] mt-[2vh]"
        >
          {HERO_SECTION_CONSTANT.description}
        </p>

        <div className="Button_Container flex gap-2 mt-4 font-semibold ">
          {HERO_SECTION_CONSTANT.links?.map((button, index) => (
            <Button
              key={index}
              variant={'outline'}
              className={`mt-[2vh] text-[1.2rem] md:text-[1.2vw] mx-[1vw] rounded-full px-[2.8vw] py-[2.8vh] font-[var(--font-plus-jakarta-sans)]
              transition ${button.className}`}
            >
              {button.label}
            </Button>
          ))}
        </div>

        <div className="w-full h-[5vh] bg-gradient-to-b from-transparent to-[#121211]"></div>
      </div>
    </div>
  );
};

export default Hero_Sec;
