import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import Image from 'next/image';

const Admin_SideBar = () => {
  return (
    <Sidebar className="fixed left-0 z-50 h-screen">
      <SidebarHeader>
            <Image src="/Images/Abhishek_RedShirt.webp" width={0} height={0} alt="Admin Image" className="object-contain  w-[80%]  h-[40%]"/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default Admin_SideBar;
