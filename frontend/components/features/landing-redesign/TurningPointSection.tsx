'use client';

import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import { FieldDivider } from '@/components/ui/design-system/FieldDivider';

export function TurningPointSection() {
    return (
        <section className="min-h-screen bg-[#0D1211] relative py-24 flex flex-col justify-center">
            <div className="absolute top-0 w-full rotate-180 z-10 text-[#0F1115]">
                <FieldDivider />
            </div>

            <div className="container mx-auto px-6 text-center z-20">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold font-display mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    What if you knew the <span className="text-agri-green">right time</span> to sell?
                </motion.h2>

                <div className="relative max-w-4xl mx-auto h-[400px] border-l border-b border-white/10">
                    {/* Animated Intersection */}
                    <div className="absolute inset-0">
                        {/* Spoilage Line (Red) */}
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 origin-left"
                            style={{ rotate: "-15deg", bottom: "20%" }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "linear" }}
                        />

                        {/* Price Line (Green) */}
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-agri-green origin-left"
                            style={{ rotate: "-35deg", bottom: "10%" }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "linear" }}
                        />

                        {/* Intersection Point */}
                        <motion.div
                            className="absolute left-[65%] bottom-[50%] flex flex-col items-center"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.5, type: "spring" }}
                        >
                            <div className="p-4 bg-agri-gold/20 backdrop-blur-md border border-agri-gold rounded-full mb-2 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                                <TrendingUp className="text-agri-gold h-8 w-8" />
                            </div>
                            <div className="bg-[#0F1115] px-4 py-2 rounded-lg border border-white/10">
                                <span className="text-agri-gold font-bold">OPTIMAL SELL POINT</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-[-40px] w-full flex justify-between text-gray-500 text-sm">
                        <span>Harvest Day</span>
                        <span>Day 7</span>
                        <span>Day 14 (Risk Critical)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
