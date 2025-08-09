'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Header({ onOpenMobile }) {
  const navItems = ['Features', 'Pricing', 'Testimonials', 'Blog'];

  const navLinkVariants = {
    initial: { y: 0, color: 'rgba(255, 255, 255, 0.6)' },
    hover: { y: -4, color: '#22D3EE', transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { y: -2, scale: 1.05, boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-['Inter'] font-sans">
      <div className="backdrop-blur-2xl bg-black/80 border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between gap-10">
          <motion.div
            className="flex items-center gap-4 cursor-pointer"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
              NF
            </div>
            <div className="text-white text-3xl font-extrabold tracking-tighter">NameForge</div>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-semibold text-white/60 relative group"
                variants={navLinkVariants}
                initial="initial"
                whileHover="hover"
              >
                {item}
                <motion.span
                  className="absolute left-0 bottom-[-6px] w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
            <motion.button
              className="ml-6 rounded-full px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-600 shadow-xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Try Now
            </motion.button>
          </nav>

          <div className="md:hidden">
            <motion.button
              aria-label="Open menu"
              onClick={onOpenMobile}
              className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm transition-colors duration-300 hover:bg-gray-700/60"
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect
                  width="24"
                  height="2"
                  rx="1"
                  fill="#F6F6F6"
                  animate={{ rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.rect
                  y="7"
                  width="24"
                  height="2"
                  rx="1"
                  fill="#F6F6F6"
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.rect
                  y="14"
                  width="24"
                  height="2"
                  rx="1"
                  fill="#F6F6F6"
                  animate={{ rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}