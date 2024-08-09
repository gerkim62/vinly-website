"use client";
import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center">
              <span className="sr-only">Lyvin Forward Premier Company</span>
              <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">L</div>
              <span className="ml-3 text-xl font-bold text-indigo-700">LFPC</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <a href="/about" className="text-base font-medium text-indigo-600 hover:text-indigo-700">About</a>
            <a href="/what-we-do" className="text-base font-medium text-gray-700 hover:text-indigo-700">Services</a>
            <a href="/our-team" className="text-base font-medium text-gray-700 hover:text-indigo-700">Team</a>
           
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="/contact"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100">About</a>
          <a href="/what-we-do" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-100">Services</a>
          <a href="/our-team" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-100">Team</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <a
            href="/contact"
            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-indigo-100"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;