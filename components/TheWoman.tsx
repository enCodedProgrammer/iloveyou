
import React from 'react';
import { motion } from 'framer-motion';

// Fixed: Use React.FC to define the component, which ensures that standard React props like 'key' are recognized correctly by TypeScript.
const Card: React.FC<{ text: string; delay: number }> = ({ text, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white/40 p-6 rounded-2xl shadow-sm border border-[#800020]/5 backdrop-blur-sm"
  >
    <p className="text-[#3E2723] font-serif text-lg">{text}</p>
  </motion.div>
);

const TheWoman: React.FC = () => {
  const traits = [
    "Your patience, and strength",
    "Your wisdom and wits.",
    "Your loyalty",
    "Your ability to love without keeping score.",
    "Your belief in our future."
  ];

  return (
    <section className="space-y-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-serif text-3xl text-[#800020] leading-tight"
      >
        Adunola, <br />
        What a Woman You Are 🥹
      </motion.h2>

      <div className="grid gap-4">
        {traits.map((trait, i) => (
          <Card key={i} text={trait} delay={i * 0.15} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pt-6 space-y-4 text-[#3E2723]/90 text-lg leading-relaxed"
      >
        <p>You are not just my girlfriend.</p>
        <p>You are my safe place.</p>
        <p>My partner in growth.</p>
        <p className="font-serif italic text-xl text-[#800020]">My reminder that love can feel peaceful.</p>
      </motion.div>
    </section>
  );
};

export default TheWoman;
