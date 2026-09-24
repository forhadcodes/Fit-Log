import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-neutral text-neutral-content sticky top-0 left-0 right-0 z-50 px-4 md:px-8 border-b border-base-200/10 backdrop-blur-md bg-opacity-95 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between w-full">
        {/* LEFT SIDE: Brand Logo & Title */}
        <div className="flex items-center gap-3 group select-none">
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
          <p className="text-lg font-black tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:block">
            FITLOG
          </p>
        </div>

        {/* CENTER: Navigation Links */}
        <ul className="flex items-center gap-1 md:gap-2 font-medium">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm hover:bg-base-100/10 hover:text-primary transition-all duration-200 group"
            >
              <svg
                xmlns="http://w3.org"
                className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span className="font-semibold tracking-wide text-xs sm:text-sm">
                Workouts
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/MyPlan"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm hover:bg-base-100/10 hover:text-primary transition-all duration-200 group"
            >
              <svg
                xmlns="http://w3.org"
                className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold tracking-wide text-xs sm:text-sm">
                My Plan
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          {/* Plan Button with Bright Yellow/Green Counter */}
          <div className="flex items-center gap-2 select-none group cursor-pointer">
            <span className="text-zinc-400 font-medium text-sm group-hover:text-white transition-colors duration-150">
              Plan
            </span>
            <span className="w-6 h-6 rounded-full bg-[#CCFF00] text-black font-bold text-xs flex items-center justify-center shadow-sm shadow-[#CCFF00]/20">
              0
            </span>
          </div>

          {/* Saved Button with Muted/Outlined Counter */}
          <div className="flex items-center gap-2 select-none group cursor-pointer">
            <span className="text-zinc-400 font-medium text-sm group-hover:text-white transition-colors duration-150">
              Saved
            </span>
            <span className="w-6 h-6 rounded-full border border-zinc-700 bg-zinc-900/50 text-zinc-400 font-medium text-xs flex items-center justify-center group-hover:border-zinc-500 group-hover:text-zinc-200 transition-colors duration-150">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
