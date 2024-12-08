"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type MobileContextType = {
  isMobile: boolean;
};

const MobileContext = createContext<MobileContextType | undefined>(undefined);

const MobileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <MobileContext.Provider value={{ isMobile }}>{children}</MobileContext.Provider>;
};

const useMobile = () => useContext(MobileContext);

export  { MobileProvider, useMobile};
