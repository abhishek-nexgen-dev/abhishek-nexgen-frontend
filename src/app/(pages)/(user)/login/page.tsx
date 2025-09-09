import AuthComponent from '@/features/Auth/v1/Component/AuthComponent';
import React from 'react';
import {
  FaRegLightbulb,
  FaLock,
  FaUsers,
  FaCode,
  FaRegHandshake,
} from 'react-icons/fa';
import { MdSecurity, MdWarningAmber } from 'react-icons/md';
import { IoRocketSharp } from 'react-icons/io5';

const page = () => {
  return (
    <div className=" max-[1070px]:h-[140vh] w-screen flex items-center justify-center">
      <div className="Login_Left h-full w-1/2 max-[1070px]:hidden text-white flex flex-col gap-8 lg:p-[4vw] relative overflow-hidden rounded-l-3xl ">
        {/* Decorative code icon */}
        {/* <div className="absolute top-10 right-8 opacity-10 animate-pulse">
          <FaCode className="text-white text-[10rem]" />
        </div> */}

        {/* Main heading */}
        <div className="mt-6 z-10 relative">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#FF8660] to-[#FFD8B1] text-transparent bg-clip-text drop-shadow-md">
            Team Login
          </h1>
          <div className="flex items-center gap-3 mt-3 text-[#FF8660] font-semibold">
            <MdSecurity className="text-2xl" />
            <p>Secure Authentication Required</p>
          </div>
        </div>


        <div className="mt-8 space-y-8 z-10 relative">
          {[
            {
              icon: <FaUsers className="text-[#FF8660] text-2xl" />,
              title: 'Manage Abhishek’s Portfolio',
              desc: 'If you’re a member of the Dev Abhishek team, you have direct access to manage and maintain Abhishek Gupta’s portfolio. Keep it updated, professional, and aligned with the vision.',
            },
            {
              icon: <IoRocketSharp className="text-[#FF8660] text-2xl" />,
              title: 'Open Opportunities',
              desc: 'Becoming a part of the Dev Abhishek team opens doors to growth, learning, real-world experience, and collaboration on impactful projects — starting with this portfolio.',
            },
            {
              icon: <FaRegHandshake className="text-[#FF8660] text-2xl" />,
              title: 'Team Member Login',
              desc: 'Already on the team? Log in now to contribute, update content, and help represent Abhishek Gupta’s work to the world. New to the team? Contact admin to join.',
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="p-3 rounded-xl bg-[#FF8660]/15 flex items-center justify-center">
                {icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">{desc}</p>
              </div>
            </div>
          ))}
        </div>

    
        <div className="mt-auto pt-6 border-t border-gray-800 flex items-center justify-between text-gray-400 text-xs tracking-wide uppercase select-none z-10 relative">
          <span>Team Members Only</span>
          <div className="flex items-center gap-2">
            <FaLock className="text-[#FF8660] text-sm" />
            <span>Secure Connection</span>
          </div>
        </div>
      </div>

      <div className="Login_Right w-[90%] min-[1070px]:w-1/2 h-full flex items-center justify-center lg:p-[4vw]">
        <AuthComponent />
      </div>
    </div>
  );
};

export default page;
