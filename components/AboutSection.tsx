"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Assessment",
    desc: "We evaluate your current fitness level, goals, and any limitations to create a baseline.",
    icon: "📋",
  },
  {
    num: "02",
    title: "Custom Plan",
    desc: "A tailored training and nutrition program designed specifically for your body and goals.",
    icon: "📐",
  },
  {
    num: "03",
    title: "Train Hard",
    desc: "Execute the plan with expert guidance. Every rep, every set, every meal — dialed in.",
    icon: "🔥",
  },
  {
    num: "04",
    title: "Transform",
    desc: "Watch your body and mind evolve. Track progress, celebrate wins, keep pushing.",
    icon: "🏆",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          The Method
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          How We <span className="text-accent">Build</span> Champions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-light/60 max-w-2xl mb-16 text-lg"
        >
          A proven 4-step system refined over 8+ years of transforming lives.
          No shortcuts, no gimmicks — just results.
        </motion.p>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover p-8 relative group"
            >
              {/* Step number */}
              <span className="absolute top-6 right-6 font-heading text-5xl font-extrabold text-accent/10 group-hover:text-accent/20 transition-colors">
                {step.num}
              </span>

              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-light/60 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Connector line (except last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
