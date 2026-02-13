
import React from 'react';
import { motion } from 'framer-motion';

const FinalLetter: React.FC = () => {
  return (
    <section className="bg-white/60 p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#800020]/5 relative overflow-hidden">
      {/* Decorative letter element */}
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-8"
      >
        <h2 className="font-serif text-2xl text-[#800020] text-center mb-10">Happy Valentine’s Day, Blessing.</h2>

        <div className="space-y-6 text-[#3E2723]/90 leading-relaxed text-sm md:text-base">
          <p>I know this season hasn’t been perfect. I know I haven’t been able to give you everything I wish I could.</p>
          
          <p>But I need you to know something clearly:</p>
          <p className="font-serif text-lg italic text-[#800020]">My love for you has never been uncertain.</p>
          
          <p>You have seen me in stability. You have seen me in pressure. And you’re still here. That means more to me than any gift ever could.</p>
          
          <p>I don’t just love you for the good days. I love you for how you show up in the hard ones.</p>
          
          <p>And I promise; this is just a chapter. Not the whole story.</p>
          
          <p>Thank you for choosing me.💖</p>
        </div>

        <div className="pt-12 text-right">
          <p className="text-sm opacity-60 mb-1 italic">With love,</p>
          <p className="font-serif text-xl italic text-[#800020] pr-2">Ash 🤗.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalLetter;
