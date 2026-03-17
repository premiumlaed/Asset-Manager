const menaCountries = [
  { flag: '🇸🇦', name: 'السعودية', en: 'Saudi Arabia' },
  { flag: '🇦🇪', name: 'الإمارات', en: 'UAE' },
  { flag: '🇪🇬', name: 'مصر', en: 'Egypt' },
  { flag: '🇰🇼', name: 'الكويت', en: 'Kuwait' },
  { flag: '🇶🇦', name: 'قطر', en: 'Qatar' },
  { flag: '🇧🇭', name: 'البحرين', en: 'Bahrain' },
  { flag: '🇴🇲', name: 'عُمان', en: 'Oman' },
  { flag: '🇯🇴', name: 'الأردن', en: 'Jordan' },
  { flag: '🇱🇧', name: 'لبنان', en: 'Lebanon' },
  { flag: '🇮🇶', name: 'العراق', en: 'Iraq' },
  { flag: '🇾🇪', name: 'اليمن', en: 'Yemen' },
  { flag: '🇲🇦', name: 'المغرب', en: 'Morocco' },
  { flag: '🇩🇿', name: 'الجزائر', en: 'Algeria' },
  { flag: '🇹🇳', name: 'تونس', en: 'Tunisia' },
  { flag: '🇱🇾', name: 'ليبيا', en: 'Libya' },
  { flag: '🇸🇩', name: 'السودان', en: 'Sudan' },
  { flag: '🇵🇸', name: 'فلسطين', en: 'Palestine' },
  { flag: '🇸🇾', name: 'سوريا', en: 'Syria' },
];

const platforms = [
  { icon: '🔷', name: 'Apollo.io', sub: '50GB+ Data' },
  { icon: '🔗', name: 'LinkedIn', sub: 'B2B Leads' },
  { icon: '📘', name: 'Meta / Facebook', sub: 'Custom Audiences' },
  { icon: '🔵', name: 'ZoomInfo', sub: 'Enterprise B2B' },
  { icon: '⚡', name: 'n8n', sub: 'Automation' },
  { icon: '🟣', name: 'Make.com', sub: 'Workflows' },
  { icon: '📨', name: 'SendPulse', sub: 'Email · WA · SMS' },
  { icon: '🎯', name: 'GoHighLevel', sub: 'CRM & Funnels' },
  { icon: '💬', name: 'WhatsApp API', sub: 'Baileys · Business' },
  { icon: '🔶', name: 'LeadRocks', sub: 'Niche Leads' },
  { icon: '📊', name: 'People Data Labs', sub: 'Demographics' },
  { icon: '🛒', name: 'Google Maps', sub: 'Local Business' },
];

const menaCompanies = [
  { icon: '🟡', name: 'نون | Noon', cat: 'E-commerce · UAE' },
  { icon: '🟢', name: 'طلبات | Talabat', cat: 'Food Delivery · Gulf' },
  { icon: '🔴', name: 'كريم | Careem', cat: 'Mobility · MENA' },
  { icon: '🔵', name: 'جرير | Jarir', cat: 'Retail · KSA' },
  { icon: '⚫', name: 'STC', cat: 'Telecom · KSA' },
  { icon: '🟠', name: 'نمشي | Namshi', cat: 'Fashion · UAE' },
  { icon: '🟤', name: 'أنغامي | Anghami', cat: 'Music · Lebanon' },
  { icon: '🔵', name: 'مرسول | Mrsool', cat: 'Delivery · KSA' },
  { icon: '🟡', name: 'OLX Arabia', cat: 'Marketplace · MENA' },
  { icon: '🟢', name: 'بيتكوم | Bayut', cat: 'Real Estate · UAE' },
  { icon: '🔴', name: 'أمازون.ae', cat: 'E-commerce · UAE' },
  { icon: '🟣', name: 'Starzplay', cat: 'Streaming · MENA' },
];

function MarqueeRow({ items, reverse = false }: { items: { icon: string; name: string; sub?: string; cat?: string }[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm flex-shrink-0 hover:bg-white/10 hover:border-primary/20 transition-colors group"
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors whitespace-nowrap">{item.name}</div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">{item.sub || item.cat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="py-20 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full mb-4">
          Trusted Platforms & Markets
        </span>
        <h2 className="text-2xl md:text-3xl font-bold">المنصات والأسواق الموثوقة</h2>
        <p className="text-muted-foreground mt-2">بيانات وأتمتة وتكاملات تخدم عملاء في الشرق الأوسط وشمال أفريقيا والعالم</p>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={platforms} />
        <MarqueeRow items={menaCompanies} reverse />
      </div>
    </section>
  );
}

export function CountryFlags() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-teal border border-teal/30 rounded-full mb-4">
            MENA Coverage
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">نخدم عملاء في كل دولة عربية</h2>
          <p className="text-muted-foreground">قواعد بيانات وأنظمة أتمتة مُوجَّهة لكل سوق بشكل مستقل</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
          {menaCountries.map((country, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/4 border border-white/6 hover:bg-white/8 hover:border-primary/20 hover:scale-105 transition-all cursor-default group"
            >
              <span className="text-3xl md:text-4xl leading-none">{country.flag}</span>
              <span className="text-xs font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                {country.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">
            + تغطية عالمية شاملة ·{' '}
            <span className="text-primary font-bold">195+ دولة</span>
            {' '}في قواعد البيانات المتوفرة
          </p>
        </div>
      </div>
    </section>
  );
}
