'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { LayoutDashboard, Sprout, Settings, ChevronLeft, ChevronRight, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Sidebar() {
    const { t } = useLanguage();
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    const links = [
        { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/soil', label: 'Soil & Crop', icon: Sprout },
        { href: '/analytics', label: 'Analytics', icon: BarChart2 },
        { href: '/settings', label: 'Settings', icon: Settings },
    ];

    return (
        <motion.aside
            initial={{ width: 240 }}
            animate={{ width: collapsed ? 80 : 240 }}
            className="fixed left-0 top-16 bottom-0 z-40 border-r border-white/5 bg-[#0E1210] hidden md:flex flex-col transition-all duration-300"
        >
            <div className="flex-1 py-6 px-4 space-y-2">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;

                    return (
                        <Link key={link.href} href={link.href}>
                            <div
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all group relative overflow-hidden",
                                    isActive
                                        ? "bg-agri-green/10 text-agri-green border border-agri-green/20"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute inset-y-0 left-0 w-1 bg-agri-green rounded-r-full" />
                                )}
                                <Icon className={cn("h-5 w-5 relative z-10", isActive && "text-agri-green")} />
                                {!collapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="relative z-10 font-medium whitespace-nowrap text-sm"
                                    >
                                        {link.label}
                                    </motion.span>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 border-t border-white/5">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-white/5 text-gray-400 transition-colors"
                >
                    {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                </button>
                <div className="mt-4 flex items-center gap-3 text-gray-500 px-2">
                    {!collapsed && <span className="text-xs">Log out</span>}
                </div>
            </div>
        </motion.aside>
    );
}
