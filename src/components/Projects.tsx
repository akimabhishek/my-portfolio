import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ArrowRight, Eye } from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import { PasscodeGate } from './PasscodeGate';

type ProjectImage = {
  url: string;
  alt: string;
  captionTitle: string;
  captionBody: string;
};

type ProjectDemo = {
  totalScreens: number;
  estTime: string;
  coverTeaserType: 'stacked' | 'blurred';
  images: ProjectImage[];
};

type Project = {
  id: string;
  title: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  tech: string[];
  audioSample?: {
    url: string;
    title: string;
  };
  demo: ProjectDemo;
};

const projects: Project[] = [
  {
    id: 'smart-assistant',
    title: 'Smart Assistant',
    tag: 'VOICE AI / TELEPHONY',
    shortDesc: 'AI voice call-bot recovering missed-call revenue at scale without human intervention.',
    longDesc: 'Our AI-powered outbound and inbound voice bot handles multi-turn conversations to qualify and route leads natively over telephony networks. It integrates directly with existing CRMs, eliminating the need for human agents while drastically improving the speed to lead.',
    features: ['~30% missed-call revenue recovered', '1,000-merchant paid pilot successfully delivered', 'Scale testing over Airtel telephony integrations'],
    tech: ['LLMs', 'IVR', 'CRM Integration', 'Node.js'],
    audioSample: {
      url: '/images/smart_assistant.mp3',
      title: 'Inbound Customer Qualification'
    },
    demo: {
      totalScreens: 3,
      estTime: '1 min',
      coverTeaserType: 'stacked',
      images: [
        {
          url: '/images/sm_1.jpg',
          alt: 'AI Voice Setup interface showing agent voice selection',
          captionTitle: 'AI Voice Setup',
          captionBody: 'Choose the optimal AI agent voice and configure the exact days for your scheduled assistance.'
        },
        {
           url: '/images/sm_2.jpg',
           alt: 'Smart Assistant calls view with transcript and voice note',
           captionTitle: 'Call Transcripts & Details',
           captionBody: 'Review full query transcripts, listen to user voice notes, and take direct action with leads.'
        },
        {
           url: '/images/sm_3.jpg',
           alt: 'Insights dashboard showing engaged calls and talk time',
           captionTitle: 'Performance Insights',
           captionBody: 'Monitor total calls, engagement rates, and average talk time to optimize your assistant.'
        }
      ]
    }
  },
  {
     id: 'ai-appointment',
     title: 'AI Appointment',
     tag: 'AGENTIC AI / CRM',
     shortDesc: 'Comprehensive AI-powered scheduling system that automates merchant outreach, qualifies interest, and books field executive appointments.',
     longDesc: 'Designed to automate manual telecalling for Justdial, this AI Voice Bot calls merchants, conducts natural conversations in multiple regional languages, identifies decision-makers, and handles objections. By automatically reading calendar availability, optimizing territory routing, and updating the CRM, it drastically reduces operational costs and improves the efficiency of field sales teams.',
     features: ['10% booking rate achieved consistently', '2% overall conversion across 84K vendors', 'Hot Lead Scoring System for optimized outreach'],
     tech: ['Agentic AI', 'Lead Qualification', 'Google Calendar API', 'CRM Integration'],
     audioSample: {
       url: '/images/appointment.mp3',
       title: 'Appointment Booking Demo'
     },
     demo: {
       totalScreens: 1,
       estTime: '1 min',
       coverTeaserType: 'stacked',
       images: [
         {
           url: '/images/ai_appointment_ui.png',
           alt: 'AI Appointment Dashboard showing routing and conversion analytics',
           captionTitle: 'Booking Conversion & Routing',
           captionBody: 'Track drop-off rates and configure smart routing logic for inbound meeting requests.'
         }
       ]
     }
   },
   {
     id: 'voice-analysis',
     title: 'Voice Call Analysis',
     tag: 'AI PIPELINE / NLP',
     shortDesc: 'Large-scale voice pipeline processing 600K+ calls daily using advanced LLM models.',
     longDesc: 'Integrates OpenAI Whisper ASR and LLaMA models for intent extraction and spam filtering. This pipeline processes hundreds of thousands of calls daily, handling massive concurrency with extremely high accuracy.',
     features: ['600K+ calls/day processed reliably', '95% transcription accuracy across dialects', '~8% spam auto-filtered via NLP models'],
     tech: ['OpenAI Whisper', 'LLaMA', 'FastAPI'],
     demo: {
       totalScreens: 1,
       estTime: '1 min',
       coverTeaserType: 'stacked',
       images: [
         {
           url: '/images/voice_analysis_ui.png',
           alt: 'Pipeline throughput and intent confidence scoring dashboard',
           captionTitle: 'Call Pipeline Analytics',
           captionBody: 'Track processing latency, analyze intent categorization, and monitor automated spam deflection.'
         }
       ]
     }
   },
       {
      id: 'lead-handoff',
      title: 'Lead Handoff System',
      tag: 'LEAD ROUTING / ANALYTICS',
      shortDesc: 'Measures and enforces vendor first-time response within dynamically calibrated time windows to maximize lead utilization.',
      longDesc: 'The FTR system enforces vendor accountability by tracking responsiveness to customer inquiries. If merchants do not respond within a stipulated time window (dynamically calibrated using category and geography intelligence) their leads are forwarded to other merchants. This ensures no lead is missed or delayed, significantly improving conversion rates under the core principle: Speed = Conversion.',
      features: ['Dynamic FTR window calibration based on historical category and city data', 'Automated lead redistribution when merchants miss response windows', 'B2B and B2C categories have been calibrated according to business supply and demand'],
      tech: ['Real-time WebSockets', 'Redis', 'Analytics Dashboard', 'Node.js'],
      demo: {
        totalScreens: 1,
        estTime: '45 sec',
        coverTeaserType: 'stacked',
        images: [
          {
            url: '/images/lead_handoff_ui.png',
            alt: 'Match-Maker style dashboard showing real-time lead distribution',
            captionTitle: 'Real-Time Distribution Engine',
            captionBody: 'A vibrant live view of user inquiries being dynamically matched with high-speed merchants.'
          }
        ]
      }
    }
];

