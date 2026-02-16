'use client';

import { Card } from '@/components/ui/Card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
    label: string;
    value: string | number;
    icon?: LucideIcon;
    trend?: 'up' | 'down' | 'neutral';
    alert?: boolean;
}

export function DashboardMetricCard({ label, value, icon: Icon, trend, alert }: MetricCardProps) {
    return (
        <Card
            className={cn(
                "relative overflow-hidden flex flex-col justify-between h-[140px] border-0",
                alert ? "bg-[#1E1010] border-l-4 border-l-red-500" : "bg-[#0E1210]"
                // Enhanced contrast for Risk card
            )}
            variant="glass-dark" // We might need to override this with specific styles
        >
            <div className="flex justify-between items-start">
                <span className="text-gray-400 text-sm font-medium">{label}</span>
                {Icon && (
                    <Icon
                        className={cn(
                            "h-5 w-5",
                            alert ? "text-red-500" : "text-agri-green"
                        )}
                    />
                )}
            </div>

            <div>
                <h3 className="text-4xl font-bold text-white font-display tracking-tight">{value}</h3>
            </div>

            {alert && (
                <div className="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none" />
            )}
        </Card>
    );
}
