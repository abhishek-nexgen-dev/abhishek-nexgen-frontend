import React from 'react';
import { PROJECT_CATEGORY_CONSTANT } from '../constant/Project_Category.constant';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MdArrowOutward } from "react-icons/md";

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Project_Category_Sec = () => {
  const categories = PROJECT_CATEGORY_CONSTANT.Project_Category_Array;
  const slides = chunkArray(categories, 3); // 3 items per slide

  return (
    <div className="w-screen py-10">
      <h2
        className="text-[2.5vw] font-bold text-center mt-[7vh] mb-6"
        style={{
          background: 'linear-gradient(90deg, #FF8660 0%, #D5491D 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Projects Category
      </h2>

      <div className="w-full flex items-center justify-center mt-[8vh]">
        <Carousel className="w-[90%]">
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx} className="flex gap-6 justify-center">
                {slide.map((cat) => (
                  <a
                    key={cat._id}
                    href={`project/${cat.Category_Name.toLowerCase().replaceAll("/", '-')}`}
                    target={cat.Category_Url.startsWith('http') ? '_blank' : '_self'}
                    rel={cat.Category_Url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="bg-gradient-to-br bg-[#2A2A2A] rounded-xl shadow-lg w-[28vw] h-[45vh] flex flex-col items-center justify-center text-white font-semibold text-xl transition-transform "
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="Category_Image h-[70%] w-full">
                      <img
                        src={cat.Category_Url.startsWith('http') ? cat.Category_Url : '/default-image.png'}
                        alt={cat.Category_Name}
                        className="h-full w-full object-cover rounded-tl-2xl rounded-tr-2xl"
                      />
                    </div>
                    <div className="h-[30%] w-full flex justify-between px-[2vw] mt-[3vh]">
                        <div className="">
                        <h4 className='text-[0.8vw] text-gray-300'>CLICK HERE TO VISIT</h4>
                        <h3 className='text-white mt-[1vh] text-[1vw]'>{cat.Category_Name}</h3>
                        </div>
                        <div className="Right">
                        <MdArrowOutward className='text-[1vw]'/>
                        </div>
                    </div>
                  </a>
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
