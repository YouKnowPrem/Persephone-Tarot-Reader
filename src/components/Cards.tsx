import React from 'react';
import { motion } from 'motion/react';

const cardDecks = [
  {
    name: "Tarot of the Divine",
    type: "Folklore & Mythology",
    benefits: "Inspired by deities, folklore, and fairy tales from around the world. Perfect for deep narrative readings and universal wisdom.",
    image: "https://picsum.photos/seed/divine-tarot/400/600"
  },
  {
    name: "The Green Witch's Oracle",
    type: "Natural Magic",
    benefits: "Embrace the wisdom of natural magic and witchcraft. Ideal for grounding, healing, and connecting with the earth's rhythms.",
    image: "https://picsum.photos/seed/green-witch/400/600"
  },
  {
    name: "Angelic Vibrations Oracle",
    type: "Celestial Guidance",
    benefits: "A 50-card deck offering high-vibrational angelic insights. Best for spiritual upliftment and divine protection.",
    image: "https://picsum.photos/seed/angelic-vibrations/400/600"
  },
  {
    name: "Wild Unknown Animal Spirit",
    type: "Intuitive Instinct",
    benefits: "A pocket-sized deck exploring the animal kingdom's spiritual archetypes. Great for quick, intuitive, and primal insights.",
    image: "https://picsum.photos/seed/animal-spirit/400/600"
  }
];

const Cards = () => {
  return (
    <section id="cards" className="py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <motion.h2 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            className="text-mystic-pink uppercase tracking-widest text-sm font-bold mb-4"
          >
            The Tools of Divination
          </motion.h2>
          <motion.h3 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Sacred Decks & <span className="italic">Their Power</span>
          </motion.h3>
        </div>
        <motion.p 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/50 max-w-sm"
        >
          Each reading is unique. I choose the deck that resonates most with your current energy and questions.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardDecks.map((deck, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[2/3] rounded-3xl overflow-hidden mb-8 glass p-2">
              <div className="w-full h-full overflow-hidden rounded-2xl relative">
                <img 
                  src={deck.image} 
                  alt={deck.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mystic-black to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 rounded-full glass-pink text-[10px] font-bold uppercase tracking-widest text-white">
                    {deck.type}
                  </span>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-serif text-white mb-3">{deck.name}</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              {deck.benefits}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
