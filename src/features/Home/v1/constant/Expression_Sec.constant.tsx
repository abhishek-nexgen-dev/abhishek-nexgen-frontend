import { ExpLogo } from '../type/Exp_Sec.type';
import { FaReact, FaNodeJs } from 'react-icons/fa6';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

import { TbBrandSocketIo } from 'react-icons/tb';

export const EXPRESSION_WITH_CONSTANT: ExpLogo[] = [
  {
    name: 'React',
    icon: <FaReact />,
    url: 'https://react.dev',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    url: 'https://nextjs.org',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    url: 'https://www.typescriptlang.org',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    url: 'https://tailwindcss.com',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    url: 'https://mongodb.com',
  },
  {
    name: 'Express.js',
    icon: <SiExpress />,
    url: 'https://expressjs.com',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    url: 'https://nodejs.org',
  },
  {
    name: 'Socket.io',
    icon: <TbBrandSocketIo />,
    url: 'https://socket.io',
  },
];
