import { FaGithub, FaTrophy } from 'react-icons/fa6';
import {
  SiLeetcode,
  SiDevdotto,
  SiCodeforces,
  SiHackerrank,
} from 'react-icons/si';

const platformData = [
  {
    platform: 'LeetCode',
    icon: <SiLeetcode className="text-[#FFA116]" />,
    metrics: [
      { label: 'Problems Solved', value: '430+' },
      { label: 'Contest Rating', value: '1842' },
      { label: 'Global Rank', value: 'Top 5%' },
    ],
    badge: 'Gold',
    color: `rgba(255, 161, 22, 0.2)` as `rgba(255, 161, 22, 0.2)`,
    darkColor: '#FFA116',
    progressValue: 86,
    link: 'https://leetcode.com/yourusername',
  },
  {
    platform: 'GitHub',
    icon: <FaGithub className="text-[#6cc644]" />,
    metrics: [
      { label: 'Repositories', value: '48' },
      { label: 'Contributions', value: '1.2K+' },
      { label: 'Stars', value: '235' },
    ],
    badge: 'Pro',
    color: `rgba(108, 198, 68, 0.15)` as `rgba(108, 198, 68, 0.15)`,
    darkColor: '#6cc644',
    progressValue: 92,
    link: 'https://github.com/yourusername',
  },
  {
    platform: 'dev.to',
    icon: <SiDevdotto className="text-[#FFFFFF]" />,
    metrics: [
      { label: 'Articles', value: '16' },
      { label: 'Views', value: '12K+' },
      { label: 'Reactions', value: '845' },
    ],
    badge: 'Author',
    color: `rgba(255, 255, 255, 0.15)` as `rgba(255, 255, 255, 0.15)`,
    darkColor: '#FFFFFF',
    progressValue: 78,
    link: 'https://dev.to/yourusername',
  },
  {
    platform: 'Codeforces',
    icon: <SiCodeforces className="text-[#1F8ACB]" />,
    metrics: [
      { label: 'Rating', value: '1742' },
      { label: 'Problems', value: '218' },
      { label: 'Contests', value: '37' },
    ],
    badge: 'Specialist',
    color: `rgba(31, 138, 203, 0.2)` as `rgba(31, 138, 203, 0.2)`,
    darkColor: '#1F8ACB',
    progressValue: 72,
    link: 'https://codeforces.com/profile/yourusername',
  },
  {
    platform: 'HackerRank',
    icon: <SiHackerrank className="text-[#00EA64]" />,
    metrics: [
      { label: 'Badges', value: '19' },
      { label: 'Points', value: '3.4K' },
      { label: 'Certificates', value: '6' },
    ],
    badge: '5★',
    color: `rgba(0, 234, 100, 0.15)` as `rgba(0, 234, 100, 0.15)`,
    darkColor: '#00EA64',
    progressValue: 88,
    link: 'https://www.hackerrank.com/yourusername',
  },
  {
    platform: 'Achievements',
    icon: <FaTrophy className="text-[#FFD700]" />,
    metrics: [
      { label: 'Hackathons', value: '8' },
      { label: 'Awards', value: '12' },
      { label: 'Projects', value: '24+' },
    ],
    badge: 'Expert',
    color: `rgba(255, 215, 0, 0.15)` as `rgba(255, 215, 0, 0.15)`,
    darkColor: '#FFD700',
    progressValue: 94,
    link: '#',
  },
];

export default platformData;
