'use client';
import Image from 'next/image';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSec = () => {
  useGSAP(() => {
    gsap.to('.Image_Container', {
      opacity: 1,
      duration: window.innerWidth < 1024 ? 1 : 1.5,
      y: window.innerWidth < 1024 ? -20 : 0,
      x: window.innerWidth < 1024 ? 0 : 80,
    });

    gsap.to('.Text_Container', {
      y: window.innerWidth < 1024 ? -120 : -80,
      duration: 1.5,
      opacity: 1,
    });
  }, []);

  return (
    <section className="w-full flex flex-col lg:flex-row overflow-hidden px-[2vw] pt-[2vh]">
      <div className="w-full lg:w-[40%] flex flex-col justify-center items-center mt-[4rem]  lg:items-start h-[50vh] lg:h-[90vh]">
        <div
          className="Image_Container  opacity-0 left-0 relative w-[280px] h-[280px] lg:w-[80%] lg:h-[70%] rounded-full 
                      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                      border border-[#FF8660]/50 
                      overflow-visible"
        >
          <div className=" w-full h-full relative">
            <Image
              src="/Images/About_Right_Image.png"
              priority
              alt="Abhishek Kumar - Software Engineer"
              className="absolute top-[40%] scale-125 object-contain"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      <div
        className="Text_Container w-full lg:w-[60%] min-h-[50vh] lg:h-[90vh] 
                    flex flex-col gap-8 md:gap-[2vh] px-4 lg:px-12 mt-[12rem] opacity-0"
      >
        <div className="mt-8 hidden md:block lg:mt-[12vh]">
          <h2
            className="text-[1.7rem] lg:text-[1.8vw] font-bold text-center mb-6 
                bg-gradient-to-r from-gray-900 to-gray-700 
                dark:from-[#FF8660] dark:to-[#D5491D] 
                bg-clip-text text-transparent"
          >
            About
          </h2>
        </div>

        <div className="space-y-6 text-[#C4C4C4] text-lg lg:text-[1.4rem] px-[2.5vh] py-[2vw] font-[var(--font-plus-jakarta-sans)]">
          <p className="leading-relaxed">👋 Hey, I'm Abhishek Kumar</p>

          <p className="leading-relaxed">
            I'm an aspiring software engineer with a passion for building both
            backend and frontend systems. I enjoy solving complex problems
            through efficient data structures and algorithms (DSA) and take
            pride in writing clean, readable, and maintainable code.
          </p>

          <p className="leading-relaxed">
            I'm an active open-source contributor who loves collaborating with
            others and helping fellow developers by sharing knowledge and
            solving their technical challenges. Whether it's optimizing code or
            debugging tough issues, I'm driven by the opportunity to learn,
            grow, and make a positive impact in the developer community.
          </p>
        </div>

        <div className="mt-6 md:mt-8">
          <div className="flex flex-wrap gap-3">
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'MongoDB',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-[#FF8660]/30 text-[#FF8660] text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
