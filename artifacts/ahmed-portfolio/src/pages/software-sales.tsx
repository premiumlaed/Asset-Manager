import { motion } from 'framer-motion';
import { MessageSquare, LayoutDashboard, Zap, Mail, Bot, Code2, Terminal, CheckCircle2, ExternalLink } from 'lucide-react';
import { SEO } from '@/components/seo';
import { GlassCard } from '@/components/ui/glass-card';
import { useLanguage } from '@/hooks/use-language';

const softwareProducts = [
  {
    icon: <MessageSquare className="w-8 h-8 text-[#25D366]" />,
    category: 'WhatsApp Solutions',
    title: 'WhatsApp Business Bot Platform',
    desc: 'منصة جاهزة لإنشاء بوتات واتساب بدون برمجة. تدعم Interactive Buttons وList Messages وProduct Catalogs وOrder Confirmation.',
    features: [
      'Interactive Buttons & List Messages',
      'Product Catalog داخل WhatsApp',
      'Order Confirmation & نظام إدارة الطلبات',
      'Auto-Reply systems ذكية',
      'AI-powered chatbot flows',
      'تكامل مع CRM و Google Sheets'
    ],
    accent: 'text-[#25D366]',
    glow: 'from-green-500/20 to-emerald-500/20',
    example: 'Zumra Food Chatbot — شات بوت مطعم مع كتالوج منتجات'
  },
  {
    icon: <Bot className="w-8 h-8 text-teal" />,
    category: 'WhatsApp Solutions',
    title: 'WhatsApp API Integration Tool',
    desc: 'أداة ربط WhatsApp (Baileys library) مع الأنظمة الخارجية. تدعم multi-number، template management، وAI chatbot management.',
    features: [
      'Baileys library — WhatsApp Web API',
      'Multi-number management',
      'Template Management System',
      'AI Chatbot Management Platform',
      'Webhook integration',
      'Real-time messaging dashboard'
    ],
    accent: 'text-teal',
    glow: 'from-teal-500/20 to-cyan-500/20',
    example: 'AI Chatbot Management — نظام إدارة شات بوتات ذكية'
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-accent" />,
    category: 'CRM Solutions',
    title: 'Custom CRM + Unified Inbox',
    desc: 'نظام CRM مخصص قابل للتخصيص مع Unified Inbox يجمع WhatsApp وEmail وSMS في مكان واحد. يشمل Lead Management وSales Funnel Tracker.',
    features: [
      'Unified Inbox: WhatsApp + Email + SMS',
      'Lead Management & Scoring',
      'Sales Funnel Tracker مرئي',
      'Customer Management Portal',
      'Appointment Booking System',
      'تكامل مع Payment Gateways'
    ],
    accent: 'text-accent',
    glow: 'from-purple-500/20 to-violet-500/20',
    example: 'أنظمة حجز وإدارة عملاء مخصصة'
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    category: 'Automation Templates',
    title: 'n8n & Make.com Workflow Templates',
    desc: 'قوالب Workflows جاهزة لـ n8n وMake.com تغطي سيناريوهات Lead Nurturing وCRM Sync وEmail Follow-up وWhatsApp Sequences.',
    features: [
      'Customer Journey workflows',
      'Lead Nurturing & Drip Campaigns',
      'CRM ↔ WhatsApp ↔ Email Sync',
      'Multi-platform orchestration',
      'GoHighLevel Snapshots',
      'تثبيت وتشغيل فوري'
    ],
    accent: 'text-primary',
    glow: 'from-yellow-500/20 to-amber-500/20',
    example: 'سير عمل n8n و Make.com جاهزة'
  },
  {
    icon: <Mail className="w-8 h-8 text-blue-400" />,
    category: 'Marketing Suite',
    title: 'Email Automation Suite',
    desc: 'مجموعة أدوات أتمتة البريد الإلكتروني على SendPulse وActiveCampaign. تشمل Email Sequences وDrip Campaigns وLead Scoring.',
    features: [
      'Email Sequences & Drip Campaigns',
      'SendPulse advanced setup',
      'ActiveCampaign automation',
      'Lead Scoring & Segmentation',
      'A/B Testing workflows',
      'CRM integration'
    ],
    accent: 'text-blue-400',
    glow: 'from-blue-500/20 to-indigo-500/20',
    example: 'حملات Email Automation متكاملة'
  },
  {
    icon: <Code2 className="w-8 h-8 text-pink-400" />,
    category: 'Data Tools',
    title: 'Data Extraction Bots',
    desc: 'بوتات استخراج بيانات مخصصة تعمل على Google Maps وFacebook وLinkedIn وMeta. مع خيار Ultra Facebook Lead Generation Tool.',
    features: [
      'Google Maps scraper محلي وعالمي',
      'Facebook Data Extractor متعدد الدول',
      'LinkedIn automation scraper',
      'Custom fields selection',
      'Auto-sync to Google Sheets',
      'تصدير CSV + فلترة متقدمة'
    ],
    accent: 'text-pink-400',
    glow: 'from-pink-500/20 to-rose-500/20',
    example: 'Ultra Facebook Lead Generation Tool'
  }
];

