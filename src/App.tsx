import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Readings from './components/Readings';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.05,
        duration: 1.2,
        smoothWheel: true,
      }
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="bg-mystic-black min-h-screen text-white font-sans selection:bg-mystic-pink selection:text-white">
      <Navbar />
      <FloatingIcons />
      
      <div>
        <main>
          <Hero />
          <About />
          <Readings />
          <Cards />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

