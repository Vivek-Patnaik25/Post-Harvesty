'use client';

import { motion } from 'framer-motion';

export function HarvestGradientBackground() {
    return (
        <div className="absolute inset-0 z-[-1] overflow-hidden bg-[#0F1115]">
            <motion.div
                className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-agri-green via-[#0F1115] to-[#0F1115]"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.3, 0.4],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-earth to-transparent opacity-20"
                animate={{
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
