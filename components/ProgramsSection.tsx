"use client";

import { motion } from "framer-motion";

const programs = [
  {
    id: "in-person",
    label: "In-Person",
    title: "In-Person Training",
    desc: "One-on-one sessions at our premium studio. Hands-on guidance, real-time form corrections, and maximum accountability.",
    features: [
      "Personalized workout programs",
      "Nutrition guidance included",
      "Body composition tracking",
      "Flexible scheduling",
      "Access to premium equipment",
    ],
    tiers: [
      { name: "Starter", sessions: "2x / week", price: "₹4,999", popular: false },
      { name: "Growth", sessions: "3x / week", price: "₹6,999", popular: true },
      { name: "Elite", sessions: "5x / week", price: "₹9,999", popular: false },
    ],
    cta: "Book a Session",
    icon: "🏋️‍♂️",
  },
  {
    id: "online-training",
    label: "Online",
    title: "Online Coaching",
    desc: "Train from anywhere in the world. Live Zoom sessions, custom app-based programs, and weekly check-ins.",
    features: [
      "Custom training app access",
      "Weekly video check-ins",
      "Progressive overload tracking",
      "24/7 WhatsApp support",
      "Meal plans included",
    ],
    tiers: [
      { name: "Basic", sessions: "App only", price: "₹2,499", popular: false },
      { name: "Pro", sessions: "App + Zoom", price: "₹3,999", popular: true },
      { name: "VIP", sessions: "Full access", price: "₹5,999", popular: false },
    ],
    cta: "Start Online",
    icon: "💻",
  },
  {
    id: "studio",
    label: "In-Studio",
    title: "Studio Sessions",
    desc: "Train at our fully equipped, private studio. A premium environment designed for serious athletes.",
    features: [
      "Private studio access",
      "State-of-the-art equipment",
      "Towel & locker service",
      "Supplements provided",
      "Post-workout recovery zone",
    ],
    tiers: [
      { name: "Monthly", sessions: "Unlimited", price: "₹7,999", popular: false },
      { name: "Quarterly", sessions: "Unlimited", price: "₹19,999", popular: true },
      { name: "Annual", sessions: "Unlimited", price: "₹69,999", popular: false },
    ],
    cta: "Visit Studio",
    icon: "🏢",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-olive/[0.08]">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          Programs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          Choose Your <span className="text-accent">Path</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-light/60 max-w-2xl mb-16 text-lg"
        >
          Three ways to train. One goal: your best self.
        </motion.p>

        <div className="space-y-20">
          {programs.map((program, pi) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left info */}
                <div className="lg:w-2/5">
                  <span className="text-5xl mb-4 block">{program.icon}</span>
                  <span className="section-label">{program.label}</span>
                  <h3 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
                    {program.title}
                  </h3>
                  <p className="text-light/60 mb-6 leading-relaxed">
                    {program.desc}
                  </p>
                  <ul className="space-y-3">
                    {program.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-light/70"
                      >
                        <svg
                          className="w-5 h-5 text-accent shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right pricing tiers */}
                <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {program.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`relative rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                        tier.popular
                          ? "bg-accent text-background ring-2 ring-accent"
                          : "bg-surface border border-accent/10 hover:border-accent/30"
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-accent text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      <h4
                        className={`font-heading font-bold text-lg uppercase tracking-wide mb-2 ${
                          tier.popular ? "" : "text-light"
                        }`}
                      >
                        {tier.name}
                      </h4>
                      <p
                        className={`text-sm mb-4 ${
                          tier.popular
                            ? "text-background/70"
                            : "text-light/50"
                        }`}
                      >
                        {tier.sessions}
                      </p>
                      <div
                        className={`font-heading font-extrabold text-3xl mb-6 ${
                          tier.popular ? "" : "text-accent"
                        }`}
                      >
                        {tier.price}
                        <span
                          className={`text-sm font-normal ${
                            tier.popular
                              ? "text-background/60"
                              : "text-light/40"
                          }`}
                        >
                          /mo
                        </span>
                      </div>
                      <a
                        href="#sessions"
                        className={`block w-full py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                          tier.popular
                            ? "bg-background text-accent hover:bg-background/90"
                            : "bg-accent/10 text-accent hover:bg-accent hover:text-background"
                        }`}
                      >
                        {program.cta}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
