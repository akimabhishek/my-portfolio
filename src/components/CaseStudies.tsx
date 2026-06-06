import { useState, useEffect } from 'react';
import { ArrowRight, X, ExternalLink, Github, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const caseStudies = [
  {
    id: 'medivoice',
    number: '01',
    title: 'MediVoice AI',
    tags: ['AI Engineering', 'RAG', 'Voice AI'],
    description: 'A real-time, multimodal reasoning engine that lets you simply talk to your health insurance policy documents with strict logical guardrails.',
    primaryTag: 'RAG',
    image: '/images/MediVoice_AI.png',
    links: {
      demo: 'https://huggingface.co/spaces/akimabhi/MediVoice-AI',
      github: 'https://github.com/akimabhishek/medivoice-poc',
      pdf: 'https://drive.google.com/file/d/1RzipIkX4jtTlCXNBsjbSqQO8FkjJCj-_/view?usp=sharing'
    },
    content: [
      "Tired of reading 80-page health insurance PDFs just to figure out your co-payment? <strong>MediVoice AI</strong> is a real-time, multimodal reasoning engine that lets you simply talk to your policy documents.",
      "Built to go beyond basic chatbots and solve real-world friction, it leverages a dynamic RAG pipeline with FastAPI and ChromaDB to instantly vectorize PDFs into a searchable knowledge base.",
      "To achieve near-instant voice interactions, I bypassed heavy local STT models. The app streams raw audio directly to Gemini 2.5 Flash, enabling real-time processing on CPU-only servers.",
      "The backend forces strict JSON outputs, creating robust hallucination guardrails that structurally separate technical reasoning from the human-friendly voice response.",
      "With live telemetry tracking token usage, API costs, and RAG confidence, total latency stays under 11 seconds."
    ]
  },
  {
    id: 'hierarchy-extraction',
    number: '02',
    title: 'Structural Hierarchy Extraction Engine',
    tags: ['AI Engineering', 'RAG', 'Parsing'],
    description: 'An AI-powered tool that automatically generates a clean, multi-tiered feature hierarchy from any product documentation URL in seconds.',
    primaryTag: 'Pydantic',
    image: '/images/Hierarchy.png',
    links: {
      demo: 'https://hierarchy-ranking.streamlit.app/',
      github: 'https://github.com/akimabhishek/chunking-intelligence-system',
      pdf: 'https://drive.google.com/file/d/1cn1Wbs67dAj629bzCUZbiL0WUog7_SEn/view?usp=sharing'
    },
    content: [
      "🚀 <strong>Tired of spending hours understanding a product’s documentation?</strong> Whether you are a Product Manager, Founder, Developer, or Analyst, you have probably gone through dozens of documentation pages just to figure out how a product is structured.",
      "I built an AI-powered tool that does it in seconds. Just paste any documentation URL, and it automatically generates a clean feature hierarchy map: <strong>Modules ↳ Features ↳ Sub-features</strong>.",
      "This system helps with understanding new products faster, conducting competitor research, uncovering feature discovery, and streamlining documentation analysis. Imagine evaluating a platform like Salesforce or HubSpot—instead of reading hundreds of pages, you instantly get a structured map of the entire product to identify key capabilities in minutes.",
      "The engine works across Notion, Zendesk, Intercom, and custom documentation sites. As a bonus, you can also <strong>chat with the documentation</strong> using a built-in AI search terminal to find answers instantly.",
      "<strong>Key Technical Pillars:</strong><br/>✅ <strong>Recursive Parsing:</strong> Handles infinite depth, flattening it into a clean 3-tier view.<br/>✅ <strong>Schema Enforcement:</strong> Pydantic guardrails ensure consistent JSON structures.<br/>✅ <strong>Conversational Compliance:</strong> Integrated RAG terminal for instant, grounded search across the mapped architecture.<br/>✅ <strong>Dynamic Ingestion:</strong> Powered by Jina AI + Gemini 2.5 Flash."
    ]
  },
  {
    id: 'traffic-review',
    number: '03',
    title: 'AI-Powered Traffic Review System',
    tags: ['UI/UX Design', 'Workflow Optimization', 'AI Vision'],
    description: 'Designing a frictionless, single-screen command center that enables traffic officers to legally review AI-detected infractions in under 10 seconds.',
    primaryTag: 'UX',
    image: '/images/Smart_Traffic_Controller.webp',
    links: {
      demo: 'https://trafficreview-ai-172879034773.us-west1.run.app/',
      notion: 'https://app.notion.com/p/Case-Study-1-AI-Powered-Traffic-Violation-Review-System-3476bfa1530a80a18420e3cee3bd8c24'
    },
    content: [
      "Our imaging AI automatically detects traffic violations across 25+ categories. However, before a ticket is officially mailed, a human traffic officer must review the AI's footage to verify the violation, confirm the license plate, and check for exceptions like bad weather or emergency vehicles.",
      "<strong>The Goal:</strong> Design an interface that allows officers to accurately and legally process these reviews in <strong>under 10 seconds per case</strong>. To meet this strict time limit without sacrificing legal accuracy, we abandoned traditional, complex dashboards in favor of a single-screen command center focused entirely on \"glanceability.\"",
      "<strong>1. Everything on One Screen:</strong> Officers lose valuable seconds when forced to click through multiple tabs or scroll to find information. All critical evidence is surfaced on a single plane. The primary video feed, quick-select thumbnails for alternate angles, and action buttons are all immediately accessible without leaving the view.",
      "<strong>2. Visual Alerts Over Dense Text:</strong> Reading paragraphs of text is slow. Instead of standard text reports, the right-hand panel uses high-contrast \"Key Decision Factors.\" The system explicitly calls out warnings like \"AI OCR indicates partial plate occlusion\" or \"Incomplete stop detected,\" guiding the officer’s eyes directly to the potential issue.",
      "<strong>3. Frictionless Legal Processing:</strong> If an officer needs to dismiss a case, they must provide a legal reason. Typing out reasons manually destroys the 10-second speed goal. This is solved using structured overlay menus that offer instant, one-click legal rationales like \"Plate Unreadable,\" guaranteeing legally compliant record-keeping while keeping the workflow frictionless.",
      "<strong>The Result:</strong> By minimizing mouse movement, surfacing visual warnings, and utilizing quick-click menus for legal documentation, the TrafficReview AI console empowers officers to confidently process complex traffic data within the strict time limits required by city enforcement agencies."
    ]
  },
  {
    id: 'netflix-india',
    number: '04',
    title: 'Netflix India: Growth & AI Strategy',
    tags: ['Product Strategy', 'Growth', 'AI Navigation'],
    description: 'Identifying India-centric product features and architecting an AI strategy to auto-detect content sequences for a personalized viewing experience.',
    primaryTag: 'Product',
    image: '/images/netflix_india_strategy.png',
    links: {
      notion: 'https://app.notion.com/p/Case-Study-2-Netflix-India-India-centric-Features-AI-Powered-Content-Navigation-3466bfa1530a80609134ff19f6a0bbdd'
    },
    content: [
      "<strong>The Challenge:</strong> As a Product Manager for Netflix India, the objective was to identify features developed exclusively for the Indian market to increase subscriptions in the 20-45 age group across Tier 2 cities, and architect an AI system for automated content sequence detection.",
      "<strong>1. India-Specific Features:</strong> To tackle subscription hesitation, I proposed three mechanics: a 'pay-per-series/movie' model capitalizing on India's massive UPI micro-transaction volume; 'Mini Movies' (2-minute story videos) to capture the short-form video audience; and WhatsApp deep-link sharing with 'watch nudges' to turn word-of-mouth into direct viewership.",
      "<strong>2. Feature Validation (Skip Sequences):</strong> Analytics showed 15-22% of users skip song and action sequences. Before rushing to build 'Skip' buttons, I designed a rigorous data validation strategy to test assumptions—verifying if the skip rate holds across genres, devices, and seasons, and planning a limited mobile-only rollout to measure actual impact on session duration.",
      "<strong>3. AI Algorithm Strategy:</strong> To support these features, I architected an AI system to automatically detect action sequences and musical numbers. The strategy leverages multi-modal signals (audio, video, text) and treats detection as a multi-label problem prioritizing precision to avoid false skips.",
      "<strong>The Result:</strong> By deploying this multi-modal AI offline at ingest, Netflix can create time-stamped scene maps for its entire catalog. This enables accurate skip features, reliable analytics, and a vastly improved, culturally-attuned user experience."
    ]
  },
  {
    id: 'swiggy-tier2',
    number: '05',
    title: 'Swiggy: Hyper-Local Tier 2 Expansion',
    tags: ['Growth Strategy', 'Habit Formation', 'Logistics'],
    description: 'A supply-first strategic framework prioritizing habit formation over simple acquisition for expanding food delivery into Tier 2 cities.',
    primaryTag: 'Growth',
    image: '/images/swiggy_tier2_expansion.png',
    links: {
      pdf: 'https://drive.google.com/file/d/1BAcGijYilbCyLVSH5Mg1eI9MgR5PXVFN/view?usp=sharing'
    },
    content: [
      "<strong>The Challenge:</strong> Expanding cooked food delivery services into Tier 2 cities requires a strategic shift. Traditional demand-side spending is ineffective without a strong foundation. The objective was to create a framework that prioritizes long-term habit formation over simple user acquisition.",
      "<strong>1. Supply-First Expansion:</strong> The strategy hinges on achieving supply readiness before driving demand. Expansion into a new city necessitates a minimum of 20 active restaurants, four food categories, and delivery times under 35 minutes. By focusing on local QSR brands and seeding hyper-local menus via partner cloud kitchens, we ensure the supply meets the specific cultural tastes of the region.",
      "<strong>2. Execution Levers:</strong> To break down initial friction, the execution focuses on hyper-local distribution. Pricing levers like zero delivery fees for the first five orders and a 'First Order Guarantee' build trust. Distribution relies on community-driven channels: WhatsApp, ShareChat, and college partnerships. On the product side, a lite app version (<2MB) and support for local languages cater to specific Tier 2 constraints.",
      "<strong>3. Wave-Based Growth & Habit Formation:</strong> Expansion follows a disciplined, phased approach, starting with Low CAC cities (e.g., Lucknow, Jaipur), moving to High LTV student hubs (e.g., Kota), and finally Industrial hubs. Future waves only proceed once previous ones hit a 40%+ D30 repeat rate.",
      "<strong>The Result:</strong> Habit formation—defined as 3–5 initial orders—becomes the primary retention goal. By utilizing tactics like 'Order Streaks' and affordable 'Lite' memberships, success is driven not by mere app installs, but by the North Star metric: New Transacting Users who place a 2nd order within 30 days."
    ]
  }
];

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<typeof caseStudies[0] | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeStudy]);

  return (
    <section id="case-studies" className="py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans relative overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[var(--text-primary)]/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <h2 className="text-xs font-bold tracking-[0.25em] text-[var(--accent-primary)] uppercase mb-4">
            Side Work
          </h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] tracking-tight mb-4">
            Selected <span className="text-[var(--text-secondary)]">Work</span>
          </h3>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            In-depth analysis and side projects focused on product strategy, user experience, and growth.
          </p>
        </motion.div>

        {/* Case Studies List */}
        <div className="space-y-16 md:space-y-24">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 !== 0;
            return (
              <motion.div 
                key={study.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-10 group"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
                {/* Visual Side */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative w-full rounded-2xl overflow-hidden bg-[var(--text-primary)]/5 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-[var(--shadow-warm)] border border-[var(--text-primary)]/10 p-4 md:p-6 flex items-center justify-center">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-auto max-h-[200px] md:max-h-[280px] object-contain rounded-xl transition-transform duration-[2s] ease-out group-hover:scale-[1.03]" 
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  </div>
                  
                  {/* Floating Rank Badge */}
                  <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-24 h-24 bg-[var(--bg-primary)] rounded-full flex items-center justify-center border border-[var(--text-primary)]/10 shadow-lg z-10 hidden md:flex`}>
                    <span className="text-3xl font-display font-medium text-[var(--accent-primary)] opacity-80">{study.number}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map(tag => {
                      const isPrimary = tag === study.primaryTag;
                      return (
                        <span 
                          key={tag} 
                          className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-colors ${
                            isPrimary 
                              ? 'bg-[var(--accent-primary)] text-[var(--bg-primary)]' 
                              : 'border border-[var(--text-primary)]/10 text-[var(--text-secondary)] bg-[var(--bg-surface)] group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]'
                          }`}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>

                  <h4 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] leading-tight mb-6 group-hover:text-[var(--accent-primary)] transition-colors duration-500">
                    {study.title}
                  </h4>
                  
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                    {study.description}
                  </p>

                  {/* Action Links */}
                  <div className="w-full flex flex-row flex-wrap items-center gap-4 border-t border-[var(--text-primary)]/10 pt-8 mt-auto">
                    {study.links?.demo && (
                      <a href={study.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-[var(--bg-primary)] rounded-full hover:bg-[var(--text-primary)] transition-all font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}

                    {study.links?.github && (
                      <a href={study.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[var(--text-primary)]/20 text-[var(--text-primary)] rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all font-bold text-sm hover:-translate-y-0.5">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}

                    {study.links?.notion && (
                      <a href={study.links.notion} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[var(--text-primary)]/20 text-[var(--text-primary)] rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all font-bold text-sm hover:-translate-y-0.5">
                        <FileText className="w-4 h-4" />
                        Notion Doc
                      </a>
                    )}

                    {study.links?.pdf && (
                      <a href={study.links.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[var(--text-primary)]/20 text-[var(--text-primary)] rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all font-bold text-sm hover:-translate-y-0.5">
                        <FileText className="w-4 h-4" />
                        Doc
                      </a>
                    )}
                  </div>
                </div>
                </div>
                
                {/* Centered Read Full Study Button at the bottom of the section */}
                <div className="w-full flex justify-center pb-4">
                  <button onClick={() => setActiveStudy(study)} className="inline-flex items-center justify-center gap-3 px-8 py-4 glass-panel glass-panel-hover text-[var(--text-primary)] font-bold text-[11px] tracking-[0.2em] uppercase rounded-full group/btn">
                    <span className="relative z-10">Read Full Case</span>
                    <ArrowRight className="w-4 h-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform text-[var(--accent-primary)]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modern Modal Overlay */}
      <AnimatePresence>
        {activeStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[var(--bg-primary)]/90 backdrop-blur-xl"
              onClick={() => setActiveStudy(null)}
            />
            
            {/* Modal Content Area */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl max-h-full h-full md:h-[90vh] bg-[var(--bg-surface)] md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-[var(--text-primary)]/10"
            >
              {/* Close button */}
              <button 
                onClick={() => setActiveStudy(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] w-12 h-12 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors border border-[var(--text-primary)]/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 overflow-y-auto">
                <div className="px-6 md:px-16 lg:px-24 py-12 md:py-16">
                  {/* Header Box */}
                  <div className="mb-12 md:mb-16">
                    <div className="flex gap-2 flex-wrap mb-6">
                      {activeStudy.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-[var(--text-primary)]/5 rounded-full text-[var(--text-secondary)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--text-primary)] leading-tight mb-8">
                      {activeStudy.title}
                    </h3>

                    {/* Prominent Modal Links */}
                    {activeStudy.links && (
                      <div className="flex flex-wrap gap-4">
                        {activeStudy.links.demo && (
                          <a href={activeStudy.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-[var(--bg-primary)] rounded-full hover:bg-[var(--text-primary)] transition-all font-bold text-sm shadow-md hover:-translate-y-0.5">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                        {activeStudy.links.github && (
                          <a href={activeStudy.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)]/5 text-[var(--text-primary)] rounded-full hover:bg-[var(--text-primary)]/10 transition-all font-bold text-sm">
                            <Github className="w-4 h-4" />
                            GitHub Repo
                          </a>
                        )}
                        {activeStudy.links.pdf && (
                          <a href={activeStudy.links.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)]/5 text-[var(--text-primary)] rounded-full hover:bg-[var(--text-primary)]/10 transition-all font-bold text-sm">
                            <FileText className="w-4 h-4" />
                            Doc
                          </a>
                        )}
                        {activeStudy.links.notion && (
                          <a href={activeStudy.links.notion} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)]/5 text-[var(--text-primary)] rounded-full hover:bg-[var(--text-primary)]/10 transition-all font-bold text-sm">
                            <FileText className="w-4 h-4" />
                            Notion Doc
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Fully Visible Uncropped Image */}
                  <div className="w-full bg-[var(--text-primary)]/5 rounded-2xl md:rounded-[2rem] p-2 md:p-6 mb-16 border border-[var(--text-primary)]/10 flex items-center justify-center">
                      <img 
                        src={activeStudy.image} 
                        alt={activeStudy.title}
                        className="max-w-full w-auto h-auto max-h-[50vh] object-contain rounded-xl shadow-lg border border-[var(--text-primary)]/10 bg-[var(--bg-primary)]"
                      />
                  </div>

                  {/* Content Area */}
                  <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                      <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-serif leading-relaxed italic border-l-4 border-[var(--accent-primary)] pl-6 py-2">
                        "{activeStudy.description}"
                      </p>
                    </div>

                    <div className="prose prose-lg prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed max-w-none">
                      {activeStudy.content?.map((paragraph, idx) => (
                        <p 
                          key={idx} 
                          className={`mb-6 text-base md:text-lg ${idx === 0 ? 'first-letter:text-6xl md:first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[var(--text-primary)] first-letter:leading-[0.8] first-line:tracking-wide' : ''}`}
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
