"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Navbtn from "../liftDetails/Navbtn";
import { usePathname } from "next/navigation"; // একটিভ পেজ হাইলাইট করার জন্য

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-neutral text-neutral-content sticky top-0 left-0 right-0 z-50 px-4 md:px-8 border-b border-base-200/10 backdrop-blur-md bg-opacity-95 shadow-lg transition-all duration-300 py-3">
      <div className="container mx-auto flex items-center justify-between w-full">
        
        {/* LEFT SIDE: Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group select-none flex-1 justify-start">
          <div className="avatar">
            <div className="w-9 h-9 rounded-xl bg-primary/10 p-1 ring-1 ring-primary/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <Image
                src={Logo}
                alt="FITLOG Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-lg font-black tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:block font-sans uppercase">
            FITLOG
          </p>
        </Link>

        {/* CENTER: Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center gap-2 md:gap-4 font-medium">
            <li>
              <Link
                href="/"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  pathname === "/my-plan" 
                    ? "bg-base-100/20 text-primary border border-primary/20" 
                    : "text-neutral-400 hover:text-white hover:bg-base-100/10"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE: Dynamic Action Counters */}
        <div className="flex-1 flex justify-end">
          <Navbtn />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
