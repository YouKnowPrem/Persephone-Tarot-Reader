import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-serif font-bold text-gradient tracking-wider">
          MYSTIC AURA
        </div>
        
        <div className="flex space-x-8 text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">
          <a href="#" className="hover:text-mystic-pink transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-mystic-pink transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-mystic-pink transition-colors">Disclaimer</a>
        </div>
        
        <div className="text-[10px] uppercase tracking-widest text-white/30">
          © 2026 Mystic Aura. All rights reserved.
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/10 font-bold">
          AS ABOVE SO BELOW • AS WITHIN SO WITHOUT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
