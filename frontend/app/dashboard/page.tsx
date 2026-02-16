'use client';

// Removed redundant Navbar/Sidebar imports as they are in layout.tsx
import { DashboardMetricCard } from '@/components/features/dashboard-redesign/DashboardMetricCard';
import { DominantDecisionCard } from '@/components/features/dashboard-redesign/DominantDecisionCard';
import { HarvestRingGauge } from '@/components/features/dashboard-redesign/HarvestRingGauge';
import { FarmlandPriceChart } from '@/components/features/dashboard-redesign/FarmlandPriceChart';
import { InputPanel } from '@/components/features/dashboard/InputPanel';
import { Sprout, AlertTriangle, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="w-full space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-display tracking-tight text-white">
                    Crop Center
                </h1>
                <span className="text-sm text-emerald-300/70">US • EN</span>
            </div>

            {/* Row 1 — Metrics + Decision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                <DashboardMetricCard
                    label="Total Crops Tracked"
                    value="12"
                    icon={Sprout}
                />

                <DashboardMetricCard
                    label="Risk Alerts"
                    value="3"
                    icon={AlertTriangle}
                    alert
                />

                <DashboardMetricCard
                    label="Profit Index"
                    value="87%"
                    icon={TrendingUp}
                    trend="up"
                />

                <DominantDecisionCard
                    decision="WAIT"
                    confidence={92}
                />
            </div>

            {/* Row 2 — Chart + Risk */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Price Forecast */}
                <div className="xl:col-span-2">
                    <FarmlandPriceChart />
                </div>

                {/* Risk Gauge */}
                <div>
                    <HarvestRingGauge risk={62} />
                </div>

            </div>

            {/* Row 3 — Input Panel */}
            <div>
                <InputPanel />
            </div>

        </div>
    );
}
