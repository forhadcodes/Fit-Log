import SavedForLaterBtn from '@/components/liftDetails/SavedForLaterBtn';
import TodaysPlanBtn from '@/components/liftDetails/TodaysPlanBtn';
import { ILiftData } from '@/types/liftcard';
import Image from 'next/image';
import React from 'react';

interface ILiftCardDetailsProps {
    params: Promise<{
        id: string;
    }>;
}
const getLibraryData = async (): Promise<ILiftData[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const LiftCardDetails = async({params}: ILiftCardDetailsProps) => {
    const {id} = await params;
    const libraryData = await getLibraryData();
    const lift = libraryData.find((liftcard: ILiftData) => String (liftcard.id) === String(id),) as ILiftData;
    console.log(lift);
    return (
        <div className="container mx-auto min-h-screen bg-[#0B0D10] text-white py-16 px-4 md:px-8 flex justify-center items-center">
            
            {/* মূল ডার্ক থিম কার্ড কন্টেইনার */}
            <div className="w-full max-w-5xl bg-[#12141C] border border-gray-800 rounded-2xl p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl">
                
                {/* বাম পাশ: ইমেজ সেকশন */}
                <div className="relative w-full aspect-square md:h-full min-h-[350px] md:min-h-[500px] rounded-xl overflow-hidden bg-[#1A1D26]">
                    <Image  
                        src={lift.image || "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"} 
                        alt={lift.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* ডান পাশ: ইনফরমেশন সেকশন */}
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        {/* ব্যায়ামের নাম */}
                        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-white">
                            {lift.name}
                        </h1>
                        
                        {/* ডেসক্রিপশন */}
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            {lift.description}
                        </p>

                        {/* মাসল গ্রুপ ট্যাগস (Dynamic Badges) */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {lift.muscleGroups?.map((muscle: string, idx: number) => (
                                <span key={idx} className="bg-[#CCFF00] text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase">
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* ডিটেইলস ডাটা টেবিল গ্রিড */}
                        <div className="mt-6 bg-[#1A1D26] rounded-xl p-4 space-y-3 text-sm border border-gray-800/60">
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                                <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Equipment</span>
                                <span className="text-gray-200 font-medium">{lift.equipment}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                                <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Difficulty</span>
                                <span className="text-gray-200 font-medium">{lift.difficulty}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                                <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Sets</span>
                                <span className="text-gray-200 font-medium">{lift.sets}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                                <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Reps</span>
                                <span className="text-gray-200 font-medium">{lift.reps}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                                <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Duration</span>
                                <span className="text-gray-200 font-medium">{lift.duration} min</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                                <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Calories</span>
                                <span className="text-gray-200 font-medium">{lift.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex justify-between pt-1">
                                <span className="text-gray-500 uppercase font-semibold text-xs tracking-wider">Rating</span>
                                <span className="text-[#CCFF00] font-bold">★ {lift.rating}</span>
                            </div>
                        </div>

                        {/* নির্দেশনাবলী (Instructions List) */}
                        <div className="mt-6">
                            <h3 className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-3">Instructions</h3>
                            <ol className="space-y-3 text-sm text-gray-300 list-none pl-0">
                                {lift.instructions?.map((step: string, index: number) => (
                                    <li key={index} className="flex gap-2 items-start leading-relaxed">
                                        <span className="text-[#CCFF00] font-bold text-xs mt-0.5">{index + 1}.</span>
                                        <span className="text-gray-300">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* নিচের অ্যাকশন বাটনসমূহ */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-800">
                        <TodaysPlanBtn lift={lift}></TodaysPlanBtn>
                        
                        <SavedForLaterBtn lift={lift}></SavedForLaterBtn>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LiftCardDetails;