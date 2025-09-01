'use client';

import { useCursor } from '@/context/CursorContext';
import React from 'react';


const Cursor = () => {
  const { cursorRef } = useCursor();

 let handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX - cursorRef.current.offsetWidth / 2}px`;
      cursorRef.current.style.top = `${e.clientY - cursorRef.current.offsetHeight / 2}px`;
    }
  };



  return (
    // <div
    //   className="cursor-wrapper w-full h-full absolute top-0 left-0 z-50 pointer-events-none"
    //   onMouseMove={handleMouseMove}
    // >
      <div
        className="Cursor bg-white dark:bg-[#ffffff] fixed rounded-full h-[1vw] w-[1vw] mix-blend-difference pointer-events-none z-50"
        ref={cursorRef}
      />
    // </div>
  );
};

export default Cursor;
