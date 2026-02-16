'use client';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface DecisionCardProps {
    decision: 'SELL' | 'WAIT' | 'SPOILED';
    confidence: number;
}

export function DominantDecisionCard({ decision = 'WAIT', confidence = 92 }: DecisionCardProps) {
    const styles = {
        SELL: {
            text: "text-agri-green",
            bg: "bg-agri-green/20",
            border: "border-agri-green/30"
        },
        WAIT: {
            text: "text-agri-amber",
            bg: "bg-gradient-to-br from-[#E6B800]/20 to-[#2FA66A]/20",
            border: "border-agri-amber/30"
        },
        SPOILED: {
            text: "text-red-400",
            bg: "bg-red-900/20",
            border: "border-red-500/30"
        }
    };

    const style = styles[decision];

    return (
        <Card className={`h-[140px] relative overflow-hidden flex flex-col justify-between border-0 bg-gradient-to-br from-[#1A332A] to-[#2E4A3D]`}>
            {/* Specific Green Gradient Background from image */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#456A50]/20 to-transparent" />

            <div className="flex justify-between items-start relative z-10 p-1">
                <span className="text-gray-300 text-sm font-medium">AI Decision</span>
                <Brain className="h-5 w-5 text-yellow-400" />
            </div>

            <div className="relative z-10">
                <h2 className={`text-4xl font-bold font-display text-yellow-400 tracking-wide mb-1`}>{decision}</h2>
                <p className="text-sm text-gray-200">Wait 2 days</p>
            </div>

            {/* Glow effect */}
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-yellow-400/20 blur-[50px] rounded-full pointer-events-none" />
        </Card>
    );
}
