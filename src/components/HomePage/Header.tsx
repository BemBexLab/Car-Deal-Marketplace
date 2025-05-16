'use client';

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-[#EFE3F5]">
      <div className="container max-w-[1612px] mx-auto px-4 py-4 flex justify-center items-center lg:gap-10 relative">

        {/* Logo Section */}
        <div className="flex-shrink-0 mr-6 z-20">
          <Image
            src="/logo/cdn-logo.svg"
            alt="Company Logo"
            width={160}
            height={40}
            priority
          />
        </div>

        {/* Desktop Navigation & Actions */}
        <div className="hidden lg:flex items-center justify-center lg:gap-10">
          {/* Navigation Links */}
          <ul className="flex items-center gap-6 text-[#282828] text-[16px] font-normal font-helvetica-now">
            <li className="cursor-pointer hover:text-[#7800B0] transition">Buy</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Sell</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Finance</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Vehicle Description</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">PNL Deals</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Demo Vehicles</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Research</li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4 ml-6">
            <div className="w-8 h-8 relative cursor-pointer">
              <Image src="/icons/Bell.svg" alt="Notifications" fill className="object-contain" />
            </div>
            <div className="w-8 h-8 relative cursor-pointer">
              <Image src="/icons/Heart.svg" alt="Favorites" fill className="object-contain" />
            </div>
          </div>

          {/* Auth Button */}
          <button className="ml-6 flex items-center px-6 py-2 rounded-full border border-[#7800B0] bg-white text-[#7800B0] text-[16px] font-medium hover:bg-[#7800B0] hover:border-white hover:text-white transition">
            Sign In / Register
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="absolute right-4 lg:hidden z-20 text-[#7800B0]">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 bg-[#EFE3F5] border-t border-gray-200">
          <ul className="flex flex-col gap-4 mt-4 text-[#282828] text-[16px] font-normal font-helvetica-now">
            <li className="cursor-pointer hover:text-[#7800B0] transition">Buy</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Sell</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Finance</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Vehicle Description</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">PNL Deals</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Demo Vehicles</li>
            <li className="cursor-pointer hover:text-[#7800B0] transition">Research</li>
          </ul>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-8 h-8 relative cursor-pointer">
              <Image src="/icons/Bell.svg" alt="Notifications" fill className="object-contain" />
            </div>
            <div className="w-8 h-8 relative cursor-pointer">
              <Image src="/icons/Heart.svg" alt="Favorites" fill className="object-contain" />
            </div>
          </div>

          <button className="mt-4 w-full px-6 py-2 rounded-full border border-[#7800B0] bg-white text-[#7800B0] text-[16px] font-medium hover:bg-[#7800B0] hover:border-white hover:text-white transition">
            Sign In / Register
          </button>
        </div>
      )}
    </header>
  );
}