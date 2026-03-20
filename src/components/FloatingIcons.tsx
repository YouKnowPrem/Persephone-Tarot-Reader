import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Moon, Star, Sun } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[15%] text-mystic-pink/20"
      >
        <Moon size={48} />
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] right-[10%] text-mystic-purple/20"
      >
        <Star size={64} />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[20%] text-mystic-pink/10"
      >
        <Sparkles size={80} />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[70%] right-[25%] text-mystic-purple/15"
      >
        <Sun size={56} />
      </motion.div>
    </div>
  );
};

export default FloatingIcons;
