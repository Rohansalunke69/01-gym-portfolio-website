"use client";

import { motion } from "framer-motion";

const results = [
  {
    name: "Rahul S.",
    initials: "RS",
    result: "Lost 18kg in 4 months",
    quote:
      "I never thought I could do it. The structured plan and constant support made all the difference. Best investment I've made.",
    program: "In-Person",
  },
  {
    name: "Priya M.",
    initials: "PM",
    result: "Gained 8kg lean muscle",
    quote:
      "As a woman in fitness, finding the right coach was crucial. The training is scientific, respectful, and incredibly effective.",
    program: "Online",
  },
  {
    name: "Arjun K.",
    initials: "AK",
    result: "Marathon ready in 6 months",
    quote:
      "Went from couch to marathon. The conditioning program was brutal but perfectly calibrated. Crossed the finish line with tears of joy.",
    program: "In-Person",
  },
  {
    name: "Sneha D.",
    initials: "SD",
    result: "Reversed pre-diabetes",
    quote:
      "This isn't just about looks. My blood work improved dramatically. My doctor was shocked at the transformation in 5 months.",
    program: "Online",
  },
  {
    name: "Vikram T.",
    initials: "VT",
    result: "Bench press: 60kg → 120kg",
    quote:
      "The strength programming is next-level. Progressive overload done right. Every session I got stronger. Can't recommend enough.",
    program: "Studio",
  },
  {
    name: "Ananya R.",
    initials: "AR",
    result: "Post-pregnancy comeback",
    quote:
      "After my delivery, I felt lost. The recovery-focused program brought me back stronger than ever. Forever grateful.",
    program: "In-Person",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-background">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          Results
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          Real <span className="text-accent">Transformations</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-light/60 max-w-2xl mb-16 text-lg"
        >
          Don&apos;t take our word for it. Here&apos;s what real clients have
          achieved with dedicated training and guidance.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-accent/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
              </svg>

              <p className="text-light/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{r.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-olive flex items-center justify-center text-background font-bold text-sm">
                  {r.initials}
                </div>
                <div>
                  <p className="font-heading font-bold text-sm uppercase tracking-wide">
                    {r.name}
                  </p>
                  <p className="text-accent text-xs font-medium">
                    {r.result}
                  </p>
                </div>
                <span className="ml-auto text-xs bg-accent/10 text-accent/70 px-3 py-1 rounded-full">
                  {r.program}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
