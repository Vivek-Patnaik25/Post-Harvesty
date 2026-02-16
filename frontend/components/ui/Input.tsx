import { InputHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!(props.value || props.defaultValue));

    return (
        <div className="relative mb-6">
            <input
                id={id}
                className={cn(
                    "peer w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 pt-5 text-white outline-none transition-all focus:border-agri-green/50 focus:bg-white/10",
                    error && "border-red-500/50",
                    className
                )}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                    setIsFocused(false);
                    setHasValue(e.target.value.length > 0);
                }}
                onChange={(e) => {
                    setHasValue(e.target.value.length > 0);
                    props.onChange?.(e);
                }}
                {...props}
            />
            <motion.label
                htmlFor={id}
                className={cn(
                    "absolute left-4 text-gray-400 transition-all pointer-events-none",
                )}
                initial={false}
                animate={{
                    top: isFocused || hasValue || props.value ? "4px" : "16px",
                    fontSize: isFocused || hasValue || props.value ? "10px" : "16px",
                    color: isFocused ? "#10B981" : "#9CA3AF"
                }}
            >
                {label}
            </motion.label>
            {error && (
                <span className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {error}
                </span>
            )}
        </div>
    );
}
