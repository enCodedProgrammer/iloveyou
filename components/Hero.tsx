
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import "./Hero.css"

const Hero: React.FC = () => {
  return (
    <section className="h-screen hero-bg w-full flex flex-col justify-center items-center relative px-8 text-center bg-cover bg-center" >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F8F5F0]/50 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 space-y-8"
      >
        <div className="space-y-4">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl text-[#3E2723] leading-tight"
          >
            November, 2025 - <br />
            <span className="italic text-[#800020]">The day our stars aligned perfectly🌻</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg opacity-80 max-w-xs mx-auto"
          >
            
            Love is creepy, it happens in places you'd least look.
          </motion.p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="bg-[#800020] text-[#F8F5F0] px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-shadow shadow-lg hover:shadow-rose-900/20"
        >
          Scroll Through Our Story
        </motion.button>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-30"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
