import { motion } from 'framer-motion';
import { Database, Filter, Globe, Download, CheckCircle2, Users, Building2, ShoppingBag, Linkedin } from 'lucide-react';
import { SEO } from '@/components/seo';
import { GlassCard } from '@/components/ui/glass-card';
import { useLanguage } from '@/hooks/use-language';

const dataProducts = [
  {
    icon: <Globe className="w-7 h-7 text-primary" />,
    title: 'Apollo.io Big Data',
    subtitle: 'USA & Canada — All Fields',
    count: '50GB+ CSV',
    color: 'from-yellow-500/20 to-orange-500/20',
    tag: 'Premium',
    tagColor: 'bg-primary/10 text-primary border-primary/20',
    features: [
      'Apollo_V7_V5 — جميع الحقول (All Fields)',
      'أسواق أمريكا الشمالية بالكامل',
      'Email + Phone + Title + Company',
      'صيغة CSV جاهزة للاستيراد الفوري'
    ]
  },
  {
    icon: <Building2 className="w-7 h-7 text-blue-400" />,
    title: 'ZoomInfo B2B Dataset',
    subtitle: 'High-Quality B2B Intelligence',
    count: 'Enterprise Grade',
    color: 'from-blue-500/20 to-cyan-500/20',
    tag: 'B2B',
    tagColor: 'bg-blue-500/10 text-blue-400 border-blue-400/20',
    features: [
      'بيانات شركات وأصحاب قرار',
      'مُحددة بالصناعة والحجم',
      'بيانات تنفيذيين ومديرين',
      'قابلة للفلترة حسب الموقع والدخل'
    ]
  },
  {
    icon: <Linkedin className="w-7 h-7 text-[#0A66C2]" />,
    title: 'LinkedIn Data',
    subtitle: 'Decision Makers Worldwide',
    count: 'جميع الدول',
    color: 'from-blue-600/20 to-indigo-600/20',
    tag: 'Global',
    tagColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-400/20',
    features: [
      'صناع القرار وأصحاب الأعمال',
      'المسؤولون التنفيذيون C-Suite',
      'مُقسّمة بالدولة والنيتش والصناعة',
      'LinkedIn Sales Navigator data'
    ]
  },
  {
    icon: <Users className="w-7 h-7 text-[#1877F2]" />,
    title: 'Facebook Leads Database',
    subtitle: 'مخصصة للحملات الإعلانية',
    count: 'Worldwide',
    color: 'from-blue-700/20 to-purple-600/20',
    tag: 'Custom Audiences',
    tagColor: 'bg-blue-700/10 text-blue-300 border-blue-300/20',
    features: [
      'بيانات Facebook لجميع الدول',
      'جاهزة Custom Audiences / Lookalike',
      'Bahrain, Egypt, Emirates, Iraq, KSA وغيرها',
      'Phone, Facebook ID, Email, Location'
    ]
  },
  {
    icon: <ShoppingBag className="w-7 h-7 text-teal" />,
    title: 'E-commerce Stores Data',
    subtitle: 'Online Sellers & Merchants',
    count: 'Multi-Market',
    color: 'from-teal-500/20 to-green-500/20',
    tag: 'E-commerce',
    tagColor: 'bg-teal-500/10 text-teal border-teal/20',
    features: [
      'قوائم متاجر Shopify / WooCommerce',
      'بيانات بائعين عبر الإنترنت',
      'تواصل المالك + موقع المتجر',
      'مُصنّفة حسب النيتش والبلد'
    ]
  },
  {
    icon: <Filter className="w-7 h-7 text-accent" />,
    title: 'LeadRocks & NinjaLeads',
    subtitle: 'Niche-Specific Millions',
    count: 'Millions of Leads',
    color: 'from-purple-500/20 to-pink-500/20',
    tag: 'Segmented',
    tagColor: 'bg-accent/10 text-accent border-accent/20',
    features: [
      'ملايين Leads مقسّمة بالدولة',
      'فلترة بالنيتش والصناعة',
      'People Data Labs Demographics',
      'جاهزة للاستخدام الفوري في الحملات'
    ]
  }
];

const sources = [
  { name: 'Apollo.io', note: '50GB+ all fields' },
  { name: 'ZoomInfo', note: 'Enterprise B2B' },
  { name: 'LeadRocks', note: 'Niche by country' },
  { name: 'NinjaLeads', note: 'Millions segmented' },
  { name: 'LinkedIn', note: 'Sales Navigator' },
  { name: 'People Data Labs', note: 'Demographics' },
  { name: 'Facebook Business', note: 'All countries' },
  { name: 'Google Maps', note: 'Local businesses' }
];

export default function DataSales() {
  const { t, dir } = useLanguage();

  return (
    <>
      <SEO
        title={`${t.nav.dataSales} | أحمد خيرالدين`}
        description="قواعد بيانات B2B جاهزة: Apollo.io (50GB+), ZoomInfo, LinkedIn, Facebook Leads, E-commerce Data لـ 195+ دولة. بصيغة CSV للاستخدام الفوري في حملات WhatsApp والإيميل."
        canonicalPath="/data-sales"
      />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Database className="w-12 h-12 text-primary" />
          </div>
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full mb-4">
            Database Seller
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            قواعد البيانات الجاهزة لـ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
              195+ دولة
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            من الأعماق إليك. بيانات Apollo.io (50GB+) وZoomInfo وLinkedIn وFacebook Leads مُنظّمة وجاهزة بصيغة CSV للاستخدام الفوري في حملات WhatsApp والإيميل والإعلانات.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: '50GB+', label: 'حجم قاعدة Apollo.io' },
            { value: '195+', label: 'دولة مُغطّاة' },
            { value: 'CSV', label: 'صيغة جاهزة' },
            { value: 'WhatsApp', label: 'طلب وتسليم فوري' }
          ].map((s, i) => (
            <GlassCard key={i} className="p-5 text-center">
              <div className="text-2xl font-black text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {dataProducts.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <GlassCard hoverEffect className="p-8 h-full flex flex-col relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${product.color} blur-[60px] rounded-full pointer-events-none`} />

                <div className="flex items-start justify-between mb-4 relative">
                  <div className="p-3 bg-background/50 rounded-xl border border-white/5">
                    {product.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${product.tagColor}`}>
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.subtitle}</p>
                <div className="text-primary font-bold text-base mb-6">{product.count}</div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/201006334062?text=${encodeURIComponent('أريد شراء: ' + product.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-xl font-bold transition-colors mt-auto"
                >
                  {t.cta.buyNow}
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Data Sources */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">مصادر البيانات المعتمدة</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sources.map((s, i) => (
              <GlassCard key={i} className="p-4 flex flex-col items-center text-center">
                <div className="font-bold text-sm mb-1">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.note}</div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <GlassCard className="p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <Download className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">اطلب قاعدة البيانات التي تحتاجها</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            أخبرني بالدولة أو الصناعة أو النيتش — وسأوفر لك البيانات الجاهزة. التسليم فوري عبر WhatsApp أو ملف مشترك.
          </p>
          <a
            href="https://wa.me/201006334062?text=Database%20Purchase%20-%20أريد%20قاعدة%20بيانات"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-[0_0_25px_rgba(253,216,46,0.25)]"
          >
            {t.cta.whatsapp}
          </a>
        </GlassCard>
      </div>
    </>
  );
}
