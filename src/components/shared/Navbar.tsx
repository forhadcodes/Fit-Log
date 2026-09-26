"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Navbtn from "../liftDetails/Navbtn";
import { usePathname } from "next/navigation"; 

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-neutral text-neutral-content sticky top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 border-b border-base-200/10 backdrop-blur-md bg-opacity-95 shadow-lg transition-all duration-300 py-3">
      <div className="container mx-auto flex items-center justify-between gap-2 w-full">
        
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group select-none shrink-0">
          <div className="avatar">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 p-1 ring-1 ring-primary/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <Image
                src={Logo}
                alt="FITLOG Logo"
                width={25}
                height={25}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-base sm:text-lg font-black tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden xs:block font-sans uppercase">
            FITLOG
          </p>
        </Link>

        {/* Center Side: Navigation Links (Takes available space, scales button padding) */}
        <div className="flex-grow flex justify-center">
          <ul className="flex items-center gap-1 sm:gap-3 md:gap-4 font-medium">
            <li>
              <Link
                href="/"
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  pathname === "/" 
                    ? "bg-base-100/20 text-primary border border-primary/20" 
                    : "text-neutral-400 hover:text-white hover:bg-base-100/10"
                }`}
              >
                Workout
              </Link>
            </li>
            <li>
              <Link
                href="/listed-plan"
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  pathname === "/listed-plan" // 💡 Fixed to match the actual href path
                    ? "bg-base-100/20 text-primary border border-primary/20" 
                    : "text-neutral-400 hover:text-white hover:bg-base-100/10"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Auth / CTA Button (Stays anchored to the right) */}
        <div className="shrink-0 flex justify-end">
          <Navbtn />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
