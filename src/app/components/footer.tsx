'use client';

import React from "react";
import LogoFooterIcon from "../icons/LogoFooter";
import { useTexts } from "../context/Texts";

const Footer: React.FC = () => {
    const { t } = useTexts() || { t: {} };
    return (
        <footer className="col-start-1 col-span-4 grid-flow-col bg-black w-full flex flex-col sm:flex-row items-center justify-center h-[152px] sm:h-[106px] gap-8 divide-y sm:divide-y-0 sm:px-8 lg:px-[120px] md:px-[50px]">
            <LogoFooterIcon
                width={138}
                height={20}
            />
            <p className="text-white text-xs pt-8 sm:pt-0 w-5/6 text-center sm:text-right">{t.footer}</p>
        </footer>
    );
}

export default Footer;
