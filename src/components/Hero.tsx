import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-16 relative overflow-hidden bg-transparent">
      {/* Removed the static old background decoration since we have a global dynamic one now */}

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Left Content - Large Image Outline */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="flex-1 flex justify-center md:justify-end w-full"
        >
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden glass-panel relative flex items-center justify-center group flex-shrink-0 text-center rotate-[-2deg] hover:rotate-[0deg] transition-all duration-500 shadow-[0_0_40px_rgba(190,83,244,0.15)] hover:shadow-[0_0_60px_rgba(190,83,244,0.3)] border border-white/10 hover:border-[var(--accent-primary)]">
            <span className="text-[var(--text-secondary)] font-semibold tracking-widest flex items-center justify-center w-full h-full text-[10px] uppercase absolute z-0 bg-transparent px-4 leading-relaxed">
              Upload photo to <br/>public/images/profile.png
            </span>
            <img 
              src="/images/profile.png" 
              alt="Abhishek Kumar" 
              className="w-full h-full object-cover relative z-10 transition-all duration-700 group-hover:scale-105" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
          </div>
        </motion.div>

        {/* Right Content - Text and Circular Buttons */}
        <div className="flex-1 space-y-8 text-center md:text-left">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-col items-center md:items-start"
           >
             <h1 className="text-6xl lg:text-[6rem] font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] leading-[1] tracking-tight mb-4">
               Hello.
             </h1>
             <div className="text-sm lg:text-base font-bold tracking-[0.2em] text-[var(--accent-primary)] uppercase mb-3 glow-text">
               I'm Abhishek Kumar
             </div>
             <p className="text-base lg:text-lg text-[var(--text-secondary)] font-light max-w-xl leading-[1.6] border-t md:border-t-0 md:border-l-2 border-[var(--accent-primary)] pt-4 md:pt-1 md:pl-5">
               Product Manager with 5 years of expertise building intelligent systems for lead generation and agentic automation. Proven 0→1 success at Justdial shipping a comprehensive voice analysis pipeline, predictive lead-scoring models, and a board-level conversational AI bot PoC.
             </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-wrap justify-center md:justify-start gap-4 lg:gap-6 pt-6"
           >
             <a href="https://drive.google.com/file/d/1ueZA3ttZpNjI5Pw8Z6qwBsFztjONf8G3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full glass-panel glass-panel-hover text-[var(--text-primary)] flex flex-col items-center justify-center text-[10px] lg:text-xs font-bold uppercase tracking-widest relative overflow-hidden group">
               <div className="absolute inset-0 bg-[var(--accent-primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
               <span className="relative z-10 group-hover:glow-text">Resume</span>
             </a>
             <a href="#projects" className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full glass-panel glass-panel-hover text-[var(--text-primary)] flex items-center justify-center text-[10px] lg:text-xs font-bold uppercase tracking-widest relative overflow-hidden group">
               <div className="absolute inset-0 bg-[var(--accent-primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
               <span className="relative z-10 group-hover:glow-text">Products</span>
             </a>
             <a href="#case-studies" className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full glass-panel glass-panel-hover text-[var(--text-primary)] flex items-center justify-center text-[10px] lg:text-xs font-bold uppercase tracking-widest relative overflow-hidden group">
               <div className="absolute inset-0 bg-[var(--accent-primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
               <span className="relative z-10 group-hover:glow-text">Projects</span>
             </a>
             <a href="#contact" className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full bg-transparent border border-[var(--text-secondary)] text-[var(--text-secondary)] flex items-center justify-center text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300 hover:glow-text">
               Contact
             </a>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
