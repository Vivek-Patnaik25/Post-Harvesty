import { HTMLMotionProps, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    variant?: 'glass' | 'glass-dark' | 'outline' | 'green-glass';
}

export function Card({ children, className, variant = 'green-glass', ...props }: CardProps) {
    const variants = {
        glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl",
        "glass-dark": "bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl",
        outline: "border border-agri-green/30 bg-transparent",
        "green-glass": "bg-[linear-gradient(145deg,rgba(34,89,63,0.35),rgba(20,60,45,0.25))] backdrop-blur-[12px] border border-white/5 shadow-xl text-white"
    };

    return (
        <motion.div
            className={cn(
                "rounded-2xl p-6 transition-all duration-300",
                variants[variant],
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)" }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
