import React from 'react';
import { motion } from 'motion/react';

import { INSTAGRAM_URL } from '../constants';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/10"
    >
      <div className="text-2xl font-serif font-bold text-gradient tracking-wider">
       Persephone
      </div>
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium text-white/70">
        <a href="#about" className="hover:text-mystic-pink transition-colors">About</a>
        <a href="#readings" className="hover:text-mystic-pink transition-colors">Readings</a>
        <a href="#cards" className="hover:text-mystic-pink transition-colors">Cards</a>
        <a href="#contact" className="hover:text-mystic-pink transition-colors">Contact</a>
      </div>
      <a 
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 rounded-full glass-pink text-white text-xs font-bold tracking-widest hover:bg-mystic-pink/20 transition-all"
      >
        BOOK NOW
      </a>
    </motion.nav>
  );
};

export default Navbar;
