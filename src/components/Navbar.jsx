"use client";

import Image from 'next/image';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/Products', label: 'Products' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div className="w-full h-auto flex flex-col">
      {/* Main Container with Custom Shape at the Bottom */}
      <div className="relative h-[655.44px] overflow-hidden">
        {/* Background Image */}
        <div
          className="w-full bg-cover bg-center backdrop-blur-[4.6px]"
          style={{ backgroundImage: "url('/Rectangle 1.png')" }}
        >
          <nav className="w-full bg-cover bg-center backdrop-blur-[4.6px] top-[35px] relative">
            {/* Navigation Bar */}
            <div className="h-[171px] flex items-center justify-between px-4 md:justify-evenly">
              {/* Left Section */}
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-[rgb(23,44,71)] hover:text-green-600 transition-colors duration-300"
                >
                  <AiFillHome size={24} />
                  <span>Home</span>
                </Link>
                {navLinks.slice(1, 3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[rgb(23,44,71)] hover:text-green-600 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Center Logo */}
              <div className="flex justify-center items-center">
                <Image
                  src="/logoEninova.png"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="cursor-pointer"
                />
              </div>

              {/* Right Section */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.slice(3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[rgb(23,44,71)] hover:text-green-600 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact">
                  <button className="border-2 border-[rgb(23,44,71)] text-[rgb(23,44,71)] font-semibold py-2 px-4 rounded hover:bg-[rgb(83,188,105)] hover:text-white transition-all duration-300">
                    Contact Us
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                  className="text-[rgb(23,44,71)]"
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>

            {/* Second Container */}
            <div className="h-[51px] hover:text-white flex items-center bg-white justify-center">
              <p
                className="text-[rgb(23,44,71)] hover:bg-[rgb(23,44,71)] hover:text-white font-[400] text-[20px] leading-[32.9px] text-center w-full"
                style={{ fontFamily: 'Noto Sans Lao, sans-serif' }}
              >
                Advertise with us
              </p>
            </div>
          </nav>
        </div>

        {/* Custom SVG Shape with Stroke */}
        <div className="custom-shape-divider-bottom-1733130099">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
              stroke="#23b24d"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-4/5">
            <div className="flex justify-between items-center">
              <Image
                src="/logoEninova.png"
                alt="Logo"
                width={120}
                height={120}
              />
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-[rgb(23,44,71)]"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[rgb(23,44,71)] hover:text-green-600"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <button className="border-2 border-[rgb(23,44,71)] text-[rgb(23,44,71)] font-semibold py-2 px-4 rounded hover:bg-[rgb(23,44,71)] hover:text-white transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
