
import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ month, title, details, index }: { month: string, title: string, details: React.ReactNode, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="relative pl-8 border-l border-[#800020]/20 pb-12 last:pb-0"
  >
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#800020]" />
    <span className="block text-xs uppercase tracking-[0.2em] text-[#800020] mb-2 font-medium">{month}</span>
    <h3 className="font-serif text-xl mb-3">{title}</h3>
    <div className="text-[#3E2723]/80 leading-relaxed text-sm">
      {details}
    </div>
  </motion.div>
);

const Timeline: React.FC = () => {
  return (
    <section className="space-y-12">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-serif text-2xl text-center mb-12 italic"
      >
        Our Journey Together
      </motion.h2>

      <div className="space-y-0">
        <TimelineItem 
          month="June 2025"
          title="We made it official."
          details={<p>We chose each other - intentionally.</p>}
          index={0}
        />
        <TimelineItem 
          month="July – September"
          title="Dates. Laughter. Long conversations."
          details={<p>Learning each other’s fears and dreams.</p>}
          index={1}
        />
        <TimelineItem 
          month="October – November"
          title="Two dreamers planning bigger."
          details={
            <div className="space-y-2">
              <p>We started talking about the future seriously.</p>
              <div className="flex gap-2 text-xs font-bold text-[#800020] mt-2">
              </div>
            </div>
          }
          index={2}
        />
        <TimelineItem 
          month="December – February"
          title="The season that tested me."
          details={
            <div className="space-y-3">
              <p>Financially unstable. Plans delayed. Pressure heavy.</p>
              <p className="italic border-l-2 border-[#800020]/10 pl-4 py-1">But one thing never changed -</p>
              <p className="font-medium text-[#3E2723]">You stayed. You supported. You believed in me when I felt uncertain. And I will never forget that.</p>
            </div>
          }
          index={3}
        />
      </div>
    </section>
  );
};

export default Timeline;
