import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/hooks/use-language';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'profile';
}

export function SEO({ 
  title = 'أحمد السيد محمد خيرالدين | Growth Marketing Automation Engineer', 
  description = 'Growth Marketing Automation Engineer with 15+ years of experience building scalable sales engines, CRM, and data automation systems.',
  canonicalUrl = 'https://ahmed-portfolio.com',
  type = 'website'
}: SEOProps) {
  const { lang } = useLanguage();

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ahmed El Sayed Mohamed Kheir Eldin",
            "jobTitle": "Growth Marketing Automation Engineer AI",
            "url": canonicalUrl,
            "sameAs": [
              "https://www.linkedin.com/in/ahmed-el-sayed-mohamed/"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
}
