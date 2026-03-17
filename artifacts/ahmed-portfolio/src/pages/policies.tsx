import { SEO } from '@/components/seo';
import { GlassCard } from '@/components/ui/glass-card';
import { Shield, CreditCard, Lock } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export default function Policies() {
  const { t, dir } = useLanguage();

  return (
    <>
      <SEO title="Policies | Ahmed El Sayed" />
      
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold mb-4 text-center">Policies & Guarantees</h1>
        <p className="text-muted-foreground text-center mb-16">Clear, transparent rules regarding how we handle data, software, and payments.</p>

        <div className="space-y-8">
          <GlassCard className="p-8">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <Shield className="w-8 h-8 text-teal" />
              <h2 className="text-2xl font-bold">Privacy & Data Handling</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We respect the absolute privacy of your client data, CRM information, and business metrics. As automation engineers, we are granted access to sensitive systems. We guarantee:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>No sharing, reselling, or re-using of any client proprietary data.</li>
                <li>API keys and access tokens are stored encrypted and deleted post-project if not on a retainer.</li>
                <li>Non-disclosure agreements (NDAs) can be signed prior to any system audit.</li>
              </ul>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <CreditCard className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Payment & Delivery Policy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>To ensure commitment from both sides, our standard payment terms for custom software and system setups are:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>50% upfront payment prior to commencement of development or data extraction.</li>
                <li>50% upon successful deployment, testing, and handover to your team.</li>
                <li>Digital products (Data lists, Courses) require 100% upfront payment due to the immediate delivery of intellectual property.</li>
              </ul>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <Lock className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold">Refund Policy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Due to the nature of digital goods and custom engineering hours:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Custom Software & Systems: Refunds are only applicable if the system fails to meet the agreed-upon scope of work documented in the initial proposal.</li>
                <li>Data Lists: Non-refundable once delivered. We provide samples beforehand to verify quality.</li>
                <li>Courses: 14-day money-back guarantee if you have consumed less than 20% of the content and find it unsatisfactory.</li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </div>
    </>
  );
}
