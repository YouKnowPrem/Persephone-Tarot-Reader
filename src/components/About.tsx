import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-4">
            <img 
              src="src/components/Tarot_reader.png" 
              alt="Persephone Tarot Reader" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 glass-pink rounded-full flex items-center justify-center text-center p-6 border border-mystic-pink/30">
            <p className="text-xs font-bold text-white tracking-widest leading-tight">
              2+ YEARS OF DIVINE GUIDANCE
            </p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-mystic-pink uppercase tracking-widest text-sm font-bold mb-4">The Soul Behind the Cards</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">Meet Your Guide, <span className="italic">Persephone</span></h3>
          <div className="space-y-6 text-white/70 leading-relaxed text-lg">
            <p>
              I began my journey into the mystical arts two years ago, possessing the rare gift of looking into the future to provide profound clarity. My expertise lies in divination and prediction reading, helping you navigate the unknown with confidence.
            </p>
            <p>
              Specializing in love-related matters, career help, and time-frame readings, I've helped hundreds of clients overseas find their way. Whether you're wondering about a specific problem or seeking guidance for the months ahead, my readings are tailored to your unique energy.
            </p>
            <p>
              I use a variety of sacred decks, including Oracle cards for long-term forecasts, to translate the universe's messages into detailed, actionable insights. Every question you have is a step toward your true destiny.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-serif text-mystic-purple mb-1">100+</h4>
              <p className="text-xs uppercase tracking-widest text-white/40">Readings Done</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif text-mystic-purple mb-1">10+</h4>
              <p className="text-xs uppercase tracking-widest text-white/40">Countries Reached</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
