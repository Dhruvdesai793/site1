"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MembershipTiers() {
  const plans = [
    {
      name: "Spark",
      tagline: "Ignite your initial idea.",
      price: "Free",
      features: ["Essential Name Generation", "Basic Search Filters", "Limited Idea Saves", "Community Support"],
      buttonText: "Start Free",
      gradient: "from-gray-700 to-gray-800"
    },
    {
      name: "Catalyst",
      tagline: "Accelerate your brand's inception.",
      price: "$19/mo",
      features: [
        "Unlimited AI Generations",
        "Advanced Prompting",
        "Real-time Domain & Social Checks",
        "AI Logo Generator Access",
        "Priority Email Support"
      ],
      buttonText: "Unlock Catalyst",
      gradient: "from-teal-600 to-green-700"
    },
    {
      name: "Synergy",
      tagline: "Collaborate and scale your vision.",
      price: "$79/mo",
      features: [
        "Everything in Catalyst",
        "Dedicated Team Workspaces",
        "White-label Branding Options",
        "API Access for Integrations",
        "Dedicated Account Manager",
        "Priority VIP Support"
      ],
      buttonText: "Request Synergy",
      gradient: "from-purple-700 to-indigo-800"
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg font-medium text-gray-400 tracking-wide uppercase"
          >
            Choose Your Blueprint
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-7xl font-extrabold text-white tracking-tighter leading-tight"
          >
            Unlock Your Brand's Potential
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Tailored solutions designed to elevate your creative journey from concept to market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 40px 80px rgba(0,0,0,0.7)" }}
              className="relative rounded-[2.5rem] p-10 bg-black/60 border border-white/10 shadow-xl overflow-hidden backdrop-blur-sm transition-all duration-300 ease-out flex flex-col h-full"
            >
              <div
                className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-20"
                style={{ background: `linear-gradient(135deg, ${p.gradient.split(' ')[0]}, ${p.gradient.split(' ')[2]})` }}
              />

              <div className="flex-grow">
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  Tier {i + 1}
                </div>
                <div className="mt-2 text-5xl font-extrabold text-white leading-none">
                  {p.name}
                </div>
                <p className="mt-2 text-md text-gray-400">
                  {p.tagline}
                </p>

                <div className="mt-8 text-6xl font-extrabold text-white tracking-tighter">
                  {p.price === "Free" ? (
                    <span className="text-6xl font-extrabold text-white">Free</span>
                  ) : (
                    <>
                      {p.price.split("/")[0]}
                      <span className="text-3xl font-light text-gray-400">
                        {p.price.split("/")[1]}
                      </span>
                    </>
                  )}
                </div>

                <ul className="mt-8 space-y-4 text-lg text-gray-300">
                  {p.features.map((f, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.05 * idx, duration: 0.4 }}
                      className="flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <button
                  className={`w-full rounded-full py-5 text-xl font-bold text-black bg-gradient-to-r ${p.gradient} shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl`}
                >
                  {p.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}