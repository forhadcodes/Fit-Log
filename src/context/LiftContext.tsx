"use client";

import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { ILiftData } from "@/types/liftcard";

interface ILiftCardContext {
  todaysPlan: ILiftData[];
  setTodaysPlan: Dispatch<SetStateAction<ILiftData[]>>;
  savedForLater: ILiftData[];
  setSavedForLater: Dispatch<SetStateAction<ILiftData[]>>;
}

export const LiftCardContext = createContext<ILiftCardContext>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  savedForLater: [],
  setSavedForLater: () => {},
});

const LiftCardProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<ILiftData[]>([]);
  const [savedForLater, setSavedForLater] = useState<ILiftData[]>([]);

  const sharedData: ILiftCardContext = {
    todaysPlan,
    setTodaysPlan,
    savedForLater,
    setSavedForLater,
  };

  return (
    <LiftCardContext.Provider value={sharedData}>
      {children}
    </LiftCardContext.Provider>
  );
};

export default LiftCardProvider;