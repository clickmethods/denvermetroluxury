import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Bed, Bath, Maximize, Phone, Mail, ChevronDown } from 'lucide-react';
import Navigation from '../components/Navigation';

interface BoulderPageProps {
  onBack: () => void;
}

export default function BoulderPage({ onBack }: BoulderPageProps) {
  useEffect(() => window.scrollTo(0, 0), []);

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    { question: "Why is Boulder considered a luxury market?", answer: "Boulder commands a premium because of its mountain setting, constrained supply, high-end housing stock, and unmatched blend of outdoor lifestyle and economic strength." },
    { question: "Who buys luxury homes in Boulder?", answer: "Buyers often include executives, founders, relocators, and lifestyle-driven households seeking scenery, privacy, and long-term quality of life." },
    { question: "What types of luxury homes are in Boulder?", answer: "Inventory can include contemporary residences, view homes, custom estates, and architecturally distinctive properties." },
    { question: "How does Boulder compare with Denver luxury neighborhoods?", answer: "Boulder offers a stronger mountain-town lifestyle premium, while Denver offers broader urban, historic, and suburban luxury options." }
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  const sampleListings = [
    { price: "$3.25M", beds: 4, baths: 5, sqft: "5,200", address: "4850 Sunshine Canyon Dr" },
    { price: "$2.45M", beds: 3, baths: 4, sqft: "4,100", address: "1520 Bluebell Ave" },
    { price: "$4.10M", beds: 5, baths: 6, sqft: "6,800", address: "650 Flagstaff Rd" }
  ];

  const community = {
    name: "Boulder",
    tagline: "Premium Front Range living with mountain views and lifestyle prestige",
    description: "Boulder should be presented as a premium Front Range market where lifestyle, setting, and architectural quality create a distinct luxury premium. The content emphasizes views, trail access, design, innovation-economy demand, and the scarcity that supports upper-tier pricing.\n\nNestled against the Flatiron Mountains, Boulder offers an unparalleled combination of natural beauty, intellectual vibrancy, and outdoor recreation. The city is home to the University of Colorado, numerous tech companies, and a thriving arts scene, attracting discerning buyers who value both lifestyle and investment potential.",
    medianPrice: "$1.95M",
    priceRange: "$900K - $8.00M",
    dom: "32",
    lifestyle: "Mountain Lifestyle",
    tags: ["Mountain views", "Trail access", "Design-forward", "Innovation economy"],
    image: "/images/community_boulder.jpg",
    features: [
      "Stunning Flatiron Mountain views",
      "300+ miles of hiking trails",
      "World-class dining and shopping",
      "University of Colorado proximity",
      "Thriving tech industry",
      "Chautauqua Park access",
      "Pearl Street Mall",
      "Constrained supply supports values"
    ],
    nearby: ["Chautauqua Park", "Pearl Street Mall", "University of Colorado", "Boulder Canyon", "Eldorado Canyon"]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation onNavigateHome={onBack} />

      <section className="relative w-full pt-20">
        <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
          <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-4xl">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Front Range Community</p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">{community.name} Luxury Homes</h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl">{community.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 bg-gray-50 border-b border-gray-100">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Median Price</p><p className="font-display text-2xl md:text-3xl font-bold text-gold">{community.medianPrice}</p></div>
            <div className="text-center"><p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Price Range</p><p className="font-display text-lg md:text-xl font-bold text-dark">{community.priceRange}</p></div>
            <div className="text-center"><p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Days on Market</p><p className="font-display text-2xl md:text-3xl font-bold text-dark">{community.dom}</p></div>
            <div className="text-center"><p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Lifestyle</p><p className="text-dark text-sm">{community.lifestyle}</p></div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-6">About {community.name}</h2>
              <div className="prose prose-lg max-w-none">
                {community.description.split('\n\n').map((paragraph, idx) => (<p key={idx} className="text-dark-lighter leading-relaxed mb-6">{paragraph}</p>))}
              </div>
              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-dark mb-6">Community Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {community.features.map((feature, idx) => (<div key={idx} className="flex items-start gap-3"><div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" /><span className="text-dark-lighter">{feature}</span></div>))}
                </div>
              </div>
              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-dark mb-6">Nearby Attractions</h3>
                <div className="flex flex-wrap gap-3">
                  {community.nearby.map((place, idx) => (<span key={idx} className="bg-gray-100 text-dark px-4 py-2 rounded-full text-sm">{place}</span>))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 sticky top-24">
                <h3 className="font-display text-xl font-bold text-dark mb-6">Interested in {community.name}?</h3>
                <p className="text-dark-lighter text-sm mb-6">Schedule a Boulder luxury strategy call with Dan.</p>
                <div className="space-y-4 mb-8">
                  <a href="tel:7206630446" className="btn-primary w-full flex items-center justify-center gap-2"><Phone size={18} />Call Dan</a>
                  <a href="mailto:Dan@SSCandCompany.com" className="btn-outline w-full flex items-center justify-center gap-2"><Mail size={18} />Email Dan</a>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs text-dark-lighter uppercase tracking-wider mb-4">Community Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {community.tags.map((tag, idx) => (<span key={idx} className="bg-white border border-gray-200 text-dark text-xs px-3 py-1.5 rounded">{tag}</span>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="w-full py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Common Questions</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">Boulder FAQs</h2>
            </div>
            <div className={`space-y-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-display text-lg font-semibold text-dark pr-4">{faq.question}</span>
                    <ChevronDown size={24} className={`text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-6"><p className="text-dark-lighter leading-relaxed">{faq.answer}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8 text-center">Featured Listings in {community.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleListings.map((listing, idx) => (
                <div key={idx} className="property-card bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg border border-gray-100">
                  <div className="relative h-56 bg-gray-200"><div className="absolute inset-0 flex items-center justify-center text-gray-400"><MapPin size={48} /></div></div>
                  <div className="p-6">
                    <p className="font-display text-2xl font-bold text-gold mb-1">{listing.price}</p>
                    <p className="text-dark font-medium mb-4">{listing.address}</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5"><Bed size={16} className="text-gold" /><span className="text-dark text-sm">{listing.beds}</span></div>
                      <div className="flex items-center gap-1.5"><Bath size={16} className="text-gold" /><span className="text-dark text-sm">{listing.baths}</span></div>
                      <div className="flex items-center gap-1.5"><Maximize size={16} className="text-gold" /><span className="text-dark text-sm">{listing.sqft} sqft</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button className="btn-outline inline-flex items-center gap-2">View All {community.name} Listings<ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-dark text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Explore {community.name}?</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">Schedule a Boulder luxury strategy call with Dan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7206630446" className="btn-primary flex items-center gap-2"><Phone size={18} />(720) 663-0446</a>
            <button onClick={onBack} className="border-2 border-white/30 text-white px-8 py-4 font-medium rounded hover:bg-white/10 transition-colors">View Other Communities</button>
          </div>
        </div>
      </section>
    </div>
  );
}
