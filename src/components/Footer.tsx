import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Story", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  services: [
    { label: "Supply Chain", href: "#supply-chain" },
    { label: "Marketplace", href: "#marketplace" },
    { label: "Traceability", href: "#blockchain" },
    { label: "Extracts", href: "#extracts" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Access", href: "#" },
    { label: "Partner Portal", href: "#" },
    { label: "Support", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-lg">N</span>
              </div>
              <span className="font-display text-xl font-semibold text-primary-foreground">
                Nole Coffee, INC
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Building the future of transparent and traceable coffee through technology, 
              trust, and sustainable partnerships.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div id="contact" className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a href="mailto:hello@nolecoffee.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" />
              hello@nolecoffee.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
            <span className="flex items-center gap-2 text-primary-foreground/60">
              <MapPin className="w-4 h-4" />
              Farmers Branch, Dallas, Texas
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Nole Coffee, INC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
