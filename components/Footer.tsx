export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    training: [
      { name: "In-Person", href: "#in-person" },
      { name: "Online Coaching", href: "#online-training" },
      { name: "Studio Sessions", href: "#studio" },
      { name: "Book a Session", href: "#sessions" },
    ],
    resources: [
      { name: "Videos", href: "#videos" },
      { name: "Certifications", href: "#certifications" },
      { name: "FAQ", href: "#faq" },
      { name: "Location", href: "#location" },
    ],
    socials: [
      { name: "Instagram", href: "https://instagram.com/gymgandu" },
      { name: "YouTube", href: "https://youtube.com/@gymgandu" },
      { name: "WhatsApp", href: "https://wa.me/919876543210" },
      { name: "Twitter/X", href: "https://x.com/gymgandu" },
    ],
  };

  return (
    <footer className="section-padding bg-surface border-t border-accent/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-background font-heading font-extrabold text-lg">
                G
              </div>
              <span className="font-heading font-bold text-xl tracking-wider uppercase">
                Gym<span className="text-accent">Gandu</span>
              </span>
            </div>
            <p className="text-light/50 text-sm leading-relaxed mb-6">
              Elite personal training for those who demand results. Transform
              your body and mind with science-backed coaching.
            </p>
            <a href="#sessions" className="cta-primary text-sm !px-5 !py-2.5 !animate-none">
              Get Started
            </a>
          </div>

          {/* Training links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Training
            </h4>
            <ul className="space-y-3">
              {links.training.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light/50 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light/50 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Social
            </h4>
            <ul className="space-y-3">
              {links.socials.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/50 text-sm hover:text-accent transition-colors"
                  >
                    {link.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-accent/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-light/30 text-xs">
            © {currentYear} GymGandu. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-light/30 text-xs hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-light/30 text-xs hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
