import React from 'react';
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import Contact_Form from '@/features/Contact/v1/Component/Contact_Form';
import { CONTACT_INFO_CONSTANT } from '@/features/Contact/v1/Constant/Contact.constant';

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center min-[1070px]:justify-between">
      <div className="Contact_Left h-full w-1/2 px-[2.8vw] max-[1070px]:hidden flex flex-col gap-[4vh]">
        <h1 className="text-5xl font-bold text-[#FF8660] min-[1070px]:mt-[20vh]">
          Get In Touch
        </h1>
        <p className="text-lg text-white/90 leading-relaxed">
          I'd love to hear from you! Whether you have a project idea,
          collaboration opportunity, or just want to say hello, feel free to
          reach out. I'm always open to discussing new opportunities and
          creative ventures.
        </p>

        {/* Contact Information */}
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF8660]/10 flex items-center justify-center">
              <MdEmail className="text-[#FF8660] text-xl" />
            </div>
            <span className="text-white">{CONTACT_INFO_CONSTANT.Email}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF8660]/10 flex items-center justify-center">
              <MdPhone className="text-[#FF8660] text-xl" />
            </div>
            <span className="text-white">{CONTACT_INFO_CONSTANT.Phone}</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Connect With Me
          </h3>
          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO_CONSTANT.Social_Link.Instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#232526] border border-[#444] flex items-center justify-center hover:bg-[#FF8660] hover:border-[#FF8660] transition-all duration-300"
            >
              <FaInstagram className="text-white text-xl" />
            </a>

            <a
              href={CONTACT_INFO_CONSTANT.Social_Link.Twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#232526] border border-[#444] flex items-center justify-center hover:bg-[#FF8660] hover:border-[#FF8660] transition-all duration-300"
            >
              <FaXTwitter className="text-white text-xl" />
            </a>

            <a
              href={CONTACT_INFO_CONSTANT.Social_Link.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#232526] border border-[#444] flex items-center justify-center hover:bg-[#FF8660] hover:border-[#FF8660] transition-all duration-300"
            >
              <FaLinkedinIn className="text-white text-xl" />
            </a>

            <a
              href={CONTACT_INFO_CONSTANT.Social_Link.GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#232526] border border-[#444] flex items-center justify-center hover:bg-[#FF8660] hover:border-[#FF8660] transition-all duration-300"
            >
              <FaGithub className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="Contact_Right w-[80%] min-[1070px]:w-1/2 h-full flex items-center justify-center lg:p-[4vw]">
        <Contact_Form />
      </div>
    </div>
  );
};

export default page;
