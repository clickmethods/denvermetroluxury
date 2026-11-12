import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Bed, Bath, Maximize, Phone, Mail, ChevronDown } from 'lucide-react';
import Navigation from '../components/Navigation';

interface LoDoHighlandPageProps {
  onBack: () => void;
}

export default function LoDoHighlandPage({ onBack }: LoDoHighlandPageProps) {
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
    { question: "Is LoDo a luxury real estate market?", answer: "Yes. LoDo attracts luxury buyers seeking premium urban residences, lofts, condos, walkability, and a downtown-centered lifestyle." },
    { question: "What is the difference between LoDo and Highland?", answer: "LoDo is more downtown and condo/loft oriented, while Highland often offers a mix of trendy neighborhood feel, townhomes, and upscale residential pockets." },
    { question: "Who buys luxury homes in LoDo and Highland?", answer: "Buyers often prioritize walkability, design, views, lock-and-leave convenience, and immediate access to Denver's urban core." },
    { question: "Are there single-family luxury options nearby?", answer: "Highland and nearby urban districts can offer upscale attached homes and select single-family opportunities, while LoDo is more condo and loft driven." }
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  const sampleListings = [
    { price: "$1.85M", beds: 2, baths: 2, sqft: "1,850", address: "1750 Wewatta St #2405" },
    { price: "$1.45M", beds: 2, baths: 2, sqft: "1,600", address: "3201 Zuni St" },
    { price: "$2.25M", beds: 3, baths: 3, sqft: "2,400", address: "2200 17th St" }
  ];

  const neighborhood = {
    name: "LoDo & Highland",
    tagline: "Urban luxury with walkability, architecture, and city energy",
    description: "LoDo and Highland should be framed as an urban luxury lifestyle play rather than a suburban one. The content emphasizes walkability, architecture, loft and condo options, city energy, and quick access to downtown, dining, nightlife, and sports venues.\n\nLower Downtown (LoDo) and the Highland neighborhood represent Denver's most dynamic urban luxury markets. LoDo features historic warehouse conversions, modern high-rises, and the vibrant Union Station district, while Highland offers stunning city views, trendy restaurants, and a more residential urban experience perched just above downtown.",
    medianPrice: "$875K",
    priceRange: "$500K - $3.50M",
    dom: "18",
    lifestyle: "Urban Luxury",
    tags: ["Walkability", "Loft/condo living", "Downtown access", "Trendy dining"],
    image: "/images/neighborhood_lodo_highland.jpg",
    features: [
      "Historic warehouse conversions",
      "Modern luxury high-rises",
      "Union Station district",
      "Walkable to downtown",
      "Trendy restaurant scene",
      "Coors Field proximity",
      "Light rail access",
      "City and mountain views"
    ],
    nearby: ["Union Station", "Coors Field", "16th Street Mall", "Highland Bridge", "Confluence Park"]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation onNavigateHome={onBack} />

      <section className="relative w-full pt-20">
        <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
          <img src={neighborhood.image} alt={neighborhood.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-4xl">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Downtown Denver Neighborhoods</p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">{neighborhood.name} Luxury Homes</h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl">{neighborhood.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 bg-gray-50 border-b border-gray-100">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Median Price</p><p className="font-display text-2xl md:text-3xl font-bold text-gold">{neighborhood.medianPrice}</p></div>
            <div className="text-center"><p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Price Range</p><p className="font-display text-lg md:text-xl font-bold text-dark">{neighborhood.priceRange}</p></div>
            <div className="text-center"><p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Days on Market</p><p className="font-display text-2xl md:text-3xl font-bold text-dark">{neighborhood.dom}</p></div>
            <div className="text-center"><p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Lifestyle</p><p className="text-dark text-sm">{neighborhood.lifestyle}</p></div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-6">About {neighborhood.name}</h2>
              <div className="prose prose-lg max-w-none">
                {neighborhood.description.split('\n\n').map((paragraph, idx) => (<p key={idx} className="text-dark-lighter leading-relaxed mb-6">{paragraph}</p>))}
              </div>
              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-dark mb-6">Neighborhood Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {neighborhood.features.map((feature, idx) => (<div key={idx} className="flex items-start gap-3"><div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" /><span className="text-dark-lighter">{feature}</span></div>))}
                </div>
              </div>
              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-dark mb-6">Nearby Attractions</h3>
                <div className="flex flex-wrap gap-3">
                  {neighborhood.nearby.map((place, idx) => (<span key={idx} className="bg-gray-100 text-dark px-4 py-2 rounded-full text-sm">{place}</span>))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 sticky top-24">
                <h3 className="font-display text-xl font-bold text-dark mb-6">Interested in {neighborhood.name}?</h3>
                <p className="text-dark-lighter text-sm mb-6">Schedule a private downtown tour with Dan.</p>
                <div className="space-y-4 mb-8">
                  <a href="tel:7206630446" className="btn-primary w-full flex items-center justify-center gap-2"><Phone size={18} />Call Dan</a>
                  <a href="mailto:Dan@SSCandCompany.com" className="btn-outline w-full flex items-center justify-center gap-2"><Mail size={18} />Email Dan</a>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs text-dark-lighter uppercase tracking-wider mb-4">Neighborhood Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.tags.map((tag, idx) => (<span key={idx} className="bg-white border border-gray-200 text-dark text-xs px-3 py-1.5 rounded">{tag}</span>))}
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">LoDo & Highland FAQs</h2>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8 text-center">Featured Listings in {neighborhood.name}</h2>
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
              <button className="btn-outline inline-flex items-center gap-2">View All {neighborhood.name} Listings<ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-dark text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Explore {neighborhood.name}?</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">Schedule a private downtown tour with Dan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7206630446" className="btn-primary flex items-center gap-2"><Phone size={18} />(720) 663-0446</a>
            <button onClick={onBack} className="border-2 border-white/30 text-white px-8 py-4 font-medium rounded hover:bg-white/10 transition-colors">View Other Neighborhoods</button>
          </div>
        </div>
      </section>
    </div>
  );
}
