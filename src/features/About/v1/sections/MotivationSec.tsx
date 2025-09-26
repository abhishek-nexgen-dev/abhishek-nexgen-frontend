'use client';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MotivationSec = () => {
  const Right_Image_Ref = useRef<HTMLDivElement>(null);
  const Paragraph_Ref = useRef<HTMLDivElement>(null);
  const Title_Ref = useRef<HTMLHeadingElement>(null);


  useGSAP(() => {
    const tl = gsap.timeline();

   
    tl.to(Title_Ref.current, {
      scrollTrigger: {
        trigger: Title_Ref.current,
        start: 'top 80%',
        end: 'bottom 30%',
        scrub: 2,
      },
   
      opacity: 1,

      y: '-30%',
   
      scale: 1,
      duration: 1,
    });

    tl.to(Paragraph_Ref.current, {
      scrollTrigger: {
        trigger: Paragraph_Ref.current,
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 2,
      },
      y: "-20%",
      opacity: window.innerWidth < 1024 ? 1 : 0.8,
    });

    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': () => {
          if (Right_Image_Ref.current) {
            tl.to(Right_Image_Ref.current, {
              scrollTrigger: {
                trigger: Right_Image_Ref.current,
                start: 'top 80%',
                end: 'bottom 50%',
                scrub: 3,
          
              },
              y: "-20%",
              scale: 1.5,
              opacity: 1,
              delay: 1,
            });
          }
        },

        '(max-width: 1023px)': () => {
          if (Right_Image_Ref.current) {
            tl.to(Right_Image_Ref.current, {
              scrollTrigger: {
                trigger: Right_Image_Ref.current,
                start: 'top 70%',
                end: 'bottom 0%',
                scrub: true,
                markers: true,
              },
              y: '5%',
              x: 0.5,
              scale: 0.7,
              opacity: 1,
            });
          }
        },
      });
    });
    
    return () => ctx.revert();
  }, []);


  return (
    <section className="w-full flex flex-col overflow-hidden px-[2vw] py-[10vh]">
      <div className="w-full text-center mb-10 md:mb-16">
        <h2 ref={Title_Ref} className=" Title text-[1.5rem] opacity-0 lg:text-[1.8vw] font-bold inline-flex items-center justify-center mt-[8vh] mb-[3vh]">
          <span className="mr-3">🔥</span>
          <span className="Title bg-clip-text text-transparent bg-gradient-to-r from-[#5BADFF] to-[#1373D1]">
            Motivation to Think Like an Engineer
          </span>
          <span className="ml-3">🚀</span>
        </h2>
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row relative">
        <div ref={Paragraph_Ref} className="Paragraph w-full lg:w-[60%] min-h-[50vh] lg:min-h-0 flex flex-col px-4 lg:px-12 lg:pr-20 z-10 opacity-0 mt-[8vh]">
          <div className="space-y-6 text-[#C4C4C4] text-lg lg:text-[1.4rem] font-[var(--font-plus-jakarta-sans)] ">
            <p className="leading-relaxed">
              Many people become developers, but an engineer is someone who
              thinks deeply, plans ahead, and foresees challenges before they
              happen.
            </p>
            <p className="leading-relaxed">
              If you only write code, you can be replaced by anyone who knows
              syntax. But if you learn to think critically, design thoughtfully,
              and solve complex problems, you become truly unstoppable.
            </p>
            <p className="leading-relaxed">
              Be the person who doesn't just write lines of code, but who
              creates meaningful impact, leads by example, and inspires others
              to grow and achieve their best.
            </p>
            <p className="leading-relaxed font-bold">
              Your journey from a developer to an engineer is a journey from
              writing code to building the future.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[40%] relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 flex items-center justify-end h-[40vh] lg:h-auto mt-[8vh]">
          <div
            ref={Right_Image_Ref}
            className="relative w-full h-full md:h-[90%] opacity-0"
          >
            <Image
              src="/Images/Motivation.png"
              alt="Engineering Mindset"
              width={800}
              height={800}
              priority
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationSec;
