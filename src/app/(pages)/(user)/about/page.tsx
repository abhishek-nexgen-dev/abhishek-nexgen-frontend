'use client';

import About_Sec from '@/features/About/v1/sections/AboutSec';
import Achievement from '@/features/About/v1/sections/Achievement';
import MotivationSec from '@/features/About/v1/sections/MotivationSec';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col">
      <About_Sec />
      <MotivationSec />
      <Achievement />
    </div>
  );
};

export default page;
