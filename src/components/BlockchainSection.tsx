import { Link2, Zap, MapPin, Clock } from "lucide-react";
import heroBlockchain from "@/assets/hero-blockchain.jpg";

const features = [
  {
    icon: Link2,
    title: "Unique Lot IDs On-Chain",
    description: "Every coffee lot receives a unique blockchain identifier for permanent traceability.",
    stat: "10,000+",
    statLabel: "Lots Tracked",
  },
  {
    icon: Zap,
    title: "T+1 Farmer Payments",
    description: "Farmers receive payment within 24 hours of transaction confirmation.",
    stat: "24hrs",
    statLabel: "Payment Speed",
  },
  {
    icon: MapPin,
    title: "End-to-End Traceability",
    description: "Track your coffee's journey from farm to cup with complete transparency.",
    stat: "100%",
    statLabel: "Transparent",
  },
  {
    icon: Clock,
    title: "Faster Reconciliation",
    description: "Automated blockchain reconciliation eliminates manual processing delays.",
    stat: "80%",
    statLabel: "Time Saved",
  },
];

const traceabilitySteps = [
  { step: "1", title: "Farm Origin", description: "Coffee cherry harvested and processed" },
  { step: "2", title: "Quality Graded", description: "Beans evaluated and certified" },
  { step: "3", title: "Blockchain Record", description: "Lot ID created on-chain" },
  { step: "4", title: "Transport", description: "Tracked shipment to destination" },
  { step: "5", title: "Delivered", description: "Arrives at your location" },
];

export function BlockchainSection() {
  return (
    <section id="blockchain" className="py-24 bg-foreground text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tech/20 text-tech text-sm font-medium mb-4">
            Blockchain Payments & Traceability
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Technology You Can Trust
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Leveraging blockchain technology to ensure transparency, speed, and trust across every transaction.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Blockchain Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroBlockchain}
                alt="Blockchain Network"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
            </div>
            
            {/* Animated Nodes */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-tech animate-pulse" />
            <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 rounded-full bg-tech animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Right: Features */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-tech flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/60 mb-4">{feature.description}</p>
                <div className="pt-4 border-t border-primary-foreground/10">
                  <span className="text-2xl font-bold text-tech">{feature.stat}</span>
                  <span className="text-xs text-primary-foreground/50 ml-2">{feature.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traceability Journey */}
        <div className="relative">
          <h3 className="text-2xl font-display font-bold text-center text-primary-foreground mb-12">
            Your Coffee's Journey
          </h3>
          
          {/* Journey Steps */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {traceabilitySteps.map((step, index) => (
              <div key={index} className="flex-1 relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-tech flex items-center justify-center mb-4 relative z-10">
                    <span className="text-lg font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h4 className="font-semibold text-primary-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-primary-foreground/60">{step.description}</p>
                </div>
                
                {/* Connector Line */}
                {index < traceabilitySteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-1/2 w-full h-0.5 bg-gradient-to-r from-tech to-tech/30" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-tech text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              <MapPin className="w-5 h-5" />
              Trace Your Coffee Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
