import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'py-4 glass-panel border-b border-white/5' : 'py-6 lg:py-8 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl tracking-tighter text-[var(--text-primary)] group">
          <span className="group-hover:text-[var(--accent-primary)] transition-all duration-300">AK</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#projects" className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors uppercase tracking-widest relative group">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#experience" className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors uppercase tracking-widest relative group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#case-studies" className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors uppercase tracking-widest relative group">
            Case Studies
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors uppercase tracking-widest relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-[var(--text-primary)] p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--bg-surface)] shadow-lg border-b border-black/10 py-4 flex flex-col md:hidden">
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-primary)] uppercase tracking-widest border-b border-black/5">Work</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-primary)] uppercase tracking-widest border-b border-black/5">Experience</a>
          <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-primary)] uppercase tracking-widest border-b border-black/5">Case Studies</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-primary)] uppercase tracking-widest">Contact</a>
        </div>
      )}
    </nav>
  );
}