// Helper to bold metrics, numbers, and parse simple markdown links
const formatFeatureText = (text: string) => {
  // Regex to match markdown links [text](url) OR metrics/numbers
  const regex = /(\[.*?\]\(.*?\)|~?[\d,.]+\s*(?:K\+?|M|B|%|Cr)?)/g;
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (!part) return null;
    
    // Check if it's a markdown link: [text](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--accent-primary)] hover:underline underline-offset-4 transition-all">
          {linkMatch[1]}
        </a>
      );
    }
    
    // Otherwise check if it's a matched metric
    return regex.test(part) 
      ? <strong key={i} className="font-bold text-[var(--text-primary)]">{part}</strong> 
      : <span key={i}>{part}</span>;
  });
};

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  useEffect(() => {
    setActiveSlideIndex(0);
    setSlideDirection(0);
  }, [selectedProjectId]);

  const nextSlide = useCallback(() => {
    setSlideDirection(1);
    setActiveSlideIndex((prev) => (prev + 1) % selectedProject.demo.totalScreens);
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    setSlideDirection(-1);
    setActiveSlideIndex((prev) => (prev === 0 ? selectedProject.demo.totalScreens - 1 : prev - 1));
  }, [selectedProject]);

  const openLightbox = useCallback(() => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, closeLightbox, nextSlide, prevSlide]);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[var(--accent-primary)] uppercase mb-3">Work at Justdial</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] tracking-tight leading-[1.1]">
            Products Built
          </h3>
        </div>

        {/* Project Selector (Segmented Pill) */}
        <div className="mb-10 -mx-6 px-6 lg:mx-0 lg:px-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div 
            className="flex items-center w-max lg:w-full min-w-full bg-[var(--bg-surface)] border border-black/10 rounded-full p-1.5 shadow-sm" 
            role="tablist" 
            aria-label="Project Selection"
          >
            {projects.map((p, index) => {
              const isActive = selectedProjectId === p.id;
              return (
                <div key={p.id} className="flex-1 relative flex items-center justify-center">
                  {/* Vertical Separator */}
                  {index !== projects.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-black/10 z-0" />
                  )}
                  
                  <button
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${p.id}`}
                    onClick={() => setSelectedProjectId(p.id)}
                    className={`relative w-full px-5 lg:px-6 py-2.5 text-[9px] lg:text-[10px] font-bold tracking-[0.18em] uppercase transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-full z-10 ${isActive ? 'text-[var(--bg-surface)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                  >
                    <span className="relative z-20 whitespace-nowrap">{p.title}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabPill" 
                        className="absolute inset-0 bg-[var(--accent-primary)] rounded-full shadow-[var(--shadow-warm)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Content Area */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between" id={`panel-${selectedProjectId}`} role="tabpanel">
           
           {/* Left Column: Details */}
           <motion.div
             key={`content-${selectedProject.id}`}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.4 }}
             className="w-full lg:w-5/12 flex flex-col lg:pr-4"
           >
             <div className="mb-4">
                <span className="inline-block px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full border border-black/10 text-[var(--text-secondary)] bg-[var(--bg-surface)]">
                  {selectedProject.tag}
                </span>
             </div>
             
             <h4 className="text-2xl lg:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] mb-3 leading-tight">
               {selectedProject.title}
             </h4>
             
             <p className="text-base font-medium text-[var(--text-secondary)] mb-4 leading-relaxed">
               {selectedProject.shortDesc}
             </p>
             
             <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
               {selectedProject.longDesc}
             </p>
             
             {selectedProject.audioSample && (
               <div className="mb-6 w-full xl:w-5/6">
                 {selectedProject.id === 'smart-assistant' || selectedProject.id === 'ai-appointment' ? (
                   <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm">
                     <PasscodeGate title="Voice Identity Protected" description="Passcode required." variant="compact" isAudio={true}>
                       <AudioPlayer src={selectedProject.audioSample.url} title={selectedProject.audioSample.title} />
                     </PasscodeGate>
                   </div>
                 ) : (
                   <AudioPlayer src={selectedProject.audioSample.url} title={selectedProject.audioSample.title} />
                 )}
               </div>
             )}
             
             <ul className="space-y-3 mb-6">
               {selectedProject.features.map((feature, i) => (
                 <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                   <span className="mt-0.5 text-[var(--accent-primary)] shrink-0"><ArrowRight className="w-4 h-4" /></span>
                   <span className="leading-relaxed">{formatFeatureText(feature)}</span>
                 </li>
               ))}
             </ul>
             
             <div>
                 <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)] mb-2">Technologies</p>
                 <div className="flex flex-wrap gap-2">
                   {selectedProject.tech.map((t) => (
                     <span key={t} className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-black/10">
                       {t}
                     </span>
                   ))}
                 </div>
             </div>
           </motion.div>

           {/* Right Column: Inline Slider Gallery */}
           <motion.div
             key={`gallery-${selectedProject.id}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="w-full lg:w-7/12 relative sticky top-32"
           >
             {(() => {
               const galleryContent = (
                 <div className="w-full bg-[#f8f9fa] rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] ring-1 ring-black/5 overflow-hidden flex flex-col h-[60vh] min-h-[400px] max-h-[650px]">
                    {/* Header */}
                    <div className="shrink-0 flex items-center justify-between p-4 border-b border-black/5 bg-white relative z-20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shadow-sm">
                           <Eye className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-display font-bold text-lg text-[var(--text-primary)]">Product Gallery</h5>
                          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)] mt-0.5">
                             {activeSlideIndex + 1} OF {selectedProject.demo.totalScreens} SCREENS
                          </p>
                        </div>
                      </div>
                      {selectedProject.demo.totalScreens > 1 && (
                        <div className="flex gap-2">
                          <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors text-[var(--text-primary)]">
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors text-[var(--text-primary)]">
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Slider Image Area */}
                    <div 
                      className="flex-1 relative bg-gradient-to-br from-black/5 to-transparent overflow-hidden flex items-center justify-center p-6 sm:p-10 group cursor-zoom-in"
                      onClick={openLightbox}
                      title="Click to enlarge"
                    >
                       {/* Ambient background glows */}
                       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-60 mix-blend-multiply">
                         <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-[var(--accent-primary)]/20 rounded-full blur-[80px]"></div>
                         <div className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-[var(--accent-secondary)]/20 rounded-full blur-[80px]"></div>
                       </div>

                       <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                          <motion.div
                            key={activeSlideIndex}
                            custom={slideDirection}
                            initial={(dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 })}
                            animate={{ x: 0, opacity: 1 }}
                            exit={(dir: number) => ({ x: dir < 0 ? 100 : -100, opacity: 0 })}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-0 w-full h-full flex items-center justify-center p-6 sm:p-10"
                          >
                             <img
                               src={selectedProject.demo.images[activeSlideIndex].url}
                               alt={selectedProject.demo.images[activeSlideIndex].alt}
                               className="relative z-10 w-auto h-full max-h-full object-contain rounded-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.25)] bg-white ring-1 ring-black/10"
                             />
                          </motion.div>
                       </AnimatePresence>
                    </div>

                    {/* Footer Caption */}
                    <div className="shrink-0 p-5 bg-white border-t border-black/5 relative z-20">
                       <AnimatePresence mode="wait">
                          <motion.div
                            key={activeSlideIndex}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h6 className="font-display font-bold text-lg text-[var(--text-primary)] mb-1">
                              {selectedProject.demo.images[activeSlideIndex].captionTitle}
                            </h6>
                            <p className="text-[var(--text-secondary)] leading-relaxed text-xs">
                              {selectedProject.demo.images[activeSlideIndex].captionBody}
                            </p>
                          </motion.div>
                       </AnimatePresence>
                    </div>
                 </div>
               );

               // Wrap with PasscodeGate ONLY if it's smart-assistant
               if (selectedProject.id === 'smart-assistant') {
                 return (
                   <PasscodeGate
                     title="Unlock Visuals"
                     description="A secure passcode is required to view behind-the-scenes product architectures and live demos."
                     bgImageUrl={selectedProject.demo.images[0].url}
                   >
                     {galleryContent}
                   </PasscodeGate>
                 );
               }

               return galleryContent;
             })()}
           </motion.div>
        </div>
        {/* Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12" role="dialog" aria-modal="true">
               {/* Backdrop */}
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }} 
                 transition={{ duration: 0.3 }}
                 className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out" 
                 onClick={closeLightbox} 
               />
               
               {/* Modal Content - Scrollable Image */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }} 
                  animate={{ opacity: 1, scale: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="relative w-full max-w-6xl h-full bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
               >
                 {/* Header */}
                 <div className="shrink-0 h-16 border-b border-black/10 flex items-center justify-between px-6 bg-white relative z-20">
                   <div className="text-[var(--text-primary)] font-display text-lg font-bold">{selectedProject.title}</div>
                   <div className="flex gap-4 items-center">
                     <span className="text-[var(--text-secondary)] text-sm font-medium tracking-widest uppercase hidden sm:block">
                        {activeSlideIndex + 1} / {selectedProject.demo.totalScreens}
                     </span>
                     <button 
                       onClick={closeLightbox} 
                       className="p-2 -mr-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-full transition-colors bg-black/5 hover:bg-black/10" 
                     >
                       <X className="w-5 h-5" />
                     </button>
                   </div>
                 </div>

                 {/* Fitted Image Area */}
                 <div className="flex-1 overflow-hidden bg-black/5 relative group/lightbox" onClick={closeLightbox}>
                    <div className="w-full h-full flex items-center justify-center p-4 sm:p-8 cursor-auto" onClick={(e) => e.stopPropagation()}>
                       <img
                         src={selectedProject.demo.images[activeSlideIndex].url}
                         alt={selectedProject.demo.images[activeSlideIndex].alt}
                         className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-lg ring-1 ring-black/10 bg-white"
                       />
                    </div>
                    
                    {/* Navigation Buttons */}
                    {selectedProject.demo.totalScreens > 1 && (
                      <>
                        <div className="fixed top-1/2 -translate-y-1/2 left-4 sm:left-8 z-30" onClick={(e) => { e.stopPropagation(); prevSlide();}}>
                           <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-black/10 text-black flex items-center justify-center hover:bg-white hover:scale-105 transition-all">
                             <ChevronLeft className="w-6 h-6" />
                           </button>
                        </div>
                        <div className="fixed top-1/2 -translate-y-1/2 right-4 sm:right-8 z-30" onClick={(e) => { e.stopPropagation(); nextSlide();}}>
                           <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-black/10 text-black flex items-center justify-center hover:bg-white hover:scale-105 transition-all">
                             <ChevronRight className="w-6 h-6" />
                           </button>
                        </div>
                      </>
                    )}
                 </div>
               </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
