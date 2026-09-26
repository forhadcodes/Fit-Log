"use client";

import MyPlanCard from "@/components/shared/MyPlanCard";
import { LiftCardContext } from "@/context/LiftContext";
import { ILiftData } from "@/types/liftcard";
import Link from "next/link";
import React, { useContext, useState } from "react";

const ListedLift = () => {
  const { todaysPlan, savedForLater } = useContext(LiftCardContext);
  const [sortBy, setSortBy] = useState("Duration");
  
  const [activeTab, setActiveTab] = useState("today");

  const currentList = activeTab === "today" ? todaysPlan : savedForLater;

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc, curr) => acc + (parseInt(curr.duration) || 0), 0);
  const totalCalories = currentList.reduce((acc, curr) => acc + (parseInt(curr.caloriesBurned) || 0), 0);

  const sortWorkouts = (list: ILiftData[]) => {
    return [...list].sort((a, b) => {
      if (sortBy === "Duration") {
        return (parseInt(a.duration) || 0) - (parseInt(b.duration) || 0);
      }
      if (sortBy === "Calories") {
        return (parseInt(a.caloriesBurned) || 0) - (parseInt(b.caloriesBurned) || 0);
      }
      if (sortBy === "Rating") {
        return (parseFloat(a.rating) || 0) - (parseFloat(b.rating) || 0);
      }
      return 0;
    });
  };

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-800/40 bg-[#121318] px-4 py-16 text-center shadow-xl min-h-[350px] w-full">
      <h2 className="text-xl font-black uppercase tracking-wider text-white font-sans sm:text-2xl">
        Nothing here yet
      </h2>
      <p className="mt-2 max-w-sm text-xs font-normal tracking-wide text-neutral-400 sm:text-sm">
        Browse the library and add a lift to get today moving.
      </p>
      <div className="mt-8">
        <Link href="/">
          <button className="cursor-pointer rounded-full bg-[#ccff00] px-8 py-3 text-xs font-black uppercase tracking-wide text-black transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_20px_rgba(204,255,0,0.25)]">
            Go to workouts
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0d0e12] p-4 text-white font-sans sm:p-8 md:p-12">
      <div className="mx-auto max-w-7xl space-y-6">
        
        <div>
          <h1 className="text-3xl font-black uppercase tracking-wider font-sans">
            My Plan
          </h1>
          <p className="mt-1 text-xs tracking-wide text-neutral-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-[#121318] p-6 shadow-lg border border-neutral-800/20">
            <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase block mb-1">
              Exercises
            </span>
            <span className="text-4xl font-black text-[#ccff00]">
              {totalExercises}
            </span>
          </div>

          <div className="rounded-xl bg-[#121318] p-6 shadow-lg border border-neutral-800/20">
            <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase block mb-1">
              Minutes
            </span>
            <span className="text-4xl font-black text-white">
              {totalMinutes}
            </span>
          </div>

          <div className="rounded-xl bg-[#121318] p-6 shadow-lg border border-neutral-800/20">
            <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase block mb-1">
              Calories
            </span>
            <span className="text-4xl font-black text-white">
              {totalCalories}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-neutral-800/40">
          
          <div className="tabs tabs-boxed bg-[#121318] p-1.5 border border-neutral-800/60 max-w-max flex gap-1 rounded-full">
            {/* 🛠️ FIXED: বাটনের মাঝখানে "Today's Plan" টেক্সট যুক্ত করা হয়েছে */}
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-200 ${
                activeTab === "today"
                  ? "bg-[#1e2028] text-white border border-neutral-700/50 shadow-inner"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-200 ${
                activeTab === "saved"
                  ? "bg-[#1e2028] text-white border border-neutral-700/50 shadow-inner"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-medium tracking-wide text-neutral-500">
              Sort By
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-lg border border-neutral-800 bg-[#121318] py-2 pl-4 pr-10 text-xs font-semibold text-white outline-none focus:border-[#ccff00] cursor-pointer"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Rating">Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full pt-2">
          {currentList.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {sortWorkouts(currentList).map((lift: ILiftData) => (
                <MyPlanCard 
                  key={lift.id} 
                  lift={lift} 
                  isSavedTab={activeTab === "saved"} 
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>

      </div>
    </div>
  );
};

export default ListedLift;
