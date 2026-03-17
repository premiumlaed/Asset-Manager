const menaCountries = [
  { code: 'sa', name: 'السعودية', en: 'Saudi Arabia' },
  { code: 'ae', name: 'الإمارات', en: 'UAE' },
  { code: 'eg', name: 'مصر', en: 'Egypt' },
  { code: 'kw', name: 'الكويت', en: 'Kuwait' },
  { code: 'qa', name: 'قطر', en: 'Qatar' },
  { code: 'bh', name: 'البحرين', en: 'Bahrain' },
  { code: 'om', name: 'عُمان', en: 'Oman' },
  { code: 'jo', name: 'الأردن', en: 'Jordan' },
  { code: 'lb', name: 'لبنان', en: 'Lebanon' },
  { code: 'iq', name: 'العراق', en: 'Iraq' },
  { code: 'ye', name: 'اليمن', en: 'Yemen' },
  { code: 'ma', name: 'المغرب', en: 'Morocco' },
  { code: 'dz', name: 'الجزائر', en: 'Algeria' },
  { code: 'tn', name: 'تونس', en: 'Tunisia' },
  { code: 'ly', name: 'ليبيا', en: 'Libya' },
  { code: 'sd', name: 'السودان', en: 'Sudan' },
  { code: 'ps', name: 'فلسطين', en: 'Palestine' },
  { code: 'sy', name: 'سوريا', en: 'Syria' },
  { code: 'tr', name: 'تركيا', en: 'Turkey' },
  { code: 'ir', name: 'إيران', en: 'Iran' },
  { code: 'pk', name: 'باكستان', en: 'Pakistan' },
];

const westernCountries = [
  { code: 'us', name: 'الولايات المتحدة', en: 'USA' },
  { code: 'gb', name: 'المملكة المتحدة', en: 'United Kingdom' },
  { code: 'ca', name: 'كندا', en: 'Canada' },
  { code: 'fr', name: 'فرنسا', en: 'France' },
  { code: 'de', name: 'ألمانيا', en: 'Germany' },
  { code: 'nl', name: 'هولندا', en: 'Netherlands' },
  { code: 'au', name: 'أستراليا', en: 'Australia' },
];

const allCountries = [...menaCountries, ...westernCountries];

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
  { icon: '🟢', name: 'بيوت | Bayut', cat: 'Real Estate · UAE' },
  { icon: '🔴', name: 'أمازون.ae', cat: 'E-commerce · UAE' },
  { icon: '🟣', name: 'Starzplay', cat: 'Streaming · MENA' },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: { icon: string; name: string; sub?: string; cat?: string }[];
  reverse?: boolean;
}) {
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
              <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                {item.name}
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">{item.sub || item.cat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlagMarqueeRow({
  countries,
  reverse = false,
  speed = 30,
}: {
  countries: { code: string; name: string; en: string }[];
  reverse?: boolean;
  speed?: number;
}) {
  const tripled = [...countries, ...countries, ...countries];
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex gap-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content', animationDuration: `${speed}s` }}
      >
        {tripled.map((country, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 px-4 py-4 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm flex-shrink-0 hover:bg-white/10 hover:border-teal/30 hover:scale-105 transition-all group cursor-default"
            style={{ minWidth: '88px' }}
          >
            <span
              className={`fi fi-${country.code} rounded-md shadow-md`}
              style={{ width: '44px', height: '33px', display: 'block', backgroundSize: 'cover', borderRadius: '6px' }}
            />
            <span className="text-[11px] font-bold text-center text-muted-foreground group-hover:text-teal transition-colors whitespace-nowrap leading-tight">
              {country.name}
            </span>
            <span className="text-[9px] text-muted-foreground/50 whitespace-nowrap">{country.en}</span>
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

      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full mb-4">
          Trusted Platforms & Markets
        </span>
        <h2 className="text-2xl md:text-3xl font-bold">المنصات والأسواق الموثوقة</h2>
        <p className="text-muted-foreground mt-2">
          بيانات وأتمتة وتكاملات تخدم عملاء في الشرق الأوسط وشمال أفريقيا والعالم
        </p>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={platforms} />
        <MarqueeRow items={menaCompanies} reverse />
      </div>
    </section>
  );
}

export function CountryFlags() {
  const row1 = menaCountries;
  const row2 = westernCountries;

  return (
    <section className="py-20 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal/3 to-transparent pointer-events-none" />

      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-teal border border-teal/30 rounded-full mb-4">
          Global Coverage
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">نخدم عملاء في الشرق الأوسط والعالم</h2>
        <p className="text-muted-foreground">
          قواعد بيانات وأنظمة أتمتة مُوجَّهة لكل سوق — الشرق الأوسط وأمريكا وأوروبا وأستراليا
        </p>
      </div>

      <div className="space-y-3">
        <FlagMarqueeRow countries={row1} speed={35} />
        <FlagMarqueeRow countries={[...row2, ...row1.slice(0, 14)]} reverse speed={28} />
        <FlagMarqueeRow countries={[...row1.slice(10), ...row2, ...row1.slice(0, 8)]} speed={42} />
      </div>

      <div className="mt-10 text-center relative z-10">
        <p className="text-muted-foreground text-sm">
          + تغطية عالمية شاملة ·{' '}
          <span className="text-primary font-bold">195+ دولة</span>
          {' '}في قواعد البيانات المتوفرة
        </p>
      </div>
    </section>
  );
}
