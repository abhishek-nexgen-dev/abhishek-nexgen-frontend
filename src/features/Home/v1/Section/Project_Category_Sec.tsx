'use client';

import React, { useEffect, useState } from 'react';
import {
  Project_Category_Obj,
  Project_Category_Type,
} from '../type/Project_Category.type';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MdArrowOutward } from 'react-icons/md';

import Link from 'next/link';
import { useCursor } from '@/context/CursorContext';
import gsap from 'gsap';
import axios from 'axios';
import useApi from '@/hooks/useApi';

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
  const [categories, setCategories] = useState<Project_Category_Type[]>([]);
  let Fetch_Project_Categories = async () => {
    try {
      let res = await useApi.request<null, { data: Project_Category_Type[] }>({
        method: 'GET',
        endpoint: '/api/v1/ProjectCategory/FindAll',
      });

      console.log('datasdfa------>', res.data);

      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching project categories:', error);
      return [];
    }
  };

  let { cursorRef } = useCursor();

  const [itemsPerSlide, setItemsPerSlide] = useState(
    getItemsPerSlide(typeof window !== 'undefined' ? window.innerWidth : 1200)
  );

  useEffect(() => {
    Fetch_Project_Categories();
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = chunkArray(categories, itemsPerSlide);
  console.log('slides', slides);

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

      <div className="w-full flex items-center justify-center flex-wrap mt-[8vh] ">
        <Carousel className="w-full max-w-[1200px] px-2 overflow-hidden">
          <CarouselContent>
            {slides.map(
              (slide, idx) => (
                console.log('slide', slide),
                (
                  <CarouselItem
                    key={idx}
                    className="flex gap-x-10 justify-center py-4"
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
                        href={`project/${cat.name.toLowerCase().replaceAll('/', '-')}`}
                        className="rounded-xl w-[90vw] md:w-[60vw] lg:w-[28vw]   flex flex-col overflow-hidden 
                               border border-gray-200 dark:border-none 
                               bg-gray-50 dark:bg-gradient-to-br dark:from-[#232526] dark:to-[#191919] 
                               shadow-sm dark:shadow-lg 
                               transition-transform hover:-translate-y-2 duration-200 cursor-none"
                      >
                        <div className="Category_Image h-[70%] w-full">
                          <img
                            src={
                              cat.url.startsWith('http')
                                ? cat.url
                                : '/default-image.png'
                            }
                            alt={cat.name}
                            className="h-[30vh] w-full object-cover"
                          />
                        </div>
                        <div className="h-[30%] w-full flex justify-between items-center px-[2vw] py-[2vh] bg-gray-50 dark:bg-transparent">
                          <div className="flex flex-col gap-y-4 py-2">
                            <h4 className="text-base text-gray-600 dark:text-gray-300 ">
                              CLICK HERE TO VISIT
                            </h4>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                              {cat.name}
                            </h3>
                          </div>
                          <MdArrowOutward className="text-xl text-gray-700 dark:text-white" />
                        </div>
                      </Link>
                    ))}
                  </CarouselItem>
                )
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Project_Category_Sec;
