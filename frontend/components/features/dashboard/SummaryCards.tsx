'use client';

import { Card } from '@/components/ui/Card';
import { ArrowUpRight, DollarSign, AlertCircle, Clock } from 'lucide-react';

export function SummaryCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card variant="glass" className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-green-500/20 text-green-500">
                    <DollarSign className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-400">Next Market Price</p>
                    <p className="text-2xl font-bold">₹ 1,950<span className="text-xs text-gray-500 ml-1">/Q</span></p>
                </div>
            </Card>

            <Card variant="glass" className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/20 text-blue-500">
                    <ArrowUpRight className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-400">3-Day Trend</p>
                    <p className="text-2xl font-bold text-green-400">+3.2%</p>
                </div>
            </Card>

            <Card variant="glass" className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-500">
                    <AlertCircle className="h-6 w-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-400">Spoilage Risk</p>
                    <p className="text-2xl font-bold text-yellow-500">62%</p>
                </div>
            </Card>

            <Card variant="glass-dark" className="border-agri-green/50 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-r from-agri-green/10 to-transparent group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                    <p className="text-xs font-bold text-agri-green tracking-wider uppercase mb-1 flex items-center gap-2">
                        <Clock className="h-3 w-3" /> Recommendation
                    </p>
                    <p className="text-3xl font-bold text-white">WAIT <span className="text-lg font-normal text-gray-400">2 Days</span></p>
                </div>
            </Card>
        </div>
    );
}
