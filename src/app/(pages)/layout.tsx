'use client';

import Nav from '@/components/ui/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="bg-[#161513] w-screen flex items-center justify-center">
        {children}
      </div>
    </>
  );
}
