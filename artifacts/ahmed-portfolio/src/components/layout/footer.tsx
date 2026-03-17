import { Link } from 'wouter';
import { MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer className="relative mt-32 border-t border-white/10 pt-20 pb-10 overflow-hidden bg-[#050b10]">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground max-w-3xl">
            {t.footer.ready}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/201006334062" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              {t.cta.whatsapp}
            </a>
            <a 
              href="mailto:ahmedmokireldin@gmail.com" 
              className="flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all"
            >
              <Mail className="w-6 h-6" />
              {t.cta.email}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">أحمد السيد محمد خيرالدين</h3>
            <p className="text-muted-foreground max-w-sm">
              Growth Marketing Automation Engineer AI<br/>
              Building automated systems that drive real revenue and scalable growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-3">
              <li><Link href="/data-sales" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.dataSales}</Link></li>
              <li><Link href="/software-sales" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.softwareSales}</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.courses}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/policies" className="text-muted-foreground hover:text-primary transition-colors">{t.footer.policies}</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">{t.footer.terms}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-muted-foreground text-sm flex flex-col items-center gap-2">
          <p>{t.footer.rights} {new Date().getFullYear()}</p>
          <div className="flex gap-4">
            <span>Cairo / UK</span>
            <span>•</span>
            <span dir="ltr">+20 100 633 4062</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
