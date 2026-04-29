"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    name: "NASM Certified Personal Trainer",
    body: "National Academy of Sports Medicine",
    year: "2018",
    badge: "🏅",
  },
  {
    name: "Precision Nutrition Level 1",
    body: "Precision Nutrition",
    year: "2019",
    badge: "🥇",
  },
  {
    name: "Certified Strength & Conditioning",
    body: "NSCA",
    year: "2020",
    badge: "💪",
  },
  {
    name: "Functional Movement Screen",
    body: "FMS Certified",
    year: "2021",
    badge: "🎯",
  },
  {
    name: "Sports Nutrition Specialist",
    body: "ISSN Certified",
    year: "2022",
    badge: "🍎",
  },
  {
    name: "Corrective Exercise Specialist",
    body: "NASM-CES",
    year: "2023",
    badge: "⚡",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="section-padding bg-olive/[0.08]"
    >
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          Credentials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          Certified <span className="text-accent">Excellence</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-light/60 max-w-2xl mb-16 text-lg"
        >
          Backed by the most respected certifications in the fitness industry.
          Your trust is earned through knowledge and proven results.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 flex gap-4 items-start"
            >
              <div className="text-3xl shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                {cert.badge}
              </div>
              <div>
                <h3 className="font-heading font-bold text-base uppercase tracking-wide mb-1">
                  {cert.name}
                </h3>
                <p className="text-light/50 text-sm">{cert.body}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                    {cert.year}
                  </span>
                  <button className="text-xs text-accent/60 hover:text-accent transition-colors underline underline-offset-2">
                    View Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
