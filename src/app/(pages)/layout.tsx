'use client';

import React, { useEffect } from 'react';
import Footer from '@/components/ui/Footer';
import Nav from '@/components/ui/Nav';
import { CursorProvider, useCursor } from '@/context/CursorContext';
import Cursor from '@/features/cursor/Component/Cursor';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 👇 Inner layout to move cursor inside the provider
const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  const { cursorRef } = useCursor();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cursorRef.current) {
      const offsetX = cursorRef.current.offsetWidth / 2;
      const offsetY = cursorRef.current.offsetHeight / 2;
      cursorRef.current.style.left = `${e.clientX - offsetX}px`;
      cursorRef.current.style.top = `${e.clientY - offsetY}px`;
    }
  };

  return (
    <div className="cursor-none overflow-hidden" onMouseMove={handleMouseMove}>
      <Cursor />
      <Nav />
      <div className="bg-white dark:bg-[#161513] w-screen flex ">
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

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
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    });

    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CursorProvider>
      <InnerLayout>{children}</InnerLayout>
    </CursorProvider>
  );
}
