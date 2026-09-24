"use client";
import { LiftCardContext } from "@/context/LiftContext";
import { ILiftData } from "@/types/liftcard";
import React, { useContext } from "react";

const TodaysPlanBtn = ({lift}:{lift: ILiftData}) => {

    const {todaysPlan, setTodaysPlan} =useContext(LiftCardContext);
    // console.log(liftProvider, 'Lift Provider');

    const handleTodaysPlan = () => {
        console.log('todays plan btn trigger', lift);
        setTodaysPlan([...todaysPlan, lift])
        alert(`You have read "${lift.name}"`)
    }
  return (
    <div>
      <button className="flex-1 bg-[#CCFF00] hover:bg-[#b5e000] text-black font-extrabold py-3.5 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 text-sm uppercase tracking-wide" onClick={()=> handleTodaysPlan()}>
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
