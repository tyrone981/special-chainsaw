'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '@/lang/en.json';
import fr from '@/lang/fr.json';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { en, fr };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguage(saved);
    }
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    return value || key;
  };

  const setLanguageWithStorage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageWithStorage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
