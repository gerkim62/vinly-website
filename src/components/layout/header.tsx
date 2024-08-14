"use client";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-blue-700">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav
          onClick={() => setIsOpen(false)}
          className="md:hidden bg-white shadow-lg"
        >
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
          >
            Home
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
          >
            Services
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
