'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function MobileMenu({ open, onClose }) {
  const menuVariants = {
    initial: { opacity: 0, scale: 0.95, y: '-50%' },
    animate: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20, duration: 0.6 } },
    exit: { opacity: 0, scale: 0.95, y: '-50%', transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: -30, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 bg-gradient-to-b from-gray-900/95 to-black/90 backdrop-blur-2xl flex flex-col font-['Inter'] font-sans"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <div className="p-8 flex flex-col h-full">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-5">
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-600 flex items-center justify-center text-white text-3xl font-black shadow-xl"
                >
                  N
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-white text-3xl font-extrabold tracking-tight"
                >
                  NameForge
                </motion.div>
              </div>
              <motion.button
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-white/90 hover:text-cyan-300 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm transition-colors duration-300"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            <div className="flex flex-col gap-8 text-white/95 flex-grow justify-center">
              {['Home', 'Features', 'Pricing', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={itemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: index * 0.15 }}
                  onClick={onClose}
                  className="text-4xl font-bold tracking-wide hover:text-cyan-300 transition-colors duration-300 relative group"
                  whileHover={{ x: 15 }}
                >
                  {item}
                  <motion.span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                  />
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.4 } }}
              exit={{ opacity: 0, y: 30 }}
              className="mt-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(6, 182, 212, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full rounded-full px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-600 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Try Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}