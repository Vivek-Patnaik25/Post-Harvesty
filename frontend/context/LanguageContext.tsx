'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { dictionary, Dictionary } from '@/locales';
import { Locale } from '@/types';

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<Locale>('en');

    const t = dictionary[locale];

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
