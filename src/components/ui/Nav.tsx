import { NAV_LINKS } from '@/constant/Nav.constant';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SunIcon } from './sun';
import { MoonIcon } from './moon';
import { Button } from '@/components/ui/button';
import CallBack from '@/features/CallBack/CallBack';
import { useCursor } from '@/context/CursorContext';
import gsap from 'gsap';

const Nav = () => {
  let { cursorRef } = useCursor()
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    );
  }, [isDark]);

  return (
    <div className="h-[10vh] w-screen bg-[#f1e9e9] dark:bg-[#222222] flex items-center relative justify-between px-6 shadow-sm dark:shadow-none">
      <div
        className="Nav_Logo w-[30%] flex justify-end items-center"
        data-testid="Nav_Logo"
      >
        <div className="rounded-full  bg-[#F3F3F3] dark:bg-[#222222] p-2 flex items-center justify-center">
          <Image
            src="/svg/vercel.svg"
            width={60}
            height={60}
            alt="Logo"
            className="object-contain invert dark:invert-0"
          />
        </div>
      </div>
      <div
        className="Nav_Link text-[1vw] font-[var(--font-plus-jakarta-sans)]"
        data-testid="Nav_Link"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => {
              if (cursorRef.current) {
               gsap.to(cursorRef.current, { scale: 2, backgroundColor: 'rgba(255, 134, 96, 0.8)', borderColor: '#FF8660', duration: 0.3 });
              }
            }}
            onMouseLeave={() => {
              if (cursorRef.current) {
               gsap.to(cursorRef.current, { scale: 1, backgroundColor: 'white', borderColor: '#FFFFFF', duration: 0.3 });
              }
            }}
            target={link.external ? '_blank' : '_self'}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="px-4 py-2 cursor-none text-[#232526] dark:text-white hover:text-[#FF8660] dark:hover:text-[#FF8660] transition font-semibold"
            data-testid={`Nav_Link_${link.label}`}
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.label}
          </Link>
        ))}
      </div>
      <div className="Nav_Controller w-[30%] flex justify-end items-center gap-4">
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="p-2 rounded-full border border-[#232526] dark:border-white bg-[#F3F3F3] dark:bg-[#232526] text-[#232526] dark:text-white hover:bg-[#eaeaea] dark:hover:bg-[#333] transition"
          aria-label="Toggle theme"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
        <Button
          variant="ghost"
          className="p-2 rounded-full border border-[#232526] dark:border-white bg-[#F3F3F3] dark:bg-[#232526] text-[#232526] dark:text-white hover:bg-[#eaeaea] dark:hover:bg-[#333] transition flex items-center"
          aria-label="Request a Call"
        >
          <CallBack />
        </Button>
        <Button
          variant="default"
          className="font-semibold px-6 py-2 rounded-full bg-[#FF8660] text-white hover:bg-[#D5491D] transition"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Nav;
