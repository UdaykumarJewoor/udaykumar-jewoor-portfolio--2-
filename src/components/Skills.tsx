import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Cloud, Layout, Cpu, Globe, Zap } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const skillIcons: Record<string, any> = {
  backend: Cpu,
  frontend: Layout,
  databases: Database,
  devops: Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
              A curated stack of technologies I use to build resilient, scalable, and intelligent software solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(RESUME_DATA.skills).map(([key, category]: [string, any], i) => {
            const Icon = skillIcons[key] || Code2;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-[32px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <Icon size={28} />
                  </div>
                  <Zap size={20} style={{ color: 'var(--theme-text-faint)' }} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm mb-8 uppercase tracking-widest font-bold" style={{ color: 'var(--theme-text-muted)' }}>/ {key}</p>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.items.map((skill: string) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 rounded-xl text-sm hover:bg-brand-primary/10 hover:text-brand-primary transition-all cursor-default"
                      style={{
                        background: 'var(--theme-tag-bg)',
                        color: 'var(--theme-tag-text)',
                        border: '1px solid var(--theme-tag-border)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
