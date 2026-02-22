import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";

export default function AnalyticsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#050505] relative">
            <Navbar />
            <Sidebar />

            {/* Main Content Area - adjust padding for Sidebar */}
            <main className="pt-20 md:pl-64 p-6 min-h-screen transition-all">
                <div className="w-full mx-auto space-y-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
