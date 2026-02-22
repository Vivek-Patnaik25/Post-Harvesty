'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function FarmerTestimonial() {
    const { t } = useLanguage();
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-20"
                    style={{ backgroundImage: "url('/assets/images/farmer-testimonial.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <Quote className="h-12 w-12 text-agri-gold mx-auto mb-8 opacity-50" />
                    <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight mb-10 text-white/90">
                        {t.landing.testimonial.quote}
                    </h2>
                    <div>
                        <p className="text-xl font-bold text-white">{t.landing.testimonial.name}</p>
                        <p className="text-agri-gold">{t.landing.testimonial.role}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}