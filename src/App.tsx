import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import SideElements from './components/SideElements';
import { PasscodeProvider } from './context/PasscodeContext';

export default function App() {
  return (
    <PasscodeProvider>
      <div className="relative min-h-screen antialiased selection:bg-[var(--accent-primary)] selection:text-white font-sans text-[var(--text-primary)]">
        
        {/* Global Background */}
        <div className="fixed inset-0 z-[-1] bg-white overflow-hidden">
          {/* Subtle grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
        </div>

        <SideElements />

        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <CaseStudies />
          <Experience />
        </main>
        <Contact />
        <footer className="py-6 text-center text-sm text-[var(--text-secondary)] border-t border-black/5 bg-transparent backdrop-blur-sm relative z-10">
          © {new Date().getFullYear()} Abhishek Kumar. Built for impact.
        </footer>
      </div>
    </PasscodeProvider>
  );
}
