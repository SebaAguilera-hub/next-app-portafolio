"use client";

import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href="/curriculum" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Curriculum</Link>
                <Link href="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Proyectos</Link>
                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sobre mí</Link>
                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contacto</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <Link href="/curriculum" className="text-gray-300 block hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Curriculum</Link>
                <Link href="/projects" className="text-gray-300 block hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Proyectos</Link>
                <Link href="/about" className="text-gray-300 block hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sobre mí</Link>
                <Link href="/contact" className="text-gray-300 block hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
