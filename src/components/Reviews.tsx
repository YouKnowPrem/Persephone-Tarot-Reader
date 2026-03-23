import React, { useRef } from 'react';
import { motion } from 'motion/react';

const reviewsData = [
  {
    name: "arayanna_sthri",
    text: "I love how she took time out to talk and explain and interpret the reading. Made me feel so connected even if the answer gave me a harsh truth. Many readers just give you a reading and stop right there. With her, I felt like I was talking to a friend guiding me through a situation. Yes, she is a novice, but I think it hardly matters. She is an angel.",
  },
  {
    name: "Jescro",
    text: "Can’t believe how amazing you are Ishika, thank you for taking the time to help me. I see you’ve helped a lot of other people here too. Thank you 🙏",
  },
  {
    name: "hellotheredani",
    text: "I asked for some reassurance, she delivered. She was kind and sensitive to the heavy information that I shared, and was very pleasant to talk to!",
  },
  {
    name: "KaleBerry197",
    text: "Great detailed reading. It reasonated. The reader is nice & encouraging. I definitely recommend them!",
  },
  {
    name: "Puddingwee",
    text: "She gave a really good reading and gave me suggestions based on her intuition instead of relying on the cards itself. Thank you! ☺️",
  },
  {
    name: "Nishi0000",
    text: "Received an amazing reading which was detailed and resonated a lot with me! Would recommend anyone who truly wants clarity!!",
  }
];

const Reviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-mystic-pink uppercase tracking-widest text-sm font-bold mb-4 text-center"
        >
          Kind Words
        </motion.h2>
        <motion.h3 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif text-white text-center mb-16"
        >
          Reader <span className="italic">Experiences</span>
        </motion.h3>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {reviewsData.map((review, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="snap-center shrink-0 w-[85vw] md:w-[400px] glass rounded-3xl p-8 flex flex-col justify-between"
              >
                <p className="text-white/80 text-sm leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full glass-pink flex items-center justify-center text-white font-serif font-bold">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{review.name}</h4>
                    <p className="text-white/50 text-xs text-mystic-pink">Tarot Reading</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://www.reddit.com/user/ishika_Persephone/comments/1l1hcom/latest_tarot_reading_reviews/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full glass-pink text-white text-sm font-bold tracking-widest hover:bg-mystic-pink/20 transition-all flex items-center gap-2"
          >
            READ MORE ON REDDIT
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
Reviews.tsx
