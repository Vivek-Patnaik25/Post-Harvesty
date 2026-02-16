'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Sprout, Bell, User as UserIcon, Globe } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Navbar() {
    const { locale, setLocale } = useLanguage();
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const languages = [
        { code: 'en', label: '🇺🇸 EN' },
        { code: 'es', label: '🇪🇸 ES' },
        { code: 'hi', label: '🇮🇳 HI' },
    ] as const;

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-[#0B1F17]/80 backdrop-blur-xl flex items-center justify-between px-6"
        >
            <Link href="/" className="flex items-center gap-2 group">
                <div className="relative">
                    <div className="absolute inset-0 bg-agri-green/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Sprout className="h-6 w-6 text-agri-green relative z-10 transition-transform group-hover:scale-110" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent font-display group-hover:text-agri-green transition-colors">
                    AgriIntel AI
                </span>
            </Link>

            <div className="flex items-center gap-4">
                {/* Language Switcher */}
                <div className="relative">
                    <button
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
                    >
                        <Globe className="h-4 w-4 text-agri-green" />
                        <span className="text-sm font-medium text-white/90 uppercase">{locale}</span>
                    </button>

                    {langMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-full right-0 mt-2 w-32 bg-[#0E241C] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLocale(lang.code as any);
                                        setLangMenuOpen(false);
                                    }}
                                    className={cn(
                                        "w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors flex items-center gap-2",
                                        locale === lang.code ? "text-agri-green bg-white/5" : "text-gray-300"
                                    )}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Notifications */}
                <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors group">
                    <Bell className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                </button>

                {/* User Profile */}
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#1A332A] to-[#0B1F17] border border-white/10 flex items-center justify-center hover:border-agri-green/50 transition-colors">
                    <UserIcon className="h-4 w-4 text-white/70" />
                </div>
            </div>
        </motion.nav>
    );
}
