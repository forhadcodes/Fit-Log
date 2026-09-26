"use client";
import { LiftCardContext } from "@/context/LiftContext";
import { ILiftData } from "@/types/liftcard";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SavedForLaterBtn = ({ lift }: { lift: ILiftData }) => {
  const { savedForLater, setSavedForLater } = useContext(LiftCardContext);

  const handleSavedForLater = () => {
    console.log('saved for later btn trigger', lift);

    // 💡 এখানে চেক করা হচ্ছে যে আইটেমটি অলরেডি অ্যারেতে আছে কিনা
    const isAlreadySaved = savedForLater.some(
      (item) => String(item.id) === String(lift.id)
    );

    // ❌ ২য় বার (বা তার বেশি) ক্লিক করলে এই কন্ডিশন সত্য হবে এবং এরর টোস্ট দেখাবে
    if (isAlreadySaved) {
      toast.error("Already added in saved for later!");
      return; // এখানেই কোড স্টপ হয়ে যাবে, ডুপ্লিকেট অ্যাড হবে না
    }

    //  ১ম বার ক্লিক করলে কন্ডিশন পার হয়ে এখানে আসবে এবং সাকসেস টোস্ট দেখাবে
    setSavedForLater([...savedForLater, lift]);
    toast.success(`Saved for later "${lift.name}"`);
  };

  return (
    <div className="flex-1 w-full">
      <button 
        className="w-full bg-[#CCFF00] hover:bg-[#b5e000] text-black font-extrabold py-3.5 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 text-sm uppercase tracking-wide cursor-pointer" 
        onClick={() => handleSavedForLater()}
      >
        <svg
          xmlns="http://w3.org"
          className="h-4 w-4"
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
        Saved for Later
      </button>
    </div>
  );
};

export default SavedForLaterBtn;
