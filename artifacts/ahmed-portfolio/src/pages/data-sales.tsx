import { motion } from 'framer-motion';
import { Database, Filter, Target, Download, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/seo';
import { GlassCard } from '@/components/ui/glass-card';
import { useLanguage } from '@/hooks/use-language';

export default function DataSales() {
  const { t, dir } = useLanguage();

  const dataProducts = [
    {
      title: 'Global B2B Database',
      count: '2.5M+ Records',
      features: ['Verified Emails', 'Direct Phone/WhatsApp', 'Job Titles', 'Company Size'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'LinkedIn Extracted Data',
      count: '500K+ Profiles',
      features: ['Recent Job Changes', 'Industry Specific', 'Location Based', 'Skill Keywords'],
      color: 'from-blue-600/20 to-indigo-600/20'
    },
    {
      title: 'E-commerce Owners',
      count: '150K+ Stores',
      features: ['Shopify/WooCommerce', 'Monthly Revenue Est', 'Tech Stack Used', 'Founder Contacts'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Local Business Directories',
      count: 'Gulf & MENA',
      features: ['Restaurants/Real Estate', 'Google Maps Data', 'Active WhatsApp', 'Review Scores'],
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  return (
    <>
      <SEO title={`${t.nav.dataSales} | Ahmed El Sayed`} />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Database className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Data Assets for <span className="text-primary">Outreach</span></h1>
          <p className="text-xl text-muted-foreground">
            Stop guessing and start selling. Verified, segmented, and ready-to-use databases formatted specifically for WhatsApp and Email cold outreach campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {dataProducts.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="p-8 h-full">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${product.color} blur-[50px] rounded-full`} />
                
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <div className="text-primary font-semibold text-lg mb-6">{product.count}</div>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal shrink-0" />
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/201006334062" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white/5 border border-white/10 hover:bg-white/10 text-foreground py-3 rounded-xl font-semibold transition-colors mt-auto"
                >
                  Request Sample
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Value Prop Section */}
        <div className="bg-card/50 rounded-[32px] border border-white/5 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')] opacity-[0.05] bg-cover bg-center" />
          
          <h2 className="text-3xl font-bold mb-12 relative z-10 text-center">Why our data converts better</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="text-center">
              <Filter className="w-10 h-10 text-teal mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Deep Segmentation</h4>
              <p className="text-muted-foreground text-sm">We don't just sell raw lists. Every database is segmented by intent, industry, and exact tech stack.</p>
            </div>
            <div className="text-center">
              <Target className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Verified Accuracy</h4>
              <p className="text-muted-foreground text-sm">Emails bounce-tested and phone numbers checked for active WhatsApp presence before delivery.</p>
            </div>
            <div className="text-center">
              <Download className="w-10 h-10 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">CRM Ready Formats</h4>
              <p className="text-muted-foreground text-sm">Delivered in pristine CSVs mapped perfectly for GoHighLevel, HubSpot, or custom sending tools.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
