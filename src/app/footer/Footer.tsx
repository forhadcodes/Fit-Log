import Image from 'next/image';
import FooterLogo from '@/assets/logo.png'
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#121318] border-t border-neutral-800/40 px-6 py-6 md:px-12">
  <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    
   
    <div className="flex items-center gap-2">
      
      <Image src={FooterLogo}
      alt="FITLOG Logo"
      width={32}
      height={32}
      className="object-contain"></Image>


     
      <span className="text-white font-sans font-black tracking-wider text-base uppercase">
        FitLog
      </span>
    </div>


    <p className="text-xs font-normal tracking-wide text-neutral-500 text-center md:text-right">
      &copy; 2026 FitLog — Workout Library. Train hard, log honest.
    </p>

  </div>
</footer>

    );
};

export default Footer;