"use client";
import React, { createContext, ReactNode, useState } from 'react';

export const LiftCardContext = createContext({});

const LiftCardProvider = ({children}:{children:ReactNode}) => {
    const [todaysPlan, setTodaysPlan] =useState([]);
    const [savedForLater, setSavedForLater] = useState([])
    
    const sharedData ={
        todaysPlan,
        setTodaysPlan,
        savedForLater,
        setSavedForLater
    };

    return <LiftCardContext.Provider value={sharedData}> {children}</LiftCardContext.Provider>
};

export default LiftCardProvider;