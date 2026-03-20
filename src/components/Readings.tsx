import React from 'react';
import { motion } from 'motion/react';
import { Heart, Briefcase, Sparkles, Moon, Clock, HelpCircle } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const readings = [
  {
    title: "Love & Relationships",
    description: "Deep dive into romantic connections, soulmates, or 'no contact' situations. Gain clarity on current or future partners.",
    icon: <Heart className="text-mystic-pink" size={24} />,
    price: "$35",
    message: "I would love to get a Love & Relationship tarot reading"
  },
  {
    title: "Career & Life Aspects",
    description: "A detailed exploration of two major life areas (e.g., Love and Career) with multiple questions answered in depth.",
    icon: <Briefcase className="text-mystic-purple" size={24} />,
    price: "$40",
    message: "I'm interested in a Career & Life Aspects reading"
  },
  {
    title: "Next Month Guidance",
    description: "A divination reading to prepare you for the energies, challenges, and opportunities of the upcoming month.",
    icon: <Moon className="text-white" size={24} />,
    price: "$30",
    message: "I'd like to book a Next Month Guidance reading"
  },
  {
    title: "6-Month Oracle Journey",
    description: "My most comprehensive forecast. Long-term guidance for the next 6 months using sacred Oracle decks.",
    icon: <Sparkles className="text-mystic-pink" size={24} />,
    price: "$50",
    message: "I'm ready for the 6-Month Oracle Journey"
  },
  {
    title: "Time Frame Reading",
    description: "Get clarity on a specific doubt regarding timing or a particular event coming your way.",
    icon: <Clock className="text-mystic-purple" size={24} />,
    price: "$10",
    message: "I have a specific doubt for a Time Frame reading"
  },
  {
    title: "1 Question In-Depth",
    description: "A focused, deep dive into one specific aspect or problem. Perfect for immediate clarity on a single issue.",
    icon: <HelpCircle className="text-white" size={24} />,
    price: "$15",
    message: "I have one specific question for an in-depth reading"
  },
  {
    title: "2 Questions Detailed",
    description: "Two specific questions answered in detail using 6-8 cards for profound and multi-layered insight.",
    icon: <HelpCircle className="text-mystic-pink" size={24} />,
    price: "$20",
    message: "I'd like to ask 2 detailed questions"
  },
  {
    title: "3 Questions Detailed",
    description: "Three specific questions explored thoroughly with 6-8 cards. Comprehensive answers for multiple concerns.",
    icon: <HelpCircle className="text-mystic-purple" size={24} />,
    price: "$25",
    message: "I have 3 questions for a detailed reading"
  }
];

const Readings = () => {
  return (
    <section id="readings" className="py-24 px-6 bg-mystic-black/50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-mystic-pink uppercase tracking-widest text-sm font-bold mb-4"
        >
          Divine Offerings
        </motion.h2>
        <motion.h3 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif text-white mb-6"
        >
          Choose Your <span className="italic">Path to Clarity</span>
        </motion.h3>
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 max-w-2xl mx-auto text-sm"
        >
          Everything is answered in detail. The depth of the reading depends on your chosen plan and questions.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {readings.map((reading, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-3xl border border-white/5 group relative flex flex-col h-full"
          >
            <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit">
              {reading.icon}
            </div>
            
            <h4 className="text-xl font-serif text-white mb-3">{reading.title}</h4>
            <p className="text-white/50 text-xs leading-relaxed mb-6 flex-grow">
              {reading.description}
            </p>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-mystic-pink font-bold text-lg">{reading.price}</span>
              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={`DM: ${reading.message}`}
                className="text-[10px] uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                Book Now →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Readings;
