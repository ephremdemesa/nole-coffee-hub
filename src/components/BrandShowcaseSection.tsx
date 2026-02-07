import brandMagazine from "@/assets/brand-magazine.jpg";
import brandTshirt from "@/assets/brand-tshirt.jpg";
import brandOffice from "@/assets/brand-office.jpg";
import brandPackaging from "@/assets/brand-packaging.jpg";

const brandItems = [
  {
    image: brandMagazine,
    title: "Magazine Feature",
    description: "Industry recognition in leading coffee publications",
  },
  {
    image: brandTshirt,
    title: "Brand Apparel",
    description: "Premium merchandise for team and partners",
  },
  {
    image: brandOffice,
    title: "Corporate Office",
    description: "Our headquarters in Farmers Branch, Dallas, Texas",
  },
  {
    image: brandPackaging,
    title: "Product Packaging",
    description: "Distinctive packaging for premium Ethiopian green coffee",
  },
];

export function BrandShowcaseSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Brand
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Nole Coffee Identity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A brand built on Ethiopian coffee heritage and modern innovation — recognized across the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
