"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and brand */}
        <div className="flex gap-2">
          <Link href="/" className="navbar-brand flex items-center gap-2">
            <Image
              src="/vital-track-logo.png"
              alt="Vital Track Logo"
              width={30}
              height={30}
            />
            <span className="font-bold text-lg text-gray-800">Vital Track</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/team"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/signin"
            className="px-6 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-2">
            <span
              className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-gray-600 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
          >
            Features
          </Link>
          <Link
            href="/team"
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
          >
            Contact
          </Link>
          <Link
            href="/signin"
            className="px-6 py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 text-center"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
