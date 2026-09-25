import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#121318] border-t border-neutral-800/40 px-6 py-6 md:px-12">
  <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Left Side: Brand Logo */}
    <div className="flex items-center gap-2">
      {/* Dumbbell/Barbell Icon */}
      <svg className="w-5 h-5 text-[#ccff00] transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6.5 6.5h11" />
        <path d="M6.5 9h11" />
        <path d="M3 7h3v10H3z" />
        <path d="M18 7h3v10h-3z" />
        <path d="M11.5 5v14" />
      </svg>
     {/* Logo Text */}
      <span className="text-white font-sans font-black tracking-wider text-base uppercase">
        FitLog
      </span>
    </div>

{/* Right Side: Copyright Text */}
    <p className="text-xs font-normal tracking-wide text-neutral-500 text-center md:text-right">
      &copy; 2026 FitLog — Workout Library. Train hard, log honest.
    </p>

  </div>
</footer>

    );
};

export default Footer;