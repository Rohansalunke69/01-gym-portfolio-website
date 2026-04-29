"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />

      {/* Hero image placeholder area */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full">
          <div className="w-full h-full bg-gradient-to-br from-olive/30 via-surface to-background relative">
            {/* Decorative gym pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border-2 border-accent/30" />
              <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full border border-accent/20" />
              <div className="absolute top-1/2 right-1/6 w-32 h-32 rounded-full bg-accent/5" />
            </div>
            {/* Large accent letter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[20rem] font-heading font-extrabold text-accent/[0.03] select-none">
                G
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 section-padding w-full">
        <div className="section-container">
          <div className="max-w-2xl">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-label"
            >
              Elite Personal Training
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.95] mb-6"
            >
              Transform
              <br />
              Your{" "}
              <span className="text-accent relative">
                Body
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8 C50 2, 150 2, 198 8"
                    stroke="#C3F22F"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-light/60">& Mind</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-light/60 font-body max-w-lg mb-10 leading-relaxed"
            >
              Personalized coaching designed to push your limits. In-person
              sessions, online programs, and a mindset built for champions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#sessions" className="cta-primary">
                <span>Start Training</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a href="#programs" className="cta-secondary">
                View Programs
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-8"
            >
              <div>
                <div className="flex items-center gap-2">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-accent/60 to-olive flex items-center justify-center text-[10px] font-bold text-background"
                      >
                        {["R", "A", "S", "M"][i]}
                      </div>
                    ))}
                  </div>
                  <span className="text-accent font-heading font-bold text-2xl">
                    500+
                  </span>
                </div>
                <p className="text-light/50 text-sm mt-1">
                  Clients Transformed
                </p>
              </div>
              <div className="w-px h-12 bg-accent/20" />
              <div>
                <span className="text-accent font-heading font-bold text-2xl">
                  8+
                </span>
                <p className="text-light/50 text-sm mt-1">
                  Years Experience
                </p>
              </div>
              <div className="w-px h-12 bg-accent/20 hidden sm:block" />
              <div className="hidden sm:block">
                <span className="text-accent font-heading font-bold text-2xl">
                  100%
                </span>
                <p className="text-light/50 text-sm mt-1">
                  Dedication
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-light/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-accent/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
