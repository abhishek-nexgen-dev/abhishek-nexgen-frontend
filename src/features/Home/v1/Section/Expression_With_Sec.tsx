'use client';

import React from 'react';
import { EXPRESSION_WITH_CONSTANT } from '../constant/Expression_Sec.constant';
import { ExpLogo } from '../type/Exp_Sec.type';

const Expression_With_Sec = () => {
  return (
    <div className="w-screen py-16 bg-gradient-to-br ">
      <h1 className="text-gray-600 dark:text-[#C5C5C5] text-[1.8rem] lg:text-[1.9vw] font-extrabold text-center mb-12 tracking-wide drop-shadow-lg">
        EXPERIENCE WITH
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-8 w-full">
        {EXPRESSION_WITH_CONSTANT.map((item: ExpLogo, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3  mt-[2vh] md:mt-0 w-[20%]  lg:w-fit "
          >
            <a
              href={item.url ? item.url : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 cursor-none"
            >
              <div
                className="p-6 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300"
                style={{
                  boxShadow: '0 4px 24px rgba(253,253,253,0.12)',
                }}
              >
                {React.cloneElement(item.icon, {
                  className:
                    'w-6 h-6 lg:w-12 lg:h-12 text-black dark:text-white transition-colors duration-300',
                })}
              </div>
              <span className="text-black dark:text-[#FDFDFD] text-base font-semibold tracking-wide drop-shadow">
                {item.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expression_With_Sec;
