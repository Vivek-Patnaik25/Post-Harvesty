import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                agri: {
                    green: "#10B981", // Emerald 500 (Primary)
                    teal: "#14B8A6",  // Teal 500
                    dark: "#0B1F17",  // Deep Forest Green Base
                    moss: "#0E241C",  // Moss Variation
                    glass: "rgba(34, 89, 63, 0.35)", // Green Glass
                    light: "#ECFDF5", // Emerald 50
                    charcoal: "#0F1115",
                    gold: "#D4AF37",
                    brown: "#5D4037",
                    amber: "#FFBF00",
                },
                sunlight: "#F59E0B", // Amber 500
                earth: "#78350F",   // Amber 900
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-outfit)', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
