"use client";
import React from "react";
import { motion } from "framer-motion";
import ParticleCard from "@/components/ParticleCard";

export default function GeneratedNamesSection({ names = [], onCopy, onLike, onSave }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Dark-themed, blurred abstract gradient background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(30,58,68,0.3) 0%, transparent 70%), linear-gradient(180deg, rgba(18,24,31,0.6) 0%, rgba(18,24,31,0) 100%)",
          filter: "blur(80px)",
          opacity: 0.8,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter text-center">
            Your Next Brand, Curated.
          </h2>
          <p className="mt-4 text-xl text-gray-400 text-center max-w-2xl mx-auto">
            Discover a gallery of names, each crafted by AI and ready for your brand.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {names.map((n, i) => (
            <motion.div variants={itemVariants} key={i} className="group relative">
              <ParticleCard
                className="rounded-3xl p-8 border border-white/10 bg-black/70 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20"
                glowColor="10,182,188"
                enableTilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="text-white font-extrabold text-4xl tracking-tight leading-tight">{n.name}</div>
                    <div className="mt-4 text-md text-gray-400">{n.tagline}</div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <button
                      onClick={() => onCopy(n)}
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-[#F6F6F6] transition-colors duration-200 hover:bg-white/10"
                      aria-label="Copy name"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </button>
                    <button
                      onClick={() => onLike(n)}
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-[#F6F6F6] transition-colors duration-200 hover:bg-white/10"
                      aria-label="Like name"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button
                      onClick={() => onSave(n)}
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#0AB6BC] to-[#045C43] text-black transition-all duration-300 hover:scale-105"
                      aria-label="Save name"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                    </button>
                  </motion.div>
                </div>
              </ParticleCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
