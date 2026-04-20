import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import HeroScene from './HeroScene';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <HeroScene />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-brand-secondary text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
            style={{ background: 'var(--theme-card-bg)', border: '1px solid var(--theme-border)' }}
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>{RESUME_DATA.specialization}</span>
          </div>
          
          <h1 className="text-[32px] sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-[0.9]">
            <span className="block" style={{ color: 'var(--theme-text-heading)' }}>CRAFTING</span>
            <span className="text-gradient">DIGITAL</span>
            <span className="block" style={{ color: 'var(--theme-text-heading)' }}>SYSTEMS.</span>
          </h1>
          
          <p className="text-base md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-medium" style={{ color: 'var(--theme-text-secondary)' }}>
            I'm <span style={{ color: 'var(--theme-text-heading)' }}>{RESUME_DATA.name}</span>. I architect high-performance backend solutions and integrate cutting-edge AI to build the future of software.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-2xl transition-all"
              style={{
                backgroundColor: 'var(--theme-hero-btn-bg)',
                color: 'var(--theme-hero-btn-text)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
              }}
            >
              Explore My Work <ArrowRight size={20} />
            </motion.a>
            
            <div className="flex items-center gap-6">
              {[
                { icon: Github, href: RESUME_DATA.github },
                { icon: Linkedin, href: RESUME_DATA.linkedin },
                { icon: Mail, href: `mailto:${RESUME_DATA.email}` }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, color: '#8b5cf6' }}
                  className="transition-colors"
                  style={{ color: 'var(--theme-social-icon)' }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.02] select-none">
        <div className="text-[20vw] font-black leading-none animate-marquee">
          JAVA SPRING BOOT MICROSERVICES AI CLOUD KAFKA DOCKER KUBERNETES&nbsp;
        </div>
      </div>
    </section>
  );
}
