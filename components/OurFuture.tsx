
import React from 'react';
import { motion } from 'framer-motion';

const OurFuture: React.FC = () => {
  return (
    <section className="space-y-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center"
      >
        <h2 className="font-serif text-3xl text-[#800020] italic">This Is Only The Beginning</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6 text-[#3E2723]/90 leading-relaxed text-center"
      >
        <p>One day, we will look back at this season and smile.</p>
        <div className="flex justify-center gap-4 text-xs opacity-50 uppercase tracking-widest">
          <span>Struggles</span> • <span>Delays</span> • <span>Uncertainty</span>
        </div>
        <p>Because it didn’t break us. It built us.</p>
        <p>Whether it’s the UK, Canada, France, or Italy - I don’t just want to travel the world.</p>
        <p className="font-serif text-xl italic text-[#800020]">I want to build it with you.</p>
        
        <div className="pt-8 space-y-4 border-t border-[#800020]/10 max-w-xs mx-auto">
          <p className="text-sm italic">I may not have everything figured out yet…</p>
          <p className="font-medium">But I promise you this:</p>
          <p className="text-lg font-serif">I will never stop building a future worthy of us.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default OurFuture;
