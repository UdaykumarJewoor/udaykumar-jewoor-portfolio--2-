import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <div className="noise" />
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-20" style={{ borderTop: '1px solid var(--theme-footer-border)', backgroundColor: 'var(--theme-bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
            <div className="text-center md:text-left">
              <div className="text-2xl font-black mb-4 tracking-tighter" style={{ color: 'var(--theme-text-heading)' }}>UJ<span className="text-brand-primary">.</span></div>
              <p className="max-w-xs mx-auto md:mx-0" style={{ color: 'var(--theme-text-muted)' }}>Building the future of software with precision and passion.</p>
            </div>
            
            <div className="flex gap-12 md:gap-24">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--theme-text-faint)' }}>Navigation</span>
                <a href="#about" className="hover:text-brand-primary transition-colors text-sm" style={{ color: 'var(--theme-text-secondary)' }}>About</a>
                <a href="#projects" className="hover:text-brand-primary transition-colors text-sm" style={{ color: 'var(--theme-text-secondary)' }}>Projects</a>
                <a href="#contact" className="hover:text-brand-primary transition-colors text-sm" style={{ color: 'var(--theme-text-secondary)' }}>Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--theme-text-faint)' }}>Social</span>
                <a href="#" className="hover:text-brand-primary transition-colors text-sm" style={{ color: 'var(--theme-text-secondary)' }}>LinkedIn</a>
                <a href="#" className="hover:text-brand-primary transition-colors text-sm" style={{ color: 'var(--theme-text-secondary)' }}>GitHub</a>
                <a href="#" className="hover:text-brand-primary transition-colors text-sm" style={{ color: 'var(--theme-text-secondary)' }}>Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 text-center text-[10px] uppercase tracking-[0.2em]" style={{ borderTop: '1px solid var(--theme-footer-border)', color: 'var(--theme-text-muted)' }}>
            © {new Date().getFullYear()} Udaykumar Jewoor — Crafted with Passion
          </div>
        </div>
      </footer>
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: `radial-gradient(circle at 50% 50%, var(--theme-radial-glow), transparent 50%)` }} />
      </div>
    </div>
  );
}
