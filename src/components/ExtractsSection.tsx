import { Beaker, CheckCircle, Users, TrendingUp } from "lucide-react";
import greenExtractsImage from "@/assets/green-extracts.jpg";

const benefits = [
  {
    icon: Beaker,
    title: "Standardized Extract SKUs",
    description: "Consistent formulations for reliable integration into your products.",
  },
  {
    icon: CheckCircle,
    title: "Lab-Validated Quality",
    description: "Every batch undergoes rigorous third-party laboratory testing.",
  },
  {
    icon: Users,
    title: "Pilot B2B Customers",
    description: "Trusted by leading brands in food, beverage, and supplements.",
  },
  {
    icon: TrendingUp,
    title: "New Revenue Stream",
    description: "Diversified offerings to capture growing health-conscious markets.",
  },
];

const labResults = [
  { name: "Chlorogenic Acid", value: "45-50%", status: "Certified" },
  { name: "Caffeine Content", value: "2-3%", status: "Tested" },
  { name: "Purity Level", value: "99.5%", status: "Verified" },
  { name: "Heavy Metals", value: "< 0.1ppm", status: "Passed" },
];

export function ExtractsSection() {
  return (
    <section id="extracts" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Green Coffee Extracts
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Extract Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            High-quality green coffee extracts for B2B applications, backed by rigorous lab validation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Product Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={greenExtractsImage}
                alt="Green Coffee Extracts"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Quality Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Beaker className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">Lab Certified</p>
                  <p className="text-sm text-muted-foreground">ISO 17025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Benefits & Lab Results */}
          <div>
            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lab Results Table */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="px-6 py-4 bg-muted/30 border-b border-border">
                <h3 className="font-semibold text-foreground">Lab Analysis Results</h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {labResults.map((result, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="py-3 text-sm text-muted-foreground">{result.name}</td>
                        <td className="py-3 text-sm font-medium text-foreground">{result.value}</td>
                        <td className="py-3">
                          <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                            {result.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-coffee text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Request B2B Samples
          </button>
        </div>
      </div>
    </section>
  );
}
