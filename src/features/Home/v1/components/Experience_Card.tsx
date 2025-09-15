'use client';

import { useCursor } from '@/context/CursorContext';
import React from 'react';
import gsap from 'gsap';
import ShinyText from '@/components/ShinyText';

const Experience_Card: React.FC = () => {
  let { cursorRef } = useCursor();

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#1c1c1c] px-10 py-7 rounded-xl border-1 border-white/20">
      <div className="Experience_Card_Part1 w-full h-[8vh] flex justify-between mb-[1rem] ">
        <div className="Logo_And_Title flex items-center lg:gap-[1rem] ">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.credly.com%2Fimages%2Fe4e5214a-e9f3-414c-9ebc-d10467a92816%2FData_Structures_and_Algorithms.png&f=1&nofb=1&ipt=671f52c7462741206418f10e12ca3c0722cf13fbdb5d17e1be563d1e8c3f0e99"
            alt="logo"
            className="w-[8vh] h-full rounded-full"
          />
          <h3 className="text-white font-semibold  ml-2  text-[1rem] lg:text-[1.5vw]  font-sans">
            Namaste Dsa
          </h3>
        </div>
        <p className="text-gray-400 text-[1rem] md:text-[1vw] text-end h-min">
          Nov 2019 - Present
        </p>
      </div>
      <div className="Experience_Card_Part2">
        <p
          className="text-gray-400 text-[0.9rem] lg:text-[1vw] mt-4 leading-[1.6rem]"
          onMouseEnter={() => {
            gsap.to(cursorRef.current, {
              backgroundColor: 'white',
              borderColor: '#FF8660',
              textColor: 'black',
              scale: 2,
              ease: 'power2.out',
            });
          }}
          onMouseLeave={() => {
            gsap.to(cursorRef.current, {
              borderColor: 'white',
              backgroundColor: 'white',
              scale: 1,
              ease: 'power2.out',
            });
          }}
        >
          <ShinyText
            text=" I'm currently enrolled in Namaste Dsa by Akshay Saini — a self-paced
          program focused on JavaScript and Data Structures & Algorithms (DSA).
          As part of the journey, I solve daily DSA problems, focus on
          pattern-based logic, and improve my understanding of loops and
          recursion. I also write blog posts on Dev.to to document my learning
          and contribute to the developer community."
            disabled={false}
            speed={8}
            className="custom-class"
          />
        </p>
      </div>
    </div>
  );
};

export default Experience_Card;
