import { HeroSection_Type } from '../type/Hero_Sec.type';

export const HERO_SECTION_CONSTANT: HeroSection_Type = {
  image: '/Images/Abhishek_RedShirt.webp',
  heading: 'I do code and',
  subheading: 'make content',
  Hilted_text: 'about it!',
  description: `I am a seasoned full-stack software engineer with over 
8 years of professional experience, specializing in backend development. 
My expertise lies in crafting robust and scalable SaaS-based 
architectures on the Amazon AWS platform.`,
  links: [
    {
      label: 'Get In Touch',
      href: '/get-started',
      className: 'bg-white text-black',
      external: false,
    },
    {
      label: 'Download CV',
      href: '/learn-more',
      className:
        'bg-black text-white border-2 border-white text-white hover:bg-gray-700',
      external: false,
    },
  ],
};
