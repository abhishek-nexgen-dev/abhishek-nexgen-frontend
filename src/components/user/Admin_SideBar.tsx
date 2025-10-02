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
    <Sidebar className="fixed left-0 z-50 h-screen w-[25vw] !bg-[#131311] ">
      <SidebarHeader className="w-full bg-pink-500">
        {/* <Image
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F043%2F900%2F708%2Fnon_2x%2Fuser-profile-icon-illustration-vector.jpg&f=1&nofb=1&ipt=ab3d1f1dfd266a2701eaf601b2180f7cee9570d7751880c3d52b4c3517349b63"
          width={10}
          height={10}
          alt="Admin Image"
          className="object-contain  w-[80%]  h-[40%]"
        /> */}

        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F319-3191274_male-avatar-admin-profile.png&f=1&nofb=1&ipt=3907b11f197d87fc140b125484792432eeac38883413d14f25cb798bebbd6fd3"
          alt="Admin Image"
          className="object-contain  w-[60%]  h-[60%]"
        />

        <h3 className="text-2xl">Abhishek Kumar</h3>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup></SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default Admin_SideBar;
