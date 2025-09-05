'use client';
import React, { useEffect, useState } from 'react';
import { PROJECT_CATEGORY_CONSTANT } from '../constant/Project_Category.constant';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MdArrowOutward } from 'react-icons/md';
import { Project_Category_Obj } from '../type/Project_Category.type';
import Link from 'next/link';
import { useCursor } from '@/context/CursorContext';
import gsap from 'gsap';

const chunkArray = (arr: any, size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const getItemsPerSlide = (width: number) => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

const Project_Category_Sec = () => {
  let { cursorRef } = useCursor();
  const categories = PROJECT_CATEGORY_CONSTANT.Project_Category_Array;
  const [itemsPerSlide, setItemsPerSlide] = useState(
    getItemsPerSlide(typeof window !== 'undefined' ? window.innerWidth : 1200)
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = chunkArray(categories, itemsPerSlide);

  return (
    <div className="w-screen py-10">
      <h2
        className="text-[3.8vw] lg:text-[1.8vw] font-bold text-center mt-[7vh] mb-6 
             bg-gradient-to-r from-gray-900 to-gray-700 
             dark:from-[#FF8660] dark:to-[#D5491D] 
             bg-clip-text text-transparent"
      >
        Projects Category
      </h2>

      <div className="w-full flex items-center justify-center flex-wrap mt-[8vh]">
        <Carousel className="w-full max-w-[1200px] px-2 overflow-hidden">
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem
                key={idx}
                className="flex gap-6 justify-center "
                onMouseEnter={() => {
                  if (cursorRef && cursorRef.current) {
                    gsap.to(cursorRef.current, {
                      scale: 2,
                      ease: 'power2.out',
                    });
                  }
                }}
                onMouseLeave={() => {
                  if (cursorRef && cursorRef.current) {
                    gsap.to(cursorRef.current, {
                      scale: 1,
                      ease: 'power2.out',
                    });
                  }
                }}
              >
                {slide.map((cat: Project_Category_Obj) => (
                  <Link
                    key={cat._id}
                    href={`project/${cat.Category_Name.toLowerCase().replaceAll('/', '-')}`}
                    className="rounded-xl w-[90vw] md:w-[60vw] lg:w-[28vw]   flex flex-col overflow-hidden 
                               border border-gray-200 dark:border-none 
                               bg-gray-50 dark:bg-gradient-to-br dark:from-[#232526] dark:to-[#2A2A2A] 
                               shadow-sm dark:shadow-lg 
                               transition-transform hover:scale-105 cursor-none"
                  >
                    <div className="Category_Image h-[70%] w-full">
                      <img
                        src={
                          cat.Category_Url.startsWith('http')
                            ? cat.Category_Url
                            : '/default-image.png'
                        }
                        alt={cat.Category_Name}
                        className="h-[30vh] w-full object-cover"
                      />
                    </div>
                    <div className="h-[30%] w-full flex justify-between items-center px-[2vw] py-[2vh] bg-gray-50 dark:bg-transparent">
                      <div>
                        <h4 className="text-sm text-gray-600 dark:text-gray-300">
                          CLICK HERE TO VISIT
                        </h4>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                          {cat.Category_Name}
                        </h3>
                      </div>
                      <MdArrowOutward className="text-xl text-gray-700 dark:text-white" />
                    </div>
                  </Link>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Project_Category_Sec;
