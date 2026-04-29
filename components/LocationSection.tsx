"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-background">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          Location
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          Find <span className="text-accent">Us</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-light/60 max-w-2xl mb-16 text-lg"
        >
          Visit our premium training studio. Conveniently located with ample
          parking.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card overflow-hidden"
          >
            <div className="aspect-[16/9] bg-surface relative">
              {/* Placeholder for Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-olive/20 to-surface">
                <div className="text-center">
                  <span className="text-6xl block mb-4">📍</span>
                  <p className="text-light/40 text-sm">
                    Google Maps embed will go here
                  </p>
                  <p className="text-light/30 text-xs mt-1">
                    Configure via Sanity CMS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-1">
                    Address
                  </h4>
                  <p className="text-light/60 text-sm">
                    123 Fitness Street, Koregaon Park
                    <br />
                    Pune, Maharashtra 411001
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">🕐</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-1">
                    Hours
                  </h4>
                  <p className="text-light/60 text-sm">
                    Mon – Fri: 6:00 AM – 9:00 PM
                    <br />
                    Sat – Sun: 7:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">🅿️</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-1">
                    Parking
                  </h4>
                  <p className="text-light/60 text-sm">
                    Free parking available for all members.
                    <br />
                    Valet on weekends.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-1">
                    Contact
                  </h4>
                  <p className="text-light/60 text-sm">
                    +91 98765 43210
                    <br />
                    hello@gymgandu.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
