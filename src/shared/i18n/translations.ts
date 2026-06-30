import type { Locale } from './utils';

export const translations: Record<Locale, Record<string, any>> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      solutions: 'AI Systems',
      cases: 'Cases',
      about: 'About Us',
      consultation: 'Free Consultation'
    },
    footer: {
      brandDesc: 'Kroma AI Systems Inc. designs and deploys intelligent systems, high-resiliency data pipelines, and enterprise-grade software architectures.',
      location: 'Vancouver, BC, Canada',
      navigation: 'Navigation',
      coreServices: 'Core Services',
      connectivity: 'Connectivity',
      followUs: 'Follow our channels to read our technical breakdowns:',
      rights: 'All rights reserved.'
    },
    home: {
      badge: 'Specialized Trade Systems',
      heroTitle: 'Never Miss a Plumbing Call. ',
      heroTitleGradient: 'Automatic',
      heroTitleEnd: ' Bookings.',
      heroSubtitle: 'High-conversion website redesign, 24/7 AI virtual dispatchers, and hands-free Voice CRM systems. Designed specifically for professional plumbing contractors.',
      ironyBadge: 'Plumbing Automation',
      ctaConsultation: 'Request Free Consultation',
      ctaServices: 'Explore Services',
      metrics: {
        captured: 'Missed Calls Captured',
        seo: 'Local SEO traffic',
        timeSaved: 'Daily Admin Time Saved',
        conversion: 'Web Conversion Rate'
      },
      capabilities: {
        badge: 'Our Capabilities',
        title: 'Frictionless systems to scale your plumbing business',
        desc: 'Solutions engineered to capture every lead, optimize search ranking, and eliminate paperwork.',
        cards: {
          redesign: {
            title: 'Website Redesign',
            desc: 'Modern contractor sites optimized for local Google Search, fast mobile loading, and direct phone calls.',
            link: 'Explore Website Redesign →'
          },
          assistant: {
            title: 'AI Dispatch Assistant',
            desc: '24/7 AI agents responding to service texts and calls, booking appointments directly in your calendar.',
            link: 'Explore AI Dispatch Assistant →'
          },
          voiceCrm: {
            title: 'Voice CRM Systems',
            desc: 'Hands-free admin. Dictate job notes, update customer files, and trigger invoices while on-site.',
            link: 'Explore Voice CRM →'
          },
          sync: {
            title: 'Calendar & Tool Sync',
            desc: 'Direct integration with ServiceTitan, Housecall Pro, Google Calendar, and invoicing platforms.',
            link: 'Explore Calendar Sync →'
          }
        }
      },
      achievements: {
        badge: 'Our Achievements',
        title: 'Successfully Deployed Systems',
        desc: 'Advanced engineering systems designed to drive real-world business results for plumbing contractors.',
        ctaCases: 'View Full Case Studies',
        cards: [
          {
            tag: 'Lead Generation',
            title: 'Vancouver Plumbing & Drain Co.',
            desc: 'Deployed a complete website redesign and a custom SMS AI booking assistant to capture inbound local search leads. The system operates 24/7, booking jobs even when dispatchers are off.',
            stat1Num: '+45%',
            stat1Lbl: 'Booked service calls',
            stat2Num: '98.2%',
            stat2Lbl: 'Response rate'
          },
          {
            tag: 'Voice Operations',
            title: 'Fraser Valley Drain Technicians',
            desc: 'Integrated a voice-to-text pipeline into the field team\'s CRM. Plumbers dictate job summaries and list materials used on-site, generating immediate billing sheets.',
            stat1Num: '1.5 hrs',
            stat1Lbl: 'Daily admin saved/tech',
            stat2Num: '-80%',
            stat2Lbl: 'Billing delay'
          },
          {
            tag: '24/7 Dispatching',
            title: 'Apex Emergency Plumbing',
            desc: 'Implemented a natural-language voice assistant that handles after-hours emergency calls, screens caller urgency, and schedules dispatch runs directly into the on-call plumber\'s calendar.',
            stat1Num: '$18,000',
            stat1Lbl: 'Revenue saved in Month 1',
            stat2Num: '99.9%',
            stat2Lbl: 'Call answer rate'
          }
        ]
      },
      process: {
        badge: 'The Flow',
        title: 'How do we eliminate friction from your project?',
        desc: 'A transparent path focused on robust code and zero endless bureaucratic processes.',
        steps: [
          {
            num: '01',
            title: 'System Audit',
            desc: 'We review your current website, local SEO maps standing, and booking dispatch flow to find missed lead leak points.'
          },
          {
            num: '02',
            title: 'Redesign & AI Setup',
            desc: 'We design a high-speed website and construct your custom AI receptionist to respond to texts and book calls instantly.'
          },
          {
            num: '03',
            title: 'Voice CRM & App Sync',
            desc: 'We integrate hands-free voice transcription with your existing service software (ServiceTitan, Google Calendar, etc.).'
          },
          {
            num: '04',
            title: 'Local Launch & Scale',
            desc: 'We go live, optimize local search tags to push you up on Google Maps, and ensure your vans stay fully booked.'
          }
        ]
      },
      finalCta: {
        title: 'Ready to keep your plumbing vans fully booked?',
        desc: 'Get a modern high-conversion website, a 24/7 AI virtual scheduler, and a hands-free Voice CRM custom-built for your business.',
        cta1: 'Request Free Consultation',
        cta2: 'View Plumber Case Studies'
      }
    },
    services: {
      hero: {
        badge: 'Our Specialty',
        title: 'High-Performance Systems for ',
        titleGradient: 'Plumbing',
        titleEnd: ' Businesses',
        desc: 'We build custom websites, AI virtual schedulers, and voice CRM integrations to keep your plumbing vans running and eliminate office admin.'
      },
      cards: [
        {
          id: 'redesign',
          title: 'Website Redesign',
          desc: 'Custom mobile-first websites engineered for speed and conversion. We integrate click-to-call buttons, trust badge displays, and interactive schedulers to convert local searchers into booked jobs.',
          bullets: ['Mobile-First Layouts', 'Local SEO Optimization', 'High Lead Conversion'],
          cta: 'Request Quote',
          slug: 'redesign'
        },
        {
          id: 'assistant',
          title: 'AI Dispatch Assistant',
          desc: 'A 24/7 natural-language virtual dispatcher responding to texts and calls. Qualifies service requests, handles emergency escalations, and books jobs directly in your dispatch board.',
          bullets: ['24/7 Lead Response', 'Urgency Qualification', 'Automated Scheduling'],
          cta: 'Request Quote',
          slug: 'assistant'
        },
        {
          id: 'voice-crm',
          title: 'Voice CRM Systems',
          desc: 'Dictate client notes, log materials used, update job status, and initiate invoicing directly on-site using only your voice. Eliminates manual typing on mobile screens while working.',
          bullets: ['Hands-free Dictation', 'Acoustic Filtering', 'Trade Term Recognition'],
          cta: 'Request Quote',
          slug: 'voice-crm'
        },
        {
          id: 'integrations',
          title: 'Calendar & Tool Sync',
          desc: 'Automatic real-time synchronization between your website, AI assistant, and trade software. We connect directly to ServiceTitan, Housecall Pro, Google Calendar, and Quickbooks.',
          bullets: ['ServiceTitan Integration', 'Housecall Pro API', 'Quickbooks Invoicing'],
          cta: 'Request Quote',
          slug: 'integrations'
        },
        {
          id: 'seo',
          title: 'Local SEO & Visibility',
          desc: 'Optimization of local keyword targets and metadata to lift your plumbing business to the top of Google Maps and local search results, driving organic telephone calls.',
          bullets: ['Google Maps SEO', 'Local Keyword Tuning', 'Structured Schema Markup'],
          cta: 'Request Quote',
          slug: 'seo'
        },
        {
          id: 'resiliency',
          title: 'Outage & Lead Resiliency',
          desc: 'Hardened hosting infrastructure with zero server downtime. Offline fallback systems capture and log customer booking inquiries even during network outages, ensuring zero lead loss.',
          bullets: ['99.99% Guaranteed Uptime', 'Offline Intake Fallbacks', 'Zero Lead Leakage'],
          cta: 'Request Quote',
          slug: 'resiliency'
        }
      ],
      banner: {
        title: 'Engineering Built for Trade Velocity',
        desc: 'We eliminate low-value meetings and inflated tech budgets. We focus on clean systems that keep your plumbing vans booked, backed by documentation so any developer can maintain it.',
        cta: 'Start Project Without Bureaucracy'
      }
    },
    solutions: {
      hero: {
        badge: 'Specialized Trade Systems',
        title: 'AI Solutions & Data Architectures',
        desc: 'We build custom trade automation. From local AI scheduling agents to hands-free voice CRM dictation interfaces designed for plumbers on the field.',
        cta: 'View Capabilities'
      },
      capabilities: {
        badge: 'Our Capabilities',
        title: 'Technical Engineering Without Sales Pitch Boundaries',
        desc: 'We design decoupled, efficient components prepared to perform under high-demand scenarios.',
        grid1Title: 'Pipeline Architecture (1-4)',
        grid2Title: 'Data Integrity & Checks (5-6)',
        cards: [
          {
            id: 'web',
            title: 'High-Speed Website Redesign',
            desc: 'Rebuilding outdated contractor websites to load in under 1 second, rank on local Google search, and optimize for mobile tap-to-call leads.'
          },
          {
            id: 'reception',
            title: '24/7 Voice AI Reception',
            desc: 'Natural-language voice dispatch agents answering missed calls, routing plumbing emergencies, and scheduling service calls into your calendar.'
          },
          {
            id: 'recognition',
            title: 'Plumbing Term Recognition',
            desc: 'Speech-to-text models custom-trained to recognize local trade terminology such as sump pumps, backflow valves, and P-traps in noisy environments.'
          },
          {
            id: 'crm',
            title: 'Hands-free CRM Updates',
            desc: 'Plumbers dictate job progress, materials used, and billing details directly into the Voice CRM without manually typing on screen.'
          },
          {
            id: 'calendar',
            title: 'Calendar Conflict Check',
            desc: 'Real-time integration with ServiceTitan, Housecall Pro, and Google Calendar to automatically check technician availability and schedule routes.'
          },
          {
            id: 'vault',
            title: 'Offline Lead Vault',
            desc: 'In-memory storage mechanisms logging client details during network dropouts, ensuring no customer contact information is lost.'
          }
        ]
      },
      deepDive: {
        badge: 'Voice & Scheduler Architecture',
        title: 'How We Structure a Resilient Plumber System',
        desc: 'We do not write simple scripts. Our integrations use robust **Clean Architecture** principles and established design patterns:',
        bullets: [
          {
            bold: 'Voice-to-Text Pipeline:',
            normal: 'Decoupled speech-to-text components that filter ambient noise (basements, running pipes) and transcribe voice notes instantly.'
          },
          {
            bold: 'Synchronized Calendars:',
            normal: 'API links that poll technician slots dynamically, preventing double-bookings and schedule overlap.'
          },
          {
            bold: 'Fail-Safe Lead Routing:',
            normal: 'Resilient queues that retry database updates if your CRM or ServiceTitan drops connection.'
          },
          {
            bold: 'Security & Privacy:',
            normal: 'Encrypted transcribing that conforms to standard privacy guidelines, preserving local NDAs.'
          }
        ]
      },
      diagram: {
        title: 'KASI Resilient Plumber Pipeline',
        inVal: 'Customer Call / SMS / Onsite Plumber Dictation',
        step1: 'Acoustic Filtering & Transcription',
        step2: 'Plumbing Entity Recognition (sump pumps, valves)',
        step3: 'Availability Conflict Resolution & Auto-Booking',
        outVal: 'Clean Update (ServiceTitan / Housecall Pro / CRM)'
      },
      finalCta: {
        title: 'Ready to eliminate your plumbing office backlog?',
        desc: 'We design custom resilient systems that capture calls, schedule technicians, and log job notes automatically.',
        btn: 'Build My Intelligent Systems'
      }
    },
    cases: {
      hero: {
        badge: 'Technical Validation',
        title: 'Code that delivers ',
        titleGradient: 'measurable',
        titleEnd: ' results',
        desc: 'Discover how we help plumbing contractors eliminate admin overhead, capture emergency calls, and secure local search dominance.'
      },
      filters: {
        all: 'All Case Studies',
        web: 'Web Redesign',
        voice: 'AI Dispatch',
        crm: 'Voice CRM'
      },
      grid1Title: 'Active Deployments (1-3)',
      grid2Title: 'Beta Deployments (4-6)',
      outcomeLabel: 'Outcome',
      cards: [
        {
          id: 'cases1',
          category: 'web',
          title: 'High-Speed Web & SMS Booking',
          desc: 'Developed a headless website and a custom SMS AI assistant for a local contractor, capturing emergency leads during off-hours.',
          statNum: '+45%',
          statLbl: 'Increase in booked leads'
        },
        {
          id: 'cases2',
          category: 'crm',
          title: 'Hands-Free Voice CRM Integration',
          desc: 'Integrated a voice dictation pipeline for field technicians, generating immediate invoices in the office based on verbal job logs.',
          statNum: '1.5 hrs',
          statLbl: 'Admin hours saved daily'
        },
        {
          id: 'cases3',
          category: 'voice',
          title: 'After-Hours Emergency Voice Dispatch',
          desc: 'Deployed a natural-language voice assistant that screens caller urgency and schedules dispatch runs directly into the plumber\'s calendar.',
          statNum: '$18k+',
          statLbl: 'Emergency revenue saved'
        },
        {
          id: 'cases4',
          category: 'web',
          title: 'Local SEO Dominance Campaign',
          desc: 'Optimized search signals and redesigned mobile landing pages to rank for local emergency terms, generating organic leads.',
          statNum: '+250%',
          statLbl: 'Organic traffic growth'
        },
        {
          id: 'cases5',
          category: 'voice',
          title: 'Multi-Location Calendar Sync Layer',
          desc: 'Built an API middleware connecting custom web forms with multiple local ServiceTitan and Housecall Pro calendars without conflicts.',
          statNum: '100%',
          statLbl: 'Conflict-free scheduling'
        },
        {
          id: 'cases6',
          category: 'crm',
          title: 'Offline Resilient Mobile Client',
          desc: 'Designed a PWA layout enabling field crews to update customer profiles and billing items even when operating in basement utility rooms.',
          statNum: '0%',
          statLbl: 'Lead loss offline'
        }
      ]
    },
    about: {
      hero: {
        badge: 'About KASI',
        title: 'Technical pragmatism & structural ',
        titleGradient: 'integrity',
        desc: 'We were born in Vancouver, BC, under a simple premise: unnecessary complexity in software is the worst enemy of business profitability.'
      },
      narrative: {
        badge: 'Our Mission',
        title: 'The vision of Kroma AI Systems Inc.',
        para1: 'Plumbing contractors often suffer from outdated websites, missed customer calls, and manual paperwork that delays billing. At Kroma AI Systems Inc. (KASI), we build high-precision systems to automate your office operations.',
        para2: 'We do not believe in endless meetings or bloated budgets. We focus on modern web redesign, 24/7 AI virtual assistant receptionists, and voice CRM integrations to keep your vans booked and your hands free.'
      },
      vancouverMatrix: {
        tag: 'Geographical & Cultural Context',
        title: 'The Vancouver Matrix',
        para1: 'We operate from Vancouver, BC, helping local plumbing contractors scale their businesses. We understand the local trade environment, the urgency of emergency dispatching, and the need for hands-free systems for technicians on site.',
        para2: 'Our visual and strategic identity stems from this local and global duality, channeling a silent message of trust, solidity, and connectivity into every system we build.'
      },
      brand: {
        badge: 'Our Brand',
        title: 'Symbolic Fusion & Identity Philosophy',
        desc: 'KASI is not just a brand; it is a manifesto of technical realism and cultural alignment.',
        layerA: 'Layer A: Semantic Irony',
        layerATitle: '"KASI" as Practical Realism',
        layerADesc: 'In Spanish, KASI sounds exactly like "casi" (almost). Instead of hiding this, we weaponized it as our greatest strength:',
        layerAQuote: '"We are not perfect, but we KASI always deliver."',
        layerAPara: 'It acknowledges that in real-world engineering, there are no magical, bulletproof systems; there are only senior teams capable of anticipating failures and programming systems that self-recover under any adversity.'
      },
      timeline: {
        badge: 'Evolution',
        title: 'Our Technical Trajectory',
        desc: 'From local software engineering integrations to specialized automations for the trades.',
        events: [
          {
            year: '2023',
            title: 'Founding of Kroma AI Systems Inc.',
            desc: 'Legal registration in British Columbia, Canada, providing custom high-precision software integrations.'
          },
          {
            year: '2024',
            title: 'Birth of Web Redesigns & Contractor SEO',
            desc: 'Developing ultra-fast, local search-optimized contractor websites to maximize lead phone calls.'
          },
          {
            year: '2025',
            title: 'Launch of Voice CRM Dictation Pipelines',
            desc: 'Deploying advanced Whispering speech pipelines to log job materials and client history hands-free on-site.'
          },
          {
            year: '2026',
            title: 'KASI Plumber Tech Suite Launch',
            desc: 'Unifying Web Redesign, AI Dispatch Reception, and Voice CRM into a single resilient suite for plumbers across North America.'
          }
        ]
      },
      values: {
        badge: 'Our Values',
        title: 'Rigid Engineering Pillars',
        desc: 'Principles that define how we write code and how we engage with your business.',
        items: [
          {
            num: 'I',
            title: 'Technical Precision',
            desc: 'We write clean, typed, and well-documented systems specifically built for the trade operations.'
          },
          {
            num: 'II',
            title: 'Data Resiliency',
            desc: 'No customer inquiry or booking is ever lost. We build robust databases with offline capabilities.'
          },
          {
            num: 'III',
            title: 'Clean Architecture',
            desc: 'We decouple your CRM, calendars, and website from physical servers for high stability and security.'
          },
          {
            num: 'IV',
            title: 'Total Automation',
            desc: 'We automate booking, calendar dispatch, and client logging, saving hours of manual administrative office work.'
          }
        ]
      }
    },
    contact: {
      hero: {
        badge: 'Direct Contact',
        title: 'Let\'s talk ',
        titleGradient: 'real',
        titleEnd: ' engineering',
        desc: 'Tell us about your trade operations, missed call issues, or CRM headaches. We will respond with a preliminary technical diagnostic, not a sales pitch.'
      },
      details: {
        phone: 'Vancouver Direct Line',
        email: 'Email Address',
        hq: 'Corporate Headquarters',
        disclaimer: '🔒 Your contact details and technical information are treated with absolute confidentiality under pre-established NDAs.'
      },
      form: {
        name: 'Your Name',
        namePlaceholder: 'e.g. Gabriel Nino',
        email: 'Email Address',
        emailPlaceholder: 'e.g. contact@yourplumbing.com',
        company: 'Company / Plumbing Business',
        companyPlaceholder: 'e.g. Nino Plumbing & Drain',
        service: 'Service Required',
        selectOption: 'Select an option',
        optionRedesign: 'Website Redesign (More Leads)',
        optionAssistant: 'AI Dispatch Assistant (24/7 Scheduling)',
        optionVoiceCrm: 'Voice CRM Systems (Hands-Free Dictation)',
        optionIntegrations: 'Calendar & Tool Sync',
        optionSeo: 'Local SEO & Visibility',
        optionResiliency: 'Full Suite (Redesign + Assistant + Voice CRM)',
        message: 'How can we help your plumbing business?',
        messagePlaceholder: 'Tell us how many vans/technicians you operate, if you miss customer calls after hours, or which scheduling tool you want to integrate (ServiceTitan, Housecall Pro, etc.)...',
        submit: 'Submit Requirements',
        successTitle: 'Requirements Received!',
        successDesc: 'We have logged your request. A senior engineer will audit your notes and send you an email with an initial diagnostic within 24 business hours.',
        backHome: 'Back to Home'
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      solutions: 'Sistemas IA',
      cases: 'Casos',
      about: 'Nosotros',
      consultation: 'Consulta Gratuita'
    },
    footer: {
      brandDesc: 'Kroma AI Systems Inc. diseña y despliega sistemas inteligentes, tuberías de datos de alta resiliencia y arquitecturas de software de nivel empresarial.',
      location: 'Vancouver, BC, Canadá',
      navigation: 'Navegación',
      coreServices: 'Servicios Centrales',
      connectivity: 'Conectividad',
      followUs: 'Sigue nuestros canales para leer nuestros desgloses técnicos:',
      rights: 'Todos los derechos reservados.'
    },
    home: {
      badge: 'Sistemas Especializados para Oficios',
      heroTitle: 'No pierdas llamadas de fontanería. ',
      heroTitleGradient: 'Reservas',
      heroTitleEnd: ' automáticas.',
      heroSubtitle: 'Rediseño de sitios web de alta conversión, despachadores virtuales de IA las 24 horas y sistemas de CRM de voz manos libres. Diseñado específicamente para fontaneros profesionales.',
      ironyBadge: 'Automatización de Fontanería',
      ctaConsultation: 'Solicitar Consulta Gratuita',
      ctaServices: 'Explorar Servicios',
      metrics: {
        captured: 'Llamadas Perdidas Capturadas',
        seo: 'Tránsito SEO Local',
        timeSaved: 'Tiempo Administrativo Diario Ahorrado',
        conversion: 'Tasa de Conversión Web'
      },
      capabilities: {
        badge: 'Nuestras Capacidades',
        title: 'Sistemas sin fricción para escalar tu negocio de fontanería',
        desc: 'Soluciones diseñadas para capturar cada cliente potencial, optimizar el ranking de búsqueda y eliminar el papeleo.',
        cards: {
          redesign: {
            title: 'Rediseño de Sitios Web',
            desc: 'Sitios web modernos optimizados para la búsqueda local de Google, carga móvil rápida y llamadas telefónicas directas.',
            link: 'Explorar Rediseño Web →'
          },
          assistant: {
            title: 'Asistente de Despacho IA',
            desc: 'Agentes de IA las 24 horas que responden a mensajes y llamadas de servicio, programando citas directamente en tu agenda.',
            link: 'Explorar Asistente IA →'
          },
          voiceCrm: {
            title: 'Sistemas de CRM de Voz',
            desc: 'Administración manos libres. Dicta notas de trabajo, actualiza archivos de clientes y genera facturas desde la obra.',
            link: 'Explorar CRM de Voz →'
          },
          sync: {
            title: 'Sincronización de Agendas y Herramientas',
            desc: 'Integración directa con ServiceTitan, Housecall Pro, Google Calendar y plataformas de facturación.',
            link: 'Explorar Sincronización →'
          }
        }
      },
      achievements: {
        badge: 'Nuestros Logros',
        title: 'Sistemas Desplegados con Éxito',
        desc: 'Sistemas de ingeniería avanzada diseñados para impulsar resultados comerciales reales para contratistas de fontanería.',
        ctaCases: 'Ver Casos de Éxito Completos',
        cards: [
          {
            tag: 'Generación de Leads',
            title: 'Vancouver Plumbing & Drain Co.',
            desc: 'Desplegamos un rediseño web completo y un asistente de reserva de IA por SMS para capturar leads de búsquedas locales. El sistema opera las 24 horas, agendando servicios incluso fuera del horario de oficina.',
            stat1Num: '+45%',
            stat1Lbl: 'Servicios agendados',
            stat2Num: '98.2%',
            stat2Lbl: 'Tasa de respuesta'
          },
          {
            tag: 'Operaciones de Voz',
            title: 'Fraser Valley Drain Technicians',
            desc: 'Integramos un canal de voz a texto en el CRM del equipo de campo. Los fontaneros dictan resúmenes de trabajo e insumos usados in situ, generando hojas de facturación inmediatas.',
            stat1Num: '1.5 hrs',
            stat1Lbl: 'Tiempo administrativo ahorrado/técnico',
            stat2Num: '-80%',
            stat2Lbl: 'Demora en facturación'
          },
          {
            tag: 'Despacho las 24 Horas',
            title: 'Apex Emergency Plumbing',
            desc: 'Implementamos un asistente de voz de lenguaje natural que atiende llamadas de emergencia fuera de horario, filtra urgencias y programa despachos directamente en la agenda del fontanero de guardia.',
            stat1Num: '$18,000',
            stat1Lbl: 'Ingresos rescatados en el Mes 1',
            stat2Num: '99.9%',
            stat2Lbl: 'Tasa de atención de llamadas'
          }
        ]
      },
      process: {
        badge: 'El Proceso',
        title: '¿Cómo eliminamos la fricción de tu proyecto?',
        desc: 'Un camino transparente centrado en código robusto y cero burocracia interminable.',
        steps: [
          {
            num: '01',
            title: 'Auditoría del Sistema',
            desc: 'Revisamos tu sitio web actual, tu posicionamiento en mapas de SEO local y tu flujo de llamadas para encontrar fugas de clientes potenciales.'
          },
          {
            num: '02',
            title: 'Rediseño y Configuración de IA',
            desc: 'Diseñamos un sitio web de alta velocidad y construimos tu asistente de IA personalizado para responder mensajes y agendar llamadas al instante.'
          },
          {
            num: '03',
            title: 'CRM de Voz y Sincronización',
            desc: 'Integramos transcripción de voz manos libres con tu software de servicios existente (ServiceTitan, Google Calendar, etc.).'
          },
          {
            num: '04',
            title: 'Lanzamiento y Crecimiento Local',
            desc: 'Salimos a producción, optimizamos las etiquetas de búsqueda local para posicionarte en Google Maps y mantenemos tus furgonetas llenas de trabajo.'
          }
        ]
      },
      finalCta: {
        title: '¿Listo para mantener tus furgonetas de fontanería llenas de trabajo?',
        desc: 'Obtén un sitio web moderno de alta conversión, un programador virtual de IA las 24 horas y un CRM de voz manos libres a la medida de tu negocio.',
        cta1: 'Solicitar Consulta Gratuita',
        cta2: 'Ver Casos de Éxito de Fontanería'
      }
    },
    services: {
      hero: {
        badge: 'Nuestra Especialidad',
        title: 'Sistemas de alto rendimiento para negocios de ',
        titleGradient: 'Fontanería',
        titleEnd: '',
        desc: 'Desarrollamos sitios web rápidos, posicionamiento SEO local, despachadores virtuales automatizados e integraciones de CRM a medida para ayudarte a gestionar más furgonetas sin estrés de oficina.'
      },
      cards: [
        {
          id: 'redesign',
          title: 'Rediseño de Sitios Web',
          desc: 'Sitios web modernos de alta conversión y optimizados para móviles. Integramos botones de llamada directa, insignias de confianza y calendarios interactivos para convertir visitas de búsqueda local en servicios reservados.',
          bullets: ['Diseños para Móvil', 'Optimización SEO Local', 'Alta Conversión de Leads'],
          cta: 'Solicitar Presupuesto',
          slug: 'redesign'
        },
        {
          id: 'assistant',
          title: 'Asistente de Despacho IA',
          desc: 'Un despachador virtual por voz y SMS que atiende llamadas las 24 horas. Califica solicitudes de servicio, gestiona emergencias y agenda trabajos directamente en tu panel de despacho.',
          bullets: ['Respuesta de Leads 24/7', 'Filtro de Emergencias', 'Agenda Automatizada'],
          cta: 'Solicitar Presupuesto',
          slug: 'assistant'
        },
        {
          id: 'voice-crm',
          title: 'Sistemas de CRM de Voz',
          desc: 'Dicta notas de clientes, registra los materiales utilizados, actualiza el estado de las tareas y envía facturas desde la obra con comandos de voz, eliminando la necesidad de escribir en pantallas de móvil.',
          bullets: ['Dictado Manos Libres', 'Filtro Acústico de Ruido', 'Jerga Técnica Reconocida'],
          cta: 'Solicitar Presupuesto',
          slug: 'voice-crm'
        },
        {
          id: 'integrations',
          title: 'Sincronización de Agendas y Herramientas',
          desc: 'Sincronización automática y en tiempo real entre tu sitio web, asistente de IA y herramientas administrativas. Conexiones API directas con ServiceTitan, Housecall Pro, Google Calendar y Quickbooks.',
          bullets: ['Conexión ServiceTitan', 'API de Housecall Pro', 'Facturación Quickbooks'],
          cta: 'Solicitar Presupuesto',
          slug: 'integrations'
        },
        {
          id: 'seo',
          title: 'SEO Local y Posicionamiento',
          desc: 'Optimización de palabras clave de búsqueda local y metadatos para posicionar tu negocio en la cima de Google Maps y búsquedas locales, impulsando llamadas orgánicas de emergencia.',
          bullets: ['SEO en Google Maps', 'Palabras Clave Locales', 'Marcado de Esquema'],
          cta: 'Solicitar Presupuesto',
          slug: 'seo'
        },
        {
          id: 'resiliency',
          title: 'Outage & Resiliencia de Datos',
          desc: 'Infraestructura de alojamiento de alta resiliencia sin tiempos de inactividad. Los sistemas offline capturan y guardan las solicitudes de los clientes incluso durante caídas de señal de red móvil.',
          bullets: ['Uptime de 99.99%', 'Bóveda Offline de Leads', 'Cero Fuga de Clientes'],
          cta: 'Solicitar Presupuesto',
          slug: 'resiliency'
        }
      ],
      banner: {
        title: 'Ingeniería Diseñada para Velocidad de Negocio',
        desc: 'Eliminamos reuniones sin valor y presupuestos técnicos inflados. Nos enfocamos en sistemas limpios y eficientes que mantienen tus furgonetas llenas de servicios, con documentación de soporte simple.',
        cta: 'Iniciar Proyecto sin Burocracia'
      }
    },
    solutions: {
      hero: {
        badge: 'Sistemas Especializados para Oficios',
        title: 'Soluciones IA y Arquitecturas de Datos',
        desc: 'Desarrollamos automatización de procesos a medida. Desde agentes de despacho con IA local hasta interfaces de dictado de voz CRM para fontaneros en el campo.',
        cta: 'Ver Capacidades'
      },
      capabilities: {
        badge: 'Nuestras Capacidades',
        title: 'Ingeniería Técnica sin Límites Corporativos',
        desc: 'Diseñamos componentes desacoplados y eficientes preparados para rendir bajo escenarios de alta demanda.',
        grid1Title: 'Arquitectura de Datos (1-4)',
        grid2Title: 'Integridad y Verificación (5-6)',
        cards: [
          {
            id: 'web',
            title: 'Rediseño Web de Alta Velocidad',
            desc: 'Reconstrucción de sitios web de contratistas para cargar en menos de 1 segundo, posicionar en búsquedas de Google y optimizar llamadas desde móviles.'
          },
          {
            id: 'reception',
            title: 'Recepción Telefónica IA las 24 Horas',
            desc: 'Agentes de voz en lenguaje natural que responden llamadas perdidas, clasifican emergencias de fontanería y agendan citas de servicio.'
          },
          {
            id: 'recognition',
            title: 'Reconocimiento de Jerga de Fontanería',
            desc: 'Modelos de voz a texto entrenados para reconocer terminología técnica local como bombas de sumidero, válvulas de retención y sifones en entornos ruidosos.'
          },
          {
            id: 'crm',
            title: 'Actualizaciones de CRM Manos Libres',
            desc: 'Los fontaneros dictan el progreso del trabajo, materiales utilizados y detalles de facturación directamente al CRM sin necesidad de escribir en pantalla.'
          },
          {
            id: 'calendar',
            title: 'Verificación de Conflictos de Agenda',
            desc: 'Integración en tiempo real con ServiceTitan, Housecall Pro y Google Calendar para verificar la disponibilidad de técnicos y programar rutas automáticamente.'
          },
          {
            id: 'vault',
            title: 'Bóveda de Leads Desconectada',
            desc: 'Mecanismos de almacenamiento en memoria local que registran los datos del cliente durante cortes de red, asegurando que ninguna información se pierda.'
          }
        ]
      },
      deepDive: {
        badge: 'Arquitectura de Voz y Agenda',
        title: 'Cómo Estructuramos un Sistema de Fontanería Resiliente',
        desc: 'No escribimos scripts simples. Nuestras integraciones utilizan principios robustos de **Clean Architecture** y patrones de diseño establecidos:',
        bullets: [
          {
            bold: 'Canal de Voz a Texto:',
            normal: 'Componentes de voz a texto desacoplados que filtran el ruido ambiental (sótanos, tuberías corriendo) y transcriben notas de voz al instante.'
          },
          {
            bold: 'Agendas Sincronizadas:',
            normal: 'Enlaces de API que consultan los espacios del técnico de forma dinámica, evitando dobles reservas y superposición de horarios.'
          },
          {
            bold: 'Ruta de Leads a Prueba de Fallos:',
            normal: 'Colas resilientes que reintentan las actualizaciones de la base de datos si tu CRM o ServiceTitan pierde conexión.'
          },
          {
            bold: 'Seguridad y Privacidad:',
            normal: 'Transcripción cifrada que cumple con las directrices de privacidad estándar, preservando los acuerdos de confidencialidad locales.'
          }
        ]
      },
      diagram: {
        title: 'Canalización Resiliente de KASI',
        inVal: 'Llamada de Cliente / SMS / Dictado de Fontanero en Obra',
        step1: 'Filtro Acústico y Transcripción',
        step2: 'Reconocimiento de Entidades de Fontanería (sifones, válvulas)',
        step3: 'Resolución de Conflictos de Agenda y Reserva Automática',
        outVal: 'Actualización Limpia (ServiceTitan / Housecall Pro / CRM)'
      },
      finalCta: {
        title: '¿Listo para eliminar el papeleo acumulado de tu oficina?',
        desc: 'Diseñamos sistemas personalizados y resilientes que capturan llamadas, agendan técnicos y registran notas de trabajo automáticamente.',
        btn: 'Construir mis Sistemas Inteligentes'
      }
    },
    cases: {
      hero: {
        badge: 'Validación Técnica',
        title: 'Código que entrega resultados ',
        titleGradient: 'medibles',
        titleEnd: '',
        desc: 'Descubre cómo ayudamos a los contratistas de fontanería a eliminar costos administrativos, capturar llamadas de emergencia y dominar las búsquedas locales.'
      },
      filters: {
        all: 'Todos los Casos',
        web: 'Rediseño Web',
        voice: 'Despacho IA',
        crm: 'CRM de Voz'
      },
      grid1Title: 'Sistemas Activos (1-3)',
      grid2Title: 'Sistemas en Beta (4-6)',
      outcomeLabel: 'Resultado',
      cards: [
        {
          id: 'cases1',
          category: 'web',
          title: 'Reserva Web y SMS de Alta Velocidad',
          desc: 'Desarrollamos un sitio web y un asistente de IA por SMS para capturar leads de emergencia fuera del horario comercial.',
          statNum: '+45%',
          statLbl: 'Incremento en servicios agendados'
        },
        {
          id: 'cases2',
          category: 'crm',
          title: 'Integración de CRM de Voz Manos Libres',
          desc: 'Integramos un canal de dictado de voz para técnicos de campo, generando facturas en oficina a partir de descripciones verbales.',
          statNum: '1.5 hrs',
          statLbl: 'Horas administrativas ahorradas al día'
        },
        {
          id: 'cases3',
          category: 'voice',
          title: 'Despacho de Voz de Emergencia 24/7',
          desc: 'Desplegamos un asistente de voz en lenguaje natural que evalúa urgencias y programa servicios directamente en la agenda de guardia.',
          statNum: '$18k+',
          statLbl: 'Ingresos de emergencia rescatados'
        },
        {
          id: 'cases4',
          category: 'web',
          title: 'Campaña de Dominio SEO Local',
          desc: 'Optimización de señales de búsqueda y rediseño de landings móviles para liderar búsquedas locales orgánicas de fontanería de emergencia.',
          statNum: '+250%',
          statLbl: 'Crecimiento de tráfico orgánico'
        },
        {
          id: 'cases5',
          category: 'voice',
          title: 'Sincronización Multicanal de Agendas',
          desc: 'API middleware que conecta formularios web con múltiples agendas locales de ServiceTitan y Housecall Pro sin conflictos de horario.',
          statNum: '100%',
          statLbl: 'Programación libre de conflictos'
        },
        {
          id: 'cases6',
          category: 'crm',
          title: 'Cliente Móvil Resiliente Offline',
          desc: 'Aplicación PWA que permite a los técnicos de campo actualizar perfiles de clientes y facturación incluso en sótanos sin señal.',
          statNum: '0%',
          statLbl: 'Cero pérdida de leads offline'
        }
      ]
    },
    about: {
      hero: {
        badge: 'Sobre KASI',
        title: 'Pragmatismo técnico e integridad ',
        titleGradient: 'estructural',
        desc: 'Nacimos en Vancouver, BC, bajo una premisa sencilla: la complejidad innecesaria en el software es el peor enemigo de la rentabilidad empresarial.'
      },
      narrative: {
        badge: 'Nuestra Misión',
        title: 'La visión de Kroma AI Systems Inc.',
        para1: 'Los contratistas de fontanería a menudo sufren por sitios web obsoletos, llamadas perdidas y papeleo manual que retrasa la facturación. En Kroma AI Systems Inc. (KASI), desarrollamos sistemas de alta precisión para automatizar tus operaciones de oficina.',
        para2: 'No creemos en reuniones interminables ni en presupuestos inflados. Nos enfocamos en rediseño web moderno, asistentes de despacho virtuales las 24 horas y sincronización de CRM de voz para mantener tus furgonetas llenas de trabajo y tus manos libres.'
      },
      vancouverMatrix: {
        tag: 'Contexto Geográfico y Cultural',
        title: 'La Matriz de Vancouver',
        para1: 'Operamos desde Vancouver, BC, ayudando a los contratistas de fontanería locales a escalar sus operaciones. Entendemos el entorno del sector, la urgencia del despacho de emergencias y la necesidad de sistemas manos libres para técnicos en la obra.',
        para2: 'Nuestra identidad visual y estratégica nace de esta dualidad local y global, canalizando un mensaje de confianza, solidez y conectividad en cada sistema que construimos.'
      },
      brand: {
        badge: 'Nuestra Marca',
        title: 'Fusión Simbólica y Filosofía de Identidad',
        desc: 'KASI no es solo una marca; es un manifiesto de realismo técnico y alineación cultural.',
        layerA: 'Capa A: Ironía Semántica',
        layerATitle: '"KASI" como Realismo Práctico',
        layerADesc: 'En español, el acrónimo KASI suena exactamente como la palabra "casi". En lugar de evitarlo, lo convertimos en nuestra mayor fortaleza:',
        layerAQuote: '"We are not perfect, but we KASI always deliver."',
        layerAPara: 'Reconoce que en la ingeniería real no existen sistemas perfectos y mágicos; solo hay equipos experimentados capaces de anticipar fallos y programar sistemas que se recuperan solos ante la adversidad.'
      },
      timeline: {
        badge: 'Evolución',
        title: 'Nuestra Trayectoria Técnica',
        desc: 'Desde integraciones locales de ingeniería hasta automatizaciones especializadas para contratistas.',
        events: [
          {
            year: '2023',
            title: 'Fundación de Kroma AI Systems Inc.',
            desc: 'Registro legal en Columbia Británica, Canadá, proporcionando integraciones de software personalizadas de alta precisión.'
          },
          {
            year: '2024',
            title: 'Creación de Rediseño Web y SEO local',
            desc: 'Desarrollo de sitios web para contratistas ultrarrápidos y optimizados para búsquedas locales para maximizar llamadas.'
          },
          {
            year: '2025',
            title: 'Lanzamiento de CRM de Voz',
            desc: 'Despliegue de canales de transcripción de voz para registrar materiales y reportes de trabajo manos libres en la obra.'
          },
          {
            year: '2026',
            title: 'Lanzamiento de KASI Plumber Suite',
            desc: 'Unificación de Rediseño Web, Recepción de Despacho de IA y CRM de Voz en una sola suite robusta para fontaneros en América del Norte.'
          }
        ]
      },
      values: {
        badge: 'Nuestros Valores',
        title: 'Pilares Rígidos de Ingeniería',
        desc: 'Principios que definen cómo escribimos código y cómo nos relacionamos con tu negocio.',
        items: [
          {
            num: 'I',
            title: 'Precisión Técnica',
            desc: 'Escribimos sistemas limpios, tipados y bien documentados específicamente diseñados para operaciones de oficios.'
          },
          {
            num: 'II',
            title: 'Resiliencia de Datos',
            desc: 'Ninguna consulta o reserva de cliente se pierde. Construimos bases de datos robustas con almacenamiento offline.'
          },
          {
            num: 'III',
            title: 'Arquitectura Limpia',
            desc: 'Desacoplamos tu CRM, agendas y sitio web de servidores físicos para garantizar máxima estabilidad y seguridad.'
          },
          {
            num: 'IV',
            title: 'Automatización Total',
            desc: 'Automatizamos las reservas, la asignación de agendas y los reportes de clientes, ahorrando horas de trabajo administrativo manual.'
          }
        ]
      }
    },
    contact: {
      hero: {
        badge: 'Contacto Directo',
        title: 'Hablemos de ingeniería ',
        titleGradient: 'real',
        titleEnd: '',
        desc: 'Cuéntanos sobre tus operaciones de campo, problemas con llamadas perdidas o dificultades con tu CRM. Te responderemos con un diagnóstico técnico preliminar, no con un discurso de ventas.'
      },
      details: {
        phone: 'Línea Directa Vancouver',
        email: 'Dirección de Email',
        hq: 'Sede Corporativa',
        disclaimer: '🔒 Tus datos de contacto e información técnica son tratados bajo estricto acuerdo de confidencialidad y acuerdos de no divulgación (NDA).'
      },
      form: {
        name: 'Tu Nombre',
        namePlaceholder: 'ej. Gabriel Niño',
        email: 'Dirección de Email',
        emailPlaceholder: 'ej. contacto@tuempresa.com',
        company: 'Empresa / Negocio de Fontanería',
        companyPlaceholder: 'ej. Niño Fontanería y Drenajes',
        service: 'Servicio Requerido',
        selectOption: 'Selecciona una opción',
        optionRedesign: 'Rediseño Web (Captura de Leads)',
        optionAssistant: 'Asistente de Despacho IA (Agenda 24/7)',
        optionVoiceCrm: 'Sistemas de CRM de Voz (Dictado Manos Libres)',
        optionIntegrations: 'Sincronización de Agendas y Herramientas',
        optionSeo: 'SEO Local y Posicionamiento',
        optionResiliency: 'Suite Completa (Rediseño + Asistente + CRM de Voz)',
        message: '¿Cómo podemos ayudar a tu negocio?',
        messagePlaceholder: 'Cuéntanos cuántas furgonetas/técnicos gestionas, si pierdes llamadas de clientes fuera de horario, o qué herramienta de agenda deseas integrar (ServiceTitan, Housecall Pro, etc.)...',
        submit: 'Enviar Requerimientos',
        successTitle: '¡Requerimientos Recibidos!',
        successDesc: 'Hemos registrado tu solicitud. Un ingeniero senior analizará tus notas y te enviará un diagnóstico técnico inicial en un plazo de 24 horas hábiles.',
        backHome: 'Volver al Inicio'
      }
    }
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      solutions: '智能系统',
      cases: '成功案例',
      about: '关于我们',
      consultation: '免费咨询'
    },
    footer: {
      brandDesc: 'Kroma AI Systems Inc. 设计并部署智能系统、高弹性数据管道以及企业级软件架构。',
      location: '加拿大温哥华',
      navigation: '网站导航',
      coreServices: '核心服务',
      connectivity: '社交媒体',
      followUs: '关注我们的官方频道以阅读最新的技术拆解分析：',
      rights: '保留所有权利。'
    },
    home: {
      badge: '专业技术系统',
      heroTitle: '不再漏接管道急修电话。',
      heroTitleGradient: '自动',
      heroTitleEnd: '预约排班。',
      heroSubtitle: '高转化率网站重构、全天候人工智能虚拟调度员及免提语音 CRM 系统。专为专业管道工程承包商设计。',
      ironyBadge: '管道工程自动化',
      ctaConsultation: '申请免费咨询',
      ctaServices: '了解核心服务',
      metrics: {
        captured: '漏接电话追回率',
        seo: '本地 SEO 搜索流量',
        timeSaved: '日常管理时间节省',
        conversion: '网页流量转化率'
      },
      capabilities: {
        badge: '核心能力',
        title: '无缝运行的系统，助您规模化运营管道业务',
        desc: '工程级解决方案：自动捕获潜在客户、提升搜索排名并彻底告别纸质繁琐流程。',
        cards: {
          redesign: {
            title: '网站重构与改版',
            desc: '打造加载速度低于 1 秒的现代化网站，专为本地 Google 搜索、移动端快速拨号进行了极致优化。',
            link: '了解网站重构项目 →'
          },
          assistant: {
            title: '人工智能调度助理',
            desc: '7×24小时在线的 AI 语音与短信助理，自动答复咨询并将预约直接同步至您的日历系统。',
            link: '了解 AI 调度助理 →'
          },
          voiceCrm: {
            title: '语音 CRM 输入系统',
            desc: '解放双手的现场办公。直接口述工作记录、更新客户资料并在现场触发账单发送。',
            link: '了解语音 CRM 系统 →'
          },
          sync: {
            title: '日历与业务系统同步',
            desc: '将您的前台系统、AI 短信助手直接与 ServiceTitan、Housecall Pro、Google 日历及发票平台相连。',
            link: '了解系统同步方案 →'
          }
        }
      },
      achievements: {
        badge: '项目成果',
        title: '已成功部署运行的系统',
        desc: '用先进 of 软件工程系统，为温哥华本地管道工程承包商带来实实在在的业务增长。',
        ctaCases: '查看全部案例研究',
        cards: [
          {
            tag: '客户获客',
            title: '温哥华专业管道排水公司',
            desc: '为其部署了全新的高速网站与定制 of SMS AI 预定助理。该系统全天候运行，在夜间或无客服在岗时自动接单。',
            stat1Num: '+45%',
            stat1Lbl: '线上完成预约量',
            stat2Num: '98.2%',
            stat2Lbl: '即时响应率'
          },
          {
            tag: '语音业务流程',
            title: '菲沙河谷下水道工程技术团队',
            desc: '在 CRM 系统中嵌入了实时语音转文字管道。技术人员在现场只需口述工作总结与物料清单，即可秒级生成发票。',
            stat1Num: '1.5 小时',
            stat1Lbl: '每位现场人员每日节省的管理时间',
            stat2Num: '-80%',
            stat2Lbl: '开票延时降低'
          },
          {
            tag: '全天候调度',
            title: 'Apex 管道急修热线',
            desc: '部署了基于自然语言处理的 AI 电话总机，自动接听非工作时间的紧急漏水电话，筛选紧急程度并安排派单。',
            stat1Num: '$18,000',
            stat1Lbl: '首月挽回的流失业务收入',
            stat2Num: '99.9%',
            stat2Lbl: '电话即时接听率'
          }
        ]
      },
      process: {
        badge: '合作流程',
        title: '我们如何为您的项目扫清一切障碍？',
        desc: '清晰透明的合作路径，专注于交付高质量的代码，绝无冗余的官僚审批流程。',
        steps: [
          {
            num: '01',
            title: '系统审计评估',
            desc: '审查您现有的网站、本地 SEO 排名以及电话派单流程，找出导致潜在客户流失的漏洞。'
          },
          {
            num: '02',
            title: '网站改版与 AI 调试',
            desc: '设计超高速的网站并构建定制的 AI 语音/短信客服，实现自动答复与即时排班。'
          },
          {
            num: '03',
            title: '语音 CRM 与应用同步',
            desc: '打通免提语音转文字录入管道，与您正在使用的业务软件（如 ServiceTitan 等）深度整合。'
          },
          {
            num: '04',
            title: '上线运行与规模扩张',
            desc: '正式发布系统，优化 Google 地图本地搜索信号，确保您的工程车辆预约不断。'
          }
        ]
      },
      finalCta: {
        title: '准备好让您的技术人员每天订单排满了吗？',
        desc: '立即为您的企业定制高性能网站、全天候 AI 虚拟助理以及免提语音 CRM 管道。',
        cta1: '申请免费咨询',
        cta2: '查看管道工程案例'
      }
    },
    services: {
      hero: {
        badge: '核心专业方向',
        title: '为管道工程承包商打造的',
        titleGradient: '高性能',
        titleEnd: '系统',
        desc: '我们开发定制网站、部署全天候 AI 虚拟调度助理，并整合免提语音 CRM，确保您的工程车辆高效排班并免除后台管理压力。'
      },
      cards: [
        {
          id: 'redesign',
          title: '网站重构与改版',
          desc: '针对移动端进行了深度优化的定制高速网站。我们集成了一键拨号按键、信任章展示及交互式在线预约系统，以实现把搜索流量瞬间化为真实派单。',
          bullets: ['移动优先布局', '本地 SEO 搜索优化', '超高客户转化率'],
          cta: '获取报价',
          slug: 'redesign'
        },
        {
          id: 'assistant',
          title: 'AI 虚拟调度助理',
          desc: '全天候智能语音与短信派单助理，实时理解自然语言来电。自动筛选客户求助的紧急程度、处理急修请求并完成日历排班预约。',
          bullets: ['7x24小时全天候响应', '紧急严重性评估', '全流程自动排班'],
          cta: '获取报价',
          slug: 'assistant'
        },
        {
          id: 'voice-crm',
          title: '免提语音 CRM 系统',
          desc: '外勤技术人员在现场只需开口述口令，即可生成客户进度、记录所用物料、更新工单状态并直接发送发票，免去在移动屏幕上繁琐的打字录入。',
          bullets: ['完全释放双手', '工地人声噪降优化', '水管专业术语精准识别'],
          cta: '获取报价',
          slug: 'voice-crm'
        },
        {
          id: 'integrations',
          title: '日历与业务软件同步',
          desc: '在您的网页前端、AI 助理与管理软件之间保持绝对的实时同步。我们直接对接 ServiceTitan、Housecall Pro、Google 日历及 Quickbooks 财务系统。',
          bullets: ['ServiceTitan API 对接', 'Housecall Pro 系统同步', 'Quickbooks 发票生成'],
          cta: '获取报价',
          slug: 'integrations'
        },
        {
          id: 'seo',
          title: '本地 SEO 搜索与霸屏',
          desc: '优化本地高商业价值词汇及地图属性元数据，让您的管道企业在 Google 地图与本地搜索结果中稳居第一，源源不断产生自然获客电话。',
          bullets: ['Google 地图 SEO 优化', '本地高转化词调优', '工程级 Schema 标记注入'],
          cta: '获取报价',
          slug: 'seo'
        },
        {
          id: 'resiliency',
          title: '离线状态与数据高容灾',
          desc: '强化的主机基础设施，确保高可用率。离线容灾备份系统可以在信号微弱或网络中断时自动缓存客户预定信息，并在重连后瞬间同步。',
          bullets: ['99.99% 的运行高可用', '离线订单自动保存', '零潜在订单漏单率'],
          cta: '获取报价',
          slug: 'resiliency'
        }
      ],
      banner: {
        title: '为外勤运营速度量身定制的工程技术',
        desc: '我们坚信代码的实用性，杜绝空洞的会议与灌水预算。我们专注交付能真正为您接单的高效网站和自动化调度系统，并附带最直白的维护文档。',
        cta: '跳过繁杂程序，即刻开始'
      }
    },
    solutions: {
      hero: {
        badge: '专业技术系统',
        title: 'AI 解决方案与数据架构',
        desc: '我们开发定制的行业自动化系统。从本地 AI 预约排班代理到专为外勤水管技术人员设计的免提语音 CRM 口述录入接口。',
        cta: '查看技术能力'
      },
      capabilities: {
        badge: '核心技术能力',
        title: '没有销售套话的纯粹工程技术',
        desc: '我们设计高度解耦、精简高效的组件，确保系统在面临高并发需求时仍能保持绝对稳定运行。',
        grid1Title: '数据流架构 (1-4)',
        grid2Title: '数据完整性校验 (5-6)',
        cards: [
          {
            id: 'web',
            title: '极速网站重构与改版',
            desc: '将承包商网站的加载耗时缩短至 1 秒以内，确保本地 Google 搜索排名及移动端拨打功能完美可用。'
          },
          {
            id: 'reception',
            title: '7×24小时智能语音接待',
            desc: '基于自然语言处理的语音代理，能够立即接听并筛选管道爆裂等紧急求助，自动将其记录并同步至排班表。'
          },
          {
            id: 'recognition',
            title: '管道工程专业术语识别',
            desc: '定制化训练 of 语音转文字模型，可在工地噪音环境下精准识别诸如排污泵、止回阀以及 P型弯等技术名词。'
          },
          {
            id: 'crm',
            title: '免手动作业的 CRM 数据更新',
            desc: '技术人员只需口述当前施工进度、所耗物料和计费条目，即可自动完成 Voice CRM 记录更新。'
          },
          {
            id: 'calendar',
            title: '智能日历排班冲突核对',
            desc: '直接集成 ServiceTitan、Housecall Pro 与 Google 日历，实时检索技术人员空闲时段，智能规划合理上门路线。'
          },
          {
            id: 'vault',
            title: '离线状态潜在客户保险箱',
            desc: '利用本地内存缓存记录所有客户详情，即使现场网络临时中断，也绝不丢失任何一个客户的联系方式。'
          }
        ]
      },
      deepDive: {
        badge: '语音与调度排班系统架构',
        title: '我们如何搭建具有高容灾能力的管道管理系统',
        desc: '我们不编写简单的脚本。我们的集成管道采用健壮的**整洁架构 (Clean Architecture)** 原则和成熟的设计模式：',
        bullets: [
          {
            bold: '语音转文字传输通道：',
            normal: '高度解耦的语音转文字组件，自动过滤工地环境噪音（地下室、水管流水声），秒级完成语音备忘录转录。'
          },
          {
            bold: '多端同步排班日历：',
            normal: '动态轮询技术人员空闲时段的 API 链接，杜绝重复预定和日程重叠冲突。'
          },
          {
            bold: '防丢单容灾数据路由：',
            normal: '具备自动重试机制的高韧性队列，即便您的底层 CRM 或 ServiceTitan 连接掉线，也能确保在恢复后成功补录。'
          },
          {
            bold: '隐私合规与加密安全：',
            normal: '符合行业标准的数据加密传输通道，充分保护客户的隐私，严格履行本地 NDA 协议。'
          }
        ]
      },
      diagram: {
        title: 'KASI 离线容灾管道自动排班数据流图',
        inVal: '客户电话来电 / SMS 短信咨询 / 技术人员现场语音口述',
        step1: '声学降噪过滤与实时语音转录',
        step2: '水管专业实体词识别 (如排污泵、止回阀等)',
        step3: '智能日历空闲度冲突核对与自动排班',
        outVal: '接口数据同步 (ServiceTitan / Housecall Pro / CRM 系统)'
      },
      finalCta: {
        title: '准备好彻底消除后台的手工录入积压了吗？',
        desc: '我们定制设计具有高容灾能力的系统，自动接听电话、安排排班并记录现场工作摘要。',
        btn: '定制开发我的智能系统'
      }
    },
    cases: {
      hero: {
        badge: '工程技术验证',
        title: '用代码交付',
        titleGradient: '实实在在',
        titleEnd: '的业务指标',
        desc: '深入了解我们如何协助管道工程承包商彻底消除管理开销、自动抓取紧急来电并牢牢霸占本地搜索排名。'
      },
      filters: {
        all: '全部案例研究',
        web: '网站极速改版',
        voice: 'AI 虚拟调度',
        crm: '免提语音 CRM'
      },
      grid1Title: '在线运行系统 (1-3)',
      grid2Title: '测试开发系统 (4-6)',
      outcomeLabel: '核心指标',
      cards: [
        {
          id: 'cases1',
          category: 'web',
          title: '高速网站与 SMS 智能预定系统',
          desc: '为本地承包商开发了无头架构网站和定制的 AI 助手，在非工作时段全天候自动抓取紧急预约。',
          statNum: '+45%',
          statLbl: '线上预约增长'
        },
        {
          id: 'cases2',
          category: 'crm',
          title: '免提语音 CRM 语音输入挂接',
          desc: '为外勤技术团队集成语音口述录入管道，使得办公室后台能够依据现场发来的语音汇报瞬间自动生成发票。',
          statNum: '1.5 小时',
          statLbl: '外勤每日免手工录入时间'
        },
        {
          id: 'cases3',
          category: 'voice',
          title: '全天候紧急热线 AI 虚拟派单系统',
          desc: '部署自然语言语音总机，自动识别来电紧急程度并安排派单，将信息无缝同步至值班技工的手机日历。',
          statNum: '$18k+',
          statLbl: '首月追回紧急求助业务收入'
        },
        {
          id: 'cases4',
          category: 'web',
          title: '本地 SEO 霸屏搜索引擎战役',
          desc: '深度改版移动端着陆页并调优搜索引擎信号，使紧急修漏水等核心高商用词稳居 Google 本地搜索前列。',
          statNum: '+250%',
          statLbl: '自然搜索客群增长'
        },
        {
          id: 'cases5',
          category: 'voice',
          title: '多分支跨区域日历冲突校验网关',
          desc: '设计开发 API 中间件，使网页预约表单与多个本地 ServiceTitan / Housecall Pro 账号之间保持零冲突同步。',
          statNum: '100%',
          statLbl: '冲突排班过滤率'
        },
        {
          id: 'cases6',
          category: 'crm',
          title: '无网离线高容灾外勤移动客户端',
          desc: '基于 PWA 技术设计，确保技术人员身处信号微弱的地下室时仍能顺畅检索客户属性并添加收费物料。',
          statNum: '0%',
          statLbl: '断网状态潜在客户数据丢失率'
        }
      ]
    },
    about: {
      hero: {
        badge: '关于 KASI',
        title: '技术实用主义与结构',
        titleGradient: '完整性',
        desc: '我们诞生于加拿大不列颠哥伦比亚省温哥华市。我们的研发理念极为明确：软件开发中一切多余的复杂度都是企业盈利的敌人。'
      },
      narrative: {
        badge: '公司使命',
        title: 'Kroma AI Systems Inc. 的技术愿景',
        para1: '水管承包商的业务流常常因老旧缓慢的网站、夜间漏接来电，以及滞后的纸质发票记录而被拖累。在 Kroma AI Systems Inc. (KASI)，我们设计极高精准度的系统，帮您实现后台运营的纯数字化与自动化。',
        para2: '我们拒绝形式化的长会与虚高报价。我们全力投入承包商高速网页重塑、24/7 AI 虚拟派单助理、以及解放双手的语音 CRM 对接，从而帮助技术车辆源源不断接单。'
      },
      vancouverMatrix: {
        tag: '地理与文化属性',
        title: '温哥华科技矩阵 (Vancouver Matrix)',
        para1: '我们立足于加拿大温哥华，服务于本地及北美广大管道工程企业。我们对本地行业实操、突发抢修调度的紧急程度、以及外勤人员在地下管网工作时的双手释放需求有着深刻洞察。',
        para2: '我们的视觉系统与战略规划根植于这一本土属性与国际化技术的融合，把稳定、踏实和深度链接的技术信号注入交付的每一个系统模块中。'
      },
      brand: {
        badge: '公司品牌',
        title: '符号融合与身份认同哲学',
        desc: 'KASI 不仅仅是一个品牌代号，它是工程实用主义与温哥华多元文化交织融合的宣言。',
        layerA: 'A 层：语义幽默与技术反讽',
        layerATitle: '“KASI”代表的技术写实主义',
        layerADesc: '在西班牙语中，KASI 的发音与“casi”完全相同，意思是“几乎/差一点”。我们不仅没有避讳，反而将其转化为我们的品牌内核：',
        layerAQuote: '"We are not perfect, but we KASI always deliver."',
        layerAPara: '我们坦诚在真实世界的工程项目中，没有绝对魔法般完美无瑕、绝不出错的系统；只有技术过硬、能够预判故障并编写自我恢复逻辑 of 资深工程团队。'
      },
      timeline: {
        badge: '技术路线',
        title: '我们的技术演进轨迹',
        desc: '从本地软件工程集成服务，到为各类技术工种提供专用的 AI 自动化产品。',
        events: [
          {
            year: '2023',
            title: 'Kroma AI Systems Inc. 依法注册注册成立',
            desc: '在加拿大不列颠哥伦比亚省完成注册，为本地企业级客户提供量身定制的技术接口和数据整合服务。'
          },
          {
            year: '2024',
            title: '极速网页改版与 local SEO 方案问世',
            desc: '面向管道公司推出高性能前端网页与搜索引擎地图局部优化服务，大幅拉高首屏电话拨打量。'
          },
          {
            year: '2025',
            title: '外勤语音 CRM 口述识别通道上线',
            desc: '部署基于轻量级语音模型的产品，外勤师傅在噪声高频的工作地点通过说话即可将物料与记录登记同步至后台。'
          },
          {
            year: '2026',
            title: 'KASI Plumber Tech Suite 全线发布',
            desc: '将极速网站、AI 电话调度助理与外勤语音 CRM 系统进行模块整合，交付具有自恢复和离线数据保护能力的一站式套件。'
          }
        ]
      },
      values: {
        badge: '核心价值观',
        title: '核心原则',
        desc: '写进我们决策逻辑的代码原则。',
        items: [
          {
            num: 'I',
            title: '工程精密度',
            desc: '我们只编写整洁、高度静态类型且配备完整维护指南的代码，专为商业外勤派班量身定制。'
          },
          {
            num: 'II',
            title: '数据自恢复韧性',
            desc: '永远不丢失任何一条顾客的求助电话和日程订单。应用本地存储离线机制抵抗地下室无信号困境。'
          },
          {
            num: 'III',
            title: '高度解耦架构',
            desc: '在网页展示层、AI 预约引擎及后台管理系统间实施完全解耦，切断级联故障，阻断系统级崩溃。'
          },
          {
            num: 'IV',
            title: '极速自动化工作流',
            desc: '把客户登记、电话接听、日历调度和发票初创流程全盘自动化，帮您的管理办公室省下大段无效时间。'
          }
        ]
      }
    },
    contact: {
      hero: {
        badge: '直接联系',
        title: '让我们聊点儿',
        titleGradient: '实实在在',
        titleEnd: '的工程技术',
        desc: '跟我们谈谈您的车队运营、漏接电话烦恼或 CRM 痛点。您会收到一份前期的技术分析报告，而不是一份推销性质的 PPT 方案。'
      },
      details: {
        phone: '温哥华直拨电话',
        email: '电子邮箱地址',
        hq: '公司总部所在地',
        disclaimer: '🔒 您的所有商业隐私、外勤信息与技术痛点将受到基于 NDA 协议框架的绝对严格保密。'
      },
      form: {
        name: '您的姓名',
        namePlaceholder: '例如：Gabriel Niño',
        email: '您的电子邮箱',
        emailPlaceholder: '例如：contact@yourplumbing.com',
        company: '您的管道工程企业名称',
        companyPlaceholder: '例如：Nino Plumbing & Drain',
        service: '您需要咨询的系统方向',
        selectOption: '请选择一个系统方向',
        optionRedesign: '极速网站改版与高获客 SEO 调优',
        optionAssistant: '7×24小时在线 AI 虚拟调度助理',
        optionVoiceCrm: '免手动作业的现场语音 CRM 同步',
        optionIntegrations: 'ServiceTitan / Calendar 接口挂接',
        optionSeo: '本地搜索排名与紧急客群捕获',
        optionResiliency: '管道科技全套大礼包（网站改版 + 虚拟调度员 + 语音CRM）',
        message: '我们能为您做什么？',
        messagePlaceholder: '例如：您目前运营几辆服务车/多少名技工？非工作时间经常漏接电话吗？希望同步哪种日历系统 (ServiceTitan, Housecall Pro等)？...',
        submit: '提交您的技术需求',
        successTitle: '您的需求已成功登记！',
        successDesc: '我们已记录您的申请。我们的资深架构师将认真阅读您的痛点，并在 24 小时内向您的邮箱发送一份初步的技术审计 diagnostic 分析方案。',
        backHome: '返回网站首页'
      }
    }
  },
  pa: {
    nav: {
      home: 'ਹੋਮ',
      services: 'ਸੇਵਾਵਾਂ',
      solutions: 'ਏਆਈ ਸਿਸਟਮ',
      cases: 'ਕੇਸ ਸਟੱਡੀਜ਼',
      about: 'ਸਾਡੇ ਬਾਰੇ',
      consultation: 'ਮੁਫ਼ਤ ਸਲਾਹ'
    },
    footer: {
      brandDesc: 'Kroma AI Systems Inc. ਬੁੱਧੀਮਾਨ ਪ੍ਰਣਾਲੀਆਂ, ਉੱਚ-ਲਚਕੀਲੇ ਡੇਟਾ ਪਾਈਪਲਾਈਨਾਂ, ਅਤੇ ਉੱਦਮ-ਦਰਜੇ ਦੇ ਸੌਫਟਵੇਅਰ ਆਰਕੀਟੈਕਚਰ ਨੂੰ ਡਿਜ਼ਾਈਨ ਅਤੇ ਤੈਨਾਤ ਕਰਦਾ ਹੈ।',
      location: 'ਵੈਨਕੂਵਰ, ਬੀਸੀ, ਕੈਨੇਡਾ',
      navigation: 'ਨੇਵੀਗੇਸ਼ਨ',
      coreServices: 'ਮੁੱਖ ਸੇਵਾਵਾਂ',
      connectivity: 'ਕਨੈਕਟੀਵਿਟੀ',
      followUs: 'ਸਾਡੇ ਤਕਨੀਕੀ ਵਿਸ਼ਲੇਸ਼ਣ ਪੜ੍ਹਨ ਲਈ ਸਾਡੇ ਚੈਨਲਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ:',
      rights: 'ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।'
    },
    home: {
      badge: 'ਵਿਸ਼ੇਸ਼ ਵਪਾਰ ਪ੍ਰਣਾਲੀਆਂ',
      heroTitle: 'ਪਲੰਬਿੰਗ ਕਾਲ ਕਦੇ ਨਾ ਛੱਡੋ। ',
      heroTitleGradient: 'ਆਟੋਮੈਟਿਕ',
      heroTitleEnd: ' ਬੁਕਿੰਗਾਂ।',
      heroSubtitle: 'ਉੱਚ-ਪਰਿਵਰਤਨ ਵੈਬਸਾਈਟ ਰੀਡਿਜ਼ਾਈਨ, 24/7 ਏਆਈ ਵਰਚੁਅਲ ਡਿਸਪੈਚਰ, ਅਤੇ ਹੈਂਡਸ-ਫ੍ਰੀ ਵੌਇਸ ਸੀਆਰਐਮ ਸਿਸਟਮ। ਪੇਸ਼ੇਵਰ ਪਲੰਬਿੰਗ ਠੇਕੇਦਾਰਾਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਤੌਰ \'ਤੇ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ।',
      ironyBadge: 'ਪਲੰਬਿੰਗ ਆਟੋਮੇਸ਼ਨ',
      ctaConsultation: 'ਮੁਫ਼ਤ ਸਲਾਹ-ਮਸ਼ਵਰਾ ਲਓ',
      ctaServices: 'ਸੇਵਾਵਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ',
      metrics: {
        captured: 'ਮਿਸਡ ਕਾਲਾਂ ਕੈਪਚਰਡ',
        seo: 'ਲੋਕਲ SEO ਟ੍ਰੈਫਿਕ',
        timeSaved: 'ਰੋਜ਼ਾਨਾ ਪ੍ਰਸ਼ਾਸਕੀ ਸਮਾਂ ਬਚਾਇਆ',
        conversion: 'ਵੈੱਬ ਪਰਿਵਰਤਨ ਦਰ'
      },
      capabilities: {
        badge: 'ਸਾਡੀਆਂ ਸਮਰੱਥਾਵਾਂ',
        title: 'ਤੁਹਾਡੇ ਪਲੰਬਿੰਗ ਕਾਰੋਬਾਰ ਨੂੰ ਸਕੇਲ ਕਰਨ ਲਈ ਮੁਸ਼ਕਲ ਰਹਿਤ ਸਿਸਟਮ',
        desc: 'ਹਰੇਕ ਲੀਡ ਨੂੰ ਹਾਸਲ ਕਰਨ, ਖੋਜ ਰੈਂਕਿੰਗ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ, ਅਤੇ ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਨੂੰ ਖਤਮ ਕਰਨ ਲਈ ਤਿਆਰ ਕੀਤੇ ਗਏ ਹੱਲ।',
        cards: {
          redesign: {
            title: 'ਵੈੱਬਸਾਈਟ ਰੀਡਿਜ਼ਾਈਨ',
            desc: 'ਲੋਕਲ ਗੂਗਲ ਖੋਜ, ਤੇਜ਼ ਮੋਬਾਈਲ ਲੋਡਿੰਗ, ਅਤੇ ਸਿੱਧੀਆਂ ਫੋਨ ਕਾਲਾਂ ਲਈ ਅਨੁਕੂਲਿਤ ਆਧੁਨਿਕ ਸਾਈਟਾਂ।',
            link: 'ਰੀਡਿਜ਼ਾਈਨ ਦੀ ਪੜਚੋਲ ਕਰੋ →'
          },
          assistant: {
            title: 'ਏਆਈ ਡਿਸਪੈਚ ਸਹਾਇਕ',
            desc: '24/7 ਏਆਈ ਏਜੰਟ ਜੋ ਸੇਵਾ ਸੰਦੇਸ਼ਾਂ ਅਤੇ ਕਾਲਾਂ ਦਾ ਜਵਾਬ ਦਿੰਦੇ ਹਨ, ਸਿੱਧੇ ਤੁਹਾਡੇ ਕੈਲੰਡਰ ਵਿੱਚ ਮੁਲਾਕਾਤਾਂ ਬੁੱਕ ਕਰਦੇ ਹਨ।',
            link: 'ਏਆਈ ਸਹਾਇਕ ਦੀ ਪੜਚੋਲ ਕਰੋ →'
          },
          voiceCrm: {
            title: 'ਵੌਇਸ CRM ਸਿਸਟਮ',
            desc: 'ਹੈਂਡਸ-ਫ੍ਰੀ ਪ੍ਰਸ਼ਾਸਨ। ਕੰਮ ਦੇ ਨੋਟਸ ਲਿਖੋ, ਗਾਹਕਾਂ ਦੀਆਂ ਫਾਈਲਾਂ ਨੂੰ ਅਪਡੇਟ ਕਰੋ, ਅਤੇ ਸਾਈਟ \'ਤੇ ਹੁੰਦੇ ਹੋਏ ਇਨਵੌਇਸ ਭੇਜੋ।',
            link: 'ਵੌਇਸ CRM ਦੀ ਪੜਚੋਲ ਕਰੋ →'
          },
          sync: {
            title: 'ਕੈਲੰਡਰ ਅਤੇ ਟੂਲ ਸਿੰਕ',
            desc: 'ServiceTitan, Housecall Pro, ਗੂਗਲ ਕੈਲੰਡਰ, ਅਤੇ ਇਨਵੌਇਸਿੰਗ ਪਲੇਟਫਾਰਮਾਂ ਨਾਲ ਸਿੱਧਾ ਏਕੀਕਰਣ।',
            link: 'ਸਿੰਕ ਦੀ ਪੜਚੋਲ ਕਰੋ →'
          }
        }
      },
      achievements: {
        badge: 'ਸਾਡੀਆਂ ਪ੍ਰਾਪਤੀਆਂ',
        title: 'ਸਫਲਤਾਪੂਰਵਕ ਤੈਨਾਤ ਸਿਸਟਮ',
        desc: 'ਪਲੰਬਿੰਗ ਠੇਕੇਦਾਰਾਂ ਲਈ ਅਸਲ-ਸੰਸਾਰ ਦੇ ਕਾਰੋਬਾਰੀ ਨਤੀਜਿਆਂ ਨੂੰ ਚਲਾਉਣ ਲਈ ਤਿਆਰ ਕੀਤੇ ਗਏ ਉੱਨਤ ਇੰਜੀਨੀਅਰਿੰਗ ਸਿਸਟਮ।',
        ctaCases: 'ਕੇਸ ਸਟੱਡੀਜ਼ ਦੇਖੋ',
        cards: [
          {
            tag: 'ਲੀਡ ਜਨਰੇਸ਼ਨ',
            title: 'ਵੈਨਕੂਵਰ ਪਲੰਬਿੰਗ ਐਂਡ ਡਰੇਨ ਕੰਪਨੀ',
            desc: 'ਇੱਕ ਸੰਪੂਰਨ ਵੈਬਸਾਈਟ ਰੀਡਿਜ਼ਾਈਨ ਅਤੇ ਇੱਕ ਕਸਟਮ SMS AI ਬੁਕਿੰਗ ਸਹਾਇਕ ਤਾਇਨਾਤ ਕੀਤਾ ਗਿਆ ਹੈ। ਇਹ ਸਿਸਟਮ 24/7 ਕੰਮ ਕਰਦਾ ਹੈ, ਉਦੋਂ ਵੀ ਨੌਕਰੀਆਂ ਬੁੱਕ ਕਰਦਾ ਹੈ ਜਦੋਂ ਡਿਸਪੈਚਰ ਆਫ ਹੁੰਦੇ ਹਨ।',
            stat1Num: '+45%',
            stat1Lbl: 'ਬੁੱਕ ਕੀਤੀਆਂ ਸੇਵਾ ਕਾਲਾਂ',
            stat2Num: '98.2%',
            stat2Lbl: 'ਹੁੰਗਾਰਾ ਦਰ'
          },
          {
            tag: 'ਵੌਇਸ ਓਪਰੇਸ਼ਨ',
            title: 'ਫਰੇਜ਼ਰ ਵੈਲੀ ਡਰੇਨ ਟੈਕਨੀਸ਼ੀਅਨ',
            desc: 'ਫੀਲਡ ਟੀਮ ਦੇ CRM ਵਿੱਚ ਇੱਕ ਵੌਇਸ-ਟੂ-ਟੈਕਸਟ ਪਾਈਪਲਾਈਨ ਨੂੰ ਏਕੀਕ੍ਰਿਤ ਕੀਤਾ ਗਿਆ ਹੈ。ਪਲੰਬਰ ਕੰਮ ਦੇ ਨੋਟਸ ਅਤੇ ਸਮੱਗਰੀਆਂ ਨੂੰ ਸਾਈਟ \'ਤੇ ਬੋਲ ਕੇ ਦਰਜ ਕਰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਤੁਰੰਤ ਬਿਲਿੰਗ ਸ਼ੀਟਾਂ ਬਣਦੀਆਂ ਹਨ।',
            stat1Num: '1.5 ਘੰਟੇ',
            stat1Lbl: 'ਰੋਜ਼ਾਨਾ ਪ੍ਰਸ਼ਾਸਕੀ ਸਮਾਂ ਬਚਾਇਆ/ਟੈਕਨੀਸ਼ੀਅਨ',
            stat2Num: '-80%',
            stat2Lbl: 'ਬਿਲਿੰਗ ਦੇਰੀ'
          },
          {
            tag: '24/7 ਡਿਸਪੈਚਿੰਗ',
            title: 'ਐਪੈਕਸ ਐਮਰਜੈਂਸੀ ਪਲੰਬਿੰਗ',
            desc: 'ਇੱਕ ਕੁਦਰਤੀ-ਭਾਸ਼ਾ ਵੌਇਸ ਸਹਾਇਕ ਲਾਗੂ ਕੀਤਾ ਗਿਆ ਹੈ ਜੋ ਕੰਮ ਦੇ ਸਮੇਂ ਤੋਂ ਬਾਅਨ ਐਮਰਜੈਂਸੀ ਕਾਲਾਂ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ, ਗਾਹਕ ਦੀ ਲੋੜ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ, ਅਤੇ ਸਿੱਧੇ ਡਿਊਟੀ \'ਤੇ ਮੌਜੂਦ ਪਲੰਬਰ ਦੇ ਕੈਲੰਡਰ ਵਿੱਚ ਬੁਕਿੰਗਾਂ ਦਰਜ ਕਰਦਾ ਹੈ।',
            stat1Num: '$18,000',
            stat1Lbl: 'ਪਹਿਲੇ ਮਹੀਨੇ ਵਿੱਚ ਬਚਾਇਆ ਗਿਆ ਮਾਲੀਆ',
            stat2Num: '99.9%',
            stat2Lbl: 'ਕਾਲ ਜਵਾਬ ਦਰ'
          }
        ]
      },
      process: {
        badge: 'ਪ੍ਰਵਾਹ',
        title: 'ਅਸੀਂ ਤੁਹਾਡੇ ਪ੍ਰੋਜੈਕਟ ਵਿੱਚੋਂ ਰੁਕਾਵਟਾਂ ਨੂੰ ਕਿਵੇਂ ਖਤਮ ਕਰਦੇ ਹਾਂ?',
        desc: 'ਮਜ਼ਬੂਤ ਕੋਡ ਅਤੇ ਬਿਨਾਂ ਕਿਸੇ ਫਾਲਤੂ ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਦੇ ਇੱਕ ਸਪੱਸ਼ਟ ਰਸਤਾ।',
        steps: [
          {
            num: '01',
            title: 'ਸਿਸਟਮ ਆਡਿਟ',
            desc: 'ਅਸੀਂ ਲੀਡ ਲੀਕ ਪੁਆਇੰਟਾਂ ਨੂੰ ਲੱਭਣ ਲਈ ਤੁਹਾਡੀ ਮੌਜੂਦਾ ਵੈਬਸਾਈਟ, ਲੋਕਲ ਐਸਈਓ ਸਥਿਤੀ, ਅਤੇ ਬੁਕਿੰਗ ਡਿਸਪੈਚ ਦੀ ਸਮੀਖਿਆ ਕਰਦੇ ਹਾਂ।'
          },
          {
            num: '02',
            title: 'ਰੀਡਿਜ਼ਾਈਨ ਅਤੇ ਏਆਈ ਸੈੱਟਅੱਪ',
            desc: 'ਅਸੀਂ ਇੱਕ ਤੇਜ਼ ਵੈਬਸਾਈਟ ਡਿਜ਼ਾਈਨ ਕਰਦੇ ਹਾਂ ਅਤੇ ਗਾਹਕਾਂ ਦੇ ਤੁਰੰਤ ਜਵਾਬ ਲਈ ਤੁਹਾਡਾ ਕਸਟਮ AI ਸਹਾਇਕ ਬਣਾਉਂਦੇ ਹਾਂ।'
          },
          {
            num: '03',
            title: 'ਵੌਇਸ CRM ਅਤੇ ਐਪ ਸਿੰਕ',
            desc: 'ਅਸੀਂ ਤੁਹਾਡੇ ਮੌਜੂਦਾ ਸੇਵਾ ਸੌਫਟਵੇਅਰ (ServiceTitan, ਗੂਗਲ ਕੈਲੰਡਰ, ਆਦਿ) ਨਾਲ ਹੈਂਡਸ-ਫ੍ਰੀ ਵੌਇਸ ਟ੍ਰਾਂਸਕ੍ਰਿਪਸ਼ਨ ਨੂੰ ਜੋੜਦੇ ਹਾਂ।'
          },
          {
            num: '04',
            title: 'ਲੋਕਲ ਲਾਂਚ ਅਤੇ ਸਕੇਲ',
            desc: 'ਅਸੀਂ ਸਿਸਟਮ ਲਾਂਚ ਕਰਦੇ ਹਾਂ, ਗੂਗਲ ਮੈਪਸ \'ਤੇ ਰੈਂਕਿੰਗ ਵਧਾਉਣ ਲਈ ਲੋਕਲ ਖੋਜ ਟੈਗਸ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਂਦੇ ਹਾਂ।'
          }
        ]
      },
      finalCta: {
        title: 'ਆਪਣੀਆਂ ਪਲੰਬਿੰਗ ਗੱਡੀਆਂ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਬੁੱਕ ਰੱਖਣ ਲਈ ਤਿਆਰ ਹੋ?',
        desc: 'ਆਪਣੇ ਕਾਰੋਬਾਰ ਲਈ ਇੱਕ ਆਧੁਨਿਕ ਉੱਚ-ਪਰਿਵਰਤਨ ਵੈਬਸਾਈਟ, ਇੱਕ 24/7 AI ਵਰਚੁਅਲ ਸ਼ਡਿਊਲਰ, ਅਤੇ ਇੱਕ ਹੈਂਡਸ-ਫ੍ਰੀ ਵੌਇਸ CRM ਪ੍ਰਾਪਤ ਕਰੋ।',
        cta1: 'ਮੁਫ਼ਤ ਸਲਾਹ-ਮਸ਼ਵਰਾ ਲਓ',
        cta2: 'ਪਲੰਬਰ ਕੇਸ ਸਟੱਡੀਜ਼ ਦੇਖੋ'
      }
    },
    services: {
      hero: {
        badge: 'ਸਾਡੀ ਵਿਸ਼ੇਸ਼ਤਾ',
        title: 'ਪਲੰਬਿੰਗ ਕਾਰੋਬਾਰਾਂ ਲਈ ਉੱਚ-ਪ੍ਰਦਰਸ਼ਨ ',
        titleGradient: 'ਸਿਸਟਮ',
        titleEnd: '',
        desc: 'ਅਸੀਂ ਤੇਜ਼ ਵੈਬਸਾਈਟਾਂ, ਲੋਕਲ ਐਸਈਓ ਦਿੱਖ, ਸਵੈਚਾਲਿਤ ਵਰਚੁਅਲ ਡਿਸਪੈਚਿੰਗ, ਅਤੇ ਕਸਟਮ CRM ਏਕੀਕਰਣ ਤਿਆਰ ਕਰਦੇ ਹਾਂ ਤਾਂ ਜੋ ਤੁਸੀਂ ਬਿਨਾਂ ਕਿਸੇ ਦਫਤਰੀ ਤਣਾਅ ਦੇ ਵਧੇਰੇ ਗੱਡੀਆਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰ ਸਕੋ।'
      },
      cards: [
        {
          id: 'redesign',
          title: 'ਵੈੱਬਸਾਈਟ ਰੀਡਿਜ਼ਾਈਨ',
          desc: 'ਰਫ਼ਤਾਰ ਅਤੇ ਪਰਿਵਰਤਨ ਲਈ ਤਿਆਰ ਕੀਤੀਆਂ ਕਸਟਮ ਮੋਬਾਈਲ-ਫਰਸਟ ਵੈੱਬਸਾਈਟਾਂ। ਸਥਾਨਕ ਖੋਜਕਰਤਾਵਾਂ ਨੂੰ ਬੁੱਕ ਕੀਤੇ ਗਏ ਕੰਮਾਂ ਵਿੱਚ ਬਦਲਣ ਲਈ ਅਸੀਂ ਕਲਿੱਕ-ਟੂ-ਕਾਲ ਬਟਨ, ਭਰੋਸੇ ਦੇ ਬੈਜ, ਅਤੇ ਇੰਟਰਐਕਟਿਵ ਸ਼ਡਿਊਲਰ ਜੋੜਦੇ ਹਾਂ।',
          bullets: ['ਮੋਬਾਈਲ-ਫਸਟ ਲੇਆਉਟ', 'ਸਥਾਨਕ SEO ਅਨੁਕੂਲਤਾ', 'ਉੱਚ ਲੀਡ ਪਰਿਵਰਤਨ'],
          cta: 'ਕੋਟੇਸ਼ਨ ਮੰਗੋ',
          slug: 'redesign'
        },
        {
          id: 'assistant',
          title: 'ਏਆਈ ਡਿਸਪੈਚ ਸਹਾਇਕ',
          desc: 'ਇੱਕ 24/7 ਕੁਦਰਤੀ-ਭਾਸ਼ਾ ਵਰਚੁਅਲ ਡਿਸਪੈਚਰ ਜੋ ਟੈਕਸਟ ਅਤੇ ਕਾਲਾਂ ਦਾ ਜਵਾਬ ਦਿੰਦਾ ਹੈ। ਸੇਵਾ ਬੇਨਤੀਆਂ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ, ਐਮਰਜੈਂਸੀ ਸਥਿਤੀਆਂ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ, ਅਤੇ ਸਿੱਧੇ ਤੁਹਾਡੇ ਡਿਸਪੈਚ ਬੋਰਡ ਵਿੱਚ ਨੌਕਰੀਆਂ ਬੁੱਕ ਕਰਦਾ ਹੈ।',
          bullets: ['24/7 ਲੀਡ ਜਵਾਬ', 'ਐਮਰਜੈਂਸੀ ਜਾਂਚ', 'ਆਟੋਮੈਟਿਕ ਸ਼ਡਿਊਲਿੰਗ'],
          cta: 'ਕੋਟੇਸ਼ਨ ਮੰਗੋ',
          slug: 'assistant'
        },
        {
          id: 'voice-crm',
          title: 'ਵੌਇਸ CRM ਸਿਸਟਮ',
          desc: 'ਕੰਮ ਵਾਲੀ ਥਾਂ \'ਤੇ ਸਿਰਫ਼ ਆਪਣੀ ਆਵਾਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਗਾਹਕ ਦੇ ਨੋਟਸ, ਵਰਤੀ ਗਈ ਸਮੱਗਰੀ ਦਰਜ ਕਰੋ, ਨੌਕਰੀ ਦੀ ਸਥਿਤੀ ਅੱਪਡੇਟ ਕਰੋ, ਅਤੇ ਇਨਵੌਇਸਿੰਗ ਸ਼ੁਰੂ ਕਰੋ। ਕੰਮ ਕਰਦੇ ਸਮੇਂ ਮੋਬਾਈਲ ਸਕ੍ਰੀਨਾਂ \'ਤੇ ਟਾਈਪ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ ਪੈਂਦੀ।',
          bullets: ['ਹੈਂਡਸ-ਫ੍ਰੀ ਡਿਕਟੇਸ਼ਨ', 'ਸ਼ੋਰ ਫਿਲਟਰਿੰਗ', 'ਵਪਾਰਕ ਸ਼ਬਦਾਂ ਦੀ ਪਛਾਣ'],
          cta: 'ਕੋਟੇਸ਼ਨ ਮੰਗੋ',
          slug: 'voice-crm'
        },
        {
          id: 'integrations',
          title: 'ਕੈਲੰਡਰ ਅਤੇ ਟੂਲ ਸਿੰਕ',
          desc: 'ਤੁਹਾਡੀ ਵੈੱਬਸਾਈਟ, ਏਆਈ ਸਹਾਇਕ, ਅਤੇ ਵਪਾਰਕ ਸੌਫਟਵੇਅਰ ਵਿਚਕਾਰ ਸਵੈਚਾਲਿਤ ਰੀਅਲ-ਟਾਈਮ ਸਿੰਕ੍ਰੋਨਾਈਜ਼ੇਸ਼ਨ। ਅਸੀਂ ਸਿੱਧੇ ServiceTitan, Housecall Pro, ਗੂਗਲ ਕੈਲੰਡਰ, ਅਤੇ Quickbooks ਨਾਲ ਜੁੜਦੇ ਹਾਂ।',
          bullets: ['ServiceTitan ਏਕੀਕਰਣ', 'Housecall Pro API', 'Quickbooks ਇਨਵੌਇਸਿੰਗ'],
          cta: 'ਕੋਟੇਸ਼ਨ ਮੰਗੋ',
          slug: 'integrations'
        },
        {
          id: 'seo',
          title: 'ਸਥਾਨਕ SEO ਅਤੇ ਦਿੱਖ',
          desc: 'ਤੁਹਾਡੇ ਪਲੰਬਿੰਗ ਕਾਰੋਬਾਰ ਨੂੰ ਗੂਗਲ ਮੈਪਸ ਅਤੇ ਸਥਾਨਕ ਖੋਜ ਨਤੀਜਿਆਂ ਦੇ ਸਿਖਰ \'ਤੇ ਲਿਆਉਣ ਲਈ ਸਥਾਨਕ ਕੀਵਰਡਸ ਅਤੇ ਮੈਟਾਡੇਟਾ ਦਾ ਅਨੁਕੂਲਨ, ਜੋ ਆਰਗੈਨਿਕ ਫੋਨ ਕਾਲਾਂ ਲਿਆਉਂਦਾ ਹੈ।',
          bullets: ['ਗੂਗਲ ਮੈਪਸ SEO', 'ਸਥਾਨਕ ਕੀਵਰਡ ਟਿਊਨਿੰਗ', 'ਸਟ੍ਰਕਚਰਡ ਸਕੀਮਾ ਮਾਰਕਅੱਪ'],
          cta: 'ਕੋਟੇਸ਼ਨ ਮੰਗੋ',
          slug: 'seo'
        },
        {
          id: 'resiliency',
          title: 'ਆਊਟੇਜ ਅਤੇ ਲੀਡ ਰੈਜ਼ੀਲੈਂਸ',
          desc: 'ਬਿਨਾਂ ਕਿਸੇ ਸਰਵਰ ਡਾਊਨਟਾਈਮ ਦੇ ਮਜ਼ਬੂਤ ਹੋਸਟਿੰਗ ਬੁਨਿਆਦੀ ਢਾਂਚਾ। ਔਫਲਾਈਨ ਫਾਲਬੈਕ ਸਿਸਟਮ ਨੈੱਟਵਰਕ ਆਊਟੇਜ ਦੇ ਦੌਰਾਨ ਵੀ ਗਾਹਕਾਂ ਦੀਆਂ ਪੁੱਛਗਿੱਛਾਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਕੋਈ ਲੀਡ ਗੁੰਮ ਨਹੀਂ ਹੁੰਦੀ।',
          bullets: ['99.99% ਗਾਰੰਟੀਸ਼ੁਦਾ ਅੱਪਟਾਈਮ', 'ਔਫਲਾਈਨ ਇਨਟੇਕ ਫਾਲਬੈਕਸ', 'ਜ਼ੀਰੋ ਲੀਡ ਲੀਕੇਜ'],
          cta: 'ਕੋਟੇਸ਼ਨ ਮੰਗੋ',
          slug: 'resiliency'
        }
      ],
      banner: {
        title: 'ਵਪਾਰਕ ਰਫ਼ਤਾਰ ਲਈ ਤਿਆਰ ਕੀਤੀ ਗਈ ਇੰਜੀਨੀਅਰਿੰਗ',
        desc: 'ਅਸੀਂ ਘੱਟ-ਮੁੱਲ ਵਾਲੀਆਂ ਮੀਟਿੰਗਾਂ ਅਤੇ ਵਧੇ ਹੋਏ ਤਕਨੀਕੀ ਬਜਟਾਂ ਨੂੰ ਖਤਮ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਸਾਫ਼-ਸੁਥਰੇ ਪ੍ਰਣਾਲੀਆਂ \'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਦੇ ਹਾਂ ਜੋ ਤੁਹਾਡੀਆਂ ਪਲੰਬਿੰਗ ਗੱਡੀਆਂ ਨੂੰ ਬੁੱਕ ਰੱਖਦੇ ਹਨ।',
        cta: 'ਬਿਨਾਂ ਕਿਸੇ ਦਫਤਰੀ ਦੇਰੀ ਦੇ ਪ੍ਰੋਜੈਕਟ ਸ਼ੁਰੂ ਕਰੋ'
      }
    },
    solutions: {
      hero: {
        badge: 'ਵਿਸ਼ੇਸ਼ ਵਪਾਰ ਪ੍ਰਣਾਲੀਆਂ',
        title: 'ਏਆਈ ਹੱਲ ਅਤੇ ਡੇਟਾ ਆਰਕੀਟੈਕਚਰ',
        desc: 'ਅਸੀਂ ਕਸਟਮ ਵਪਾਰ ਆਟੋਮੇਸ਼ਨ ਤਿਆਰ ਕਰਦੇ ਹਾਂ। ਸਥਾਨਕ AI ਸ਼ਡਿਊਲਿੰਗ ਏਜੰਟਾਂ ਤੋਂ ਲੈ ਕੇ ਫੀਲਡ ਵਿੱਚ ਪਲੰਬਰਾਂ ਲਈ ਤਿਆਰ ਕੀਤੇ ਗਏ ਹੈਂਡਸ-ਫ੍ਰੀ ਵੌਇਸ CRM ਡਿਕਟੇਸ਼ਨ ਇੰਟਰਫੇਸ ਤੱਕ।',
        cta: 'ਸਮਰੱਥਾਵਾਂ ਦੇਖੋ'
      },
      capabilities: {
        badge: 'ਸਾਡੀਆਂ ਸਮਰੱਥਾਵਾਂ',
        title: 'ਬਿਨਾਂ ਕਿਸੇ ਮਾਰਕੀਟਿੰਗ ਵਾਅਦਿਆਂ ਦੇ ਤਕਨੀਕੀ ਇੰਜੀਨੀਅਰਿੰਗ',
        desc: 'ਅਸੀਂ ਉੱਚ-ਮੰਗ ਵਾਲੇ ਦ੍ਰਿਸ਼ਾਂ ਦੇ ਤਹਿਤ ਪ੍ਰਦਰਸ਼ਨ ਕਰਨ ਲਈ ਤਿਆਰ ਕੀਤੇ ਗਏ ਡੀਕਪਲਡ, ਕੁਸ਼ਲ ਭਾਗਾਂ ਨੂੰ ਡਿਜ਼ਾਈਨ ਕਰਦੇ ਹਾਂ।',
        grid1Title: 'ਪਾਈਪਲਾਈਨ ਆਰਕੀਟੈਕਚਰ (1-4)',
        grid2Title: 'ਡੇਟਾ ਇਕਸਾਰਤਾ ਅਤੇ ਜਾਂਚ (5-6)',
        cards: [
          {
            id: 'web',
            title: 'ਤੇਜ਼ ਰਫ਼ਤਾਰ ਵੈੱਬਸਾਈਟ ਰੀਡਿਜ਼ਾਈਨ',
            desc: 'ਪੁਰਾਣੀਆਂ ਠੇਕੇਦਾਰਾਂ ਦੀਆਂ ਵੈਬਸਾਈਟਾਂ ਨੂੰ 1 ਸਕਿੰਟ ਤੋਂ ਘੱਟ ਸਮੇਂ ਵਿੱਚ ਲੋਡ ਹੋਣ, ਲੋਕਲ ਗੂਗਲ ਖੋਜ ਵਿੱਚ ਰੈਂਕ ਕਰਨ, ਅਤੇ ਮੋਬਾਈਲ ਟੈਪ-ਟੂ-ਕਾਲ ਲੀਡਾਂ ਲਈ ਅਨੁਕੂਲਿਤ ਕਰਨ ਲਈ ਦੁਬਾਰਾ ਬਣਾਉਣਾ।'
          },
          {
            id: 'reception',
            title: '24/7 ਵੌਇਸ AI ਰਿਸੈਪਸ਼ਨ',
            desc: 'ਕੁਦਰਤੀ-ਭਾਸ਼ਾ ਵੌਇਸ ਡਿਸਪੈਚ ਏਜੰਟ ਜੋ ਮਿਸਡ ਕਾਲਾਂ ਦਾ ਜਵਾਬ ਦਿੰਦੇ ਹਨ, ਪਲੰਬਿੰਗ ਐਮਰਜੈਂਸੀ ਨੂੰ ਸਹੀ ਥਾਂ ਭੇਜਦੇ ਹਨ, ਅਤੇ ਤੁਹਾਡੇ ਕੈਲੰਡਰ ਵਿੱਚ ਸੇਵਾ ਕਾਲਾਂ ਨੂੰ ਤਹਿ ਕਰਦੇ ਹਨ।'
          },
          {
            id: 'recognition',
            title: 'ਪਲੰਬਿੰਗ ਸ਼ਬਦਾਵਲੀ ਦੀ ਪਛਾਣ',
            desc: 'ਸ਼ੋਰ-ਸ਼ਰਾਬੇ ਵਾਲੇ ਵਾਤਾਵਰਣ ਵਿੱਚ ਸਥਾਨਕ ਵਪਾਰਕ ਸ਼ਬਦਾਵਲੀ ਜਿਵੇਂ ਕਿ ਸੰਪ ਪੰਪ, ਬੈਕਫਲੋ ਵਾਲਵ, ਅਤੇ ਪੀ-ਟਰੈਪਸ ਨੂੰ ਪਛਾਣਨ ਲਈ ਕਸਟਮ-ਸਿੱਖਿਅਤ ਸਪੀਚ-ਟੂ-ਟੈਕਸਟ ਮਾਡਲ।'
          },
          {
            id: 'crm',
            title: 'ਹੈਂਡਸ-ਫ੍ਰੀ CRM ਅੱਪਡੇਟ',
            desc: 'ਪਲੰਬਰ ਸਕ੍ਰੀਨ \'ਤੇ ਹੱਥੀਂ ਟਾਈਪ ਕੀਤੇ ਬਿਨਾਂ ਨੌਕਰੀ ਦੀ ਪ੍ਰਗਤੀ, ਵਰਤੀ ਗਈ ਸਮੱਗਰੀ, ਅਤੇ ਬਿਲਿੰਗ ਵੇਰਵਿਆਂ ਨੂੰ ਸਿੱਧੇ ਵੌਇਸ CRM ਵਿੱਚ ਬੋਲ ਕੇ ਦਰਜ ਕਰਦੇ ਹਨ।'
          },
          {
            id: 'calendar',
            title: 'ਕੈਲੰਡਰ ਟਕਰਾਅ ਦੀ ਜਾਂਚ',
            desc: 'ਟੈਕਨੀਸ਼ੀਅਨ ਦੀ ਉਪਲਬਧਤਾ ਦੀ ਜਾਂਚ ਕਰਨ ਅਤੇ ਰੂਟਾਂ ਨੂੰ ਆਟੋਮੈਟਿਕਲੀ ਤਹਿ ਕਰਨ ਲਈ ServiceTitan, Housecall Pro, ਅਤੇ ਗੂਗਲ ਕੈਲੰਡਰ ਨਾਲ ਰੀਅਲ-ਟਾਈਮ ਏਕੀਕਰਣ।'
          },
          {
            id: 'vault',
            title: 'ਔਫਲਾਈਨ ਲੀਡ ਵਾਲਟ',
            desc: 'ਨੈੱਟਵਰਕ ਆਊਟੇਜ ਦੇ ਦੌਰਾਨ ਗਾਹਕ ਦੇ ਵੇਰਵਿਆਂ ਨੂੰ ਲੌਗ ਕਰਨ ਵਾਲੇ ਇਨ-ਮੈਮੋਰੀ ਸਟੋਰੇਜ ਵਿਧੀ, ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹੋਏ ਕਿ ਕੋਈ ਵੀ ਗਾਹਕ ਸੰਪਰਕ ਜਾਣਕਾਰੀ ਗੁੰਮ ਨਾ ਹੋਵੇ।'
          }
        ]
      },
      deepDive: {
        badge: 'ਵੌਇਸ ਅਤੇ ਸ਼ਡਿਊਲਰ ਆਰਕੀਟੈਕਚਰ',
        title: 'ਅਸੀਂ ਇੱਕ ਲਚਕੀਲੇ ਪਲੰਬਰ ਸਿਸਟਮ ਨੂੰ ਕਿਵੇਂ ਤਿਆਰ ਕਰਦੇ ਹਾਂ',
        desc: 'ਅਸੀਂ ਸਧਾਰਨ ਸਕ੍ਰਿਪਟਾਂ ਨਹੀਂ ਲਿਖਦੇ। ਸਾਡੀਆਂ ਏਕੀਕਰਣਾਂ ਮਜ਼ਬੂਤ **Clean Architecture** ਸਿਧਾਂਤਾਂ ਅਤੇ ਸਥਾਪਿਤ ਡਿਜ਼ਾਈਨ ਪੈਟਰਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੀਆਂ ਹਨ:',
        bullets: [
          {
            bold: 'ਵੌਇਸ-ਟੂ-ਟੈਕਸਟ ਪਾਈਪਲਾਈਨ:',
            normal: 'ਡੀਕਪਲਡ ਸਪੀਚ-ਟੂ-ਟੈਕਸਟ ਕੰਪੋਨੈਂਟਸ ਜੋ ਆਲੇ ਦੁਆਲੇ ਦੇ ਸ਼ੋਰ (ਬੇਸਮੈਂਟ, ਚਲਦੇ ਪਾਈਪ) ਨੂੰ ਫਿਲਟਰ ਕਰਦੇ ਹਨ ਅਤੇ ਵੌਇਸ ਨੋਟਸ ਨੂੰ ਤੁਰੰਤ ਟ੍ਰਾਂਸਕ੍ਰਾਈਬ ਕਰਦੇ ਹਨ।'
          },
          {
            bold: 'ਸਿੰਕ੍ਰੋਨਾਈਜ਼ਡ ਕੈਲੰਡਰ:',
            normal: 'API ਲਿੰਕ ਜੋ ਟੈਕਨੀਸ਼ੀਅਨ ਦੇ ਸਲੋਟਾਂ ਨੂੰ ਡਾਇਨਾਮਿਕ ਤੌਰ \'ਤੇ ਪੋਲ ਕਰਦੇ ਹਨ, ਡਬਲ-ਬੁਕਿੰਗ ਅਤੇ ਸ਼ਡਿਊਲ ਓਵਰਲੈਪ ਨੂੰ ਰੋਕਦੇ ਹਨ।'
          },
          {
            bold: 'ਫੇਲ-ਸੇਫ ਲੀਡ ਰਾਊਟਿੰਗ:',
            normal: 'ਲਚਕੀਲੀਆਂ ਕਤਾਰਾਂ ਜੋ ਡੇਟਾਬੇਸ ਅੱਪਡੇਟ ਦੀ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰਦੀਆਂ ਹਨ ਜੇਕਰ ਤੁਹਾਡਾ CRM ਜਾਂ ServiceTitan ਕਨੈਕਸ਼ਨ ਗੁਆ ​​ਦਿੰਦਾ ਹੈ।'
          },
          {
            bold: 'ਸੁਰੱਖਿਆ ਅਤੇ ਗੁਪਤਤਾ:',
            normal: 'ਏਨਕ੍ਰਿਪਟਡ ਟ੍ਰਾਂਸਕ੍ਰਾਈਬਿੰਗ ਜੋ ਮਿਆਰੀ ਗੁਪਤਤਾ ਨਿਰਦੇਸ਼ਾਂ ਦੇ ਅਨੁਕੂਲ ਹੈ, ਸਥਾਨਕ NDAs ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਦੀ ਹੈ।'
          }
        ]
      },
      diagram: {
        title: 'KASI ਲਚਕੀਲਾ ਪਲੰਬਰ ਪਾਈਪਲਾਈਨ',
        inVal: 'ਗਾਹਕ ਕਾਲ / SMS / ਆਨਸਾਈਟ ਪਲੰਬਰ ਡਿਕਟੇਸ਼ਨ',
        step1: 'ਧੁਨੀ ਫਿਲਟਰਿੰਗ ਅਤੇ ਟ੍ਰਾਂਸਕ੍ਰਿਪਸ਼ਨ',
        step2: 'ਪਲੰਬਿੰਗ ਸ਼ਬਦਾਵਲੀ ਦੀ ਪਛਾਣ (ਸੰਪ ਪੰਪ, ਵਾਲਵ)',
        step3: 'ਉਪਲਬਧਤਾ ਟਕਰਾਅ ਦਾ ਹੱਲ ਅਤੇ ਆਟੋ-ਬੁਕਿੰਗ',
        outVal: 'ਸਿੰਕ ਅੱਪਡੇਟ (ServiceTitan / Housecall Pro / CRM)'
      },
      finalCta: {
        title: 'ਦਫ਼ਤਰੀ ਕੰਮ ਦੇ ਬੋਝ ਨੂੰ ਖਤਮ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?',
        desc: 'ਅਸੀਂ ਕਸਟਮ ਲਚਕੀਲੇ ਸਿਸਟਮ ਡਿਜ਼ਾਈਨ ਕਰਦੇ ਹਾਂ ਜੋ ਕਾਲਾਂ ਹਾਸਲ ਕਰਦੇ ਹਨ, ਟੈਕਨੀਸ਼ੀਅਨ ਤਹਿ ਕਰਦੇ ਹਨ, ਅਤੇ ਨੌਕਰੀ ਦੇ ਨੋਟਸ ਆਟੋਮੈਟਿਕ ਲੌਗ ਕਰਦੇ ਹਨ।',
        btn: 'ਮੇਰਾ ਬੁੱਧੀਮਾਨ ਸਿਸਟਮ ਤਿਆਰ ਕਰੋ'
      }
    },
    cases: {
      hero: {
        badge: 'ਤਕਨੀਕੀ ਪ੍ਰਮਾਣਿਕਤਾ',
        title: 'ਕੋਡ ਜੋ ਦਿੰਦਾ ਹੈ ',
        titleGradient: 'ਮਾਪਣਯੋਗ',
        titleEnd: ' ਨਤੀਜੇ',
        desc: 'ਖੋਜੋ ਕਿ ਅਸੀਂ ਪਲੰਬਿੰਗ ਠੇਕੇਦਾਰਾਂ ਦੀ ਪ੍ਰਸ਼ਾਸਕੀ ਖਰਚਿਆਂ ਨੂੰ ਖਤਮ ਕਰਨ, ਐਮਰਜੈਂਸੀ ਕਾਲਾਂ ਨੂੰ ਹਾਸਲ ਕਰਨ, ਅਤੇ ਸਥਾਨਕ ਖੋਜ ਵਿੱਚ ਦਬਦਬਾ ਬਣਾਉਣ ਵਿੱਚ ਕਿਵੇਂ ਮਦਦ ਕਰਦੇ ਹਾਂ।'
      },
      filters: {
        all: 'ਸਾਰੇ ਕੇਸ ਸਟੱਡੀਜ਼',
        web: 'ਵੈੱਬ ਰੀਡਿਜ਼ਾਈਨ',
        voice: 'ਏਆਈ ਡਿਸਪੈਚ',
        crm: 'ਵੌਇਸ CRM'
      },
      grid1Title: 'ਸਰਗਰਮ ਤੈਨਾਤੀਆਂ (1-3)',
      grid2Title: 'ਬੀਟਾ ਤੈਨਾਤੀਆਂ (4-6)',
      outcomeLabel: 'ਨਤੀਜਾ',
      cards: [
        {
          id: 'cases1',
          category: 'web',
          title: 'ਤੇਜ਼ ਰਫ਼ਤਾਰ ਵੈੱਬ ਅਤੇ SMS ਬੁਕਿੰਗ',
          desc: 'ਇੱਕ ਸਥਾਨਕ ਠੇਕੇਦਾਰ ਲਈ ਇੱਕ ਹੈਡਲੈੱਸ ਵੈੱਬਸਾਈਟ ਅਤੇ ਇੱਕ ਕਸਟਮ SMS AI ਸਹਾਇਕ ਵਿਕਸਤ ਕੀਤਾ, ਜੋ ਕੰਮ ਦੇ ਘੰਟਿਆਂ ਤੋਂ ਬਾਅਦ ਐਮਰਜੈਂਸੀ ਲੀਡਾਂ ਨੂੰ ਕੈਪਚਰ ਕਰਦਾ ਹੈ।',
          statNum: '+45%',
          statLbl: 'ਬੁੱਕ ਕੀਤੀਆਂ ਲੀਡਾਂ ਵਿੱਚ ਵਾਧਾ'
        },
        {
          id: 'cases2',
          category: 'crm',
          title: 'ਹੈਂਡਸ-ਫ੍ਰੀ ਵੌਇਸ CRM ਏਕੀਕਰਣ',
          desc: 'ਫੀਲਡ ਟੈਕਨੀਸ਼ੀਅਨਾਂ ਲਈ ਇੱਕ ਵੌਇਸ ਡਿਕਟੇਸ਼ਨ ਪਾਈਪਲਾਈਨ ਨੂੰ ਏਕੀਕ੍ਰਿਤ ਕੀਤਾ, ਜੋ ਜ਼ੁਬਾਨੀ ਨੌਕਰੀ ਦੇ ਲੌਗਸ ਦੇ ਅਧਾਰ \'ਤੇ ਦਫਤਰ ਵਿੱਚ ਤੁਰੰਤ ਇਨਵੌਇਸ ਤਿਆਰ ਕਰਦਾ ਹੈ।',
          statNum: '1.5 ਘੰਟੇ',
          statLbl: 'ਰੋਜ਼ਾਨਾ ਬਚਾਏ ਗਏ ਪ੍ਰਸ਼ਾਸਕੀ ਘੰਟੇ'
        },
        {
          id: 'cases3',
          category: 'voice',
          title: 'ਕੰਮ ਦੇ ਘੰਟਿਆਂ ਤੋਂ ਬਾਅਦ ਐਮਰਜੈਂਸੀ ਵੌਇਸ ਡਿਸਪੈਚ',
          desc: 'ਇੱਕ ਕੁਦਰਤੀ-ਭਾਸ਼ਾ ਵੌਇਸ ਸਹਾਇਕ ਤਾਇਨਾਤ ਕੀਤਾ ਜੋ ਕਾਲਰ ਦੀ ਲੋੜ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ ਅਤੇ ਡਿਸਪੈਚ ਨੂੰ ਸਿੱਧੇ ਪਲੰਬਰ ਦੇ ਕੈਲੰਡਰ ਵਿੱਚ ਤਹਿ ਕਰਦਾ ਹੈ।',
          statNum: '$18k+',
          statLbl: 'ਬਚਾਇਆ ਗਿਆ ਐਮਰਜੈਂਸੀ ਮਾਲੀਆ'
        },
        {
          id: 'cases4',
          category: 'web',
          title: 'ਸਥਾਨਕ ਐਸਈਓ ਦਬਦਬਾ ਮੁਹਿੰਮ',
          desc: 'ਸਥਾਨਕ ਐਮਰਜੈਂਸੀ ਖੋਜਾਂ ਵਿੱਚ ਰੈਂਕ ਦੇਣ, ਆਰਗੈਨਿਕ ਲੀਡਾਂ ਪੈਦਾ ਕਰਨ ਲਈ ਖੋਜ ਸਿਗਨਲਾਂ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਇਆ ਅਤੇ ਮੋਬਾਈਲ ਲੈਂਡਿੰਗ ਪੰਨਿਆਂ ਨੂੰ ਦੁਬਾਰਾ ਡਿਜ਼ਾਈਨ ਕੀਤਾ।',
          statNum: '+250%',
          statLbl: 'ਆਰਗੈਨਿਕ ਟ੍ਰੈਫਿਕ ਵਾਧਾ'
        },
        {
          id: 'cases5',
          category: 'voice',
          title: 'ਮਲਟੀ-ਲੋਕੇਸ਼ਨ ਕੈਲੰਡਰ ਸਿੰਕ ਲੇਅਰ',
          desc: 'ਬਿਨਾਂ ਕਿਸੇ ਸਮੇਂ ਦੇ ਟਕਰਾਅ ਦੇ ਕਸਟਮ ਵੈਬ ਫਾਰਮਾਂ ਨੂੰ ਮਲਟੀਪਲ ਸਥਾਨਕ ServiceTitan och Housecall Pro ਕੈਲੰਡਰਾਂ ਨਾਲ ਜੋੜਨ ਵਾਲਾ ਇੱਕ API ਮਿਡਲਵੇਅਰ ਬਣਾਇਆ।',
          statNum: '100%',
          statLbl: 'ਟਕਰਾਅ-ਮੁਕਤ ਸ਼ਡਿਊਲਿੰਗ'
        },
        {
          id: 'cases6',
          category: 'crm',
          title: 'ਔਫਲਾਈਨ ਲਚਕੀਲਾ ਮੋਬਾਈਲ ਕਲਾਇੰਟ',
          desc: 'ਇੱਕ PWA ਲੇਆਉਟ ਤਿਆਰ ਕੀਤਾ ਹੈ ਜੋ ਫੀਲਡ ਕਰੂ ਨੂੰ ਗਾਹਕ ਪ੍ਰੋਫਾਈਲਾਂ ਅਤੇ ਬਿਲਿੰਗ ਆਈਟਮਾਂ ਨੂੰ ਅੱਪਡੇਟ ਕਰਨ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ ਭਾਵੇਂ ਬੇਸਮੈਂਟਾਂ ਵਿੱਚ ਕੰਮ ਕਰ ਰਹੇ ਹੋਣ।',
          statNum: '0%',
          statLbl: 'ਔਫਲਾਈਨ ਲੀਡ ਨੁਕਸਾਨ'
        }
      ]
    },
    about: {
      hero: {
        badge: 'KASI ਬਾਰੇ',
        title: 'ਤਕਨੀਕੀ ਵਿਹਾਰਕਤਾ ਅਤੇ ਸੰਰਚਨਾਤਮਕ ',
        titleGradient: 'ਇਕਸਾਰਤਾ',
        desc: 'ਅਸੀਂ ਵੈਨਕੂਵਰ, ਬੀਸੀ ਵਿੱਚ ਇੱਕ ਸਧਾਰਨ ਉਦੇਸ਼ ਨਾਲ ਪੈਦਾ ਹੋਏ ਸੀ: ਸੌਫਟਵੇਅਰ ਵਿੱਚ ਬੇਲੋੜੀ ਗੁੰਝਲਦਾਰਤਾ ਕਾਰੋਬਾਰ ਦੀ ਮੁਨਾਫਾਖੋਰੀ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਦੁਸ਼ਮਣ ਹੈ।'
      },
      narrative: {
        badge: 'ਸਾਡਾ ਮਿਸ਼ਨ',
        title: 'Kroma AI Systems Inc. ਦਾ ਵਿਜ਼ਨ',
        para1: 'ਪਲੰਬਿੰਗ ਠੇਕੇਦਾਰ ਅਕਸਰ ਪੁਰਾਣੀਆਂ ਵੈਬਸਾਈਟਾਂ, ਮਿਸਡ ਗਾਹਕ ਕਾਲਾਂ, ਅਤੇ ਹੱਥੀਂ ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਤੋਂ ਪੀੜਤ ਹੁੰਦੇ ਹਨ ਜੋ ਬਿਲਿੰਗ ਵਿੱਚ ਦੇਰੀ ਕਰਦੀ ਹੈ। Kroma AI Systems Inc. (KASI) ਵਿਖੇ, ਅਸੀਂ ਤੁਹਾਡੇ ਦਫਤਰ ਦੇ ਕਾਰਜਾਂ ਨੂੰ ਸਵੈਚਾਲਿਤ ਕਰਨ ਲਈ ਉੱਚ-ਸ਼ੁੱਧਤਾ ਪ੍ਰਣਾਲੀਆਂ ਦਾ ਨਿਰਮਾਣ ਕਰਦੇ ਹਾਂ।',
        para2: 'ਅਸੀਂ ਬੇਅੰਤ ਮੀਟਿੰਗਾਂ ਜਾਂ ਵਧੇ ਹੋਏ ਬਜਟਾਂ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਨਹੀਂ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਤੁਹਾਡੀਆਂ ਗੱਡੀਆਂ ਨੂੰ ਬੁੱਕ ਰੱਖਣ ਅਤੇ ਤੁਹਾਡੇ ਹੱਥ ਖਾਲੀ ਰੱਖਣ ਲਈ ਆਧੁਨਿਕ ਵੈੱਬ ਰੀਡਿਜ਼ਾਈਨ, 24/7 AI ਵਰਚੁਅਲ ਸਹਾਇਕ ਰਿਸੈਪਸ਼ਨਿਸਟ, ਅਤੇ ਵੌਇਸ CRM ਏਕੀਕਰਣ \'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਦੇ ਹਾਂ।'
      },
      vancouverMatrix: {
        tag: 'ਭੂਗੋਲਿਕ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਸੰਦਰਭ',
        title: 'ਵੈਨਕੂਵਰ ਮੈਟਰਿਕਸ',
        para1: 'ਅਸੀਂ ਵੈਨਕੂਵਰ, ਬੀਸੀ ਤੋਂ ਕੰਮ ਕਰਦੇ ਹਾਂ, ਸਥਾਨਕ ਪਲੰਬਿੰਗ ਠੇਕੇਦਾਰਾਂ ਨੂੰ ਉਹਨਾਂ ਦੇ ਕਾਰੋਬਾਰਾਂ ਨੂੰ ਸਕੇਲ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਸਥਾਨਕ ਵਪਾਰਕ ਮਾਹੌਲ, ਐਮਰਜੈਂਸੀ ਡਿਸਪੈਚਿੰਗ ਦੀ ਜ਼ਰੂਰਤ, ਅਤੇ ਸਾਈਟ \'ਤੇ ਟੈਕਨੀਸ਼ੀਅਨਾਂ ਲਈ ਹੈਂਡਸ-ਫ੍ਰੀ ਪ੍ਰਣਾਲੀਆਂ ਦੀ ਲੋੜ ਨੂੰ ਸਮਝਦੇ ਹਾਂ।',
        para2: 'ਸਾਡੀ ਵਿਜ਼ੂਅਲ ਅਤੇ ਰਣਨੀਤਕ ਪਛਾਣ ਇਸ ਸਥਾਨਕ ਅਤੇ ਗਲੋਬਲ ਦੋਹਰੇਪਣ ਤੋਂ ਪੈਦਾ ਹੁੰਦੀ ਹੈ, ਜੋ ਸਾਡੇ ਦੁਆਰਾ ਬਣਾਏ ਗਏ ਹਰੇਕ ਸਿਸਟਮ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਅਤੇ ਕਨੈਕਟੀਵਿਟੀ ਦਾ ਸੰਦੇਸ਼ ਦਿੰਦੀ ਹੈ।'
      },
      brand: {
        badge: 'ਸਾਡਾ ਬ੍ਰਾਂਡ',
        title: 'ਸਿੰਬੋਲਿਕ ਫਿਊਜ਼ਨ ਅਤੇ ਪਛਾਣ ਫਿਲਾਸਫੀ',
        desc: 'KASI ਸਿਰਫ਼ ਇੱਕ ਬ੍ਰਾਂਡ ਦਾ ਨਾਂ ਨਹੀਂ ਹੈ; ਇਹ ਤਕਨੀਕੀ ਯਥਾਰਥਵਾਦ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਇਕਸਾਰਤਾ ਦਾ ਪ੍ਰਗਟਾਵਾ ਹੈ।',
        layerA: 'ਲੇਅਰ ਏ: ਅਰਥਪੂਰਨ ਵਿਅੰਗ',
        layerATitle: '"KASI" ਵਿਹਾਰਕ ਯਥਾਰਥਵਾਦ ਦੇ ਰੂਪ ਵਿੱਚ',
        layerADesc: 'ਸਪੈਨਿਸ਼ ਵਿੱਚ, KASI ਦਾ ਉਚਾਰਨ ਬਿਲਕੁਲ "casi" (ਲਗਭਗ) ਵਰਗਾ ਲੱਗਦਾ ਹੈ। ਇਸ ਨੂੰ ਛੁਪਾਉਣ ਦੀ ਬਜਾਏ, ਅਸੀਂ ਇਸਨੂੰ ਆਪਣੀ ਸਭ ਤੋਂ ਵੱਡੀ ਤਾਕਤ ਵਜੋਂ ਵਰਤਿਆ ਹੈ:',
        layerAQuote: '"We are not perfect, but we KASI always deliver."',
        layerAPara: 'ਇਹ ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ ਕਿ ਅਸਲ-ਸੰਸਾਰ ਦੀ ਇੰਜੀਨੀਅਰਿੰਗ ਵਿੱਚ, ਕੋਈ ਜਾਦੂਈ, ਬੁਲੇਟਪਰੂਫ ਸਿਸਟਮ ਨਹੀਂ ਹੁੰਦੇ; ਕੇਵਲ ਤਜਰਬੇਕਾਰ ਟੀਮਾਂ ਹੁੰਦੀਆਂ ਹਨ ਜੋ ਅਸਫਲਤਾਵਾਂ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਉਣ ਅਤੇ ਅਜਿਹੇ ਸਿਸਟਮਾਂ ਨੂੰ ਪ੍ਰੋਗਰਾਮ ਕਰਨ ਦੇ ਸਮਰੱਥ ਹੁੰਦੀਆਂ ਹਨ ਜੋ ਕਿਸੇ ਵੀ ਮੁਸੀਬਤ ਦੇ ਤਹਿਤ ਆਪਣੇ ਆਪ ਠੀਕ ਹੋ ਜਾਂਦੇ ਹਨ।'
      },
      timeline: {
        badge: 'ਵਿਕਾਸ',
        title: 'ਸਾਡੀ ਤਕਨੀਕੀ ਯਾਤਰਾ',
        desc: 'ਸਥਾਨਕ ਸੌਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰਿੰਗ ਏਕੀਕਰਣ ਤੋਂ ਲੈ ਕੇ ਵਪਾਰ ਲਈ ਵਿਸ਼ੇਸ਼ ਆਟੋਮੇਸ਼ਨਾਂ ਤੱਕ।',
        events: [
          {
            year: '2023',
            title: 'Kroma AI Systems Inc. ਦੀ ਸਥਾਪਨਾ',
            desc: 'ਬ੍ਰਿਟਿਸ਼ ਕੋਲੰਬੀਆ, ਕੈਨੇਡਾ ਵਿੱਚ ਕਾਨੂੰਨੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਕਸਟਮ ਉੱਚ-ਸ਼ੁੱਧਤਾ ਸੌਫਟਵੇਅਰ ਏਕੀਕਰਣ ਪ੍ਰਦਾਨ ਕਰਨਾ।'
          },
          {
            year: '2024',
            title: 'ਵੈੱਬ ਰੀਡਿਜ਼ਾਈਨ ਅਤੇ ਠੇਕੇਦਾਰ SEO ਦਾ ਜਨਮ',
            desc: 'ਲੀਡ ਫੋਨ ਕਾਲਾਂ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਕਰਨ ਲਈ ਉੱਚ-ਤੇਜ਼, ਸਥਾਨਕ ਖੋਜ-ਅਨੁਕੂਲਿਤ ਠੇਕੇਦਾਰ ਵੈਬਸਾਈਟਾਂ ਦਾ ਵਿਕਾਸ ਕਰਨਾ।'
          },
          {
            year: '2025',
            title: 'ਵੌਇਸ CRM ਡਿਕਟੇਸ਼ਨ ਪਾਈਪਲਾਈਨਾਂ ਦੀ ਸ਼ੁਰੂਆਤ',
            desc: 'ਕੰਮ ਵਾਲੀ ਥਾਂ \'ਤੇ ਹੱਥਾਂ ਦੀ ਵਰਤੋਂ ਕੀਤੇ ਬਿਨਾਂ ਕੰਮ ਦੀ ਸਮੱਗਰੀ ਅਤੇ ਗਾਹਕ ਇਤਿਹਾਸ ਨੂੰ ਲੌਗ ਕਰਨ ਲਈ ਉੱਨਤ ਸਪੀਚ ਪਾਈਪਲਾਈਨਾਂ ਨੂੰ ਤਾਇਨਾਤ ਕਰਨਾ।'
          },
          {
            year: '2026',
            title: 'KASI ਪਲੰਬਰ ਟੈਕ ਸੂਟ ਲਾਂਚ',
            desc: 'ਪੂਰੇ ਉੱਤਰੀ ਅਮਰੀਕਾ ਵਿੱਚ ਪਲੰਬਰਾਂ ਲਈ ਇੱਕ ਸਿੰਗਲ ਲਚਕੀਲੇ ਸੂਟ ਵਿੱਚ ਵੈੱਬ ਰੀਡਿਜ਼ਾਈਨ, ਏਆਈ ਡਿਸਪੈਚ ਰਿਸੈਪਸ਼ਨ, and ਵੌਇਸ CRM ਨੂੰ ਇਕਜੁੱਟ ਕਰਨਾ।'
          }
        ]
      },
      values: {
        badge: 'ਸਾਡੇ ਮੁੱਲ',
        title: 'ਮਜ਼ਬੂਤ ਇੰਜੀਨੀਅਰਿੰਗ ਪਿਲਰ',
        desc: 'ਉਹ ਸਿਧਾਂਤ ਜੋ ਇਹ ਪਰਿਭਾਸ਼ਿਤ ਕਰਦੇ ਹਨ ਕਿ ਅਸੀਂ ਕੋਡ ਕਿਵੇਂ ਲਿਖਦੇ ਹਾਂ ਅਤੇ ਅਸੀਂ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨਾਲ ਕਿਵੇਂ ਜੁੜਦੇ ਹਾਂ।',
        items: [
          {
            num: 'I',
            title: 'ਤਕਨੀਕੀ ਸ਼ੁੱਧਤਾ',
            desc: 'ਅਸੀਂ ਸਾਫ਼, ਟਾਈਪ ਕੀਤੇ ਅਤੇ ਚੰਗੀ ਤਰ੍ਹਾਂ ਦਸਤਾਵੇਜ਼ੀ ਸਿਸਟਮ ਲਿਖਦੇ ਹਾਂ ਜੋ ਵਿਸ਼ੇਸ਼ ਤੌਰ \'ਤੇ ਵਪਾਰਕ ਕਾਰਜਾਂ ਲਈ ਬਣਾਏ ਗਏ ਹਨ।'
          },
          {
            num: 'II',
            title: 'ਡੇਟਾ ਲਚਕਤਾ',
            desc: 'ਕੋਈ ਵੀ ਗਾਹਕ ਪੁੱਛਗਿੱਛ ਜਾਂ ਬੁਕਿੰਗ ਕਦੇ ਗੁੰਮ ਨਹੀਂ ਹੁੰਦੀ। ਅਸੀਂ ਔਫਲਾਈਨ ਸਮਰੱਥਾਵਾਂ ਵਾਲੇ ਮਜ਼ਬੂਤ ਡੇਟਾਬੇਸ ਬਣਾਉਂਦੇ ਹਾਂ।'
          },
          {
            num: 'III',
            title: 'ਸਾਫ਼ ਆਰਕੀਟੈਕਚਰ',
            desc: 'ਉੱਚ ਸਥਿਰਤਾ ਅਤੇ ਸੁਰੱਖਿਆ ਲਈ ਅਸੀਂ ਤੁਹਾਡੇ CRM, ਕੈਲੰਡਰਾਂ ਅਤੇ ਵੈਬਸਾਈਟ ਨੂੰ ਭੌਤਿਕ ਸਰਵਰਾਂ ਤੋਂ ਵੱਖ ਰੱਖਦੇ ਹਾਂ।'
          },
          {
            num: 'IV',
            title: 'ਕੁੱਲ ਆਟੋਮੇਸ਼ਨ',
            desc: 'ਅਸੀਂ ਬੁਕਿੰਗ, ਕੈਲੰਡਰ ਡਿਸਪੈਚ, ਅਤੇ ਗਾਹਕ ਲੌਗਿੰਗ ਨੂੰ ਸਵੈਚਾਲਿਤ ਕਰਦੇ ਹਾਂ, ਜਿਸ ਨਾਲ ਦਫਤਰੀ ਕੰਮ ਦੇ ਘੰਟੇ ਬਚਦੇ ਹਨ।'
          }
        ]
      }
    },
    contact: {
      hero: {
        badge: 'ਸਿੱਧਾ ਸੰਪਰਕ',
        title: 'ਆਓ ਅਸਲ ਇੰਜੀਨੀਅਰਿੰਗ ਦੀ ',
        titleGradient: 'ਗੱਲ',
        titleEnd: ' ਕਰੀਏ',
        desc: 'ਸਾਨੂੰ ਆਪਣੇ ਕਾਰਜਾਂ, ਮਿਸਡ ਕਾਲਾਂ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ, ਜਾਂ CRM ਦੀਆਂ ਮੁਸ਼ਕਲਾਂ ਬਾਰੇ ਦੱਸੋ। ਅਸੀਂ ਇੱਕ ਤਕਨੀਕੀ ਮੁਲਾਂਕਣ ਨਾਲ ਜਵਾਬ ਦੇਵਾਂਗੇ, ਨਾ ਕਿ ਕਿਸੇ ਵਿਕਰੀ ਪਿਚ ਨਾਲ।'
      },
      details: {
        phone: 'ਵੈਨਕੂਵਰ ਡਾਇਰੈਕਟ ਲਾਈਨ',
        email: 'ਈਮੇਲ ਪਤਾ',
        hq: 'ਕਾਰਪੋਰੇਟ ਹੈੱਡਕੁਆਰਟਰ',
        disclaimer: '🔒 ਤੁਹਾਡੇ ਸੰਪਰਕ ਵੇਰਵਿਆਂ ਅਤੇ ਤਕਨੀਕੀ ਜਾਣਕਾਰੀ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਗੁਪਤ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।'
      },
      form: {
        name: 'ਤੁਹਾਡਾ ਨਾਮ',
        namePlaceholder: 'ਜਿਵੇਂ ਕਿ: Gabriel Niño',
        email: 'ਈਮੇਲ ਪਤਾ',
        emailPlaceholder: 'ਜਿਵੇਂ ਕਿ: contact@yourplumbing.com',
        company: 'ਕੰਪਨੀ / ਪਲੰਬਿੰਗ ਕਾਰੋਬਾਰ',
        companyPlaceholder: 'ਜਿਵੇਂ ਕਿ: Nino Plumbing & Drain',
        service: 'ਲੋੜੀਂਦੀ ਸੇਵਾ',
        selectOption: 'ਇੱਕ ਵਿਕਲਪ ਚੁਣੋ',
        optionRedesign: 'ਵੈੱਬਸਾਈਟ ਰੀਡਿਜ਼ਾਈਨ (ਵਧੇਰੇ ਲੀਡਾਂ)',
        optionAssistant: 'ਏਆਈ ਡਿਸਪੈਚ ਸਹਾਇਕ (24/7 ਸ਼ਡਿਊਲਿੰਗ)',
        optionVoiceCrm: 'ਵੌਇਸ CRM ਸਿਸਟਮ (ਹੈਂਡਸ-ਫ੍ਰੀ ਡਿਕਟੇਸ਼ਨ)',
        optionIntegrations: 'ਕੈਲੰਡਰ ਅਤੇ ਟੂਲ ਸਿੰਕ',
        optionSeo: 'ਸਥਾਨਕ SEO ਅਤੇ ਦਿੱਖ',
        optionResiliency: 'ਪੂਰੀ ਸੂਟ (ਰੀਡਿਜ਼ਾਈਨ + ਸਹਾਇਕ + ਵੌਇਸ CRM)',
        message: 'ਅਸੀਂ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਦੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ?',
        messagePlaceholder: 'ਸਾਨੂੰ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕਿੰਨੀਆਂ ਗੱਡੀਆਂ/ਟੈਕਨੀਸ਼ੀਅਨ ਚਲਾਉਂਦੇ ਹੋ, ਕੀ ਤੁਸੀਂ ਕੰਮ ਦੇ ਘੰਟਿਆਂ ਤੋਂ ਬਾਅਦ ਕਾਲਾਂ ਮਿਸ ਕਰਦੇ ਹੋ, ਜਾਂ ਤੁਸੀਂ ਕਿਸ ਕੈਲੰਡਰ ਟੂਲ ਨੂੰ ਜੋੜਨਾ ਚਾਹੁੰਦੇ ਹੋ...',
        submit: 'ਵੇਰਵੇ ਜਮ੍ਹਾਂ ਕਰੋ',
        successTitle: 'ਵੇਰਵੇ ਪ੍ਰਾਪਤ ਹੋਏ!',
        successDesc: 'ਅਸੀਂ ਤੁਹਾਡੀ ਬੇਨਤੀ ਨੂੰ ਦਰਜ ਕਰ ਲਿਆ ਹੈ। ਇੱਕ ਸੀਨੀਅਰ ਇੰਜੀਨੀਅਰ ਤੁਹਾਡੇ ਨੋਟਸ ਦੀ ਸਮੀਖਿਆ ਕਰੇਗਾ ਅਤੇ 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਤੁਹਾਨੂੰ ਇੱਕ ਮੁਢਲੀ ਰਿਪੋਰਟ ਭੇਜੇਗਾ।',
        backHome: 'ਵਾਪਸ ਹੋਮ ਪੇਜ \'ਤੇ ਜਾਓ'
      }
    }
  }
};
