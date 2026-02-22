import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
                <p>{t.landing.footer.rights}</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-agri-green transition-colors">{t.landing.footer.privacy}</a>
                    <a href="#" className="hover:text-agri-green transition-colors">{t.landing.footer.terms}</a>
                    <a href="#" className="hover:text-agri-green transition-colors">{t.landing.footer.contact}</a>
                </div>
            </div>
        </footer>
    );
}
