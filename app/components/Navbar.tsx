'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/iSign.apk';
    link.download = 'iSign.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
   <nav
  className="fixed top-6 inset-x-0 mx-auto z-50 w-[95%] lg:w-[95%] max-w-5xl lg:max-w-none bg-white rounded-2xl"
  style={{ border: "3px solid #343434" }}
>
      {/* Main Row */}
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-lexend text-xl">
            <span style={{ color: "#F9686A" }}>i</span>
            <span style={{ color: "#343434" }}>Sign</span>
          </span>
          <Image src="/logo.png" alt="iSign logo" width={32} height={32} />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="font-lexend text-sm text-[#343434] hover:opacity-60 transition-none"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="font-lexend text-sm text-[#343434] hover:opacity-60 transition-none"
          >
            Contact Us
          </Link>

          <button
            onClick={handleDownload}
            className="font-lexend text-sm px-4 py-2 rounded-xl border-[3px] border-[#343434]
               bg-[#FCFAC8] text-[#343434]
               transition-none
               hover:bg-[#343434] hover:text-[#FCFAC8]
               hover:scale-110 active:scale-90 cursor-pointer"
          >
            Download Now
          </button>
        </div>

        {/* Hamburger - mobile only */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#343434' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col items-center gap-4 px-6 pb-5"
          style={{ borderTop: '3px solid #343434' }}
        >
          <Link
            href="/about"
            className="font-lexend text-sm text-[#343434] hover:opacity-60 pt-4"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="font-lexend text-sm text-[#343434] hover:opacity-60"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          <button
            onClick={() => {
              handleDownload();
              setMenuOpen(false);
            }}
            className="font-lexend text-sm px-4 py-2 rounded-xl border-[3px] border-[#343434]
               bg-[#FCFAC8] text-[#343434]
               hover:bg-[#343434] hover:text-[#FCFAC8] cursor-pointer"
          >
            Download Now
          </button>
        </div>
      )}

    </nav>
  );
}
