"use client";

import { motion } from "framer-motion";

export default function SessionsSection() {
  return (
    <section id="sessions" className="section-padding bg-olive/[0.08]">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          Book Now
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          Start Your <span className="text-accent">Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-light/60 max-w-2xl mb-16 text-lg"
        >
          Book your free consultation session. Pick a time that works for you
          and let&apos;s get started.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendly embed placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card overflow-hidden"
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-surface flex items-center justify-center">
              <div className="text-center px-8">
                <span className="text-6xl block mb-4">📅</span>
                <h3 className="font-heading font-bold text-2xl uppercase tracking-wide mb-3">
                  Schedule a Session
                </h3>
                <p className="text-light/40 text-sm mb-6 max-w-md mx-auto">
                  Calendly booking widget will be embedded here. Connect
                  your Calendly URL in the CMS to activate.
                </p>
                <div className="inline-flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary text-sm"
                  >
                    Book on Calendly
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold rounded-full px-6 py-3 text-sm hover:brightness-110 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick pricing summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            <div className="glass-card p-6 border-accent/30">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-accent mb-4">
                Quick Pricing
              </h4>
              <div className="space-y-4">
                {[
                  {
                    name: "Consultation",
                    price: "FREE",
                    detail: "30-min assessment",
                  },
                  {
                    name: "Single Session",
                    price: "₹999",
                    detail: "1-hour training",
                  },
                  {
                    name: "Monthly Pack",
                    price: "₹4,999+",
                    detail: "Starting from",
                  },
                  {
                    name: "Online Plan",
                    price: "₹2,499+",
                    detail: "Starting from",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between pb-3 border-b border-accent/10 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-light/40">{item.detail}</p>
                    </div>
                    <span className="font-heading font-bold text-accent">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎁</span>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wide">
                  First Timer?
                </h4>
              </div>
              <p className="text-light/60 text-sm mb-4">
                Get a complimentary body composition analysis with your first
                session booking.
              </p>
              <a href="#contact" className="text-accent text-sm font-medium hover:underline">
                Claim offer →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
