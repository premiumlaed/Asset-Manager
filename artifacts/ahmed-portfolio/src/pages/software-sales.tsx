import { motion } from 'framer-motion';
import { Code2, Cpu, MessageSquare, Zap, Terminal, Settings } from 'lucide-react';
import { SEO } from '@/components/seo';
import { GlassCard } from '@/components/ui/glass-card';
import { useLanguage } from '@/hooks/use-language';

export default function SoftwareSales() {
  const { t, dir } = useLanguage();

  const softwareProducts = [
    {
      icon: <MessageSquare className="w-8 h-8 text-[#25D366]" />,
      title: 'WhatsApp Marketing CRM',
      desc: 'Complete bulk sending, auto-reply, and pipeline management system built specifically for high-volume WhatsApp outreach.',
      features: ['Multi-number rotation', 'Chatbot builder', 'Campaign analytics', 'Ban-protection algorithms']
    },
    {
      icon: <Target className="w-8 h-8 text-teal" />,
      title: 'Custom Scrapers & Extractors',
      desc: 'Automated bots that continuously extract leads from specific targets directly into your database.',
      features: ['Google Maps scrapers', 'LinkedIn automation', 'Social media extractors', 'Auto-sync to Google Sheets']
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'GoHighLevel Snapshots',
      desc: 'Pre-built, battle-tested agency snapshots with automations, pipelines, and templates ready to deploy.',
      features: ['Real Estate snapshot', 'SaaS onboarding flows', 'Appointment booking bots', 'Lead nurture sequences']
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent" />,
      title: 'AI Voice/Chat Agents',
      desc: 'Custom-trained LLM agents that handle customer service and qualify leads before passing to human reps.',
      features: ['OpenAI integration', 'Trained on your knowledge base', 'Voice calling capability', 'Handoff logic']
    }
  ];

  return (
    <>
      <SEO title={`${t.nav.softwareSales} | Ahmed El Sayed`} />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 border border-accent/20">
              <Terminal className="w-4 h-4" /> Ready & Custom Built
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Marketing Software & Systems</h1>
            <p className="text-lg text-muted-foreground">
              Don't rent expensive SaaS that limits you. Own your infrastructure. Get lifetime licenses or custom-built internal tools for your agency.
            </p>
          </div>
          <img 
            src={`${import.meta.env.BASE_URL}images/network-node.png`} 
            alt="Infrastructure" 
            className="w-full md:w-1/3 rounded-[24px] opacity-80 mix-blend-screen"
          />
        </div>

        {/* Catalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {softwareProducts.map((product, idx) => (
            <GlassCard key={idx} hoverEffect className="p-8 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="p-4 bg-background/50 rounded-2xl inline-block mb-6 border border-white/5 shadow-inner">
                {product.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
              <p className="text-muted-foreground mb-8 line-clamp-2">{product.desc}</p>
              
              <div className="space-y-2 mb-8">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </div>
                ))}
              </div>

              <a href="https://wa.me/201006334062" className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                Request Demo
              </a>
            </GlassCard>
          ))}
        </div>

        {/* Delivery Model */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-[#050b10] rounded-[32px] p-8 md:p-16 border border-white/5">
          <div>
            <h2 className="text-3xl font-bold mb-6">How delivery works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Consultation</h4>
                  <p className="text-muted-foreground text-sm">We assess your current tech stack and volume needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-teal font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Server Setup</h4>
                  <p className="text-muted-foreground text-sm">Deployment on your own VPS (DigitalOcean/AWS) for data privacy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Training & Handover</h4>
                  <p className="text-muted-foreground text-sm">Complete SOPs and training for your team to run the system.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Settings className="w-64 h-64 text-white/5 animate-[spin_20s_linear_infinite]" />
          </div>
        </div>

      </div>
    </>
  );
}

// Temporary placeholder for missing import above
import { Target } from 'lucide-react';
