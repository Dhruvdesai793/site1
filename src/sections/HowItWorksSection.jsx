"use client";
import React from "react";
import { motion } from "framer-motion";
import MagicBento from "../components/MagicBento";

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Section Heading */}
      <div className="mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl font-semibold text-white mb-8 md:text-3xl lg:text-4xl"
        >
          How It Works
        </motion.h3>

        {/* MagicBento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-screen-xl mx-auto"
        >
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={42}
            glowColor="0, 111, 127"
            className='h-full w-full'
          />
        </motion.div>
      </div>
    </section>
  );
}