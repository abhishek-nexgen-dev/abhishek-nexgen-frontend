import { Admin_SideBar_Link_Type } from '../type/AdminSideBar.type';
import { MdDashboard } from 'react-icons/md';
import { MdOutlinePhoneCallback } from 'react-icons/md';

import { BsMicrosoftTeams } from 'react-icons/bs';

export const ADMIN_SIDEBAR_LINKS: Admin_SideBar_Link_Type[] = [
  {
    title: 'Dashboard',
    link: '/admin/dashboard',
    icon: <MdDashboard />,
  },
  {
    title: 'Call Back Requests',
    link: '/admin/callback-requests',
    icon: <MdOutlinePhoneCallback />,
  },
  {
    title: 'Manage Team Members',
    link: '/admin/team-members',
    icon: <BsMicrosoftTeams />,
  },
  {
    title: 'Manage Project Categories',
    link: '/admin/project-categories',
    icon: <BsMicrosoftTeams />,
  },
  {
    title: 'Manage Projects',
    link: '/admin/projects',
    icon: <BsMicrosoftTeams />,
  },

  // Add more links as needed
];
