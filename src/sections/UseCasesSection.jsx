"use client";
import React from "react";
import { motion } from "framer-motion";

export default function UseCasesSection() {
  const cases = [
    {
      name: "Startups",
      description: "Launch with a name that captivates and defines your mission.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      ),
    },
    {
      name: "Creators",
      description: "Define your unique voice with a memorable personal brand.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
      ),
    },
    {
      name: "eCommerce",
      description: "Stand out in the digital marketplace with a distinctive brand.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
      ),
    },
    {
      name: "Mobile Apps",
      description: "Craft an intuitive name that resonates with your user base.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
      ),
    },
  ];

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
    <section className="py-32 relative bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg font-medium text-gray-400 tracking-wide uppercase"
          >
            Diverse Applications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-7xl font-extrabold text-white tracking-tighter leading-tight"
          >
            Designed For Your Ambition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Whether launching a new venture or redefining an existing one, our AI delivers names perfectly suited for your domain.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative rounded-[2rem] p-8 bg-black/60 border border-white/10 text-center overflow-hidden group transition-all duration-300 ease-out"
              style={{ perspective: "1000px" }} // Enable 3D transforms
            >
              {/* Optional: Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-green-500/0 group-hover:from-teal-500/10 group-hover:to-green-500/10 transition-all duration-500 rounded-[2rem]"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6 text-teal-400">
                  {c.icon}
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  {c.name}
                </div>
                <div className="mt-2 text-md text-gray-400 leading-relaxed">
                  {c.description}
                </div>
                <button
                  className="mt-8 text-sm font-semibold text-teal-400 flex items-center justify-center mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}