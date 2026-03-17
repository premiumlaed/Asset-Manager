import { SEO } from '@/components/seo';
import { GlassCard } from '@/components/ui/glass-card';

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions | Ahmed El Sayed" />
      
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">Terms and Conditions</h1>
        
        <GlassCard className="p-8 md:p-12 prose prose-invert max-w-none">
          <h3>1. Scope of Work</h3>
          <p>
            The services provided by Ahmed El Sayed ("Consultant/Engineer") are limited to the explicit scope defined in the project proposal or invoice. Any additions, modifications, or feature creep outside the initial scope will be subject to additional billing at standard hourly rates or a renegotiated project fee.
          </p>

          <h3>2. Platform Policies (Meta, WhatsApp, Google)</h3>
          <p>
            When purchasing WhatsApp marketing systems, scrapers, or automation tools, the client acknowledges that they are operating on third-party platforms (like Meta/WhatsApp). 
            <strong>We do not guarantee immunity from bans or account restrictions.</strong> 
            We provide best-practice algorithms and warm-up guidelines to minimize risk, but the ultimate responsibility for compliance with Meta's Terms of Service lies with the client. We are not liable for lost assets, phone numbers, or ad accounts.
          </p>

          <h3>3. Maintenance and Support</h3>
          <p>
            Custom systems come with a standard 30-day bug-fix warranty post-deployment. This covers code errors and integration failures present at launch. It does not cover:
          </p>
          <ul>
            <li>API changes made by third-party platforms (e.g., if WhatsApp changes their API structure).</li>
            <li>Server crashes due to client negligence or unpaid hosting bills.</li>
            <li>Modifications made to the code by the client's internal team.</li>
          </ul>
          <p>Ongoing maintenance requires an active retainer contract.</p>

          <h3>4. Intellectual Property</h3>
          <p>
            Unless explicitly stated as a "white-label" or "full-rights" purchase, the underlying codebase of custom CRM modules and scraping architectures remains the intellectual property of the Engineer. The client is granted a perpetual, non-exclusive license to use the software for their own business operations, but may not resell or distribute the source code.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            In no event shall the Engineer be liable for any indirect, incidental, special, or consequential damages, including loss of profits, revenue, data, or use, incurred by the client or any third party, whether in an action in contract or tort, arising from the use of our systems, data, or advice.
          </p>
        </GlassCard>
      </div>
    </>
  );
}
