'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const links = ['home', 'services', 'projects', 'about', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/75 backdrop-blur-2xl border-b border-[#C9A84C]/10 shadow-[0_8px_30px_rgb(0,0,0,0.35)]">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-xl border border-[#C9A84C]/20 bg-white/5 p-1 transition-all duration-500 group-hover:border-[#C9A84C]/70 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]">

            <Image
              src="/fynG.png"
              alt="FYN Studios"
              width={42}
              height={42}
              className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-semibold tracking-[0.35em] text-sm">
              FYN
            </span>
            <span className="text-[#C9A84C] uppercase tracking-[0.45em] text-[10px]">
              STUDIOS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative text-sm uppercase tracking-[0.2em] font-medium text-gray-300 transition-all duration-300 hover:text-white group"
            >
              {t(`navbar.${l}`)}

              {/* underline */}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-[#C9A84C] to-[#e8d08a] transition-all duration-500 group-hover:w-full rounded-full"></span>

              {/* glow */}
              <span className="absolute inset-0 rounded-md opacity-0 transition duration-300 group-hover:opacity-100 group-hover:bg-[#C9A84C]/5"></span>
            </a>
          ))}
          
          {/* Language Switcher - Added here */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden h-11 w-11 rounded-xl border border-[#C9A84C]/20 bg-white/5 text-white transition-all duration-300 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-lg"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-[#C9A84C]/10 bg-black/95 backdrop-blur-xl p-6 shadow-2xl">

          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
            >
              {t(`navbar.${l}`)}
            </a>
          ))}

          {/* Language Switcher in Mobile Menu */}
          <div className="mt-4 pt-4 border-t border-[#C9A84C]/10">
            <LanguageSwitcher />
          </div>

        </div>
      </div>
    </nav>
  );
}
