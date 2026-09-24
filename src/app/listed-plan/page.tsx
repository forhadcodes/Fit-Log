"use client";

import { LiftCardContext } from '@/context/LiftContext';
import React, { useContext } from 'react';

const ListedLift = () => {
    const {todaysPlan} =useContext(LiftCardContext);
    console.log(todaysPlan, 'Todays Plan')
    return (
        <div>
            listed plan
        </div>
    );
};

export default ListedLift;