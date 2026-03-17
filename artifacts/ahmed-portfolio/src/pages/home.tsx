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

  const services = [
    { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: 'Growth Services', desc: 'End-to-end automation pipelines that turn cold traffic into closed deals.' },
    { icon: <Database className="w-8 h-8 text-teal" />, title: 'Data Products', desc: 'Pre-warmed, highly targeted B2B/B2C data lists ready for outreach.', link: '/data-sales' },
    { icon: <Code className="w-8 h-8 text-accent" />, title: 'Software & CRM', desc: 'Custom WhatsApp APIs, scrapers, and unified inbox CRMs.', link: '/software-sales' },
    { icon: <PlayCircle className="w-8 h-8 text-white" />, title: 'Courses', desc: 'Practical training on WhatsApp Funnels and AI implementations.', link: '/courses' },
  ];

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">
        {/* Ambient Gradients */}
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
                <br className="hidden md:block"/>
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
                <a href="https://wa.me/201006334062" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(253,216,46,0.3)]">
                  {t.cta.whatsapp}
                </a>
                <Link href="/courses" className="bg-white/5 border border-white/10 text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                  {t.nav.courses}
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full">
                <div>
                  <h4 className="text-3xl font-bold text-foreground mb-1">{t.hero.metrics.years.split(' ')[0]}</h4>
                  <p className="text-sm text-muted-foreground">{t.hero.metrics.years.split(' ').slice(1).join(' ')}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-foreground mb-1">{t.hero.metrics.records.split(' ')[0]}</h4>
                  <p className="text-sm text-muted-foreground">{t.hero.metrics.records.split(' ').slice(1).join(' ')}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-foreground mb-1">{t.hero.metrics.channels.split(' ')[0]}</h4>
                  <p className="text-sm text-muted-foreground">{t.hero.metrics.channels.split(' ').slice(1).join(' ')}</p>
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
                    alt="Ahmed El Sayed"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              </GlassCard>

              {/* Floating elements */}
              <GlassCard className="absolute top-20 -left-10 p-4 z-20 flex items-center gap-3 animate-pulse">
                <CheckCircle2 className="text-teal w-6 h-6" />
                <span className="font-semibold text-sm">System Deployed</span>
              </GlassCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Marketing Ecosystem</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to automate your pipeline, from data acquisition to closing sales on autopilot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
              >
                <GlassCard hoverEffect className="p-8 h-full flex flex-col items-start group">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                  
                  {service.link && (
                    <Link href={service.link} className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all mt-auto">
                      {t.cta.learnMore} <ArrowLeft className={`w-4 h-4 ${dir === 'ltr' ? 'rotate-180' : ''}`} />
                    </Link>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / Dashboard Section */}
      <section id="proof" className="py-24 bg-card/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')] opacity-[0.02] bg-cover bg-center mix-blend-screen" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Proven Results. Active Systems.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I don't just teach theory. I build living, breathing dashboards that process thousands of leads daily. Take a look at the actual engines running behind the scenes.
              </p>
              <ul className="space-y-4">
                {[
                  'Automated WhatsApp sequence handling 5k+ messages/day',
                  'Live CRM integration syncing data in real-time',
                  'Scraping architecture feeding continuous fresh leads'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/dashboard-proof.png`}
                alt="System Dashboard Proof"
                className="rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(123,45,159,0.2)]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
