import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle, Star } from 'lucide-react';
import { SEO } from '@/components/seo';
import { GlassCard } from '@/components/ui/glass-card';
import { useLanguage } from '@/hooks/use-language';

export default function Courses() {
  const { t, dir } = useLanguage();

  const courses = [
    {
      title: 'WhatsApp Marketing Mastery',
      image: 'course-whatsapp.png',
      level: 'Beginner to Advanced',
      duration: '4 Hours',
      desc: 'Learn the exact strategies to send thousands of messages without getting banned. Setup bulk senders and manage replies.',
      bullets: ['Warm-up strategies', 'Number rotation setup', 'Writing converting scripts', 'Ban recovery'],
      highlight: false
    },
    {
      title: 'The Ultimate WhatsApp Funnel',
      image: 'course-whatsapp.png',
      level: 'Advanced',
      duration: '8 Hours',
      desc: 'Build full automated funnels inside WhatsApp. Connect ads directly to WhatsApp chatbots and close sales 24/7.',
      bullets: ['Meta Ads to WA', 'Chatbot logic trees', 'Payment integration', 'Abandoned cart recovery'],
      highlight: true
    },
    {
      title: 'AI Agents for Sales',
      image: 'course-ai.png',
      level: 'Intermediate',
      duration: '5 Hours',
      desc: 'Implement ChatGPT/Claude into your CRMs to automatically qualify leads, answer FAQs, and book appointments.',
      bullets: ['Prompt engineering for sales', 'API integration', 'Knowledge base training', 'Human handoff protocol'],
      highlight: false
    }
  ];

  return (
    <>
      <SEO
        title={`${t.nav.courses} | أحمد خيرالدين`}
        description="كورسات تدريبية عملية في WhatsApp Business وWhatsApp Funnels وAI للتسويق والأتمتة. بخبرة 15+ عامًا في Growth Marketing Automation."
        canonicalPath="/courses"
      />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Practical Training for Growth</h1>
          <p className="text-xl text-muted-foreground">
            No fluff. No theory. Step-by-step screen recordings showing exactly how I build automation systems for 7-figure businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`h-full ${course.highlight ? 'lg:-translate-y-8' : ''}`}
            >
              <GlassCard 
                intensity={course.highlight ? 'high' : 'medium'}
                className={`flex flex-col h-full overflow-hidden ${course.highlight ? 'border-primary/50 shadow-[0_0_40px_rgba(253,216,46,0.15)] ring-1 ring-primary/20' : ''}`}
              >
                {course.highlight && (
                  <div className="bg-primary text-primary-foreground text-center text-sm font-bold py-1 uppercase tracking-wider">
                    Best Seller
                  </div>
                )}
                
                <div className="h-48 bg-card relative overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${course.image}`} 
                    alt={course.title}
                    className="w-full h-full object-cover opacity-60 mix-blend-lighten hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-background/80 backdrop-blur text-xs px-2 py-1 rounded-md font-semibold border border-white/10">{course.level}</span>
                    <span className="bg-background/80 backdrop-blur text-xs px-2 py-1 rounded-md font-semibold border border-white/10">{course.duration}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{course.desc}</p>
                  
                  <div className="space-y-3 mb-8">
                    {course.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="https://wa.me/201006334062" 
                    className={`w-full py-4 rounded-xl flex justify-center items-center gap-2 font-bold transition-all ${
                      course.highlight 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <PlayCircle className="w-5 h-5" />
                    {t.cta.enroll}
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </>
  );
}
