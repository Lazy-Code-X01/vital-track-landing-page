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
        <div className="flex items-center gap-2">
          {/* You'll need to add your logo image here */}
          <Image
            src="/vital-track-logo.png"
            alt="Vital Tracks Logo"
            width={32}
            height={32}
          />
          <span className="text-lg font-semibold text-gray-800">
            VITAL TRACKS
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
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
