import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, EMAIL_ADDRESS } from '../constants';

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
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a href={`mailto:${EMAIL_ADDRESS}`} className="flex flex-col items-center p-8 rounded-3xl glass-pink hover:bg-mystic-pink/20 transition-all group relative overflow-hidden shimmer-hover">
              <Mail className="mb-4 text-white group-hover:scale-110 transition-transform" size={28} />
              <span className="text-xs uppercase tracking-widest font-bold text-white/80">Email Me</span>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 rounded-3xl glass hover:bg-white/10 transition-all group border-mystic-purple/20 relative overflow-hidden shimmer-hover">
              <Instagram className="mb-4 text-white group-hover:scale-110 transition-transform" size={28} />
              <span className="text-xs uppercase tracking-widest font-bold text-white/80">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
