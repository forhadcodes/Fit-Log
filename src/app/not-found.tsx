"use client";

import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-neutral text-neutral-content selection:bg-[#CCFF00] selection:text-black">
      <div className="max-w-md w-full flex flex-col items-center space-y-6">
        
        {/* Visual Anchor: Animated 404 Accent Badge */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#CCFF00] to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-8 py-6 bg-base-300/40 border border-base-200/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
            <span className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
              404
            </span>
          </div>
        </div>

        {/* Text Header Content */}
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-wider font-sans">
            Route Dropped / Page Lost
          </h1>
          <p className="text-sm text-neutral-400 max-w-sm mx-auto font-medium leading-relaxed">
            The workout routine or page you are trying to access doesn't exist or has been shifted to a new schedule.
          </p>
        </div>

        {/* CTA Actions Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full pt-2">
          {/* Main Action Call to Action */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl hover:bg-[#b5e000] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#CCFF00]/10 uppercase"
          >
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Dashboard
          </Link>

          {/* Secondary Action Link */}
          <Link
            href="/listed-plan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-base-100/10 border border-base-200/40 text-white font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl hover:bg-base-100/20 hover:text-white transition-all duration-200 uppercase"
          >
            View My Plan
          </Link>
        </div>

      </div>
    </div>
  );
}
