import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { Language } from '@/lib/translations';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [location] = useLocation();
  const { lang, setLang, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', label: t.nav.services },
    { href: '/data-sales', label: t.nav.dataSales },
    { href: '/software-sales', label: t.nav.softwareSales },
    { href: '/courses', label: t.nav.courses },
    { href: '/#proof', label: t.nav.proof },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'fa', label: 'فارسی' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-white/10 shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <Link href="/" className="group flex flex-col cursor-pointer">
            <span className="text-xl font-bold text-primary tracking-tight transition-transform group-hover:scale-105 origin-left">
              أحمد السيد محمد خيرالدين
            </span>
            <span className="text-xs text-muted-foreground mt-1 tracking-wider uppercase font-semibold">
              Growth Marketing Automation
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Lang Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm text-foreground"
              >
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="uppercase">{lang}</span>
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute top-full mt-2 w-32 bg-card border border-white/10 rounded-2xl shadow-xl overflow-hidden ${dir === 'rtl' ? 'left-0' : 'right-0'}`}
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-${dir === 'rtl' ? 'right' : 'left'} px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${lang === l.code ? 'text-primary bg-primary/10' : 'text-foreground'}`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a 
              href="https://wa.me/201006334062" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-2.5 rounded-full font-semibold shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.whatsapp}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex flex-wrap gap-2 mt-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm ${lang === l.code ? 'bg-primary text-primary-foreground' : 'bg-white/5 text-foreground'}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <a 
                href="https://wa.me/201006334062" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                {t.cta.whatsapp}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
