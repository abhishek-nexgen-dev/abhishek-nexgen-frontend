import AuthComponent from '@/features/Auth/v1/Component/AuthComponent';
import React from 'react';

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="Login_Left h-full w-1/2 max-[1070px]:hidden"></div>
      <div className="Login_Right  w-[80%] min-[1070px]:w-1/2 h-full flex items-center justify-center lg:p-[4vw]">
        <AuthComponent />
      </div>
    </div>
  );
};

export default page;
