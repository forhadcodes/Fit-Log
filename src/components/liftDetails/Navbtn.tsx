"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { LiftCardContext } from "@/context/LiftContext"; // আপনার কনটেক্সটের সঠিক পাথ দিন

const Navbtn = () => {
  // গ্লোবাল স্টেট থেকে লাইভ প্ল্যান এবং সেভড ডাটা নিয়ে আসা
  const { todaysPlan, savedForLater } = useContext(LiftCardContext);

  return (
    <nav className="w-full border-b border-neutral-800/40 px-6 py-4 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
         

        {/* ডান পাশ: ডাইনামিক এবং ক্লিকবল স্ট্যাটাস ব্যাজ কাউন্টার */}
        <div className="flex items-center gap-3">
          
          {/* ১. Plan Badge - অ্যাকসেন্ট নিয়ন ব্যাকগ্রাউন্ড পিল বাটন */}
          <Link 
            href="/my-plan" 
            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black transition-all duration-200 hover:scale-[1.02] shadow-[0_2px_10px_rgba(204,255,0,0.15)]"
          >
            <span>Plan</span>
            <span className="bg-black/10 px-1.5 py-0.5 rounded-full text-[10px]">
              {todaysPlan?.length || 0}
            </span>
          </Link>

          {/* ২. Saved Badge - বর্ডার/আউটলাইন পিল বাটন */}
          <Link 
            href="/my-plan" 
            className="flex items-center gap-1.5 rounded-full border border-neutral-700/80 bg-neutral-900/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-neutral-500 hover:bg-neutral-900"
          >
            <span>Saved</span>
            <span className="bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded-full text-[10px] border border-neutral-800">
              {savedForLater?.length || 0}
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbtn;
