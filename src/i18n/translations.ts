export type Language = "es" | "en" | "pt" | "zh";

export const languageNames: Record<Language, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  zh: "中文",
};

export const languageFlags: Record<Language, string> = {
  es: "🇪🇸",
  en: "🇬🇧",
  pt: "🇧🇷",
  zh: "🇨🇳",
};

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
      requestQuote: "Solicitar presupuesto",
    },
    hero: {
      badge: "Agencia boutique tecnológica en Madrid",
      headline1: "Soluciones web",
      headline2: "inteligentes",
      headline3: "automatizadas y",
      headline4: "seguras",
      subtitle: "Diseñamos y desarrollamos soluciones digitales que impulsan el crecimiento de tu negocio en España y Europa.",
      cta1: "Solicitar presupuesto",
      cta2: "Ver proyectos",
      pillar1: "Inteligencia Artificial",
      pillar2: "Automatización",
      pillar3: "Ciberseguridad",
    },
    pillars: {
      sectionLabel: "Nuestros pilares",
      title: "Tecnología que transforma",
      subtitle: "Tres pilares fundamentales que garantizan soluciones digitales eficientes, seguras y preparadas para el futuro.",
      learnMore: "Saber más",
      ai: {
        title: "Inteligencia Artificial",
        description: "Integración de IA en sitios web y plataformas. Chatbots inteligentes, automatización de respuestas y procesos orientados a conversión y eficiencia.",
        feature1: "Chatbots para atención al cliente",
        feature2: "Automatización de respuestas",
        feature3: "IA aplicada a conversión",
      },
      automation: {
        title: "Automatizaciones",
        description: "Automatización de procesos digitales e integraciones entre plataformas. Reduce tareas manuales, errores y costos operativos.",
        feature1: "Flujos automáticos de captación",
        feature2: "Integraciones entre sistemas",
        feature3: "Ahorro de tiempo y costos",
      },
      security: {
        title: "Ciberseguridad",
        description: "Sitios web seguros desde el diseño. Protección de datos, prevención de vulnerabilidades y buenas prácticas de seguridad web.",
        feature1: "Seguridad desde el diseño",
        feature2: "Protección de datos",
        feature3: "Prevención de vulnerabilidades",
      },
    },
    benefits: {
      sectionLabel: "Beneficios concretos",
      title: "Resultados que",
      titleHighlight: "importan",
      subtitle: "Cada solución que desarrollamos está orientada a generar impacto real en tu negocio. No hacemos tecnología por hacer, hacemos tecnología que funciona.",
      stat1Value: "+10",
      stat1Label: "Años de experiencia",
      stat2Value: "100%",
      stat2Label: "Proyectos entregados",
      benefit1Title: "Más eficiencia",
      benefit1Desc: "Procesos optimizados que reducen tiempo y recursos en cada operación de tu negocio.",
      benefit2Title: "Más seguridad",
      benefit2Desc: "Protección integral de datos y sistemas desde el primer día de desarrollo.",
      benefit3Title: "Menos tareas manuales",
      benefit3Desc: "Automatizaciones que liberan a tu equipo para enfocarse en lo importante.",
      benefit4Title: "Mejor conversión",
      benefit4Desc: "Soluciones diseñadas para maximizar resultados y retorno de inversión.",
    },
    projects: {
      sectionLabel: "Proyectos destacados",
      title: "Trabajo que habla",
      viewAll: "Ver todos",
      project1: {
        title: "E-commerce con IA",
        category: "Desarrollo Web + IA",
        description: "Plataforma de comercio electrónico con chatbot inteligente y recomendaciones personalizadas.",
      },
      project2: {
        title: "Sistema de automatización",
        category: "Automatizaciones",
        description: "Flujo automatizado de captación de leads con integración a CRM y email marketing.",
      },
      project3: {
        title: "Portal empresarial seguro",
        category: "Ciberseguridad",
        description: "Portal interno con autenticación multifactor y gestión segura de documentos.",
      },
    },
    cta: {
      title1: "¿Listo para",
      titleHighlight: "impulsar",
      title2: "tu negocio?",
      subtitle: "Contanos tu proyecto y veamos cómo la tecnología puede ayudarte a crecer. Sin compromiso, solo una conversación.",
      button1: "Solicitar presupuesto",
      button2: "WhatsApp",
    },
    footer: {
      description: "Agencia boutique tecnológica. Soluciones web inteligentes, automatizadas y seguras para negocios en España y Europa.",
      services: "Servicios",
      webDev: "Desarrollo Web",
      ai: "Inteligencia Artificial",
      automation: "Automatizaciones",
      security: "Ciberseguridad",
      company: "Empresa",
      aboutUs: "Nosotros",
      projects: "Proyectos",
      contact: "Contacto",
      talkTitle: "¿Hablamos?",
      talkDescription: "Contanos tu proyecto y veamos cómo la tecnología puede ayudarte a crecer.",
      requestQuote: "Solicitar presupuesto",
      copyright: "Todos los derechos reservados.",
      privacy: "Privacidad",
      cookies: "Cookies",
      legal: "Aviso Legal",
      configureCookies: "Configurar cookies",
    },
    chatbot: {
      title: "Asistente Virtual",
      placeholder: "Escribe tu mensaje...",
      greeting: "¡Hola! Soy el asistente virtual de GG Diseño. ¿En qué puedo ayudarte hoy?",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About Us",
      contact: "Contact",
      requestQuote: "Request a Quote",
    },
    hero: {
      badge: "Boutique tech agency in Madrid",
      headline1: "Web solutions that are",
      headline2: "smart",
      headline3: "automated and",
      headline4: "secure",
      subtitle: "We design and develop digital solutions that drive the growth of your business in Spain and Europe.",
      cta1: "Request a Quote",
      cta2: "View Projects",
      pillar1: "Artificial Intelligence",
      pillar2: "Automation",
      pillar3: "Cybersecurity",
    },
    pillars: {
      sectionLabel: "Our pillars",
      title: "Technology that transforms",
      subtitle: "Three fundamental pillars that guarantee efficient, secure, and future-ready digital solutions.",
      learnMore: "Learn more",
      ai: {
        title: "Artificial Intelligence",
        description: "AI integration in websites and platforms. Smart chatbots, response automation, and conversion-oriented processes.",
        feature1: "Customer service chatbots",
        feature2: "Response automation",
        feature3: "AI applied to conversion",
      },
      automation: {
        title: "Automation",
        description: "Digital process automation and platform integrations. Reduce manual tasks, errors, and operational costs.",
        feature1: "Automated lead capture flows",
        feature2: "System integrations",
        feature3: "Time and cost savings",
      },
      security: {
        title: "Cybersecurity",
        description: "Secure websites from design. Data protection, vulnerability prevention, and web security best practices.",
        feature1: "Security by design",
        feature2: "Data protection",
        feature3: "Vulnerability prevention",
      },
    },
    benefits: {
      sectionLabel: "Concrete benefits",
      title: "Results that",
      titleHighlight: "matter",
      subtitle: "Every solution we develop is designed to generate real impact on your business. We don't do technology for the sake of it, we do technology that works.",
      stat1Value: "+10",
      stat1Label: "Years of experience",
      stat2Value: "100%",
      stat2Label: "Projects delivered",
      benefit1Title: "More efficiency",
      benefit1Desc: "Optimized processes that reduce time and resources in every operation of your business.",
      benefit2Title: "More security",
      benefit2Desc: "Comprehensive data and system protection from day one of development.",
      benefit3Title: "Fewer manual tasks",
      benefit3Desc: "Automations that free your team to focus on what matters.",
      benefit4Title: "Better conversion",
      benefit4Desc: "Solutions designed to maximize results and return on investment.",
    },
    projects: {
      sectionLabel: "Featured projects",
      title: "Work that speaks",
      viewAll: "View all",
      project1: {
        title: "E-commerce with AI",
        category: "Web Development + AI",
        description: "E-commerce platform with intelligent chatbot and personalized recommendations.",
      },
      project2: {
        title: "Automation system",
        category: "Automations",
        description: "Automated lead capture flow with CRM and email marketing integration.",
      },
      project3: {
        title: "Secure enterprise portal",
        category: "Cybersecurity",
        description: "Internal portal with multi-factor authentication and secure document management.",
      },
    },
    cta: {
      title1: "Ready to",
      titleHighlight: "boost",
      title2: "your business?",
      subtitle: "Tell us about your project and let's see how technology can help you grow. No commitment, just a conversation.",
      button1: "Request a Quote",
      button2: "WhatsApp",
    },
    footer: {
      description: "Boutique tech agency. Smart, automated, and secure web solutions for businesses in Spain and Europe.",
      services: "Services",
      webDev: "Web Development",
      ai: "Artificial Intelligence",
      automation: "Automations",
      security: "Cybersecurity",
      company: "Company",
      aboutUs: "About Us",
      projects: "Projects",
      contact: "Contact",
      talkTitle: "Let's talk?",
      talkDescription: "Tell us about your project and let's see how technology can help you grow.",
      requestQuote: "Request a Quote",
      copyright: "All rights reserved.",
      privacy: "Privacy",
      cookies: "Cookies",
      legal: "Legal Notice",
      configureCookies: "Configure cookies",
    },
    chatbot: {
      title: "Virtual Assistant",
      placeholder: "Type your message...",
      greeting: "Hello! I'm GG Diseño's virtual assistant. How can I help you today?",
    },
  },
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      projects: "Projetos",
      about: "Sobre Nós",
      contact: "Contato",
      requestQuote: "Solicitar orçamento",
    },
    hero: {
      badge: "Agência boutique de tecnologia em Madrid",
      headline1: "Soluções web",
      headline2: "inteligentes",
      headline3: "automatizadas e",
      headline4: "seguras",
      subtitle: "Projetamos e desenvolvemos soluções digitais que impulsionam o crescimento do seu negócio na Espanha e Europa.",
      cta1: "Solicitar orçamento",
      cta2: "Ver projetos",
      pillar1: "Inteligência Artificial",
      pillar2: "Automação",
      pillar3: "Cibersegurança",
    },
    pillars: {
      sectionLabel: "Nossos pilares",
      title: "Tecnologia que transforma",
      subtitle: "Três pilares fundamentais que garantem soluções digitais eficientes, seguras e preparadas para o futuro.",
      learnMore: "Saiba mais",
      ai: {
        title: "Inteligência Artificial",
        description: "Integração de IA em sites e plataformas. Chatbots inteligentes, automação de respostas e processos orientados à conversão.",
        feature1: "Chatbots para atendimento ao cliente",
        feature2: "Automação de respostas",
        feature3: "IA aplicada à conversão",
      },
      automation: {
        title: "Automação",
        description: "Automação de processos digitais e integrações entre plataformas. Reduza tarefas manuais, erros e custos operacionais.",
        feature1: "Fluxos automáticos de captação",
        feature2: "Integrações entre sistemas",
        feature3: "Economia de tempo e custos",
      },
      security: {
        title: "Cibersegurança",
        description: "Sites seguros desde o design. Proteção de dados, prevenção de vulnerabilidades e boas práticas de segurança web.",
        feature1: "Segurança desde o design",
        feature2: "Proteção de dados",
        feature3: "Prevenção de vulnerabilidades",
      },
    },
    benefits: {
      sectionLabel: "Benefícios concretos",
      title: "Resultados que",
      titleHighlight: "importam",
      subtitle: "Cada solução que desenvolvemos é orientada para gerar impacto real no seu negócio. Não fazemos tecnologia por fazer, fazemos tecnologia que funciona.",
      stat1Value: "+10",
      stat1Label: "Anos de experiência",
      stat2Value: "100%",
      stat2Label: "Projetos entregues",
      benefit1Title: "Mais eficiência",
      benefit1Desc: "Processos otimizados que reduzem tempo e recursos em cada operação do seu negócio.",
      benefit2Title: "Mais segurança",
      benefit2Desc: "Proteção integral de dados e sistemas desde o primeiro dia de desenvolvimento.",
      benefit3Title: "Menos tarefas manuais",
      benefit3Desc: "Automações que liberam sua equipe para focar no que importa.",
      benefit4Title: "Melhor conversão",
      benefit4Desc: "Soluções projetadas para maximizar resultados e retorno sobre investimento.",
    },
    projects: {
      sectionLabel: "Projetos em destaque",
      title: "Trabalho que fala",
      viewAll: "Ver todos",
      project1: {
        title: "E-commerce com IA",
        category: "Desenvolvimento Web + IA",
        description: "Plataforma de comércio eletrônico com chatbot inteligente e recomendações personalizadas.",
      },
      project2: {
        title: "Sistema de automação",
        category: "Automações",
        description: "Fluxo automatizado de captação de leads com integração a CRM e email marketing.",
      },
      project3: {
        title: "Portal empresarial seguro",
        category: "Cibersegurança",
        description: "Portal interno com autenticação multifator e gestão segura de documentos.",
      },
    },
    cta: {
      title1: "Pronto para",
      titleHighlight: "impulsionar",
      title2: "seu negócio?",
      subtitle: "Conte-nos sobre seu projeto e vamos ver como a tecnologia pode ajudá-lo a crescer. Sem compromisso, apenas uma conversa.",
      button1: "Solicitar orçamento",
      button2: "WhatsApp",
    },
    footer: {
      description: "Agência boutique de tecnologia. Soluções web inteligentes, automatizadas e seguras para negócios na Espanha e Europa.",
      services: "Serviços",
      webDev: "Desenvolvimento Web",
      ai: "Inteligência Artificial",
      automation: "Automações",
      security: "Cibersegurança",
      company: "Empresa",
      aboutUs: "Sobre Nós",
      projects: "Projetos",
      contact: "Contato",
      talkTitle: "Vamos conversar?",
      talkDescription: "Conte-nos sobre seu projeto e vamos ver como a tecnologia pode ajudá-lo a crescer.",
      requestQuote: "Solicitar orçamento",
      copyright: "Todos os direitos reservados.",
      privacy: "Privacidade",
      cookies: "Cookies",
      legal: "Aviso Legal",
      configureCookies: "Configurar cookies",
    },
    chatbot: {
      title: "Assistente Virtual",
      placeholder: "Digite sua mensagem...",
      greeting: "Olá! Sou o assistente virtual da GG Diseño. Como posso ajudá-lo hoje?",
    },
  },
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      projects: "项目",
      about: "关于我们",
      contact: "联系我们",
      requestQuote: "请求报价",
    },
    hero: {
      badge: "马德里精品科技机构",
      headline1: "网络解决方案",
      headline2: "智能",
      headline3: "自动化且",
      headline4: "安全",
      subtitle: "我们设计和开发数字解决方案，推动您在西班牙和欧洲的业务增长。",
      cta1: "请求报价",
      cta2: "查看项目",
      pillar1: "人工智能",
      pillar2: "自动化",
      pillar3: "网络安全",
    },
    pillars: {
      sectionLabel: "我们的支柱",
      title: "改变一切的技术",
      subtitle: "三大基本支柱，确保高效、安全、面向未来的数字解决方案。",
      learnMore: "了解更多",
      ai: {
        title: "人工智能",
        description: "在网站和平台中集成人工智能。智能聊天机器人、响应自动化和以转化为导向的流程。",
        feature1: "客户服务聊天机器人",
        feature2: "响应自动化",
        feature3: "应用于转化的人工智能",
      },
      automation: {
        title: "自动化",
        description: "数字流程自动化和平台集成。减少手动任务、错误和运营成本。",
        feature1: "自动化潜在客户捕获流程",
        feature2: "系统集成",
        feature3: "节省时间和成本",
      },
      security: {
        title: "网络安全",
        description: "从设计开始就确保网站安全。数据保护、漏洞预防和网络安全最佳实践。",
        feature1: "安全设计",
        feature2: "数据保护",
        feature3: "漏洞预防",
      },
    },
    benefits: {
      sectionLabel: "具体优势",
      title: "真正",
      titleHighlight: "重要的",
      subtitle: "我们开发的每个解决方案都旨在为您的业务产生真正的影响。我们不是为了技术而技术，我们做的是有效的技术。",
      stat1Value: "+10",
      stat1Label: "年经验",
      stat2Value: "100%",
      stat2Label: "项目交付",
      benefit1Title: "更高效率",
      benefit1Desc: "优化流程，减少业务运营中的时间和资源消耗。",
      benefit2Title: "更高安全性",
      benefit2Desc: "从开发第一天起就全面保护数据和系统。",
      benefit3Title: "更少手动任务",
      benefit3Desc: "自动化使您的团队能够专注于重要的事情。",
      benefit4Title: "更好的转化",
      benefit4Desc: "旨在最大化结果和投资回报的解决方案。",
    },
    projects: {
      sectionLabel: "精选项目",
      title: "会说话的作品",
      viewAll: "查看全部",
      project1: {
        title: "人工智能电商",
        category: "网站开发 + 人工智能",
        description: "具有智能聊天机器人和个性化推荐的电子商务平台。",
      },
      project2: {
        title: "自动化系统",
        category: "自动化",
        description: "与CRM和邮件营销集成的自动化潜在客户捕获流程。",
      },
      project3: {
        title: "安全企业门户",
        category: "网络安全",
        description: "具有多因素认证和安全文档管理的内部门户。",
      },
    },
    cta: {
      title1: "准备好",
      titleHighlight: "推动",
      title2: "您的业务了吗？",
      subtitle: "告诉我们您的项目，让我们看看技术如何帮助您成长。无需承诺，只是一次对话。",
      button1: "请求报价",
      button2: "WhatsApp",
    },
    footer: {
      description: "精品科技机构。为西班牙和欧洲的企业提供智能、自动化和安全的网络解决方案。",
      services: "服务",
      webDev: "网站开发",
      ai: "人工智能",
      automation: "自动化",
      security: "网络安全",
      company: "公司",
      aboutUs: "关于我们",
      projects: "项目",
      contact: "联系我们",
      talkTitle: "让我们聊聊？",
      talkDescription: "告诉我们您的项目，让我们看看技术如何帮助您成长。",
      requestQuote: "请求报价",
      copyright: "版权所有。",
      privacy: "隐私",
      cookies: "Cookies",
      legal: "法律声明",
      configureCookies: "配置Cookies",
    },
    chatbot: {
      title: "虚拟助手",
      placeholder: "输入您的消息...",
      greeting: "您好！我是GG Diseño的虚拟助手。今天我能帮您什么？",
    },
  },
} as const;

// Create a generic type for translations
type TranslationStrings = {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    requestQuote: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    headline3: string;
    headline4: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    pillar1: string;
    pillar2: string;
    pillar3: string;
  };
  pillars: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    learnMore: string;
    ai: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    automation: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    security: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
  };
  benefits: {
    sectionLabel: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    benefit4Title: string;
    benefit4Desc: string;
  };
  projects: {
    sectionLabel: string;
    title: string;
    viewAll: string;
    project1: {
      title: string;
      category: string;
      description: string;
    };
    project2: {
      title: string;
      category: string;
      description: string;
    };
    project3: {
      title: string;
      category: string;
      description: string;
    };
  };
  cta: {
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    button1: string;
    button2: string;
  };
  footer: {
    description: string;
    services: string;
    webDev: string;
    ai: string;
    automation: string;
    security: string;
    company: string;
    aboutUs: string;
    projects: string;
    contact: string;
    talkTitle: string;
    talkDescription: string;
    requestQuote: string;
    copyright: string;
    privacy: string;
    cookies: string;
    legal: string;
    configureCookies: string;
  };
  chatbot: {
    title: string;
    placeholder: string;
    greeting: string;
  };
};

export type Translations = TranslationStrings;
