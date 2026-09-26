"use client";
import { LiftCardContext } from "@/context/LiftContext";
import { ILiftData } from "@/types/liftcard";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const TodaysPlanBtn = ({ lift }: { lift: ILiftData }) => {
  const { todaysPlan, setTodaysPlan } = useContext(LiftCardContext);

  const handleTodaysPlan = () => {
    // 💡 ডাবল-ক্লিক প্রতিরোধ করতে চেক করা হচ্ছে ওয়ার্কআউটটি অলরেডি তালিকায় আছে কিনা
    const isAlreadyAdded = todaysPlan.some(
      (item) => String(item.id) === String(lift.id)
    );

    if (isAlreadyAdded) {
      toast.error("This workout is already in today's plan!");
      return; // কোড এক্সিকিউশন এখানেই স্টপ হয়ে যাবে
    }

    // তালিকায় না থাকলে নতুন করে যুক্ত হবে
    setTodaysPlan([...todaysPlan, lift]);
    toast.success(`You have added "${lift.name}" to today's plan!`);
  };

  return (
    <div className="flex-1 w-full">
      <button 
        className="w-full bg-[#CCFF00] hover:bg-[#b5e000] text-black font-extrabold py-3.5 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 text-sm uppercase tracking-wide cursor-pointer" 
        onClick={() => handleTodaysPlan()}
      >
        <svg
          xmlns="http://w3.org"
          className="h-4 w-4 stroke-[3]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add to today's plan
      </button>
    </div>
  );
};

export default TodaysPlanBtn;
