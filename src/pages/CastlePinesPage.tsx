import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Bed, Bath, Maximize, Phone, Mail, ChevronDown } from 'lucide-react';
import Navigation from '../components/Navigation';

interface CastlePinesPageProps {
  onBack: () => void;
}

export default function CastlePinesPage({ onBack }: CastlePinesPageProps) {
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
    { question: "Is Castle Pines one of Denver Metro's top luxury areas?", answer: "Yes. Castle Pines is widely recognized for gated enclaves, golf-oriented communities, larger custom homes, and a more private upscale setting." },
    { question: "What kind of luxury homes are in Castle Pines?", answer: "Buyers often find custom estates, golf-course homes, newer executive residences, and homes with larger lots or elevated views." },
    { question: "Who is Castle Pines best for?", answer: "It fits buyers who want privacy, club-oriented lifestyle, and a suburban luxury experience with a more exclusive feel." },
    { question: "How does Castle Pines compare with Greenwood Village?", answer: "Castle Pines is more golf-and-gate focused with hillside character, while Greenwood Village offers closer DTC access and more established executive estates." }
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  const sampleListings = [
    { price: "$2.85M", beds: 5, baths: 6, sqft: "6,200", address: "4850 Castle Pines Pkwy" },
    { price: "$1.95M", beds: 4, baths: 5, sqft: "4,800", address: "3120 Castle View Dr" },
    { price: "$3.50M", beds: 6, baths: 7, sqft: "7,500", address: "5200 Country Club Dr" }
  ];

  const community = {
    name: "Castle Pines",
    tagline: "Gated luxury with championship golf and panoramic views",
    description: "Castle Pines should be positioned as one of the metro's premier golf-and-gated luxury markets. The content emphasizes wooded settings, custom homes, privacy, elevated views, and a resort-style atmosphere that separates it from more conventional suburban neighborhoods.\n\nCastle Pines Village is a gated luxury community nestled among towering pines and dramatic rocky bluffs, about 20 miles south of Denver. It is among the most coveted communities in Colorado, known for panoramic mountain views, wildflower-dotted meadows, and some of the finest residences in the state.",
    medianPrice: "$1.85M",
    priceRange: "$950K - $6.00M",
    dom: "35",
    lifestyle: "Golf & Nature",
    tags: ["Gated communities", "Golf lifestyle", "Custom estates", "Mountain views"],
    image: "/images/community_castle_pines.jpg",
    features: [
      "Jack Nicklaus-designed golf courses",
      "24/7 gated security",
      "Panoramic mountain views",
      "Tennis facilities",
      "Swimming pools",
      "Private hiking trails",
      "Fitness center",
      "Wildflower meadows"
    ],
    nearby: ["Castle Pines Golf Club", "Castle Rock", "Denver Tech Center", "Park Meadows", "I-25"]
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
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Golf & Gated Community</p>
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
                <p className="text-dark-lighter text-sm mb-6">Book a private Castle Pines showing with Dan.</p>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">Castle Pines FAQs</h2>
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
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">Book a private Castle Pines showing with Dan and discover your dream home.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7206630446" className="btn-primary flex items-center gap-2"><Phone size={18} />(720) 663-0446</a>
            <button onClick={onBack} className="border-2 border-white/30 text-white px-8 py-4 font-medium rounded hover:bg-white/10 transition-colors">View Other Communities</button>
          </div>
        </div>
      </section>
    </div>
  );
}
