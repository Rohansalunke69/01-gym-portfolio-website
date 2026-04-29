"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What happens during the first session?",
    a: "Your first session is a comprehensive assessment. We evaluate your current fitness level, discuss your goals, take baseline measurements, and do a movement screening. Then we design your program together.",
  },
  {
    q: "Do I need to be fit to start training?",
    a: "Absolutely not. We work with all fitness levels — from complete beginners to competitive athletes. Every program is customized to where you are right now. We meet you where you are.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients notice changes in energy and strength within 2-3 weeks. Visible body composition changes typically appear around 6-8 weeks. We track everything so you can see your progress.",
  },
  {
    q: "What does the nutrition plan include?",
    a: "You get a fully customized meal plan based on your goals, dietary preferences, and lifestyle. Includes macro targets, meal timing, supplement recommendations, and weekly adjustments.",
  },
  {
    q: "Can I cancel or pause my plan?",
    a: "Yes. We offer flexible month-to-month plans. You can pause for up to 2 weeks or cancel with 7 days notice. No long-term contracts or hidden fees.",
  },
  {
    q: "Do you offer trial sessions?",
    a: "Yes! We offer a complimentary 30-minute consultation and assessment. Book through the Calendly link below and come experience the difference.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-olive/[0.08]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading mb-4"
            >
              Got <span className="text-accent">Questions?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-light/60 text-lg mb-8 leading-relaxed"
            >
              Everything you need to know before starting your transformation
              journey. Can&apos;t find your answer? Reach out directly.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="#contact"
              className="cta-secondary text-sm !animate-none"
            >
              Ask a Question
            </motion.a>
          </div>

          {/* Right — accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span className="font-heading font-bold text-sm md:text-base uppercase tracking-wide pr-4 group-hover:text-accent transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className={`text-accent text-2xl shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-light/60 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
