'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import { Sprout, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setLoading(false);
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#050505]">
            {/* Left: Rich Visual */}
            <div className="relative hidden md:block overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-agri-dark to-black z-10 opacity-60" />
                {/* Abstract Field Representation */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-5819acf424d6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

                <div className="relative z-20 h-full flex flex-col justify-between p-12 text-white">
                    <div className="flex items-center gap-2">
                        <Sprout className="h-6 w-6 text-agri-green" />
                        <span className="text-xl font-bold font-display">AgriIntel AI</span>
                    </div>

                    <div className="max-w-md">
                        <h2 className="text-4xl font-bold font-display mb-6 leading-tight">
                            Smarter decisions for a
                            <span className="text-agri-green"> better harvest.</span>
                        </h2>
                        <p className="text-lg text-gray-300">
                            Join 5,000+ farmers and aggregators using AI to reduce spoilage and maximize profit.
                        </p>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-400">
                        <span>© 2026 AgriIntel AI</span>
                        <span>Privacy Policy</span>
                        <span>Terms</span>
                    </div>
                </div>
            </div>

            {/* Right: Login Form */}
            <div className="flex items-center justify-center p-6 relative">
                <Link href="/" className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <div className="w-full max-w-md">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold font-display mb-2">Welcome Back</h1>
                        <p className="text-gray-400">Enter your credentials to access your dashboard.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <Input
                            id="email"
                            label="Email Address"
                            type="email"
                            required
                        />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            required
                        />

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-white">
                                <input type="checkbox" className="rounded border-gray-700 bg-white/5 checked:bg-agri-green" />
                                Remember me
                            </label>
                            <a href="#" className="text-agri-green hover:underline">Forgot password?</a>
                        </div>

                        <Button type="submit" className="w-full" size="lg" isLoading={loading}>
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-400">
                        Don't have an account? <a href="#" className="text-agri-green hover:underline">Request Access</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
