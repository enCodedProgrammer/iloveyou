
import React from 'react';
import { motion } from 'framer-motion';

const HowItStarted: React.FC = () => {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-serif text-2xl text-[#800020] mb-6">Before We Knew What We Were Becoming🌻</h2>
        <div className="space-y-4 text-base leading-relaxed text-[#3E2723]/90">
          <p>We didn’t know how deep this would go.🤷‍♀️</p>
          <p>We were cautious and hoping to heal❤️‍🩹</p>
          <p>We didn’t know how many memories we would create.</p>
          <p>We just knew we enjoyed each other.</p>
          <p className="font-serif italic text-lg">And somehow… that became everything.</p>
        </div>

      </motion.div>
    </section>
  );
};

export default HowItStarted;
