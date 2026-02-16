'use client';

import { MapPin, Calendar, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContextualHeader() {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0F1115] border-b border-white/10 pb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div>
                <h1 className="text-3xl font-bold font-display text-white">Dashboard</h1>
                <p className="text-gray-400 text-sm mt-1">Real-time harvest intelligence</p>
            </div>

            <div className="flex items-center gap-4 bg-white/5 rounded-xl p-2 border border-white/5">
                <div className="flex items-center gap-2 px-3 py-1 border-r border-white/10">
                    <Sprout className="h-4 w-4 text-agri-green" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Crop</p>
                        <p className="text-sm font-medium text-white">Tomato</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 border-r border-white/10">
                    <MapPin className="h-4 w-4 text-agri-gold" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Region</p>
                        <p className="text-sm font-medium text-white">Pune, MH</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1">
                    <Calendar className="h-4 w-4 text-agri-brown" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Storage</p>
                        <p className="text-sm font-medium text-white">Day 5</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
