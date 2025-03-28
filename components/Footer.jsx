"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <Image 
              src="/vital-track-logo.png"
              alt="Vital Track Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="font-bold">Vital Track</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
            <Link
              href="/features"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 md:space-x-8">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaFacebook size={20} className="md:w-6 md:h-6" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaTwitter size={20} className="md:w-6 md:h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaInstagram size={20} className="md:w-6 md:h-6" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs md:text-sm text-center">
            © 3nergy 2023 All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
