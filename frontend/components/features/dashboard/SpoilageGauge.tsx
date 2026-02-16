'use client';

import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

export function SpoilageGauge() {
    const risk = 62;
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (risk / 100) * circumference;

    return (
        <Card className="h-full flex flex-col justify-between">
            <div className="mb-4">
                <h3 className="text-lg font-bold">Spoilage Risk</h3>
                <p className="text-sm text-gray-400">AI Confidence: 92%</p>
            </div>

            <div className="flex flex-col items-center justify-center relative py-4">
                <div className="relative h-48 w-48">
                    <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 200 200">
                        {/* Background Circle */}
                        <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke="#333"
                            strokeWidth="20"
                            strokeLinecap="round"
                        />
                        {/* Progress Circle */}
                        <motion.circle
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke="#F59E0B"
                            strokeWidth="20"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset: offset }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold font-display text-white">{risk}%</span>
                        <span className="text-xs text-yellow-500 uppercase font-medium tracking-wider">At Risk</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3 mt-4">
                <RiskBar label="Time Risk" value={45} color="bg-green-500" />
                <RiskBar label="Temp Risk" value={70} color="bg-red-500" />
                <RiskBar label="Humidity" value={55} color="bg-yellow-500" />
            </div>
        </Card>
    );
}

function RiskBar({ label, value, color }: { label: string, value: number, color: string }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-400">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full ${color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </div>
        </div>
    );
}
