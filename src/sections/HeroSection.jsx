'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollVelocity from '../components/ScrollVelocity';
import TextType from '../components/TextType';

export default function HeroSection({ onGenerate }) {
  const examples = [
    'AI Fitness App   scrol   velo  crowba  hunban  Crunshin  starhucks   crowtype  herpes   killerY   noke  sumsang  capple',
    'Crunshin   starhucks   crowtype  herpes   killerY   noke  sumsang  capple AI Fitness App  scrol  velo   crowba  hunban'
  ];
  const eg = ['clovable', 'chug', 'ai app', 'naturlite'];

  const scrollContainerRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const childVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="home"
      ref={scrollContainerRef}
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-hidden font-['Inter'] text-white"
    >
      {/* Ambient animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="gradient-bg"></div>
      </div>
      {/* Soft overlay */}

      {/* Content */}
      <motion.div
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-32 relative z-10 text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Headline */}
        <motion.h1
          variants={childVariants}
          className="font-extrabold leading-tight tracking-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw + 1rem, 4.5rem)' // Fluid scaling
          }}
        >
          Name Your Startup in{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Seconds
          </span>{' '}
          with AI
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={childVariants}
          className="mt-6 text-white/85 max-w-3xl mx-auto"
          style={{
            fontSize: 'clamp(1rem, 1vw + 0.8rem, 1.25rem)' // Subtext fluid size
          }}
        >
          Generate catchy, brandable names and taglines instantly with
          cutting-edge AI technology.
        </motion.p>

        {/* Input + Button */}
        <motion.div
          variants={childVariants}
          className="mt-10 flex justify-center w-full"
        >
          <div className="w-full max-w-4xl">
            <div className="flex flex-col sm:flex-row gap-4 w-full items-stretch sm:items-center p-2 bg-[#0f172a]/60 backdrop-blur-2xl rounded-2xl border border-cyan-500/30 shadow-[0_10px_50px_rgba(0,255,255,0.15)]">
              
              {/* Clickable TextType / Input */}
              <div
                className="flex-1 px-4 py-3 rounded-xl sm:rounded-l-xl sm:rounded-r-none bg-transparent flex items-center text-white/80 cursor-text"
                style={{
                  fontSize: 'clamp(1rem, 0.8vw + 0.9rem, 1.25rem)' // Input fluid size
                }}
                onClick={() => setIsFocused(true)}
              >
                {!isFocused ? (
                  <TextType
                    text={eg}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={2000}
                    loop
                    showCursor
                    cursorCharacter="|"
                    textColors={['#a5f3fc', '#5eead4', '#6ee7b7']}
                    className="italic"
                  />
                ) : (
                  <input
                    autoFocus
                    onBlur={() => setIsFocused(false)}
                    className="w-full bg-transparent outline-none text-white placeholder:text-white/60"
                    placeholder="Type your idea..."
                  />
                )}
              </div>

              {/* Button */}
              <motion.button
                onClick={onGenerate}
                className="rounded-xl sm:rounded-l-none sm:rounded-r-xl px-6 py-3 font-semibold text-white bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-600 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 w-full sm:w-auto"
                style={{
                  fontSize: 'clamp(1rem, 0.8vw + 0.9rem, 1.25rem)' // Button fluid size
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(6, 182, 212, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Generate Name
              </motion.button>
            </div>

            {/* Examples */}
            <motion.div
              variants={childVariants}
              className="mt-4 text-white/60 text-center"
              style={{
                fontSize: 'clamp(0.75rem, 0.5vw + 0.7rem, 0.9rem)' // Examples fluid size
              }}
            >
              Examples: {eg.join(' • ')}
            </motion.div>
          </div>
        </motion.div>

        {/* ScrollVelocity */}
        <motion.div
          variants={childVariants}
          className="mt-14 w-full overflow-hidden"
          style={{
            fontSize: 'clamp(1rem, 1vw + 0.9rem, 1.5rem)' // Scroll text fluid size
          }}
        >
          <ScrollVelocity
            texts={examples}
            velocity={50}
            className="text-white/70 font-semibold"
            damping={60}
            stiffness={300}
            numCopies={4}
            velocityMapping={{ input: [0, 1000], output: [0, 3] }}
            parallaxClassName="py-4"
            scrollerClassName="gap-8 flex-nowrap"
            scrollContainerRef={scrollContainerRef}
          />
        </motion.div>
      </motion.div>

      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradientMove 15s ease infinite;
        }
      `}</style>
    </section>
  );
}
