'use client';

import React, { useEffect, useRef } from 'react';
import Footer from '@/components/ui/Footer';
import Nav from '@/components/ui/Nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import User_SideBar from '@/components/user/User_SideBar';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }: { children: React.ReactNode }) {
  const Circle_Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
   
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value);
        }
        return window.scrollY;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy && lenis.destroy();
      // ScrollTrigger.kill();
    };
  }, []);


  const Handle_Cursor_Move = (e: React.MouseEvent<HTMLDivElement>) => {
    if (Circle_Ref.current) {
      Circle_Ref.current.style.left = `${e.clientX - Circle_Ref.current.offsetWidth / 2}px`;
      Circle_Ref.current.style.top = `${e.clientY - Circle_Ref.current.offsetHeight / 2}px`;
    }
  };

  return (
    <SidebarProvider className="flex flex-col">
      <Nav />
      <div
        className="bg-white dark:bg-[#161513] w-screen flex relative cursor-none"
        onMouseMove={Handle_Cursor_Move}
      >
        <div
          className="Cursor bg-white dark:bg-[#ffffff] rounded-full h-[2vh] w-[1vw] fixed z-50 pointer-events-none mix-blend-difference"
          ref={Circle_Ref}
        ></div>
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>
      </div>
      <Footer />
    </SidebarProvider>
  );
}
