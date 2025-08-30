import { NAV_LINKS } from '@/constant/Nav.constant';
import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

const Nav = () => {
  return (
    <div className="h-[10vh] w-screen bg-[#222222] flex items-center justify-between">
      <div
        className="Nav_Logo w-[30%] flex justify-end items-center"
        data-testid="Nav_Logo"
      >
        <Image
          src="/svg/vercel.svg"
          width={80}
          height={80}
          alt="Picture of the author"
        />
      </div>
      <div
        className="Nav_Link text-[1vw] font-[var(--font-plus-jakarta-sans)]"
        data-testid="Nav_Link"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target={link.external ? '_blank' : '_self'}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="px-4 py-2 text-white"
            data-testid={`Nav_Link_${link.label}`}
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.label}
          </Link>
        ))}
      </div>
      <div className="Nav_Controller w-[30%]"></div>
    </div>
  );
};

export default Nav;
