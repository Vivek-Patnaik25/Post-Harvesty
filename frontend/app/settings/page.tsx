'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, Bell, Shield, Smartphone, Globe, Moon, Save } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ConfigSection = ({ title, description, icon: Icon, children }: any) => (
    <Card className="p-6 bg-[#0E1210] border-white/5 mb-6">
        <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-white/5 rounded-xl">
                <Icon className="h-6 w-6 text-agri-green" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
        </div>
        <div className="space-y-4">
            {children}
        </div>
    </Card>
);

const ToggleSwitch = ({ label, description, defaultChecked = false }: any) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
            <div>
                <p className="font-medium text-white">{label}</p>
                <p className="text-sm text-gray-400 mt-0.5">{description}</p>
            </div>
            <button
                type="button"
                onClick={() => setChecked(!checked)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-agri-green focus:ring-offset-2 focus:ring-offset-[#0E1210] ${checked ? 'bg-agri-green' : 'bg-gray-700'
                    }`}
            >
                <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'
                        }`}
                />
            </button>
        </div>
    );
};

export default function SettingsPage() {
    const { locale, setLocale } = useLanguage();

    return (
        <div className="space-y-8 animate-fade-in pb-12 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-3xl font-bold font-display text-white">Settings</h1>
                    <p className="text-gray-400 mt-1">Manage your account and application preferences.</p>
                </div>
                <Button className="bg-agri-green text-black hover:bg-agri-green-light font-medium gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation Sidebar (Desktop) */}
                <div className="hidden md:block col-span-1 space-y-2">
                    <button className="w-full text-left px-4 py-3 rounded-lg bg-agri-green/10 text-agri-green font-medium flex items-center gap-3">
                        <User className="h-5 w-5" /> Account Profile
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3">
                        <Bell className="h-5 w-5" /> Notifications
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3">
                        <Shield className="h-5 w-5" /> Privacy & Security
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3">
                        <Globe className="h-5 w-5" /> Regional Preferences
                    </button>
                </div>

                {/* Main Settings Content */}
                <div className="col-span-1 md:col-span-2 space-y-6">

                    {/* Account Settings */}
                    <ConfigSection title="Account Profile" description="Update your personal details and farm identifiers." icon={User}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Full Name</label>
                                <input type="text" defaultValue="John Farmer" className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-agri-green/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email Address</label>
                                <input type="email" defaultValue="john@agrifarm.com" className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-agri-green/50" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-gray-400">Farm Location</label>
                                <input type="text" defaultValue="Vidarbha, Maharashtra" className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-agri-green/50" />
                            </div>
                        </div>
                    </ConfigSection>

                    {/* Notification Settings */}
                    <ConfigSection title="Notifications" description="Choose what alerts you want to receive." icon={Bell}>
                        <ToggleSwitch
                            label="Crop Disease Alerts"
                            description="Get notified immediately when high spoilage risks are detected."
                            defaultChecked={true}
                        />
                        <ToggleSwitch
                            label="Price Forecast Updates"
                            description="Weekly summaries of expected market price trends."
                            defaultChecked={true}
                        />
                        <ToggleSwitch
                            label="System Maintenance"
                            description="Occasional emails about platform updates and downtime."
                            defaultChecked={false}
                        />
                    </ConfigSection>

                    {/* App Preferences */}
                    <ConfigSection title="App Preferences" description="Customize how the dashboard looks and behaves." icon={Smartphone}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Language</label>
                                <select
                                    className="w-full bg-[#1F2937]/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-agri-green/50 appearance-none"
                                    value={locale}
                                    onChange={(e) => setLocale(e.target.value as any)}
                                >
                                    <option value="en">English (US)</option>
                                    <option value="hi">Hindi (India)</option>
                                    <option value="es">Spanish</option>
                                    <option value="or">Odia</option>
                                    <option value="gu">Gujarati</option>
                                    <option value="te">Telugu</option>
                                </select>
                            </div>
                            <ToggleSwitch
                                label="Offline Mode Support"
                                description="Cache critical data to allow limited access without internet."
                                defaultChecked={true}
                            />
                        </div>
                    </ConfigSection>

                </div>
            </div>
        </div>
    );
}
