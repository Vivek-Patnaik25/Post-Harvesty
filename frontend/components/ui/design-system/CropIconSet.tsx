import { LucideProps } from 'lucide-react';

export const CropIcons = {
    Tomato: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="12" cy="13" r="8" />
            <path d="M12 5v2" />
            <path d="m14 6-2-3-2 3" />
        </svg>
    ),
    Wheat: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 22a4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4" />
            <path d="M12 14V4" />
            <path d="m9 8 3-3" />
            <path d="m12 5 3 3" />
        </svg>
    ),
    Potato: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M13 19c4 0 7-2 7-5S16 7 11 7 4 9 4 12s2 7 9 7" />
            <path d="M8 12h.01" />
            <path d="M13 14h.01" />
            <path d="M15 11h.01" />
        </svg>
    ),
    Soil: (props: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 20H3" />
            <path d="M3 14h18" />
            <path d="M4 10h16" />
            <path d="M5 6h14" />
        </svg>
    ),
};
