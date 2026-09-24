import { ILiftData } from "@/types/liftcard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ILiftDataProps {
    lift: ILiftData;
}
const LibraryLiftCard = ({ lift }: ILiftDataProps) => {
  return (
    <Link href={`/lift-details/${lift.id}`}>
              {/* ১. ইমেজ সেকশন (কার্ডের উপরের অংশ) */}
      <div className="relative w-full aspect-[4/3] bg-zinc-900 overflow-hidden">
        <Image
          src={lift.image}
          alt={lift.name}
          width={400}
          height={300}
          priority
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* ইমেজ এবং নিচের ডার্ক কার্ডের সাথে ব্লেন্ড করার জন্য হালকা ওভারলে গ্রেডিয়েন্ট */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ২. ইনফরমেশন সেকশন (কার্ডের নিচের ডার্ক অংশ) */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* মাসল গ্রুপের লাইম-গ্রিন ব্যাজসমূহ (হুবহু ইমেজের মতো) */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {lift.muscleGroups?.map((muscle, mIdx) => (
              <span
                key={mIdx}
                className="bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm shadow-[#CCFF00]/10"
              >
                {muscle}
              </span>
            ))}
            {/* অপশনাল: ডিফিকাল্টি ট্যাগ */}
            <span className="bg-zinc-800/80 text-zinc-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              {lift.difficulty}
            </span>
          </div>

          {/* ব্যায়ামের নাম ও ইকুইপমেন্ট (Typography) */}
          <h3 className="text-lg font-black tracking-wide text-zinc-50 uppercase leading-snug group-hover:text-[#CCFF00] transition-colors duration-200">
            {lift.name}
          </h3>
          <p className="text-xs text-zinc-500 font-medium tracking-wide mt-1 uppercase">
            {lift.equipment}
          </p>
        </div>

        {/* ৩. ম্যাট্রিক্স বা ফুটার রো (সময়, ক্যালোরি এবং রেটিং) */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50 text-zinc-400 text-xs font-semibold">
          {/* ডিউরেশন / সময় */}
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://w3.org"
              className="h-4 w-4 text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{lift.duration} min</span>
          </div>

          {/* ক্যালোরি বার্ন (caloriesBurned) */}
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://w3.org"
              className="h-4 w-4 text-zinc-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{lift.caloriesBurned} kcal</span>
          </div>

          {/* রেটিং ডিসপ্লে */}
          <div className="flex items-center gap-1">
            <span className="text-zinc-500 text-sm">☆</span>
            <span className="text-zinc-300">
              {lift.rating?.toFixed(1) || "4.8"}
            </span>
          </div>
        </div>
      </div>
   
    </Link>
  );
};

export default LibraryLiftCard;
