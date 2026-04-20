import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'glass px-6 py-3 rounded-full shadow-2xl' : ''}`}
          style={isScrolled ? { boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' } : undefined}
        >
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-black tracking-tighter flex items-center gap-1 group"
            style={{ color: 'var(--theme-text-heading)' }}
          >
            <span className="group-hover:text-brand-primary transition-colors">UJ</span>
            <span className="text-brand-primary">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group"
                style={{ color: 'var(--theme-text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--theme-text-heading)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--theme-text-secondary)')}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle />
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2"
              style={{
                backgroundColor: 'var(--theme-navbar-cta-bg)',
                color: 'var(--theme-navbar-cta-text)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--theme-navbar-cta-hover-bg)';
                e.currentTarget.style.color = 'var(--theme-navbar-cta-hover-text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--theme-navbar-cta-bg)';
                e.currentTarget.style.color = 'var(--theme-navbar-cta-text)';
              }}
            >
              Let's Talk <ArrowRight size={14} />
            </motion.a>
          </div>

          {/* Mobile: Theme Toggle + Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center"
              style={{ color: 'var(--theme-text-heading)' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[-1] backdrop-blur-2xl md:hidden"
            style={{ backgroundColor: 'var(--theme-mobile-menu-bg)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 p-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black uppercase tracking-tighter hover:text-brand-primary transition-colors"
                  style={{ color: 'var(--theme-text-heading)' }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black uppercase tracking-tighter text-brand-primary"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
