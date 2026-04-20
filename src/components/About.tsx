import React from 'react';
import { motion } from 'motion/react';
import { RESUME_DATA } from '../constants';
import { Shield, Target, Zap, Rocket, Code2, Layers, Braces, GitBranch } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">/ The Engineer</span>
            <h2 className="text-3xl md:text-7xl font-black mb-10 leading-none">
              SOLVING <br />
              <span className="text-gradient">COMPLEX</span> <br />
              PROBLEMS.
            </h2>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed font-medium" style={{ color: 'var(--theme-text-secondary)' }}>
              <p>
                A Software Engineer with <span style={{ color: 'var(--theme-text-heading)', fontWeight: 600 }}>3+ years</span> of experience crafting scalable backend systems and modern web applications. I build with <span style={{ color: 'var(--theme-text-heading)', fontWeight: 600 }}>Java, Spring Boot & React</span> — turning complex requirements into clean, production-ready solutions.
              </p>
              <p>
                Passionate about <span style={{ color: 'var(--theme-text-heading)', fontWeight: 600 }}>microservices, AI integration</span>, and writing code that scales. Currently exploring the intersection of traditional engineering and intelligent systems with <span style={{ color: 'var(--theme-text-heading)', fontWeight: 600 }}>Spring AI & OpenAI</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6 mt-14">
              {[
                { icon: Zap, label: "Performance", desc: "40% latency reduction" },
                { icon: Shield, label: "Security", desc: "JWT, OAuth & RBAC" },
                { icon: Layers, label: "Microservices", desc: "Event-driven design" },
                { icon: Rocket, label: "AI Integration", desc: "Spring AI & OpenAI" },
                { icon: Braces, label: "Clean Code", desc: "SOLID principles" },
                { icon: GitBranch, label: "CI/CD", desc: "Automated pipelines" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="space-y-3 p-4 rounded-2xl hover:bg-brand-primary/5 transition-all duration-300"
                  style={{
                    background: 'var(--theme-card-bg)',
                    border: '1px solid var(--theme-border)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--theme-border)';
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold text-sm md:text-base" style={{ color: 'var(--theme-text-heading)' }}>{item.label}</h4>
                  <p className="text-[10px] md:text-xs" style={{ color: 'var(--theme-text-muted)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="min-h-[500px] md:min-h-[600px] rounded-[32px] md:rounded-[48px] glass-card relative z-10 flex items-center justify-center p-8 md:p-12 group">
               <div className="text-center w-full">
                  <div className="relative mb-12 inline-block">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-linear-to-br from-brand-primary to-brand-secondary p-1 mx-auto relative z-10">
                      <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
                        {RESUME_DATA.profileImage ? (
                          <img 
                            src={RESUME_DATA.profileImage} 
                            alt={RESUME_DATA.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span className="text-4xl md:text-6xl font-black" style={{ color: 'var(--theme-text-heading)' }}>UJ</span>
                        )}
                      </div>
                    </div>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 md:-inset-6 border border-dashed border-brand-primary/30 rounded-full"
                    />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black mb-3" style={{ color: 'var(--theme-text-heading)' }}>{RESUME_DATA.name}</h3>
                  <p className="text-brand-secondary font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-10">{RESUME_DATA.title}</p>
                  
                  <div className="pt-10 grid grid-cols-2 gap-6 md:gap-8" style={{ borderTop: '1px solid var(--theme-border)' }}>
                    {[
                      { value: "3+", label: "Years Exp" },
                      { value: "20+", label: "Tech Skills" },
                      { value: "10+", label: "Projects" },
                      { value: "99.9%", label: "API Uptime" },
                    ].map((stat, i) => (
                      <motion.div 
                        key={i} 
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 * i }}
                      >
                        <div className="text-2xl md:text-3xl font-black" style={{ color: 'var(--theme-text-heading)' }}>{stat.value}</div>
                        <div className="text-[9px] md:text-[10px] uppercase font-black tracking-widest mt-1" style={{ color: 'var(--theme-text-muted)' }}>{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
