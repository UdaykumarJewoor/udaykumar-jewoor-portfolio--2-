import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[32px] md:rounded-[40px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 md:p-12 lg:p-16 bg-brand-primary text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's build something <br />extraordinary.</h2>
                <p className="text-white/80 mb-12 text-base md:text-lg max-w-md">
                  Whether you have a question or just want to say hi, my inbox is always open.
                </p>

                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Mail size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] md:text-sm">Email me at</p>
                      <a href={`mailto:${RESUME_DATA.email}`} className="text-base md:text-lg font-semibold hover:underline break-all">{RESUME_DATA.email}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Phone size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] md:text-sm">Call me at</p>
                      <a href={`tel:${RESUME_DATA.phone}`} className="text-base md:text-lg font-semibold hover:underline">{RESUME_DATA.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <MapPin size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] md:text-sm">Location</p>
                      <p className="text-base md:text-lg font-semibold">{RESUME_DATA.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-16">
                  {[
                    { icon: Github, href: RESUME_DATA.github },
                    { icon: Linkedin, href: RESUME_DATA.linkedin },
                    { icon: Globe, href: RESUME_DATA.website }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Decorative Circles */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute top-20 -left-20 w-40 h-40 bg-brand-secondary/20 rounded-full blur-2xl" />
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12 lg:p-16">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--theme-text-heading)' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--theme-text-secondary)' }} className="max-w-xs">
                    Thank you for reaching out. I've received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-brand-primary font-bold hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" style={{ color: 'var(--theme-text-secondary)' }}>Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all"
                        style={{
                          background: 'var(--theme-input-bg)',
                          border: '1px solid var(--theme-input-border)',
                          color: 'var(--theme-text-primary)',
                        }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" style={{ color: 'var(--theme-text-secondary)' }}>Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all"
                        style={{
                          background: 'var(--theme-input-bg)',
                          border: '1px solid var(--theme-input-border)',
                          color: 'var(--theme-text-primary)',
                        }}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: 'var(--theme-text-secondary)' }}>Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all"
                      style={{
                        background: 'var(--theme-input-bg)',
                        border: '1px solid var(--theme-input-border)',
                        color: 'var(--theme-text-primary)',
                      }}
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: 'var(--theme-text-secondary)' }}>Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all resize-none"
                      style={{
                        background: 'var(--theme-input-bg)',
                        border: '1px solid var(--theme-input-border)',
                        color: 'var(--theme-text-primary)',
                      }}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                      <AlertCircle size={16} />
                      {errorMessage}
                    </div>
                  )}

                  <motion.button
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={18} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
