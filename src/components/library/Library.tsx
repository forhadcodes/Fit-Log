import React from "react";
import LibraryLiftCard from "../shared/LibraryLiftCard";
import { ILiftData } from "@/types/liftcard";

const getLibraryData = async (): Promise<ILiftData[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Library = async () => {
  const libraryData = await getLibraryData();

  return (
    // মূল পেজের ব্যাকগ্রাউন্ড আপনার ফিটনেস অ্যাপের ডার্ক থিমের সাথে মেলানো
    <section className="min-h-screen bg-[#0B0D10] text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        {/* সেকশন হেডার */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl font-black uppercase font-mono mb-2">
            THE LIBRARY
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-md">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* কার্ডের জন্য রেসপন্সিভ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraryData.map((lift: ILiftData, index: number) => {
            /* শেয়ার করা ইমেজের মতো ডার্ক কার্ড কন্টেইনার */
            return <LibraryLiftCard key={lift.id || index} lift={lift} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Library;
