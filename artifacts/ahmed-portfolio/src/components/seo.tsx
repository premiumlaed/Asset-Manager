import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/hooks/use-language';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: 'website' | 'article' | 'profile';
}

const BASE_URL = 'https://go.ahmedmokireldin.online';

export function SEO({
  title = 'أحمد خيرالدين | Growth Marketing Automation Engineer',
  description = 'مهندس أتمتة تسويقية وبيانات بخبرة 15+ عامًا. تخصص في بناء أنظمة WhatsApp CRM وقواعد بيانات B2B وأنظمة أتمتة متكاملة. Growth Marketing Automation Engineer specializing in WhatsApp bots, B2B data, n8n, Make.com, and CRM automation.',
  canonicalPath = '/',
  type = 'website'
}: SEOProps) {
  const { lang } = useLanguage();
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmed Mokireldin",
    "alternateName": "أحمد السيد محمد خيرالدين",
    "jobTitle": "Growth Marketing Automation Engineer",
    "description": "Digital Marketing Automation Specialist with 15+ years building WhatsApp bots, CRM systems, B2B databases, and marketing automation workflows.",
    "url": BASE_URL,
    "telephone": "+201006334062",
    "email": "ahmedmokireldin@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mit El-Qurashi, Mit Ghamr",
      "addressRegion": "Dakahlia Governorate",
      "addressCountry": "EG"
    },
    "knowsAbout": [
      "Marketing Automation",
      "WhatsApp Business API",
      "n8n",
      "Make.com",
      "Lead Generation",
      "B2B Data",
      "CRM Development",
      "SendPulse",
      "GoHighLevel",
      "Web Scraping",
      "Data Engineering",
      "PHP",
      "Python",
      "Node.js"
    ],
    "sameAs": [
      "https://wa.me/201006334062"
    ]
  };

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Ahmed Mokireldin - Growth Marketing Automation" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Ahmed Mokireldin" />
      <meta name="keywords" content="Growth Marketing, Marketing Automation, WhatsApp Bot, CRM, B2B Data, n8n, Make.com, SendPulse, Lead Generation, Egypt, MENA" />

      {type === 'website' && canonicalPath === '/' && (
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      )}
    </Helmet>
  );
}
