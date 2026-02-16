'use client';

import { Card } from '@/components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { day: 'Mon', price: 1850 },
    { day: 'Tue', price: 1916 },
    { day: 'Wed', price: 1921 },
    { day: 'Thu', price: 1936 },
    { day: 'Fri', price: 1945 },
    { day: 'Sat', price: 1940 },
    { day: 'Sun', price: 1960 },
];

export function FarmlandPriceChart() {
    return (
        <Card className="h-[400px] flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#0B1F17]/50 mix-blend-overlay pointer-events-none" />

            <div className="flex items-center justify-between mb-8 relative z-10 px-2 pt-2">
                <div>
                    <h3 className="text-xl font-bold font-display text-white tracking-tight">Price Forecast</h3>
                    <p className="text-sm text-gray-400 font-light">Market Trend Analysis</p>
                </div>

                <div className="flex gap-4">
                    <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg px-4 py-2 backdrop-blur-sm">
                        <p className="text-[10px] uppercase text-[#10B981] font-bold tracking-wider">Predicted next Price</p>
                        <p className="text-xl font-bold text-white">₹ 1,960 <span className="text-xs font-normal text-gray-400">/ Qtl</span></p>
                    </div>
                    <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg px-4 py-2 backdrop-blur-sm">
                        <p className="text-[10px] uppercase text-[#10B981] font-bold tracking-wider">Next 3 Days</p>
                        <p className="text-xl font-bold text-white">₹ 2,015 <span className="text-xs font-normal text-gray-400">/ Qtl</span></p>
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full min-h-0 relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="farmlandGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgba(47,166,106,0.6)" />
                                <stop offset="100%" stopColor="rgba(15,40,30,0.1)" />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis
                            dataKey="day"
                            stroke="#4B5563"
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            dy={10}
                        />
                        <YAxis
                            stroke="#4B5563"
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            domain={['dataMin - 50', 'dataMax + 50']}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#0E241C',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#10B981"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#farmlandGradient)"
                            animationDuration={1200}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
