import Contact_Form from '@/features/Contact/v1/Component/Contact_Form';
import React from 'react';

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center min-[1070px]:justify-between">
      <div className="Contact_Left w-1/2 bg-red-600 max-[1070px]:hidden"></div>
      <div className="Contact_Right w-[80%] min-[1070px]:w-1/2 h-full flex items-center justify-center max-[1200px]:p-[2vw]">
        <Contact_Form />
      </div>
    </div>
  );
};

export default page;
