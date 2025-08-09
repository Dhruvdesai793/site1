"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BrandToolsSection({ onGenerateLogo }) {
  return (
    <section className="py-32 bg-gray-950/50"> {/* Increased padding and a darker, subtle background for depth */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg font-medium text-gray-400 tracking-wide uppercase" // Subtle, high-end sub-heading
          >
            Seamlessly from Idea to Icon
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-6xl font-extrabold text-white tracking-tighter leading-tight" // Larger, bolder title
          >
            Your Brand, Curated by AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We don’t just generate a name. We craft a complete digital identity, ensuring every detail is perfect, available, and ready for you to own.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="group rounded-3xl p-8 bg-black/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-black/60">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Digital Foundation
            </div>
            <div className="mt-4 text-white text-3xl font-light tracking-tighter">
              example.com
            </div>
            <div className="mt-2 text-gray-400">
              Check domain availability instantly.
            </div>
          </div>

          <div className="group rounded-3xl p-8 bg-black/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-black/60">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
              Global Presence
            </div>
            <div className="mt-4 text-white text-3xl font-light tracking-tighter">
              @example
            </div>
            <div className="mt-2 text-gray-400">
              Verify social media handles across platforms.
            </div>
          </div>

          <div className="group rounded-3xl p-8 bg-black/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-black/60 flex flex-col justify-between">
            <div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                Visual Identity
              </div>
              <div className="mt-4 text-white text-3xl font-light tracking-tighter">
                Logo Suite
              </div>
              <div className="mt-2 text-gray-400">
                Generate a unique icon for your brand.
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={onGenerateLogo}
                className="w-full rounded-full py-4 text-lg font-bold text-black bg-white transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl" // Bolder, more prominent button with a subtle hover effect
              >
                Create My Logo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}