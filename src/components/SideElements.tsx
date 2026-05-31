import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SideElements() {
  return (
    <>
      {/* Left side social icons */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden lg:flex fixed bottom-0 left-6 xl:left-10 z-40 flex-col items-center gap-6"
      >
        <a href="https://github.com/akimabhishek?tab=repositories" target="_blank" rel="noreferrer" className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-300">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/akimabhishek/" target="_blank" rel="noreferrer" className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-300">
          <Linkedin className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-24 bg-[var(--text-secondary)]/30 mt-2"></div>
      </motion.div>

      {/* Right side floating email */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden lg:flex fixed bottom-0 right-6 xl:right-10 z-40 flex-col items-center gap-6"
      >
        <a 
          href="mailto:akimabhishek.iit@gmail.com" 
          className="text-sm font-mono tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:-translate-y-1 transition-all duration-300"
          style={{ writingMode: 'vertical-rl' }}
        >
          akimabhishek.iit@gmail.com
        </a>
        <div className="w-[1px] h-24 bg-[var(--text-secondary)]/30 mt-2"></div>
      </motion.div>

      {/* Decorative vertical lines on far edges */}
      <div className="hidden 2xl:block fixed top-0 bottom-0 left-[3rem] w-[1px] bg-gradient-to-b from-transparent via-black/[0.05] to-transparent z-[-1] pointer-events-none"></div>
      <div className="hidden 2xl:block fixed top-0 bottom-0 right-[3rem] w-[1px] bg-gradient-to-b from-transparent via-black/[0.05] to-transparent z-[-1] pointer-events-none"></div>

      {/* Main content bounds lines */}
      <div className="hidden md:block fixed top-0 bottom-0 left-0 md:left-24 lg:left-32 xl:left-40 2xl:left-[15%] w-[1px] bg-black/[0.03] z-[-1] pointer-events-none"></div>
      <div className="hidden md:block fixed top-0 bottom-0 right-0 md:right-24 lg:right-32 xl:right-40 2xl:right-[15%] w-[1px] bg-black/[0.03] z-[-1] pointer-events-none"></div>
      
      {/* HUD Accents */}
      <div className="hidden 2xl:block fixed top-[20%] left-[3rem] w-1 h-8 bg-[var(--accent-primary)]/40 z-[-1]"></div>
      <div className="hidden 2xl:block fixed bottom-[20%] right-[3rem] w-1 h-8 bg-[var(--accent-primary)]/40 z-[-1]"></div>
    </>
  );
}
