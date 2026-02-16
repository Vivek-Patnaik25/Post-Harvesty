'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const decayData = [
    { day: 1, value: 100 },
    { day: 2, value: 98 },
    { day: 3, value: 92 },
    { day: 4, value: 85 },
    { day: 5, value: 75 },
    { day: 6, value: 60 },
    { day: 7, value: 40 },
];

export function RealitySection() {
    return (
        <section className="min-h-screen bg-[#0F1115] relative py-24 flex items-center">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Up to <span className="text-red-500">40%</span> of crop value is lost post-harvest.
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-400 font-light leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Every hour your harvest sits without a plan, its value decays. Market volatility and spoilage are the silent killers of your hard-earned profit.
                    </motion.p>
                </div>

                {/* Right Chart */}
                <motion.div
                    className="h-[400px] w-full bg-white/5 rounded-3xl border border-white/10 p-8 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent pointer-events-none" />
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={decayData}>
                            <defs>
                                <linearGradient id="decayGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="day" stroke="#666" hide />
                            <YAxis hide domain={[0, 100]} />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#ef4444"
                                strokeWidth={3}
                                fill="url(#decayGradient)"
                                strokeDasharray="2000"
                                strokeDashoffset="2000"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    from="2000"
                                    to="0"
                                    dur="3s"
                                    fill="freeze"
                                    calcMode="spline"
                                    keySplines="0.4 0 0.2 1"
                                />
                            </Area>
                        </AreaChart>
                    </ResponsiveContainer>

                    <div className="absolute top-8 left-8">
                        <p className="text-red-400 text-sm uppercase tracking-widest font-bold">Value Decay</p>
                        <p className="text-3xl font-bold text-white">₹ 1,200 <span className="text-base font-normal text-gray-500">/quintal lost</span></p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
