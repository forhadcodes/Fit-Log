"use client";

import MyPlanCard from "@/components/shared/MyPlanCard";
import { LiftCardContext } from "@/context/LiftContext";
import { ILiftData } from "@/types/liftcard";
import Image from "next/image";
import React, { useContext } from "react";

const ListedLift = () => {
  const { todaysPlan, savedForLater } = useContext(LiftCardContext);
  console.log(todaysPlan, savedForLater, "Todays Plan", "Saved for later");
  return (
    <div className="container mx-auto py-[20px] ">
      <h2> MY PLAN </h2>
      <p>Cap of five lifts for today. Finish them, then load more.</p>
      <div className="container mx-auto ">
        exercise, minutes, calories click er somoy add hbe
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Todays Plan"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {todaysPlan.length > 0 ? (
            todaysPlan.map((lift: ILiftData) => {
              return <MyPlanCard key={lift.id} lift={lift}></MyPlanCard>;
            })
          ) : (
            <p>No plan found</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {savedForLater.length > 0 ? (
            savedForLater.map((lift: ILiftData) => {
              return <MyPlanCard key={lift.id} lift={lift}></MyPlanCard>;
            })
          ) : (
            // Nothing here yet start
            <div className="flex items-center justify-center min-h-screen bg-[#0d0e12] p-6">
              <div className="w-full max-w-5xl rounded-2xl border border-neutral-800/40 bg-[#121318] py-20 px-4 text-center shadow-2xl">
                <h2 className="tracking-wide text-2xl md:text-3xl font-black uppercase text-white font-sans">
                  Nothing here yet
                </h2>

                <p className="mt-2 text-sm md:text-base font-normal tracking-wide text-neutral-400">
                  Browse the library and add a lift to get today moving.
                </p>

                <div className="mt-8">
                  <button className="cursor-pointer rounded-full bg-[#ccff00] px-8 py-3 text-sm md:text-base font-bold text-black shadow-[0_4px_20px_rgba(204,255,0,0.35)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                    Go to workouts
                  </button>
                </div>
              </div>
            </div>
            // nothing here yet end
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedLift;
