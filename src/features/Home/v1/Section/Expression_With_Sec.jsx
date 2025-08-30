import React from 'react';
import { EXPRESSION_WITH_CONSTANT } from '../constant/Expression_Sec.constant';

const Expression_With_Sec = () => {
  return (
    <div className="w-screen py-16 bg-gradient-to-br ">
      <h1 className="text-[#C5C5C5] text-4xl font-extrabold text-center mb-12 tracking-wide drop-shadow-lg">
        EXPERIENCE WITH
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {EXPRESSION_WITH_CONSTANT.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <a
              href={item.url ? item.url : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2"
            >
              <div
                className="p-6 rounded-full bg-white/10 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300"
                style={{
                  boxShadow: '0 4px 24px rgba(253,253,253,0.12)',
                }}
              >
                {React.cloneElement(item.icon, {
                  className: 'w-12 h-12',
                  style: {
                    background:
                      'linear-gradient(90deg, #FDFDFD 0%, #FFFFFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: '#FDFDFD',
                  },
                })}
              </div>
              <span className="text-[#FDFDFD] text-base font-semibold tracking-wide drop-shadow">
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
