import { Mail, Linkedin, Github, ChevronUp, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-32 bg-transparent text-[var(--text-primary)] relative overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
      
      {/* Decorative large typographic element in background */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-10 left-0 right-0 text-center select-none pointer-events-none"
      >
         <span className="font-display font-bold text-[15rem] leading-none whitespace-nowrap text-[var(--text-primary)]">CONTACT</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10"
      >
        <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--accent-primary)] uppercase mb-6">Let's Connect</h2>
        <h3 className="text-5xl md:text-7xl font-display font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">Get in Touch</h3>
        <p className="text-[var(--text-secondary)] opacity-80 font-light max-w-xl mx-auto mb-16 text-xl leading-relaxed">
          Open to senior PM roles in AI/ML, product-tech, and agentic systems. Feel free to reach out to discuss a project.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href="tel:+919897632069" className="group flex items-center justify-center gap-3 px-8 py-5 bg-[var(--bg-surface)] border border-black/10 hover:border-[var(--accent-primary)] rounded-sm transition-all w-full md:w-auto hover:bg-[var(--accent-primary)]">
            <Phone className="w-5 h-5 text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors" />
            <span className="font-medium tracking-wide text-sm whitespace-nowrap text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">+91-9897632069</span>
          </a>
          <a href="mailto:akimabhishek.iit@gmail.com" className="group flex items-center justify-center gap-3 px-8 py-5 bg-[var(--bg-surface)] border border-black/10 hover:border-[var(--accent-primary)] rounded-sm transition-all w-full md:w-auto hover:bg-[var(--accent-primary)]">
            <Mail className="w-5 h-5 text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors" />
            <span className="font-medium tracking-wide text-sm whitespace-nowrap text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">akimabhishek.iit@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/akimabhishek/" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 px-8 py-5 bg-[var(--bg-surface)] border border-black/10 hover:border-[var(--accent-primary)] rounded-sm transition-all w-full md:w-auto hover:bg-[var(--accent-primary)]">
            <Linkedin className="w-5 h-5 text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors" />
            <span className="font-medium tracking-wide text-sm text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">LinkedIn</span>
          </a>
          <a href="https://github.com/akimabhishek?tab=repositories" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 px-8 py-5 bg-[var(--bg-surface)] border border-black/10 hover:border-[var(--accent-primary)] rounded-sm transition-all w-full md:w-auto hover:bg-[var(--accent-primary)]">
            <Github className="w-5 h-5 text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors" />
            <span className="font-medium tracking-wide text-sm text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">GitHub</span>
          </a>
        </div>
      </motion.div>
      
      <button 
        onClick={scrollToTop}
        className="absolute bottom-12 right-6 lg:right-12 w-14 h-14 bg-[var(--bg-surface)] border border-black/10 hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] rounded-full flex items-center justify-center transition-all group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] group-hover:-translate-y-1 transition-all" />
      </button>
    </section>
  );
}
