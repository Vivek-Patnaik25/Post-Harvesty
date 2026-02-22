'use client';

import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    AreaChart, Area, BarChart, Bar, Legend
} from 'recharts';
import { TrendingUp, Activity, DollarSign, Sprout, ArrowDownToLine, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

// Dummy data for charts
const yieldData = [
    { month: 'Jan', actual: 4000, expected: 4400 },
    { month: 'Feb', actual: 3000, expected: 3200 },
    { month: 'Mar', actual: 2000, expected: 2400 },
    { month: 'Apr', actual: 2780, expected: 2900 },
    { month: 'May', actual: 1890, expected: 2100 },
    { month: 'Jun', actual: 2390, expected: 2500 },
    { month: 'Jul', actual: 3490, expected: 3600 },
];

const profitData = [
    { name: 'Wheat', profit: 4000, cost: 2400 },
    { name: 'Rice', profit: 3000, cost: 1398 },
    { name: 'Corn', profit: 2000, cost: 9800 },
    { name: 'Soybean', profit: 2780, cost: 3908 },
    { name: 'Potato', profit: 1890, cost: 4800 },
];

const soilHealthData = [
    { name: 'Week 1', nitrogen: 65, phosphorus: 45, potassium: 80 },
    { name: 'Week 2', nitrogen: 70, phosphorus: 48, potassium: 82 },
    { name: 'Week 3', nitrogen: 68, phosphorus: 52, potassium: 75 },
    { name: 'Week 4', nitrogen: 75, phosphorus: 55, potassium: 85 },
];

const MetricCard = ({ title, value, change, icon: Icon, trend }: any) => (
    <Card className="p-6 bg-[#0E1210] border-white/5 relative overflow-hidden group hover:border-agri-green/30 transition-all duration-300">
        <div className="absolute top-0 right-0 p-8 bg-agri-green/5 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none group-hover:bg-agri-green/10 transition-colors" />
        <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-white/5 text-gray-400 group-hover:text-agri-green group-hover:bg-agri-green/10 transition-colors">
                    <Icon className="h-6 w-6" />
                </div>
                <span className={`text-sm font-bold flex items-center gap-1 ${trend === 'up' ? 'text-agri-green' : 'text-red-500'}`}>
                    {trend === 'up' ? '↑' : '↓'} {change}
                </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
            <p className="text-3xl font-display font-bold text-white tracking-tight">{value}</p>
        </div>
    </Card>
);

export default function AnalyticsPage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8 animate-fade-in pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-3xl font-bold font-display text-white">{t.analytics.title}</h1>
                    <p className="text-gray-400 mt-1">{t.analytics.description}</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="secondary" className="border-white/10 text-gray-300 hover:text-white bg-[#0E1210]">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        {t.analytics.filter}
                    </Button>
                    <Button className="bg-agri-green text-black hover:bg-agri-green-light font-medium">
                        <ArrowDownToLine className="h-4 w-4 mr-2" />
                        {t.analytics.export}
                    </Button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title={t.analytics.total_revenue} value="$45,231" change="+12.5%" trend="up" icon={DollarSign} />
                <MetricCard title={t.analytics.avg_yield} value="3.2 t/ha" change="+5.2%" trend="up" icon={TrendingUp} />
                <MetricCard title={t.analytics.spoilage_rate} value="4.1%" change="-1.2%" trend="up" icon={Activity} />
                <MetricCard title={t.analytics.active_fields} value="12" change="0%" trend="neutral" icon={Sprout} />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Yield Forecast */}
                <Card className="p-6 bg-[#0E1210] border-white/5">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-white mb-1">{t.analytics.yield_forecast}</h3>
                        <p className="text-sm text-gray-400">{t.analytics.yield_desc}</p>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={yieldData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpected" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6EE7B7" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#6EE7B7" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis dataKey="month" stroke="#ffffff50" tick={{ fill: '#ffffff50', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis stroke="#ffffff50" tick={{ fill: '#ffffff50', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <RechartsTooltip
                                    contentStyle={{ backgroundColor: '#0E1210', borderColor: '#ffffff10', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Area type="monotone" dataKey="actual" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorActual)" name="Actual Yield" />
                                <Area type="monotone" dataKey="expected" stroke="#6EE7B7" strokeDasharray="5 5" strokeWidth={2} fillOpacity={1} fill="url(#colorExpected)" name="Expected Yield" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Profit by Crop */}
                <Card className="p-6 bg-[#0E1210] border-white/5">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-white mb-1">{t.analytics.profitability}</h3>
                        <p className="text-sm text-gray-400">{t.analytics.profit_desc}</p>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={profitData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis dataKey="name" stroke="#ffffff50" tick={{ fill: '#ffffff50', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis stroke="#ffffff50" tick={{ fill: '#ffffff50', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <RechartsTooltip
                                    contentStyle={{ backgroundColor: '#0E1210', borderColor: '#ffffff10', borderRadius: '8px' }}
                                    cursor={{ fill: '#ffffff05' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar dataKey="profit" fill="#10B981" radius={[4, 4, 0, 0]} name="Profit ($)" />
                                <Bar dataKey="cost" fill="#374151" radius={[4, 4, 0, 0]} name="Cost ($)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Soil Health Trends */}
                <Card className="p-6 bg-[#0E1210] border-white/5 lg:col-span-2">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-white mb-1">{t.analytics.soil_health}</h3>
                        <p className="text-sm text-gray-400">{t.analytics.soil_desc}</p>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={soilHealthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis dataKey="name" stroke="#ffffff50" tick={{ fill: '#ffffff50', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis stroke="#ffffff50" tick={{ fill: '#ffffff50', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <RechartsTooltip
                                    contentStyle={{ backgroundColor: '#0E1210', borderColor: '#ffffff10', borderRadius: '8px' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Line type="monotone" dataKey="nitrogen" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} name="Nitrogen (N)" />
                                <Line type="monotone" dataKey="phosphorus" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} name="Phosphorus (P)" />
                                <Line type="monotone" dataKey="potassium" stroke="#10B981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} name="Potassium (K)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        </div>
    );
}
