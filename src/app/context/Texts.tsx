'use client';
import React, { createContext, useContext, useState, ReactNode } from "react";
import DataText from "./texts.json"

const TextContext = createContext<{ t: Record<string, string>; setTexts: React.Dispatch<React.SetStateAction<Record<string, string>>> } | undefined>(undefined);

const TextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [t, setTexts] = useState<Record<string, string>>(DataText);

  return <TextContext.Provider value={{t, setTexts }}>{children}</TextContext.Provider>;
};

const useTexts = () => useContext(TextContext);

export { TextProvider, useTexts}
