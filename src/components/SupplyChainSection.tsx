import { MapPin, CheckCircle, Truck, Clock } from "lucide-react";
import qcLabImage from "@/assets/qc-lab.jpg";

const supplyChainItems = [
  {
    icon: MapPin,
    title: "Direct Sourcing",
    description: "Direct partnerships with partner farms across premium coffee-growing regions worldwide.",
    metric: "15+ Partner Farms",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: CheckCircle,
    title: "Operational Grading & QC Hub",
    description: "State-of-the-art quality control with meticulous grading and analysis.",
    metric: "100% Quality Tested",
    color: "from-accent to-accent/80",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable logistics ensuring your coffee arrives exactly when you need it.",
    metric: "≥95% On-Time Rate",
    color: "from-tech to-tech/80",
  },
  {
    icon: Truck,
    title: "Reduced Handling Cost",
    description: "Streamlined operations that pass savings directly to you.",
    metric: "30% Cost Reduction",
    color: "from-coffee to-coffee/80",
  },
];

export function SupplyChainSection() {
  return (
    <section id="supply-chain" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Integrated Supply Chain
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            From Origin to Destination
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our vertically integrated supply chain ensures quality, transparency, and efficiency at every step.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={qcLabImage}
                alt="Quality Control Lab"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium">
                  Our Quality Control Hub
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Where precision meets passion
                </p>
              </div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-lg p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Traceable</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {supplyChainItems.map((item, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent">{item.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
