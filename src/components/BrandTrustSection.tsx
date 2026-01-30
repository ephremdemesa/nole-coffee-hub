import { Award, Handshake, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality in every bean and every transaction.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Supporting farming communities with fair, transparent partnerships.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "Building lasting relationships through honesty and reliability.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Committed to environmentally responsible practices.",
  },
];

const partners = [
  "TechVentures",
  "Global Roasters",
  "EcoFarms Alliance",
  "Premium Distributors",
  "Supply Chain Co",
  "Quality First Inc",
];

export function BrandTrustSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-coffee/10 text-coffee text-sm font-medium mb-4">
            Brand & Market Trust
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built on Trust, Driven by Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our unified brand narrative reflects our commitment to transparency, quality, and sustainable partnerships.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-coffee flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Origin Story Section */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden mb-20">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-sm font-medium text-accent mb-4">Our Story</span>
              <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                From Passion to Purpose
              </h3>
              <p className="text-muted-foreground mb-6">
                Nole Coffee, INC bridges Ethiopian coffee excellence with American roasters. We import 
                over 200 containers of premium green coffee annually from Ethiopia's renowned regions—Yirgacheffe, 
                Sidamo, Guji, and beyond—delivering directly to roasters across the United States.
              </p>
              <p className="text-muted-foreground mb-8">
                Our blockchain-powered technology platform ensures complete traceability from Ethiopian 
                farms to your roastery. When you partner with Nole Coffee, you gain direct access to 
                exceptional origins with full transparency and competitive pricing.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-accent font-medium hover:underline"
              >
                Read Our Full Story
                <span className="ml-2">→</span>
              </a>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=600&fit=crop"
                alt="Coffee Farm Community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/30" />
            </div>
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-muted/50 rounded-lg text-lg font-medium text-muted-foreground hover:opacity-100 transition-opacity"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
