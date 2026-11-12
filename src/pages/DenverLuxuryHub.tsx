import { useEffect } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Home, TrendingUp, Users, Star } from 'lucide-react';
import Navigation from '../components/Navigation';

interface DenverLuxuryHubProps {
  onNavigateToCommunity: (communityId: string) => void;
  onBackToHome: () => void;
}

export default function DenverLuxuryHub({ onNavigateToCommunity, onBackToHome }: DenverLuxuryHubProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const neighborhoods = [
    { id: "cherry-creek-north", name: "Cherry Creek North", price: "$1.85M", image: "/images/neighborhood_cherry_creek_north.jpg", description: "Denver's premier upscale neighborhood with luxury shopping and dining" },
    { id: "hilltop", name: "Hilltop", price: "$2.80M", image: "/images/neighborhood_hilltop.jpg", description: "Prestigious estate living with panoramic mountain views" },
    { id: "belcaro", name: "Belcaro", price: "$1.40M", image: "/images/neighborhood_belcaro.jpg", description: "Elegant custom estates near Cherry Creek" },
    { id: "country-club", name: "Denver Country Club", price: "$2.00M", image: "/images/neighborhood_country_club.jpg", description: "Historic mansions on tree-lined boulevards" },
    { id: "washington-park", name: "Washington Park", price: "$1.45M", image: "/images/neighborhood_washington_park.jpg", description: "Active lifestyle around Denver's crown jewel park" },
    { id: "observatory-park", name: "Observatory Park", price: "$900K", image: "/images/neighborhood_observatory_park.jpg", description: "Academic atmosphere near DU" },
    { id: "sloans-lake", name: "Sloan's Lake", price: "$700K", image: "/images/neighborhood_sloans_lake.jpg", description: "Modern townhomes with lake and city views" },
    { id: "bonnie-brae", name: "Bonnie Brae", price: "$1.40M", image: "/images/neighborhood_bonnie_brae.jpg", description: "Charming village atmosphere with curved streets" },
    { id: "greenwood-village", name: "Greenwood Village", price: "$1.65M", image: "/images/neighborhood_greenwood_village.jpg", description: "Affluent suburban living near DTC" },
    { id: "cherry-hills-village", name: "Cherry Hills Village", price: "$4.50M", image: "/images/neighborhood_cherry_hills_village.jpg", description: "Colorado's most exclusive address" },
    { id: "castle-pines", name: "Castle Pines Village", price: "$1.85M", image: "/images/neighborhood_castle_pines.jpg", description: "Gated luxury with championship golf" },
    { id: "the-highlands", name: "The Highlands", price: "$950K", image: "/images/neighborhood_the_highlands.jpg", description: "Trendy urban neighborhood with skyline views" }
  ];

  const allNeighborhoods = [
    "Cherry Creek North", "Hilltop", "Belcaro", "Denver Country Club", "Washington Park",
    "Observatory Park", "Sloan's Lake", "Bonnie Brae", "Greenwood Village", "Cherry Hills Village",
    "Castle Pines Village", "The Highlands", "Cory-Merrill", "Crestmoor", "Congress Park",
    "LoHi", "RiNo", "Union Station", "Downtown/LoDo", "Park Hill", "Stapleton", "Lowry",
    "Glendale", "Hale", "Montclair", "Mayfair", "Virginia Village", "Goldsmith",
    "Southmoor Park", "Hampden", "Belleview", "Green Valley Ranch"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation onNavigateHome={onBackToHome} />

      {/* Hero */}
      <section className="relative w-full pt-20">
        <div className="relative h-[70vh] overflow-hidden">
          <img 
            src="/images/hero_denver_skyline.jpg" 
            alt="Denver Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-4xl">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Denver Luxury Real Estate</p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Denver Neighborhoods & Communities
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8">
                Explore Denver's most prestigious neighborhoods. From historic estates in Country Club to modern luxury in Cherry Creek North, find your perfect community.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#featured" className="btn-primary flex items-center gap-2">
                  Explore Communities
                  <ArrowRight size={18} />
                </a>
                <a href="#all-neighborhoods" className="border-2 border-white/30 text-white px-8 py-4 font-medium rounded hover:bg-white/10 transition-colors">
                  View All 32 Neighborhoods
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-12 bg-gray-50 border-b border-gray-100">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Home size={24} className="text-gold" />
              </div>
              <p className="font-display text-3xl font-bold text-dark">32</p>
              <p className="text-dark-lighter text-sm">Neighborhoods</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp size={24} className="text-gold" />
              </div>
              <p className="font-display text-3xl font-bold text-dark">$1.4M</p>
              <p className="text-dark-lighter text-sm">Avg. Sale Price</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users size={24} className="text-gold" />
              </div>
              <p className="font-display text-3xl font-bold text-dark">500+</p>
              <p className="text-dark-lighter text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star size={24} className="text-gold" />
              </div>
              <p className="font-display text-3xl font-bold text-dark">20+</p>
              <p className="text-dark-lighter text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section id="featured" className="w-full py-20 lg:py-28">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Featured</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">Signature Communities</h2>
            <p className="text-dark-lighter text-lg">Discover Denver's most sought-after luxury neighborhoods</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {neighborhoods.map((neighborhood) => (
              <div 
                key={neighborhood.id}
                onClick={() => onNavigateToCommunity(neighborhood.id)}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={neighborhood.image} 
                    alt={neighborhood.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-display text-xl font-bold text-white">{neighborhood.name}</p>
                    <p className="text-gold font-semibold">{neighborhood.price}</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-dark-lighter text-sm">{neighborhood.description}</p>
                  <div className="mt-3 flex items-center gap-2 text-gold text-sm font-medium">
                    <span>View Community</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Neighborhoods List */}
      <section id="all-neighborhoods" className="w-full py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">All Denver Neighborhoods</h2>
              <p className="text-dark-lighter">Browse all 32 communities in the Denver metro area</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {allNeighborhoods.map((name) => (
                <button 
                  key={name}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gold/5 hover:border-gold border border-gray-100 transition-all text-left"
                >
                  <MapPin size={18} className="text-gold flex-shrink-0" />
                  <span className="text-dark font-medium">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Denver */}
      <section className="w-full py-20 lg:py-28">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">About Denver</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-6">
                The Mile-High City
              </h2>
              <p className="text-dark-lighter leading-relaxed mb-6">
                Denver is known as the Mile-High City, a vibrant urban hub boasting a rich mix of arts, culture, and outdoor recreation. It combines the energy of a modern metropolis with easy access to Colorado's stunning natural landscapes.
              </p>
              <p className="text-dark-lighter leading-relaxed mb-6">
                The city's diverse neighborhoods each offer a unique lifestyle, from historic tree-lined districts to ultra-modern loft communities, all under Denver's trademark sunny skies and active, outdoor-minded culture.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-dark px-4 py-2 rounded-full text-sm">300+ Days of Sunshine</span>
                <span className="bg-gray-100 text-dark px-4 py-2 rounded-full text-sm">World-Class Dining</span>
                <span className="bg-gray-100 text-dark px-4 py-2 rounded-full text-sm">Mountain Access</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/denver_lifestyle.jpg" 
                alt="Denver Lifestyle"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 lg:py-28 bg-dark text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Neighborhood?</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Let Dan Navarro guide you through Denver's luxury real estate market with expert knowledge and personalized service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7206630446" className="btn-primary flex items-center gap-2">
              <Phone size={18} />
              (720) 663-0446
            </a>
            <a href="mailto:Dan@SSCandCompany.com" className="border-2 border-white/30 text-white px-8 py-4 font-medium rounded hover:bg-white/10 transition-colors flex items-center gap-2">
              <Mail size={18} />
              Email Dan
            </a>
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
