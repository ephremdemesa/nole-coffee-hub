import { Store, Shield, TrendingUp, RefreshCcw, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Vendors",
    description: "All vendors undergo rigorous verification to ensure quality and authenticity.",
  },
  {
    icon: Store,
    title: "Standardized Listings",
    description: "Consistent coffee listings with comprehensive quality data and origin information.",
  },
  {
    icon: TrendingUp,
    title: "Monthly Growth",
    description: "Sustained transaction growth as more buyers discover trusted suppliers.",
  },
  {
    icon: RefreshCcw,
    title: "Inventory Sync",
    description: "Real-time inventory synchronization across all connected systems.",
  },
];

const mockProducts = [
  {
    name: "Ethiopian Yirgacheffe",
    origin: "Sidamo, Ethiopia",
    rating: 4.9,
    price: "$24.50/lb",
    badge: "Verified",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop",
  },
  {
    name: "Colombian Supremo",
    origin: "Huila, Colombia",
    rating: 4.8,
    price: "$22.00/lb",
    badge: "Top Seller",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
  },
  {
    name: "Kenya AA",
    origin: "Nyeri, Kenya",
    rating: 4.9,
    price: "$28.00/lb",
    badge: "Verified",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
  },
];

export function MarketplaceSection() {
  return (
    <section id="marketplace" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Multi-Vendor E-commerce
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Coffee Marketplace
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with verified vendors offering the world's finest coffees, all in one trusted platform.
          </p>
        </div>

        {/* Mock E-commerce Platform */}
        <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden mb-16">
          {/* Browser Header */}
          <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-secondary/60" />
            </div>
            <div className="flex-1 bg-background rounded-lg px-4 py-2 text-sm text-muted-foreground">
              marketplace.nolecoffee.com
            </div>
          </div>

          {/* Platform Content */}
          <div className="p-8">
            {/* Search Bar */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search premium coffee..."
                  className="w-full px-6 py-4 rounded-xl bg-muted/30 border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
                  readOnly
                />
              </div>
              <button className="px-8 py-4 bg-gradient-coffee text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {mockProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{product.origin}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">{product.price}</span>
                      <button className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-colors text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
