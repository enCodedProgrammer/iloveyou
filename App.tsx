
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Heart, Music, Music2, VolumeX, Volume2, ChevronDown } from 'lucide-react';


// Components
import Hero from './components/Hero';
import HowItStarted from './components/HowItStarted';
import TheInBetweens from './components/TheInBetweens';
import  InBetweenScroll from "./components/InBetweenScroll"
import HeroVideo from './components/HeroVideo';
import Timelines from './components/Timeline';
import TheWoman from './components/TheWoman';
import OurFuture from './components/OurFuture';
import FinalLetter from './components/FinalLetter';
import BackgroundParticles from './components/BackgroundParticles';
import AudioControl from './components/AudioControl';
import SpotifyEmbed from './components/SpotifyEmbed';

const App: React.FC = () => {
  const [daysSince, setDaysSince] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Note: The user requested "June 1st, 2025"
    // Since this is technically in the future relative to Feb 2025, 
    // the math will show days since that date. 
    // If the date passed, it's positive. If it's upcoming, it's negative.
    const startDate = new Date('2025-06-01');
    const today = new Date();
    const diffTime = today.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysSince(diffDays);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">
      {/* Background Layer */}
      <BackgroundParticles />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#800020] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Audio Control */}
      <AudioControl />
      
      {/*<SpotifyEmbed />*/}
      {/* Main Content */}
      <main className="relative z-10 w-full max-w-lg mx-auto overflow-x-hidden">
        <Hero />
        
        <div className="px-6 space-y-32 py-20 pb-40">
          <HowItStarted />
        <HeroVideo />

          <InBetweenScroll />
          <TheInBetweens />
          <Timelines />
          <TheWoman />
          <OurFuture />
          <FinalLetter />
          
          {/* Footer Counter */}
          <footer className="text-center py-10 pt-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <Heart className="text-[#800020] animate-pulse" size={24} />
              <p className="text-sm tracking-widest uppercase opacity-60">
                {daysSince > 0 ? `${daysSince} Days Since June 1st, 2025` : `${Math.abs(daysSince)} Days Until June 1st, 2025`}
              </p>
              <p className="font-serif italic text-[#800020]">To the queen of my heart, with all my love.</p>
            </motion.div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
