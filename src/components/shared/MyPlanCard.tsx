import { ILiftData } from "@/types/liftcard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IMyPlanCardProps {
  lift: ILiftData;
  isSavedTab: boolean;
}

const MyPlanCard = ({ lift, isSavedTab }: IMyPlanCardProps) => {
  return (
    <div className="w-full bg-[#070a0f] p-2 sm:p-4">
      <div className="flex w-full flex-col items-start justify-between gap-4 rounded-xl border border-slate-800/80 bg-[#111622] p-3 shadow-xl transition-all hover:border-slate-700/60 sm:flex-row sm:items-center sm:gap-0">
        
        <div className="flex min-w-0 w-full items-center space-x-4 sm:w-auto">
          
          <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-slate-700/30 bg-[#161f30]">
            <Image
              src={lift.image}
              alt={lift.name || "Workout Image"}
              width={150}
              height={110}
              className="h-full w-full rounded-xl object-cover object-top"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <h3 className="truncate text-[13px] font-black uppercase tracking-wide text-white sm:text-[14px]">
              {lift.name || "Barbell Bench Press"}
            </h3>

            <p className="mt-0.5 truncate text-[11px] font-medium text-slate-400">
              {lift.equipment || "Barbell, Bench"}
            </p>

            <div className="mt-1.5 flex items-center space-x-3 text-[10px] font-bold text-slate-300">
              
              <div className="flex items-center gap-1">
                <span className="text-xs text-[#cbf300]">⏱</span>
                <span>{lift.duration || 25} min</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-xs text-[#cbf300]">🔥</span>
                <span>{lift.caloriesBurned || 180} kcal</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-xs text-[#cbf300]">⭐</span>
                <span>{lift.rating || 0}</span>
              </div>

            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
          
          <Link href={`/lift-details/${lift.id}`}>
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-slate-700 bg-[#161f30] px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-white transition-all hover:border-[#cbf300] hover:text-[#cbf300]"
            >
              Details
            </button>
          </Link>

          {isSavedTab ? (
            <button
              type="button"
              className="cursor-pointer rounded-lg bg-[#cbf300] px-4 py-2 text-[10px] font-black uppercase tracking-wide text-black transition-all hover:scale-[1.02]"
            >
              Add
            </button>
          ) : (
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-red-400 transition-all hover:bg-red-500/20"
            >
              Remove
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;