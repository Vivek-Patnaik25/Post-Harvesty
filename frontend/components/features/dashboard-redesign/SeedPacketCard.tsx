'use client';

import { Card } from '@/components/ui/Card';
import { Sprout, Droplets } from 'lucide-react';

export function SeedPacketCard() {
    return (
        <Card className="h-[400px] bg-[#0F1115] border-white/5 relative overflow-hidden group hover:border-agri-brown/50 transition-colors">
            {/* Texture Background */}
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/assets/images/soil-texture.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent" />

            <div className="relative z-10 h-full flex flex-col p-2">
                {/* Top Label */}
                <div className="flex justify-between items-start mb-4">
                    <div className="bg-agri-brown/20 backdrop-blur-md px-3 py-1 rounded-lg border border-agri-brown/30">
                        <span className="text-[10px] uppercase tracking-widest text-agri-gold font-bold">Recommendation</span>
                    </div>
                </div>

                <div className="mt-auto">
                    <h3 className="text-3xl font-display font-bold text-white mb-1">Nitrogen Boost</h3>
                    <p className="text-agri-gold font-medium mb-6">Mustard Crop Rotation</p>

                    <div className="bg-[#0F1115]/80 backdrop-blur-sm p-4 rounded-xl border border-white/10 space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-agri-green/10 flex items-center justify-center">
                                <Sprout className="h-4 w-4 text-agri-green" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Yield Impact</p>
                                <p className="text-sm font-bold text-white">+12% Next Harvest</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                                <Droplets className="h-4 w-4 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Soil Health</p>
                                <p className="text-sm font-bold text-white">Restores N-Levels</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
