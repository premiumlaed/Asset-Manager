export type Language = 'ar' | 'en' | 'fr' | 'fa';

export const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      dataSales: 'بيع البيانات',
      softwareSales: 'بيع البرامج',
      courses: 'الكورسات',
      stack: 'القدرات',
      proof: 'النتائج',
      contact: 'التواصل'
    },
    cta: {
      whatsapp: 'ابدأ عبر WhatsApp',
      email: 'راسلني عبر البريد',
      buyNow: 'اشتري الآن',
      learnMore: 'اعرف المزيد',
      enroll: 'سجل الآن'
    },
    hero: {
      eyebrow: 'Growth. Automation. CRM. Data. WhatsApp. AI.',
      titleBase: 'أبني',
      titleHighlight1: 'Growth Systems',
      titleMiddle: 'تربط بين',
      titleHighlight2: 'Leads, Follow-up, Conversion',
      description: 'مهندس أتمتة نمو تسويقي بخبرة 15+ سنة. أساعد الشركات على بناء أنظمة بيع تعمل على مدار الساعة.',
      metrics: {
        years: '+15 سنة خبرة',
        records: '+400 ألف سجل',
        channels: '+7 قنوات تسويق'
      }
    },
    footer: {
      ready: 'جاهز لتحويل الموقع أو الخدمة إلى Sales Engine فعلي؟',
      rights: 'جميع الحقوق محفوظة ©',
      policies: 'السياسات',
      terms: 'الشروط والأحكام'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      dataSales: 'Data Sales',
      softwareSales: 'Software Sales',
      courses: 'Courses',
      stack: 'Stack',
      proof: 'Results',
      contact: 'Contact'
    },
    cta: {
      whatsapp: 'Start via WhatsApp',
      email: 'Email Me',
      buyNow: 'Buy Now',
      learnMore: 'Learn More',
      enroll: 'Enroll Now'
    },
    hero: {
      eyebrow: 'Growth. Automation. CRM. Data. WhatsApp. AI.',
      titleBase: 'I build',
      titleHighlight1: 'Growth Systems',
      titleMiddle: 'that connect',
      titleHighlight2: 'Leads, Follow-up, Conversion',
      description: 'Growth Marketing Automation Engineer with 15+ years experience. I help companies build 24/7 sales engines.',
      metrics: {
        years: '15+ Years Exp',
        records: '400k+ Records',
        channels: '7+ Channels'
      }
    },
    footer: {
      ready: 'Ready to turn your site or service into a real Sales Engine?',
      rights: 'All Rights Reserved ©',
      policies: 'Policies',
      terms: 'Terms & Conditions'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      dataSales: 'Vente de Données',
      softwareSales: 'Vente de Logiciels',
      courses: 'Cours',
      stack: 'Compétences',
      proof: 'Résultats',
      contact: 'Contact'
    },
    cta: {
      whatsapp: 'Démarrer via WhatsApp',
      email: 'Envoyer un Email',
      buyNow: 'Acheter',
      learnMore: 'En savoir plus',
      enroll: 'S\'inscrire'
    },
    hero: {
      eyebrow: 'Croissance. Automatisation. CRM. Données. WhatsApp. IA.',
      titleBase: 'Je construis des',
      titleHighlight1: 'Systèmes de Croissance',
      titleMiddle: 'qui connectent',
      titleHighlight2: 'Leads, Suivi, Conversion',
      description: 'Ingénieur en automatisation du marketing de croissance avec plus de 15 ans d\'expérience.',
      metrics: {
        years: '+15 Ans Exp',
        records: '+400k Données',
        channels: '+7 Canaux'
      }
    },
    footer: {
      ready: 'Prêt à transformer votre site en véritable moteur de vente ?',
      rights: 'Tous droits réservés ©',
      policies: 'Politiques',
      terms: 'Conditions Générales'
    }
  },
  fa: {
    nav: {
      home: 'خانه',
      services: 'خدمات',
      dataSales: 'فروش داده',
      softwareSales: 'فروش نرم افزار',
      courses: 'دوره‌ها',
      stack: 'مهارت‌ها',
      proof: 'نتایج',
      contact: 'تماس'
    },
    cta: {
      whatsapp: 'شروع در واتساپ',
      email: 'ارسال ایمیل',
      buyNow: 'خرید',
      learnMore: 'اطلاعات بیشتر',
      enroll: 'ثبت نام'
    },
    hero: {
      eyebrow: 'رشد. اتوماسیون. مدیریت ارتباط با مشتری. داده. واتساپ. هوش مصنوعی.',
      titleBase: 'من میسازم',
      titleHighlight1: 'سیستم‌های رشد',
      titleMiddle: 'که متصل میکنند',
      titleHighlight2: 'سرنخ‌ها، پیگیری، تبدیل',
      description: 'مهندس اتوماسیون بازاریابی رشد با ۱۵+ سال سابقه. ساخت موتور فروش ۲۴ ساعته.',
      metrics: {
        years: '۱۵+ سال سابقه',
        records: '۴۰۰هزار+ رکورد',
        channels: '۷+ کانال'
      }
    },
    footer: {
      ready: 'آماده تبدیل سایت خود به یک موتور فروش واقعی هستید؟',
      rights: 'تمامی حقوق محفوظ است ©',
      policies: 'سیاست‌ها',
      terms: 'شرایط و ضوابط'
    }
  }
} as const;
