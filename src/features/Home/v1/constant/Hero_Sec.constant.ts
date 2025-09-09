import { HeroSection_Type } from '../type/Hero_Sec.type';

export const HERO_SECTION_CONSTANT: HeroSection_Type = {
  image: '/Images/Abhishek_RedShirt.webp',
  heading: 'I do code and',
  subheading: 'make content',
  Hilted_text: 'about it!',
  description: `I’m a BCA student at CIITM Dhanbad and an aspiring Software Engineer. I learn through online platforms and build real-world projects using the MERN stack. I also practice Data Structures and Algorithms in JavaScript to improve my problem-solving skills.`,
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
