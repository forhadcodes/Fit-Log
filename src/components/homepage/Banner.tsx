import React from 'react';
import Banimg from '@/assets/banner.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="w-full bg-black text-white flex items-center justify-center py-16 px-6 md:px-12">
      
      {/* Inner Card Div: Beautiful Slate Gray Container matching the photo */}
      <div className=" container mx-auto bg-[#1a1b1e] rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-zinc-800/60 shadow-2xl">
        
        {/* LEFT CONTENT BLOCK */}
        <div className="w-full md:w-[55%] flex flex-col items-start gap-4">
          
          {/* Subtitle Accent Category Tab */}
          <div className="inline-block border border-[#CCFF00]/30 bg-[#CCFF00]/5 px-2 py-0.5 rounded">
            <p className="text-[10px] font-bold tracking-widest text-[#CCFF00] uppercase font-mono">
              Workout Library
            </p>
          </div>
          
          {/* Main Massive Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-white uppercase font-sans">
            TRAIN WITH INTENT.LOG <br /> EVERY SET.
          </h1>
          
          {/* Description Paragraph */}
          <p className="text-sm md:text-base text-zinc-400 font-normal leading-relaxed max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>
          
          {/* Figma-Sized Button */}
          <button className="bg-[#CCFF00] text-black font-extrabold text-xs tracking-wider px-5 py-2.5 rounded-lg hover:bg-[#b5e000] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#CCFF00]/10 mt-2 uppercase">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="w-full md:w-[40%] flex justify-center items-center">
          <div className="relative w-[280px] sm:w-[320px] lg:w-[380px] aspect-[1/1] flex items-center justify-center">
            <Image 
              src={Banimg}
              alt="Gym Equipment Graphic"
              fill
              priority
              className="object-contain"
              sizes="(max-w-768px) 280px, (max-w-1024px) 320px, 380px"
            />
          </div>
        </div>

      </div>
    </div>
    );
};

export default Banner;