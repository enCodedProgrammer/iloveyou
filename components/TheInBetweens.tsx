
import React from 'react';
import { motion } from 'framer-motion';

const TheInBetweens: React.FC = () => {
  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-serif text-3xl text-[#800020] mb-6">And in the in betweens we got used to each others company❤️</h2>
        <div className="space-y-4 text-lg leading-relaxed text-[#3E2723]/90">
          <p>Endless streams of conversations</p>
          <p>Deep conversations that got us to know and understand one another</p>
          <p>And every conversation was like an unraveling of the woman I want to spend my lif with 💖</p>
          <p className="font-serif italic text-xl">And somehow… that became everything.🥹</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-[#800020]/10">
          <p className="text-sm uppercase tracking-tighter opacity-60">
            June 1st, 2025 — The day we stopped playing and started building something real.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default TheInBetweens;
