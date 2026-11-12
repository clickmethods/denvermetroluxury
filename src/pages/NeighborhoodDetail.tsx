import { useEffect } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Bed, Bath, Maximize, Home, TreePine, Car, School, ShoppingBag } from 'lucide-react';
import Navigation from '../components/Navigation';

interface NeighborhoodData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  medianPrice: string;
  priceRange: string;
  dom: string;
  lifestyle: string;
  image: string;
  features: string[];
  nearby: string[];
  schools: string[];
  commute: string;
  architecture: string[];
}

interface NeighborhoodDetailProps {
  neighborhood: NeighborhoodData;
  onBack: () => void;
  onNavigateToHub: () => void;
}

export default function NeighborhoodDetail({ neighborhood, onBack, onNavigateToHub }: NeighborhoodDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleListings = [
    { price: neighborhood.medianPrice, beds: 4, baths: 3, sqft: "3,200", address: "Sample Address" },
    { price: "$1.2M", beds: 3, baths: 2, sqft: "2,400", address: "Sample Address 2" },
    { price: "$2.1M", beds: 5, baths: 4, sqft: "4,500", address: "Sample Address 3" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation onNavigateHome={onBack} />

      {/* Hero */}
      <section className="relative w-full pt-20">
        <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
          <img 
            src={neighborhood.image} 
            alt={neighborhood.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-4xl">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Signature Community</p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">{neighborhood.name}</h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl">{neighborhood.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="w-full py-8 bg-gray-50 border-b border-gray-100">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Median Price</p>
              <p className="font-display text-2xl md:text-3xl font-bold text-gold">{neighborhood.medianPrice}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Price Range</p>
              <p className="font-display text-lg md:text-xl font-bold text-dark">{neighborhood.priceRange}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Days on Market</p>
              <p className="font-display text-2xl md:text-3xl font-bold text-dark">{neighborhood.dom}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Lifestyle</p>
              <p className="text-dark">{neighborhood.lifestyle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left - Description */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-6">About {neighborhood.name}</h2>
              <p className="text-dark-lighter leading-relaxed mb-8 text-lg">{neighborhood.description}</p>
              <p className="text-dark-lighter leading-relaxed mb-8">{neighborhood.longDescription}</p>

              {/* Architecture */}
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-dark mb-6">Architecture & Homes</h3>
                <div className="flex flex-wrap gap-3">
                  {neighborhood.architecture.map((style, idx) => (
                    <span key={idx} className="bg-gray-100 text-dark px-4 py-2 rounded-full text-sm flex items-center gap-2">
                      <Home size={16} className="text-gold" />
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-dark mb-6">Community Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {neighborhood.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-dark-lighter">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby */}
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-dark mb-6">Nearby Attractions</h3>
                <div className="flex flex-wrap gap-3">
                  {neighborhood.nearby.map((place, idx) => (
                    <span key={idx} className="bg-gold/10 text-gold px-4 py-2 rounded-full text-sm flex items-center gap-2">
                      <MapPin size={16} />
                      {place}
                    </span>
                  ))}
                </div>
              </div>

              {/* Schools */}
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-dark mb-6">Schools</h3>
                <div className="flex flex-wrap gap-3">
                  {neighborhood.schools.map((school, idx) => (
                    <span key={idx} className="bg-gray-100 text-dark px-4 py-2 rounded-full text-sm flex items-center gap-2">
                      <School size={16} className="text-gold" />
                      {school}
                    </span>
                  ))}
                </div>
              </div>

              {/* Commute */}
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-dark mb-4">Commute & Access</h3>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Car size={24} className="text-gold" />
                  <span className="text-dark-lighter">{neighborhood.commute}</span>
                </div>
              </div>
            </div>

            {/* Right - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 sticky top-24">
                <h3 className="font-display text-xl font-bold text-dark mb-4">Interested in {neighborhood.name}?</h3>
                <p className="text-dark-lighter text-sm mb-6">Let Dan help you find the perfect home in this community.</p>
                
                <div className="space-y-4 mb-8">
                  <a href="tel:7206630446" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Phone size={18} />
                    Call Dan
                  </a>
                  <a href="mailto:Dan@SSCandCompany.com" className="btn-outline w-full flex items-center justify-center gap-2">
                    <Mail size={18} />
                    Email Dan
                  </a>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs text-dark-lighter uppercase tracking-wider mb-4">Community Highlights</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <TreePine size={18} className="text-gold" />
                      <span className="text-dark text-sm">Tree-lined streets</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShoppingBag size={18} className="text-gold" />
                      <span className="text-dark text-sm">Walkable shopping</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <School size={18} className="text-gold" />
                      <span className="text-dark text-sm">Top-rated schools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Listings */}
      <section className="w-full py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8 text-center">Featured Listings in {neighborhood.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleListings.map((listing, idx) => (
                <div key={idx} className="property-card bg-white rounded-xl overflow-hidden cursor-pointer group">
                  <div className="relative h-56 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                      <Home size={48} />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-display text-2xl font-bold text-gold mb-1">{listing.price}</p>
                    <p className="text-dark font-medium mb-4">{listing.address}</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <Bed size={16} className="text-gold" />
                        <span className="text-dark text-sm">{listing.beds}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath size={16} className="text-gold" />
                        <span className="text-dark text-sm">{listing.baths}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize size={16} className="text-gold" />
                        <span className="text-dark text-sm">{listing.sqft} sqft</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button className="btn-outline inline-flex items-center gap-2">
                View All {neighborhood.name} Listings
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 lg:py-24 bg-dark text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Explore {neighborhood.name}?</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Schedule a private tour with Dan and discover why this community is perfect for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7206630446" className="btn-primary flex items-center gap-2">
              <Phone size={18} />
              (720) 663-0446
            </a>
            <button onClick={onNavigateToHub} className="border-2 border-white/30 text-white px-8 py-4 font-medium rounded hover:bg-white/10 transition-colors">
              View Other Communities
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-dark border-t border-white/10">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center">
            <p className="font-display text-2xl font-bold text-white mb-4">
              Denver Metro <span className="text-gold">Luxury</span>
            </p>
            <p className="text-white/60 text-sm mb-6">
              Curated luxury real estate in the Denver metro area
            </p>
            <div className="flex justify-center gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors">Disclaimer</a>
            </div>
            <p className="text-white/40 text-sm mt-6">© 2026 Denver Metro Luxury. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
