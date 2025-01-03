'use client';

import React from "react";
import PhoneIcon from "../icons/PhoneIcon";
import LogoIcon from "../icons/LogoIcon";
import { useTexts } from "../context/Texts";

const Header: React.FC = () => {
    const { t } = useTexts() || { t: {} };
    return (
        <header className="col-start-1 col-span-4 flex justify-between p-[24px] lg:px-[120px] md:px-[50px]">
            <LogoIcon
                width={100}
                height={40}
                color="red"
            />
            <div className="flex flex-row">
                <p className="hidden sm:block">{t.title}</p>
                <div className="flex flex-row pl-2">
                    <PhoneIcon size={20} color="#000" />
                    <h1 className="font-bold">{t.phone}</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;
