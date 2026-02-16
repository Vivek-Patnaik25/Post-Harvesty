'use client';

import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Sprout, Layers, MapPin, Leaf, Droplets, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { api } from '@/lib/api';
import type { SoilData } from '@/types';

export default function SoilPage() {
    const [loading, setLoading] = useState(false);
    const [recommendation, setRecommendation] = useState<SoilData | null>(null);

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call delay for effect
        await new Promise(resolve => setTimeout(resolve, 1500));
        const data = await api.getSoilRecommendation();
        setRecommendation(data);
        setLoading(false);
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-3xl font-bold font-display text-white">Soil & Crop Rotation</h1>
                    <p className="text-gray-400 mt-1">Optimize your land for long-term sustainability.</p>
                </div>
                <div className="px-4 py-2 bg-agri-green/10 border border-agri-green/20 rounded-full flex items-center gap-2 backdrop-blur-md">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-agri-green"></span>
                    </span>
                    <span className="text-agri-green text-xs font-bold uppercase tracking-wider">AI Model Active</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Input Form */}
                <Card variant="glass-dark" className="lg:col-span-1 border-white/5 bg-[#0E1210] h-fit">
                    <form onSubmit={handleAnalyze} className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-agri-green/10 rounded-lg">
                                <Layers className="text-agri-green h-5 w-5" />
                            </div>
                            <h2 className="text-lg font-bold text-white">Field Data</h2>
                        </div>

                        <div className="space-y-4">
                            <Input
                                id="prevCrop"
                                label="Previous Crop"
                                defaultValue="Wheat"
                                className="bg-[#1F2937]/50 border-white/10 focus:border-agri-green/50"
                            />
                            <Input
                                id="soilType"
                                label="Soil Type"
                                defaultValue="Black Cotton Soil"
                                className="bg-[#1F2937]/50 border-white/10 focus:border-agri-green/50"
                            />
                            <Input
                                id="region"
                                label="Region"
                                defaultValue="Vidarbha"
                                className="bg-[#1F2937]/50 border-white/10 focus:border-agri-green/50"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-[48px] !bg-[#10B981] !bg-none text-black font-bold text-lg hover:!bg-[#059669] border-none shadow-[0_0_20px_rgba(16,185,129,0.3)] mt-2"
                            isLoading={loading}
                        >
                            Generate Rotation Plan
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </form>
                </Card>

                {/* Output Area */}
                <div className="lg:col-span-2 space-y-6">
                    {recommendation ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            {/* Primary Recommendation Card */}
                            <Card className="border-0 bg-gradient-to-br from-[#1A332A] to-[#0E1210] relative overflow-hidden p-8">
                                <div className="absolute top-0 right-0 p-32 bg-agri-green/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Leaf className="text-agri-green h-5 w-5" />
                                        <span className="text-agri-green font-mono text-xs uppercase tracking-wider font-bold">Top Recommendation</span>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
                                        <div>
                                            <h3 className="text-5xl font-bold font-display text-white mb-2">{recommendation.recommended_crop}</h3>
                                            <p className="text-gray-400 text-lg">Optimal for Nitrogen fixation & Soil Health</p>
                                        </div>
                                        <div className="hidden md:block flex-1 h-px bg-white/10 mb-4" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-5 rounded-xl bg-[#0B1F17]/50 border border-white/5 backdrop-blur-sm">
                                            <p className="text-xs text-gray-500 uppercase mb-2 font-bold tracking-wider">Regeneration Score</p>
                                            <div className="flex items-end gap-3">
                                                <span className="text-3xl font-bold text-agri-green">{recommendation.soil_regeneration_score}%</span>
                                                <div className="flex-1 h-2 bg-gray-800 rounded-full mb-2 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${recommendation.soil_regeneration_score}%` }}
                                                        className="h-full bg-agri-green rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-xl bg-[#0B1F17]/50 border border-white/5 backdrop-blur-sm">
                                            <p className="text-xs text-gray-500 uppercase mb-2 font-bold tracking-wider">Sustainability Impact</p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl font-bold text-white">{recommendation.sustainability}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Secondary Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="flex items-center gap-4 bg-[#0E1210] border-white/5 p-6 hover:border-agri-green/30 transition-colors group">
                                    <div className="p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                                        <Droplets className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Water Requirement</p>
                                        <p className="font-bold text-white text-lg">Low - Moderate</p>
                                    </div>
                                </Card>
                                <Card className="flex items-center gap-4 bg-[#0E1210] border-white/5 p-6 hover:border-agri-green/30 transition-colors group">
                                    <div className="p-3 bg-agri-green/10 rounded-full group-hover:bg-agri-green/20 transition-colors">
                                        <Sprout className="h-6 w-6 text-agri-green" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Growth Cycle</p>
                                        <p className="font-bold text-white text-lg">90 - 110 Days</p>
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="h-full min-h-[400px] rounded-3xl border border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-gray-500">
                            <div className="p-6 bg-white/5 rounded-full mb-4">
                                <Layers className="h-10 w-10 opacity-50" />
                            </div>
                            <p className="text-lg font-medium text-gray-400">Enter field data to generate insights</p>
                            <p className="text-sm text-gray-600 mt-2">AI analysis takes ~1-2 seconds</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