const licenses = [
  {
    title: 'WPFunnels Lifetime License',
    desc: 'رخصة مدى الحياة لـ 5 مواقع — قابلة للاستخدام في مشاريع العملاء أو إعادة البيع.',
    badge: 'Lifetime'
  },
  {
    title: 'Marketing eBooks',
    desc: 'كتب رقمية حول التسويق والأتمتة وWhatsApp Funnels.',
    badge: 'Digital'
  },
  {
    title: 'Course Materials Bundle',
    desc: 'مواد تعليمية كاملة لكورسات الأتمتة والتسويق الرقمي.',
    badge: 'Training'
  }
];

export default function SoftwareSales() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title={`${t.nav.softwareSales} | أحمد خيرالدين`}
        description="منتجات برمجية جاهزة: WhatsApp Bot Platform, CRM Unified Inbox, n8n Make.com Templates, Email Automation Suite, Data Extraction Bots. تطوير مخصص وتسليم فوري."
        canonicalPath="/software-sales"
      />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 border border-accent/20">
              <Terminal className="w-4 h-4" /> 12+ منتج برمجي جاهز
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              البرامج والأنظمة الجاهزة
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-violet-300 mt-1">
                WhatsApp · CRM · Automation
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              لا تستأجر SaaS مُقيِّد. امتلك أدواتك. منتجات جاهزة للتشغيل أو مخصصة حسب نشاطك — مع دعم كامل وتسليم فوري.
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/network-node.png`}
            alt="Marketing Automation Infrastructure"
            className="w-full md:w-1/3 rounded-[24px] opacity-80 mix-blend-screen"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {softwareProducts.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <GlassCard hoverEffect className="p-8 h-full flex flex-col group relative overflow-hidden">
                <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-bl ${product.glow} blur-[70px] rounded-full pointer-events-none`} />

                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 relative">
                  {product.category}
                </div>

                <div className="p-4 bg-background/50 rounded-2xl inline-block mb-6 border border-white/5 shadow-inner relative">
                  {product.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{product.desc}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className={`w-4 h-4 ${product.accent} flex-shrink-0 mt-0.5`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {product.example && (
                  <div className="text-xs text-muted-foreground/60 italic mb-6 p-3 rounded-lg bg-white/3 border border-white/5">
                    مثال: {product.example}
                  </div>
                )}

                <a
                  href={`https://wa.me/201006334062?text=${encodeURIComponent('Custom Development - أريد: ' + product.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-center bg-white/5 border border-white/10 hover:bg-white/10 text-foreground py-3 rounded-xl font-semibold transition-colors mt-auto group-hover:border-primary/30 group-hover:text-primary"
                >
                  {t.cta.buyNow} <ExternalLink className="w-4 h-4" />
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Licenses / Digital Products */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">منتجات رقمية ورخص جاهزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenses.map((l, i) => (
              <GlassCard key={i} hoverEffect className="p-6 flex flex-col gap-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
                  {l.badge}
                </span>
                <h3 className="font-bold">{l.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow">{l.desc}</p>
                <a
                  href="https://wa.me/201006334062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold hover:underline mt-auto"
                >
                  تواصل للاستفسار ←
                </a>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Custom Development CTA */}
        <GlassCard className="p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/20">
            Custom Development
          </div>
          <h2 className="text-3xl font-bold mb-4">تحتاج شيئًا مخصصًا؟</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            إذا لم تجد ما تحتاجه، أبني لك النظام من الصفر — WhatsApp Bot، CRM، SaaS Platform، أو Automation Workflow حسب متطلباتك بالضبط.
          </p>
          <a
            href="https://wa.me/201006334062?text=Custom%20Development%20-%20أريد%20بناء%20نظام%20مخصص"
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
