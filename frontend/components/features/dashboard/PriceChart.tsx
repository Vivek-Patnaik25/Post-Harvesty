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

export function PriceChart() {
    return (
        <Card className="h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold">Price Forecast</h3>
                    <p className="text-sm text-gray-400">Next 7 Days Market Trend</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-agri-green/10 border border-agri-green/20 text-agri-green text-sm font-medium">
                    +3.2% Projected
                </div>
            </div>

            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="day" stroke="#666" tick={{ fill: '#888' }} axisLine={false} tickLine={false} />
                        <YAxis stroke="#666" tick={{ fill: '#888' }} axisLine={false} tickLine={false} domain={['dataMin - 100', 'dataMax + 100']} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#10B981"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorPrice)"
                            animationDuration={2000}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
