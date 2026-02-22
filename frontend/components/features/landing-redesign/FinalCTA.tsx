'use client';

import { Button } from '@/components/ui/Button';
import { HarvestGradientBackground } from '@/components/ui/design-system/HarvestGradientBackground';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export function FinalCTA() {
    const { t } = useLanguage();
    return (
        <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
            <HarvestGradientBackground />
            <div className="absolute inset-0 bg-black/20" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold font-display mb-8 tracking-tight">
                    {t.landing.cta.headline_1} <br />
                    <span className="text-agri-gold">{t.landing.cta.headline_2}</span>
                </h2>
                <Link href="/auth">
                    <Button size="lg" className="h-16 px-10 text-lg bg-white text-black hover:bg-gray-200">
                        {t.landing.cta.button}
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}