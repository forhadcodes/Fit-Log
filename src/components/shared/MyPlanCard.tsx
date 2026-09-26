import { ILiftData } from "@/types/liftcard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IMyPlanCardProps {
  lift: ILiftData;
}
const MyPlanCard = ({ lift }: IMyPlanCardProps) => {
  return (
    <div className="w-full bg-[#070a0f] p-2 sm:p-4">
      <div className="bg-[#111622] border border-slate-800/80 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full shadow-xl transition-all hover:border-slate-700/60 gap-4 sm:gap-0">
        <div className="flex items-center space-x-4 w-full sm:w-auto min-w-0">
          <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-slate-700/30 bg-[#161f30]">
            <Image
              src={lift.image}
              alt={lift.name || "Workout Image"}
              width={150}
              height={110}
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>

          <div className="flex flex-col min-w-0 justify-center">
            <h3 className="text-white font-black tracking-wide text-[13px] sm:text-[14px] uppercase truncate">
              {lift.name || "Barbell Bench Press"}
            </h3>

            <p className="text-[11px] text-slate-400 font-medium mt-0.5 truncate">
              {lift.equipment || "Barbell, Bench"}
            </p>

            <div className="flex items-center space-x-3 text-[10px] font-bold mt-1.5 text-slate-300">
              <div className="flex items-center gap-1">
                <span className="text-[#cbf300] text-xs">⏱</span>
                <span>{lift.duration || 25} min</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[#cbf300] text-xs">🔥</span>
                <span>{lift.caloriesBurned || 180} kcal</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[#cbf300] text-xs">⭐</span>
                <span>{lift.rating || 4.8}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-3 border-t border-slate-800/60 sm:border-none pt-2 sm:pt-0">
          <div className="flex items-center space-x-2.5">
            <Link href={`/lift-details/${lift.id}`}>
              <button className="border border-slate-700/80 hover:bg-slate-800 text-slate-200 text-[11px] font-bold px-4 py-1.5 rounded-full transition-all bg-transparent">
                View Details
              </button>
            </Link>

            <button
              onClick={() => {}}
              className="bg-[#cbf300] hover:bg-[#b5da00] text-black text-[11px] font-black px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md shadow-[#cbf300]/5 transition-all transform active:scale-95"
            >
              <span className="text-[10px] stroke-[3]">✓</span>
              <span>Mark as Done</span>
            </button>
          </div>

          <button
            onClick={() => {}}
            className="text-slate-500 hover:text-red-400 text-sm pl-1 transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;
