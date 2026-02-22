'use client';

import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Sprout, Layers, MapPin, Leaf, Droplets, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { SoilData } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

// Constants as requested
const states = [
    "Odisha", "Punjab", "Maharashtra",
    "Tamil Nadu", "West Bengal", "Uttar Pradesh"
];

const soil_types = ["Alluvial", "Black", "Red", "Laterite", "Sandy", "Clayey"];

const crops = [
    "Rice", "Wheat", "Maize", "Cotton", "Sugarcane", "Potato",
    "Green Gram", "Black Gram", "Chickpea", "Lentil",
    "Soybean", "Groundnut", "Cowpea", "Pigeon Pea",
    "Mustard", "Sunflower"
];

export default function SoilPage() {
    const { t } = useLanguage();
    const [loading, setLoading] = useState(false);

    // Form State
    const [soilType, setSoilType] = useState(soil_types[1]);
    const [prevCrop, setPrevCrop] = useState(crops[10]);
    const [region, setRegion] = useState(states[2]);

    const [recommendation, setRecommendation] = useState<any>(null);

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/crop-recommendation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    soil_type: soilType,
                    previous_crop: prevCrop,
                    state: region
                }),
            });

            if (!response.ok) {
                console.error("API error", await response.text());
                return;
            }

            const data = await response.json();
            setRecommendation(data);
        } catch (error) {
            console.error("Failed to fetch crop recommendation", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-3xl font-bold font-display text-white">{t.soil.title}</h1>
                    <p className="text-gray-400 mt-1">{t.soil.description}</p>
                </div>
                <div className="px-4 py-2 bg-agri-green/10 border border-agri-green/20 rounded-full flex items-center gap-2 backdrop-blur-md">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-agri-green"></span>
                    </span>
                    <span className="text-agri-green text-xs font-bold uppercase tracking-wider">{t.soil.ai_active}</span>
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
                            <h2 className="text-lg font-bold text-white">{t.soil.field_data}</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">{t.soil.prev_crop}</label>
                                <select
                                    value={prevCrop}
                                    onChange={(e) => setPrevCrop(e.target.value)}
                                    className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-agri-green/50 appearance-none"
                                >
                                    {crops.map(c => <option key={c} value={c} className="bg-[#0E1210]">{c}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">{t.soil.soil_type}</label>
                                <select
                                    value={soilType}
                                    onChange={(e) => setSoilType(e.target.value)}
                                    className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-agri-green/50 appearance-none"
                                >
                                    {soil_types.map(s => <option key={s} value={s} className="bg-[#0E1210]">{s}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">{t.soil.region}</label>
                                <select
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                    className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-agri-green/50 appearance-none"
                                >
                                    {states.map(s => <option key={s} value={s} className="bg-[#0E1210]">{s}</option>)}
                                </select>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-[48px] !bg-[#10B981] !bg-none text-black font-bold text-lg hover:!bg-[#059669] border-none shadow-[0_0_20px_rgba(16,185,129,0.3)] mt-2"
                            isLoading={loading}
                        >
                            {t.soil.generate}
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
                                        <span className="text-agri-green font-mono text-xs uppercase tracking-wider font-bold">{t.soil.top_recommendation}</span>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
                                        <div>
                                            <h3 className="text-5xl font-bold font-display text-white mb-2">{recommendation.recommended_crop}</h3>
                                            <p className="text-gray-400 text-lg">{t.soil.optimal}</p>
                                        </div>
                                        <div className="hidden md:block flex-1 h-px bg-white/10 mb-4" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-5 rounded-xl bg-[#0B1F17]/50 border border-white/5 backdrop-blur-sm">
                                            <p className="text-xs text-gray-500 uppercase mb-2 font-bold tracking-wider">{t.soil.regen_score}</p>
                                            <div className="flex items-end gap-3">
                                                <span className="text-3xl font-bold text-agri-green">78%</span>
                                                <div className="flex-1 h-2 bg-gray-800 rounded-full mb-2 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `78%` }}
                                                        className="h-full bg-agri-green rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-xl bg-[#0B1F17]/50 border border-white/5 backdrop-blur-sm">
                                            <p className="text-xs text-gray-500 uppercase mb-2 font-bold tracking-wider">{t.soil.sustainability}</p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl font-bold text-white">{recommendation.sustainability_impact || 'Moderate'}</span>
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
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{t.soil.water_req}</p>
                                        <p className="font-bold text-white text-lg">{recommendation.water_requirement}</p>
                                    </div>
                                </Card>
                                <Card className="flex items-center gap-4 bg-[#0E1210] border-white/5 p-6 hover:border-agri-green/30 transition-colors group">
                                    <div className="p-3 bg-agri-green/10 rounded-full group-hover:bg-agri-green/20 transition-colors">
                                        <Sprout className="h-6 w-6 text-agri-green" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{t.soil.growth_cycle}</p>
                                        <p className="font-bold text-white text-lg">{recommendation.growth_cycle}</p>
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="h-full min-h-[400px] rounded-3xl border border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-gray-500">
                            <div className="p-6 bg-white/5 rounded-full mb-4">
                                <Layers className="h-10 w-10 opacity-50" />
                            </div>
                            <p className="text-lg font-medium text-gray-400">{t.soil.enter_data}</p>
                            <p className="text-sm text-gray-600 mt-2">{t.soil.analysis_time}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
