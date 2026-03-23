import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-mystic-pink/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-mystic-purple/10 rounded-full blur-[80px]" />
        
        <div className="relative z-10 text-center">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-mystic-pink uppercase tracking-widest text-sm font-bold mb-4"
          >
            Connect with Me
          </motion.h2>
          <motion.h3 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white mb-12"
          >
            Ready to Find <br /><span className="italic">Your Answers?</span>
          </motion.h3>
          
          <div className="flex justify-center mt-12 mb-4">
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group flex items-center gap-6 px-10 py-6 md:px-14 md:py-8 rounded-full glass-pink hover:bg-mystic-pink/20 transition-all overflow-hidden shimmer-hover border border-mystic-pink/40 shadow-[0_0_40px_-10px_rgba(255,105,180,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,105,180,0.6)] hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <Instagram className="text-white relative z-10" size={28} />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-sm md:text-base uppercase tracking-[0.2em] font-bold text-white mb-1 group-hover:text-mystic-pink transition-colors">
                  Reach Out on Instagram
                </span>
                <span className="text-xs text-white/60">
                  @ishika_Persephone
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
