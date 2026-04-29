"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-background">
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
              Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading mb-4"
            >
              Let&apos;s <span className="text-accent">Talk</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-light/60 text-lg mb-8 leading-relaxed"
            >
              Have questions? Want to discuss your goals? Drop us a message
              and we&apos;ll get back to you within 24 hours.
            </motion.p>

            {/* Contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <a
                href="mailto:hello@gymgandu.com"
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-xl group-hover:bg-accent/20 transition-colors">
                  ✉️
                </div>
                <div>
                  <p className="font-heading font-bold text-sm uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-accent text-sm">hello@gymgandu.com</p>
                </div>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-xl group-hover:bg-[#25D366]/20 transition-colors">
                  💬
                </div>
                <div>
                  <p className="font-heading font-bold text-sm uppercase tracking-wide">
                    WhatsApp
                  </p>
                  <p className="text-[#25D366] text-sm">+91 98765 43210</p>
                </div>
              </a>
              <a
                href="https://instagram.com/gymgandu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-xl group-hover:bg-pink-500/20 transition-colors">
                  📸
                </div>
                <div>
                  <p className="font-heading font-bold text-sm uppercase tracking-wide">
                    Instagram
                  </p>
                  <p className="text-pink-400 text-sm">@gymgandu</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-light/50 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-background border border-accent/10 rounded-xl px-4 py-3 text-light text-sm placeholder:text-light/30 focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-light/50 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-background border border-accent/10 rounded-xl px-4 py-3 text-light text-sm placeholder:text-light/30 focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-light/50 mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-background border border-accent/10 rounded-xl px-4 py-3 text-light text-sm placeholder:text-light/30 focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-light/50 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-background border border-accent/10 rounded-xl px-4 py-3 text-light text-sm placeholder:text-light/30 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="cta-primary w-full justify-center">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
