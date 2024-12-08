'use client'
import React, { useEffect } from "react";
import { useTexts } from "../context/Texts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchUser } from "../features/userSlice";

const MainPlans =() => {
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.user);
    const { t } = useTexts();

    useEffect(() => {
        dispatch(fetchUser());
      }, [dispatch]);
    
    return (
        <div className="col-start-1 col-span-4 grid-flow-col px-[24px] md:px-[120px]">
            <h2 className="text-2xl font-bold mb-4">{`${data?.name} ¿Para quién deseas cotizar?`}</h2>
            <p className='text-[16px] text-center font-bold'>{t.plans.subtitle}</p>        
        </div>
    )
}

export default MainPlans;
