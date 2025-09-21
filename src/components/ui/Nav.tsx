'use client';

import { NAV_LINKS } from '@/constant/Nav.constant';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SunIcon } from './sun';
import { MoonIcon } from './moon';
import { Button } from '@/components/ui/button';
import CallBack from '@/features/CallBack/v1/Components/CallBack';
import { useCursor } from '@/context/CursorContext';
import { TiThMenu } from 'react-icons/ti';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

const Nav = () => {
  let { cursorRef } = useCursor();
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    );
  }, [isDark]);

  useEffect(() => {
    if (menuOpen && mobileNavRef.current) {
      gsap.fromTo(
        mobileNavRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.5, ease: 'power2.out' }
      );
    }
    // if (!menuOpen && mobileNavRef.current) {
    //   gsap.to(mobileNavRef.current, {
    //     x: '100%',
    //     duration: 0.5,
    //     ease: 'power2.in',
    //   });
    // }
  }, [menuOpen]);

  return (
    <nav className="py-[0.5vh] px-[0.2vw] w-full lg:w-[60%] fixed bg-[#f1e9e9] dark:bg-[#222222]/50  backdrop-blur-xl flex items-center justify-between  md:px-10 shadow-sm dark:shadow-none border-[1px] border-[#e5e7eb] dark:border-[#ffffff]/20  left-1/2 -translate-x-1/2 lg:top-10  z-[1000] lg:rounded-full">
      {/* Logo */}
      <div className="Nav_Logo w-fit flex items-center" data-testid="Nav_Logo">
        <div className="rounded-full bg-[#F3F3F3] dark:bg-[#222222] md:p-2 flex items-center justify-center md:shadow-md h-fit">
          <Image
            src="/svg/vercel.svg"
            width={48}
            height={0}
            alt="Logo"
            className="object-contain  w-[5rem]  lg:w-[2.5vw]"
          />
        </div>
      </div>
      {/* Desktop Links */}
      <div className="Nav_Link hidden lg:flex font-[var(--font-plus-jakarta-sans)] gap-4 items-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => {
              if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                  scale: 2,
                  backgroundColor: 'rgba(255, 134, 96, 0.8)',
                  borderColor: '#FF8660',
                  duration: 0.3,
                });
              }
            }}
            onMouseLeave={() => {
              if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                  scale: 1,
                  backgroundColor: 'white',
                  borderColor: '#FFFFFF',
                  duration: 0.3,
                });
              }
            }}
            target={link.external ? '_blank' : '_self'}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="px-4 py-2 cursor-none text-[#232526] dark:text-white hover:text-[#FF8660] dark:hover:text-[#FF8660] transition font-semibold rounded-lg"
            data-testid={`Nav_Link_${link.label}`}
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.label}
          </Link>
        ))}
      </div>

      <div className="Nav_Controller flex items-center gap-2">
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="p-2  rounded-full border border-[#232526] dark:border-white bg-[#F3F3F3] dark:bg-[#232526] text-[#232526] dark:text-white hover:bg-[#eaeaea] dark:hover:bg-[#333] transition hidden md:block"
          aria-label="Toggle theme"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
        <Button
          variant="ghost"
          className="rounded-full border border-[#232526] dark:border-white bg-[#F3F3F3] dark:bg-[#232526] text-[#232526] dark:text-white hover:bg-[#eaeaea] dark:hover:bg-[#333] transition flex items-center"
          aria-label="Request a Call"
        >
          <CallBack />
        </Button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#232526] dark:text-white p-2  bg-[#F3F3F3] dark:bg-[#232526] hover:bg-[#eaeaea] dark:hover:bg-[#333] transition flex items-center"
          aria-label="Open menu"
        >
          <TiThMenu size={30} />
        </button>
        <Button
          onClick={() => {
            router.push('/login');
          }}
          variant="default"
          className="font-semibold px-6 py-2 rounded-full bg-[#FF8660] text-white hover:bg-[#D5491D] transition hidden lg:block"
        >
          Login
        </Button>
      </div>
      {/* Mobile Menu Drawer */}
      <div
        ref={mobileNavRef}
        className={`Mobile_Nav top-[10vh] right-0 h-screen w-full overflow-hidden bg-[#f1e9e9] dark:bg-[#222222]/10  backdrop-blur-xl  shadow-2xl flex flex-col items-center px-[1.5vw] py-8 absolute lg:hidden border-b border-[#e5e7eb] dark:border-t-white z-[800]`}
        style={{
          transform: menuOpen ? 'translateX(0%)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.77,0,0.175,1)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target={link.external ? '_blank' : '_self'}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="w-[90%] text-center py-3 text-lg text-[#232526] dark:text-white hover:text-[#FF8660] dark:hover:text-[#FF8660] font-semibold transition rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.label}
          </Link>
        ))}

        <Button
          onClick={() => {
            router.push('/login');
          }}
          className="!z-[9999] !relative font-semibold px-6 py-2 rounded-full bg-[#FF8660] text-white hover:bg-[#D5491D] transition mt-6 w-[90%] border-4 cursor-none border-green-500 "
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
