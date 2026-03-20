import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';

import { INSTAGRAM_URL } from '../constants';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[500px] h-[500px] bg-mystic-purple/10 rounded-full blur-[120px] -z-10"
      />
      
      <div className="z-10 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-mystic-pink uppercase tracking-[0.5em] text-sm mb-6 font-semibold"
        >
          Unveil Your Destiny
        </motion.p>
        
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight"
        >
          Guidance from the <br />
          <span className="text-gradient italic">Celestial Realms</span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Explore the hidden truths of your past, present, and future through the ancient wisdom of Tarot.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href=INSTAGRAM_URL
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-mystic-pink text-white font-bold rounded-full hover:bg-mystic-pink/80 transition-all shadow-lg shadow-mystic-pink/20 flex items-center justify-center"
          >
            START YOUR JOURNEY
          </a>
          <a 
            href="#readings"
            className="px-10 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
          >
            LEARN MORE
          </a>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
