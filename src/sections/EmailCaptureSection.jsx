"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function EmailCaptureSection({ onSubscribe }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe(email);
    setEmail(""); // Clear input after submission
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-zinc-950/50">
      {/* Subtle radial gradient background effect for depth */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(1000px 600px at 50% 50%, rgba(10,182,188,0.08), transparent 60%)",
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium text-gray-400 tracking-wide uppercase mb-3"
        >
          Unleash More Creativity
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight"
        >
          Elevate Your Brand Ideation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Gain exclusive access to our premium AI-generated name sets and advanced insights directly in your inbox.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 bg-black/70 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center shadow-2xl backdrop-blur-sm"
        >
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.vision@company.com"
            className="flex-1 w-full bg-transparent outline-none p-4 text-xl text-white placeholder:text-gray-500 rounded-lg focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto rounded-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-black font-bold text-lg shadow-lg transition-all duration-300"
          >
            Unlock Exclusive Names
          </motion.button>
        </motion.form>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-md text-gray-500"
        >
          No spam. Just intelligent insights and unparalleled name creativity.
        </motion.p>
      </div>
    </section>
  );
}
