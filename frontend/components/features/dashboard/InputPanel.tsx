'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Search } from 'lucide-react';

interface InputPanelProps {
    onAnalyze?: (data: any) => void;
    isLoading?: boolean;
}

export function InputPanel({ onAnalyze, isLoading }: InputPanelProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAnalyze?.({});
    };

    return (
        <Card className="bg-[#0E1210] border-white/5 p-6">
            <h3 className="text-lg font-bold text-white mb-6">Analysis Input</h3>

            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-end gap-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    <div className="space-y-2">
                        <label className="text-xs text-gray-400">Select Crop</label>
                        <div className="relative">
                            <select className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-agri-green/50">
                                <option>Rice</option>
                                <option>Wheat</option>
                                <option>Tomato</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs text-gray-400">Select Region</label>
                        <select className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-agri-green/50">
                            <option>North India</option>
                            <option>Punjab</option>
                            <option>Maharashtra</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs text-gray-400">Days After Harvest</label>
                        <input
                            type="number"
                            placeholder="e.g. 5"
                            min="0"
                            className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-agri-green/50 placeholder:text-gray-600"
                        />
                        <p className="text-[10px] text-gray-500">Number of days since crop was harvested.</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs text-gray-400">Temperature (°C)</label>
                        <input
                            type="number"
                            defaultValue={32}
                            className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-agri-green/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs text-gray-400">Humidity (%)</label>
                        <input
                            type="number"
                            defaultValue={78}
                            className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-agri-green/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs text-gray-400">Current Market Price (₹ / Qtl)</label>
                        <input
                            type="number"
                            placeholder="e.g. 1950"
                            className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-agri-green/50 placeholder:text-gray-600"
                        />
                        <p className="text-[10px] text-gray-500">Current mandi modal price.</p>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full lg:w-auto min-w-[200px] h-[48px] !bg-[#10B981] !bg-none text-black font-bold text-lg hover:!bg-[#059669] border-none shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    isLoading={isLoading}
                >
                    <Search className="h-5 w-5 mr-2" />
                    Analyze
                </Button>

            </form>
        </Card>
    );
}
