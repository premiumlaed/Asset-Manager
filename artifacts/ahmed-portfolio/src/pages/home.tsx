import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, CheckCircle2, TrendingUp, Database, Code, PlayCircle } from 'lucide-react';
import { SEO } from '@/components/seo';
import { GlassCard } from '@/components/ui/glass-card';
import { useLanguage } from '@/hooks/use-language';

export default function Home() {
  const { t, dir } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const serviceIcons = [
    <TrendingUp className="w-8 h-8 text-primary" />,
    <Database className="w-8 h-8 text-teal" />,
    <Code className="w-8 h-8 text-accent" />,
    <PlayCircle className="w-8 h-8 text-white" />
  ];
  const serviceLinks = [undefined, '/data-sales', '/software-sales', '/courses'];

  const tagColors: Record<string, string> = {
    Growth: 'text-primary border-primary/30 bg-primary/5',
    Data: 'text-teal border-teal/30 bg-teal/5',
    Software: 'text-accent border-accent/30 bg-accent/5',
    Courses: 'text-white/80 border-white/20 bg-white/5',
    رشد: 'text-primary border-primary/30 bg-primary/5',
    داده: 'text-teal border-teal/30 bg-teal/5',
    'نرم‌افزار': 'text-accent border-accent/30 bg-accent/5',
    'دوره‌ها': 'text-white/80 border-white/20 bg-white/5'
  };

  return (
    <>
      <SEO canonicalPath="/" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial="hidden" animate="visible" variants={fadeIn}
              className="flex flex-col items-start"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-6">
                {t.hero.eyebrow}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                {t.hero.titleBase}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                  {t.hero.titleHighlight1}
                </span>{' '}
                <br className="hidden md:block" />
                <span className="text-3xl md:text-5xl font-normal text-muted-foreground">
                  {t.hero.titleMiddle}
                </span>{' '}
                <span className="text-teal block mt-2">
                  {t.hero.titleHighlight2}
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="https://wa.me/201006334062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(253,216,46,0.3)]"
                >
                  {t.cta.whatsapp}
                </a>
                <Link href="/courses" className="bg-white/5 border border-white/10 text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                  {t.nav.courses}
                </Link>
              </div>

              {/* Real metrics from profile */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full">
                <div>
                  <h4 className="text-3xl font-bold text-foreground mb-1">15+</h4>
                  <p className="text-sm text-muted-foreground">{t.hero.metrics.years.replace(/^\S+\s/, '')}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-1">50GB+</h4>
                  <p className="text-sm text-muted-foreground">{t.hero.metrics.data.replace(/^\S+\s/, '')}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-teal mb-1">195+</h4>
                  <p className="text-sm text-muted-foreground">{t.hero.metrics.countries.replace(/^\S+\s/, '')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <GlassCard className="p-2 relative z-10 w-4/5 ml-auto">
                <div className="rounded-[24px] overflow-hidden relative aspect-[3/4] bg-gradient-to-tr from-accent/20 to-primary/20">
                  <img
                    src={`${import.meta.env.BASE_URL}images/portrait.png`}
                    alt="Ahmed Mokireldin - Growth Marketing Automation Engineer"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              </GlassCard>

              <GlassCard className="absolute top-20 -left-10 p-4 z-20 flex items-center gap-3 animate-pulse">
                <CheckCircle2 className="text-teal w-6 h-6" />
                <span className="font-semibold text-sm">System Deployed</span>
              </GlassCard>

              <GlassCard className="absolute bottom-24 -left-14 p-4 z-20">
                <p className="text-xs text-muted-foreground mb-1">go.ahmedmokireldin.online</p>
                <p className="text-sm font-bold text-primary">🟢 WhatsApp +201006334062</p>
              </GlassCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full mb-4">
              {t.services.eyebrow}
            </span>
            <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
              >
                <GlassCard hoverEffect className="p-8 h-full flex flex-col items-start group">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-6 ${tagColors[service.tag] || 'text-primary border-primary/30 bg-primary/5'}`}>
                    {service.tag}
                  </span>
                  <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {serviceIcons[i]}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>

                  {serviceLinks[i] && (
                    <Link href={serviceLinks[i]!} className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all mt-auto">
                      {t.cta.learnMore} <ArrowLeft className={`w-4 h-4 ${dir === 'ltr' ? 'rotate-180' : ''}`} />
                    </Link>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section id="proof" className="py-24 bg-card/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')] opacity-[0.02] bg-cover bg-center mix-blend-screen" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-teal border border-teal/30 rounded-full mb-4">
              {t.proof.eyebrow}
            </span>
            <h2 className="text-4xl font-bold">{t.proof.title}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {t.proof.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <GlassCard className="p-6 text-center">
                  <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground leading-tight">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Stack highlights */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.stack.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {t.stack.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-primary/80">{item.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/dashboard-proof.png`}
                alt="n8n Make.com Automation Dashboard"
                className="rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(123,45,159,0.2)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent border border-accent/30 rounded-full mb-6">
            {t.contact.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-muted-foreground text-xl mb-10">{t.contact.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/201006334062"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-xl hover:bg-primary/90 transition-colors shadow-[0_0_30px_rgba(253,216,46,0.3)] flex items-center justify-center gap-2"
            >
              {t.cta.whatsapp}
            </a>
            <a
              href="mailto:ahmedmokireldin@gmail.com"
              className="bg-white/5 border border-white/10 text-foreground px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              {t.cta.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
