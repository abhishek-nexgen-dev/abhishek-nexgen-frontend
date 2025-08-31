'use client';

import Footer from '@/components/ui/Footer';
import Nav from '@/components/ui/Nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import User_SideBar from '@/components/user/User_SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="flex flex-col">
      <Nav />

      <div className="bg-white dark:bg-[#161513] w-screen flex ">
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>
      </div>
      <Footer />
    </SidebarProvider>
  );
}
