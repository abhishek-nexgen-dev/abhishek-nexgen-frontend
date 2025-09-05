import Contact_Form from '@/features/Contact/v1/Component/Contact_Form';
import React from 'react';

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center min-[1070px]:justify-between">
      <div className="Contact_Left h-full w-1/2 max-[1070px]:hidden">
        {/* <img src="https://plus.unsplash.com/premium_photo-1680459838836-a8433c8f664e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact" className="w-full h-full object-cover object-center"/> */}
      </div>
      <div className="Contact_Right w-[80%] min-[1070px]:w-1/2 h-full flex items-center justify-center max-[1200px]:p-[2vw]">
        <Contact_Form />
      </div>
    </div>
  );
};

export default page;
