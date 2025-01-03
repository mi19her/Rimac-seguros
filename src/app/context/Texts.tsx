'use client';
import React, { createContext, useContext, ReactNode } from "react";

interface TextContextType {
  t: {
    title: string,
    phone: string,
    footer: string,
    form: {
      caption: string,
      title: string,
      subtitle: string;
      submit: string;
      privacy: string;
      trades: string;
      terms: string;
    };
  };
}

const defaultTexts: TextContextType = {
  t: {
    title: "¡Compra por este medio!",
    phone: "(01) 4116001",
    footer: "© 2023 RIMAC Seguros y Reaseguros.",
    form: {
      caption:"Seguro Salud Flexible",
      title:"Creado para ti y tu familia",
      subtitle: "Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.",
      privacy: "Acepto lo Política de Privacidad",
      trades: "Acepto la Política Comunicaciones Comerciales",
      terms: "Aplican Términos y Condiciones.",
      submit: "Cotiza aquí",
    }
  },
};

const TextContext = createContext<TextContextType>(defaultTexts);

export const TextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const texts = defaultTexts; 
  return <TextContext.Provider value={texts}>{children}</TextContext.Provider>;
};

export const useTexts = () => {
  return useContext(TextContext);
};
