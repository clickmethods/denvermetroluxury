import { useEffect, useRef, useState } from 'react';
import { 
  DollarSign, 
  ArrowRight, 
  Bed, 
  Bath, 
  Maximize,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import CommunityPage from './pages/CommunityPage';
import DenverLuxuryHub from './pages/DenverLuxuryHub';
import NeighborhoodDetail from './pages/NeighborhoodDetail';
import HighlandsRanchPage from './pages/HighlandsRanchPage';
import CastlePinesPage from './pages/CastlePinesPage';
import LoneTreePage from './pages/LoneTreePage';
import ParkerPage from './pages/ParkerPage';
import BoulderPage from './pages/BoulderPage';
import LouisvilleSuperiorPage from './pages/LouisvilleSuperiorPage';
import CentralParkPage from './pages/CentralParkPage';
import LoDoHighlandPage from './pages/LoDoHighlandPage';
import CapitolHillPage from './pages/CapitolHillPage';
import ArvadaLuxuryPage from './pages/ArvadaLuxuryPage';
import GoldenLakewoodFoothillsPage from './pages/GoldenLakewoodFoothillsPage';
import DTCCorridorPage from './pages/DTCCorridorPage';
import MarketReportPage from './pages/MarketReportPage';
import Navigation from './components/Navigation';
import { getNeighborhoodById } from './data/neighborhoods';
import { zipData, marketSummary, reportAsOf, formatPrice } from './data/marketReport';

const MARKET_REPORT_HASH = '#market-report';

// Community Data
const communitiesData = [
  {
    id: "downtown-lodo",
    name: "Downtown / LoDo",
    tagline: "Denver's vibrant urban heart with historic charm",
    description: "Downtown Denver is a thriving urban core where historic charm meets modern living. In recent years, conversions of landmark buildings into condos, lofts, and penthouses – alongside new high-rise developments – have transformed downtown into a vibrant residential community for those seeking an energetic city lifestyle.\n\nIn the adjacent Lower Downtown (LoDo) historic district, 19th-century warehouses and landmarks like Union Station and Coors Field are preserved amid a bustling scene of restaurants, brewpubs, and boutiques. The area is highly walkable and transit-friendly – the 16th Street Mall shuttle connects downtown's shops, parks, and the Platte River trail system – making urban living convenient and exciting.",
    medianPrice: "$850K",
    priceRange: "$450K - $3.50M",
    dom: "18",
    lifestyle: "Urban Professional",
    tags: ["Urban professionals", "Lock-and-leave lifestyle"],
    image: "/images/community_downtown_lodo.jpg",
    features: [
      "Historic warehouse conversions",
      "High-rise luxury condos",
      "Walkable to Union Station",
      "16th Street Mall access",
      "Coors Field nearby",
      "Platte River trail system",
      "Transit-friendly location",
      "Bustling restaurant scene"
    ],
    nearby: ["Union Station", "Coors Field", "16th Street Mall", "Platte River Trail", "Larimer Square"]
  },
  {
    id: "union-station",
    name: "Union Station",
    tagline: "The gateway to Denver with transit-oriented luxury",
    description: "Union Station stands as Denver's grand transportation hub and the centerpiece of one of the city's most dynamic neighborhoods. This historic Beaux-Arts building has been beautifully restored and now serves as a vibrant mixed-use space with restaurants, shops, and a boutique hotel.\n\nThe surrounding neighborhood has exploded with luxury residential development, offering modern condos and apartments steps from light rail, Amtrak, and airport connections. Residents enjoy unparalleled access to downtown while living in one of Denver's most architecturally significant areas.",
    medianPrice: "$1.20M",
    priceRange: "$650K - $5.00M",
    dom: "22",
    lifestyle: "Frequent Traveler",
    tags: ["Frequent travelers", "Transit-oriented living"],
    image: "/images/community_union_station.jpg",
    features: [
      "Direct airport rail connection",
      "Historic landmark building",
      "Luxury residential towers",
      "World-class restaurants",
      "Boutique hotel",
      "Light rail hub",
      "Walkable to downtown",
      "Amtrak access"
    ],
    nearby: ["Downtown Denver", "Coors Field", "Pepsi Center", "Confluence Park", "LoDo"]
  },
  {
    id: "rino",
    name: "RiNo (River North Art District)",
    tagline: "Where art meets industrial-chic living",
    description: "The River North Art District, known as RiNo, is Denver's creative epicenter where industrial warehouses have been transformed into galleries, studios, breweries, and loft residences. This vibrant neighborhood pulses with artistic energy, featuring colorful murals on nearly every building.\n\nRiNo attracts creative professionals and art enthusiasts who appreciate the neighborhood's edgy, authentic character. With craft breweries, innovative restaurants, and art galleries lining the streets, RiNo offers a unique urban lifestyle that celebrates Denver's creative spirit.",
    medianPrice: "$725K",
    priceRange: "$400K - $2.80M",
    dom: "15",
    lifestyle: "Creative Professional",
    tags: ["Art enthusiasts", "Creative professionals"],
    image: "/images/community_rino.jpg",
    features: [
      "Street art and murals",
      "Industrial loft conversions",
      "Craft brewery district",
      "Art galleries",
      "Creative workspaces",
      "Innovative dining scene",
      "Warehouse architecture",
      "Walkable to downtown"
    ],
    nearby: ["Downtown Denver", "Ball Arena", "Confluence Park", "Five Points", "LoDo"]
  },
  {
    id: "lohi",
    name: "LoHi (Lower Highlands)",
    tagline: "Trendy neighborhood with stunning city views",
    description: "The Highlands, including the Lower Highland (LoHi) area, is a hip neighborhood perched just above downtown with stellar skyline views. This thriving area has become 'the place to be' for young urbanites, thanks to a boom in new housing that blends with historic Victorian homes.\n\nIts popularity has driven vibrant growth in eateries, craft breweries, and boutiques. New pedestrian bridges (like the iconic Highland Bridge over I-25) have improved connectivity to downtown, spurring redevelopment and prosperity in LoHi. With its eclectic mix of old and new and a lively neighborhood spirit, the Highlands offers an urban experience with laid-back charm.",
    medianPrice: "$950K",
    priceRange: "$550K - $3.20M",
    dom: "14",
    lifestyle: "Young Professional",
    tags: ["Young professionals", "View seekers"],
    image: "/images/community_lohi.jpg",
    features: [
      "Downtown skyline views",
      "Historic Victorian homes",
      "Modern townhomes",
      "Craft brewery scene",
      "Highland Bridge access",
      "Trendy restaurants",
      "Boutique shopping",
      "Walkable to downtown"
    ],
    nearby: ["Downtown Denver", "Highland Bridge", "LoDo", "Confluence Park", "Sloan's Lake"]
  },
  {
    id: "cherry-creek-north",
    name: "Cherry Creek North",
    tagline: "Denver's flagship luxury retail district",
    description: "Cherry Creek is Denver's premier upscale neighborhood, renowned for its luxury shopping and dining scene. Residential streets here are lined with a mix of cozy early-20th-century bungalows and new multi-million-dollar homes, as well as sleek high-rise condos – all within walking distance of boutiques, art galleries, cafes, and the famous open-air Cherry Creek Shopping Center.\n\nAt the heart of the community is Cherry Creek North, a 16-block district with over 320 upscale galleries, designer shops, and eateries that make it 'the region's premier shopping and dining neighborhood'. With annual events like the Cherry Creek Arts Festival and easy bike path access to parks, Cherry Creek offers an elegant urban lifestyle at the center of it all.",
    medianPrice: "$1.85M",
    priceRange: "$800K - $8.00M",
    dom: "28",
    lifestyle: "Luxury Retail",
    tags: ["Luxury retail access", "Upscale dining"],
    image: "/images/community_cherry_creek.jpg",
    features: [
      "Luxury shopping district",
      "Designer boutiques",
      "Art galleries",
      "Fine dining restaurants",
      "Cherry Creek Mall",
      "Historic bungalows",
      "Modern luxury homes",
      "Cherry Creek Arts Festival"
    ],
    nearby: ["Cherry Creek Mall", "Cherry Creek North", "Washington Park", "Glendale", "Hilltop"]
  },
  {
    id: "hilltop",
    name: "Hilltop",
    tagline: "Prestigious estate living with panoramic views",
    description: "Hilltop and Crestmoor are prestigious east Denver neighborhoods known for quiet, tree-lined streets and a blend of historic and contemporary homes. Hilltop, true to its name, sits on slightly higher ground and features many distinctive homes – from 1930s Tudors and mid-century ranches to multi-level modern builds.\n\nNotably, the neighborhood is home to the Cranmer Park landmark (with its famed sundial and Front Range panorama) and lies adjacent to new development in Lowry and the shops of Cherry Creek. With their strong residential character and proximity to top schools and amenities, Hilltop and Crestmoor are sought-after by families seeking luxury and community.",
    medianPrice: "$2.80M",
    priceRange: "$1.50M - $12.00M",
    dom: "35",
    lifestyle: "Estate Living",
    tags: ["Estate-scale living", "Top-tier schools"],
    image: "/images/community_hilltop.jpg",
    features: [
      "Panoramic mountain views",
      "Cranmer Park sundial",
      "1930s Tudor homes",
      "Mid-century ranches",
      "Modern luxury builds",
      "Large estate lots",
      "Top-rated schools",
      "Near Cherry Creek"
    ],
    nearby: ["Cranmer Park", "Cherry Creek", "Lowry", "Crestmoor", "Glendale"]
  },
  {
    id: "washington-park",
    name: "Washington Park",
    tagline: "Denver's crown jewel of neighborhood living",
    description: "Washington Park (fondly 'Wash Park') is a beloved neighborhood centered around one of Denver's finest parks. Classic bungalows and Denver Squares (early 1900s box-style homes), along with a growing number of large new-build luxury homes, characterize this area.\n\nThe neighborhood's namesake park is a 165-acre oasis with two lakes, flower gardens, bike paths, and sports facilities – a haven for cyclists, joggers, volleyball leagues, tennis players and families alike. With charming local shopping/dining districts on its periphery and a strong community feel, Wash Park remains one of Denver's most coveted neighborhoods for an active yet relaxed lifestyle.",
    medianPrice: "$1.45M",
    priceRange: "$700K - $5.00M",
    dom: "12",
    lifestyle: "Active Outdoor",
    tags: ["Active outdoor lifestyle", "Historic homes"],
    image: "/images/community_wash_park.jpg",
    features: [
      "165-acre park",
      "Two scenic lakes",
      "Flower gardens",
      "Bike and running paths",
      "Sports facilities",
      "Classic bungalows",
      "Denver Square homes",
      "Strong community"
    ],
    nearby: ["Washington Park", "Old South Gaylord Street", "Platt Park", "Cherry Creek", "I-25"]
  },
  {
    id: "platt-park",
    name: "Platt Park",
    tagline: "Charming village atmosphere near the park",
    description: "Platt Park is a charming neighborhood in south Denver that offers a village-like atmosphere with tree-lined streets and a mix of historic and newer homes. The area is anchored by the popular Old South Gaylord Street shopping district, which features local boutiques, restaurants, and cafes.\n\nWith its proximity to Washington Park and easy access to downtown, Platt Park offers residents the perfect blend of suburban tranquility and urban convenience. The neighborhood is popular with young families and professionals who appreciate its walkability and strong sense of community.",
    medianPrice: "$1.10M",
    priceRange: "$600K - $2.80M",
    dom: "10",
    lifestyle: "Village Feel",
    tags: ["Walkable village feel", "Historic bungalows"],
    image: "/images/community_platt_park.jpg",
    features: [
      "Old South Gaylord Street",
      "Local boutiques",
      "Historic bungalows",
      "Tree-lined streets",
      "Walkable village feel",
      "Near Washington Park",
      "Family-friendly",
      "Easy downtown access"
    ],
    nearby: ["Washington Park", "Old South Gaylord Street", "I-25", "Cherry Creek", "Broadway"]
  },
  {
    id: "denver-tech-center",
    name: "Denver Tech Center",
    tagline: "Corporate convenience meets luxury living",
    description: "The Denver Tech Center (DTC) is a major business hub in southeast Denver that has evolved into a thriving residential community. The area offers a mix of luxury apartments, townhomes, and single-family homes, all within minutes of major corporate headquarters.\n\nResidents enjoy excellent amenities including shopping centers, restaurants, parks, and golf courses. The DTC area is ideal for professionals who want to minimize their commute while enjoying a high quality of life. With light rail access and easy highway connections, the Tech Center offers both convenience and comfort.",
    medianPrice: "$750K",
    priceRange: "$400K - $2.00M",
    dom: "20",
    lifestyle: "Corporate Executive",
    tags: ["Corporate executives", "Minimal commute"],
    image: "/images/community_dtc.jpg",
    features: [
      "Major corporate headquarters",
      "Light rail access",
      "Luxury apartments",
      "Golf courses nearby",
      "Shopping centers",
      "Minimal commute",
      "Highway access",
      "Business parks"
    ],
    nearby: ["Fiddler's Green", "Park Meadows Mall", "Greenwood Village", "Light Rail", "I-25"]
  },
  {
    id: "greenwood-village",
    name: "Greenwood Village",
    tagline: "Affluent suburban living with top-tier amenities",
    description: "Greenwood Village, located just south of Denver and adjacent to the Denver Tech Center, has evolved from rural farmland into a dynamic blend of upscale residential and business areas. Today, Greenwood Village offers some of the most diverse housing opportunities in metro Denver – from sleek condos to magnificent luxury estates in gated enclaves.\n\nThe community boasts a high quality of life with approximately 300 acres of parks and open space, miles of walking/biking trails (including the High Line Canal), and low crime rates. It's a hub for affluent, active lifestyles: residents enjoy fine dining, high-end shopping, and cultural events, as well as membership at exclusive clubs like the Glenmoor Country Club.",
    medianPrice: "$1.65M",
    priceRange: "$900K - $6.00M",
    dom: "28",
    lifestyle: "Affluent Family",
    tags: ["Affluent families", "Top schools"],
    image: "/images/community_greenwood.jpg",
    features: [
      "Gated luxury estates",
      "300 acres of parks",
      "High Line Canal trails",
      "Top-rated schools",
      "Glenmoor Country Club",
      "Low crime rates",
      "Fine dining",
      "Denver Tech Center proximity"
    ],
    nearby: ["Denver Tech Center", "Park Meadows Mall", "Glenmoor Country Club", "High Line Canal", "I-25"]
  },
  {
    id: "cherry-hills-village",
    name: "Cherry Hills Village",
    tagline: "The most exclusive address in Denver metro",
    description: "Cherry Hills Village is an exclusive residential enclave just south of Denver, synonymous with luxury living and privacy. This small city is often described as 'western elegance meets high-end living', feeling like a pastoral countryside retreat minutes from the urban core.\n\nCherry Hills is characterized by magnificent estates – from French Country manors to modern mansions – nestled among rolling lawns and equestrian trails. It consistently ranks among the most prestigious and wealthiest communities in Colorado (and even the United States). Residents enjoy top-rated schools and easy access to nearby country clubs, including the renowned Cherry Hills Country Club which has hosted U.S. Open and PGA tournaments.",
    medianPrice: "$4.50M",
    priceRange: "$2.00M - $25.00M",
    dom: "45",
    lifestyle: "Ultra-Luxury",
    tags: ["Ultra-high-net-worth", "Equestrian lifestyle"],
    image: "/images/community_cherry_hills.jpg",
    features: [
      "Magnificent estates",
      "French Country manors",
      "Modern mansions",
      "Equestrian trails",
      "Rolling lawns",
      "Cherry Hills Country Club",
      "Top-rated schools",
      "Gated privacy"
    ],
    nearby: ["Cherry Hills Country Club", "Denver Tech Center", "Greenwood Village", "High Line Canal", "I-25"]
  },
  {
    id: "castle-pines",
    name: "Castle Pines / Castle Pines Village",
    tagline: "Gated luxury with championship golf",
    description: "Castle Pines Village is a gated luxury community nestled among towering pines and dramatic rocky bluffs, about 20 miles south of Denver. It is among the most coveted communities in Colorado, known for panoramic mountain views, wildflower-dotted meadows, and some of the finest residences in the state.\n\nThe neighborhood is defined by two Jack Nicklaus-designed golf courses – the Country Club at Castle Pines and Castle Pines Golf Club – which wind through the landscape, offering world-class golfing and a stunning backdrop for the homes. Castle Pines Village has been acclaimed for its first-class amenities and active lifestyle: residents enjoy tennis, swimming, fitness facilities, and an extensive network of private hiking and biking trails, all within a 24/7 secure, gated environment.",
    medianPrice: "$1.85M",
    priceRange: "$950K - $6.00M",
    dom: "35",
    lifestyle: "Golf & Nature",
    tags: ["Golf enthusiasts", "Gated security"],
    image: "/images/community_castle_pines.jpg",
    features: [
      "Jack Nicklaus golf courses",
      "24/7 gated security",
      "Panoramic mountain views",
      "Tennis facilities",
      "Swimming pools",
      "Private hiking trails",
      "Fitness center",
      "Wildflower meadows"
    ],
    nearby: ["Castle Pines Golf Club", "Castle Rock", "Denver Tech Center", "Park Meadows", "I-25"]
  }
];



// Hero Section - Supports both image and video backgrounds
interface HeroSectionProps {
  videoUrl?: string;
  imageUrl?: string;
}

function HeroSection({ videoUrl, imageUrl = "/images/hero_denver_skyline.jpg" }: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        {videoUrl ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={imageUrl}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </>
        ) : (
          <>
            <img 
              src={imageUrl} 
              alt="Denver Skyline" 
              className={`w-full h-full object-cover transition-all duration-1000 ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </>
        )}
      </div>

      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12 py-32">
          <div className="max-w-3xl">
            <div className={`mb-6 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="font-mono text-xs tracking-[0.25em] text-gold uppercase">
                Denver's Premier Luxury Real Estate
              </span>
            </div>

            <h1 className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Denver luxury real estate{' '}
              <span className="gradient-text">homes for sale from $1M to $25M</span>
            </h1>

            <p className={`text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Cherry Creek, Hilltop, Cherry Hills Village, Castle Pines, Boulder, and 30+ metro neighborhoods. Request a home valuation or search active listings now. Call Dan — (720) 663-0446.
            </p>

            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a href="#communities" className="btn-primary flex items-center gap-2">
                Explore Communities
                <ArrowRight size={18} />
              </a>
              <a href="#listings" className="border-2 border-white/30 text-white px-8 py-4 font-medium tracking-wide transition-all duration-200 rounded hover:bg-white/10">
                View Luxury Listings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quick Filters Section - Image card grid under hero
function QuickFilters() {
  const filters = [
    { label: "New listings", count: "282", image: "/images/filter_new_listings.jpg" },
    { label: "Price reduced", count: "70", image: "/images/filter_price_reduced.jpg" },
    { label: "Open houses", count: "187", image: "/images/filter_open_houses.jpg" },
    { label: "Recently sold", count: "3,036", image: "/images/filter_recently_sold.jpg" },
    { label: "New construction", count: "96", image: "/images/filter_new_construction.jpg" },
    { label: "New home communities", count: "1", image: "/images/filter_new_communities.jpg" },
    { label: "Land", count: "59", image: "/images/filter_land.jpg" },
    { label: "Pools", count: "13", image: "/images/filter_pools.jpg" }
  ];

  return (
    <section className="relative w-full py-8 lg:py-12 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 max-w-6xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={filter.image}
                alt={filter.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute top-3 right-3 bg-white text-dark text-xs font-semibold px-2.5 py-1 rounded-full">
                {filter.count}
              </span>
              <span className="absolute bottom-3 left-3 text-white font-display text-sm lg:text-base font-medium">
                {filter.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Communities Section
interface CommunitiesSectionProps {
  onSelectCommunity: (communityId: string) => void;
  onNavigateToHub?: () => void;
}

function CommunitiesSection({ onSelectCommunity, onNavigateToHub }: CommunitiesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Denver Core Luxury Neighborhoods
  const denverCoreCommunities = [
    { id: "cherry-creek-north", name: "Cherry Creek", description: "Denver's flagship luxury retail district", median: "$1.85M", range: "$800K - $8.00M", dom: "28", tags: ["Luxury retail access", "Upscale dining"], image: "/images/community_cherry_creek.jpg" },
    { id: "hilltop", name: "Hilltop", description: "Prestigious estate living with panoramic views", median: "$2.80M", range: "$1.50M - $12.00M", dom: "35", tags: ["Estate-scale living", "Top-tier schools"], image: "/images/community_hilltop.jpg" },
    { id: "belcaro", name: "Belcaro", description: "Exclusive enclave of elegant estates", median: "$2.20M", range: "$1.20M - $8.00M", dom: "32", tags: ["Estate living", "Privacy"], image: "/images/community_belcaro.jpg" },
    { id: "washington-park", name: "Washington Park", description: "Denver's crown jewel of neighborhood living", median: "$1.45M", range: "$700K - $5.00M", dom: "12", tags: ["Active outdoor lifestyle", "Historic homes"], image: "/images/community_wash_park.jpg" },
    { id: "wash-park-west", name: "Washington Park West", description: "Charming homes near the park", median: "$1.15M", range: "$600K - $3.50M", dom: "14", tags: ["Park access", "Walkable"], image: "/images/community_wash_park.jpg" },
    { id: "country-club", name: "Country Club", description: "Historic luxury near the golf course", median: "$1.95M", range: "$900K - $6.00M", dom: "30", tags: ["Historic homes", "Golf course"], image: "/images/community_country_club.jpg?v=2" },
    { id: "bonnie-brae", name: "Bonnie Brae", description: "Tree-lined streets with Tudor charm", median: "$1.35M", range: "$700K - $4.00M", dom: "18", tags: ["Tudor architecture", "Quiet streets"], image: "/images/community_bonnie_brae.jpg?v=2" },
    { id: "downtown-lodo", name: "LoDo", description: "Denver's vibrant urban heart with historic charm", median: "$850K", range: "$450K - $3.50M", dom: "18", tags: ["Urban professionals", "Lock-and-leave lifestyle"], image: "/images/community_downtown_lodo.jpg" },
    { id: "sloans-lake", name: "Sloan's Lake", description: "Waterfront living with city views", median: "$950K", range: "$550K - $3.20M", dom: "16", tags: ["Lake access", "Waterfront views"], image: "/images/community_sloans_lake.jpg" },
    { id: "berkeley", name: "Berkeley", description: "Trendy neighborhood with local charm", median: "$825K", range: "$450K - $2.80M", dom: "12", tags: ["Trendy dining", "Local shops"], image: "/images/community_berkeley.jpg" },
    { id: "highlands", name: "Highlands", description: "Historic homes with stunning city views", median: "$1.05M", range: "$550K - $3.50M", dom: "14", tags: ["Historic homes", "City views"], image: "/images/community_lohi.jpg" },
    { id: "observatory-park", name: "Observatory Park", description: "Family-friendly with park access", median: "$875K", range: "$500K - $2.50M", dom: "15", tags: ["Family-friendly", "Park access"], image: "/images/community_observatory_park.jpg" }
  ];

  // Suburban Luxury Markets
  const suburbanCommunities = [
    { id: "greenwood-village", name: "Greenwood Village", description: "Affluent suburban living with top-tier amenities", median: "$1.65M", range: "$900K - $6.00M", dom: "28", tags: ["Affluent families", "Top schools"], image: "/images/community_greenwood.jpg" },
    { id: "cherry-hills-village", name: "Cherry Hills Village", description: "The most exclusive address in Denver metro", median: "$4.50M", range: "$2.00M - $25.00M", dom: "45", tags: ["Ultra-high-net-worth", "Equestrian lifestyle"], image: "/images/community_cherry_hills.jpg" },
    { id: "castle-pines", name: "Castle Pines", description: "Gated luxury with championship golf", median: "$1.85M", range: "$950K - $6.00M", dom: "35", tags: ["Golf enthusiasts", "Gated security"], image: "/images/community_castle_pines.jpg" },
    { id: "highlands-ranch", name: "Highlands Ranch", description: "Space, amenities, and suburban luxury", median: "$875K", range: "$550K - $2.50M", dom: "22", tags: ["Family-oriented", "Master-planned"], image: "/images/community_highlands_ranch.jpg" },
    { id: "parker", name: "Parker", description: "Spacious luxury living with room to grow", median: "$785K", range: "$500K - $2.00M", dom: "25", tags: ["Larger lots", "Custom homes"], image: "/images/community_parker.jpg" },
    { id: "littleton", name: "Littleton", description: "Historic charm with modern amenities", median: "$725K", range: "$450K - $1.80M", dom: "18", tags: ["Historic downtown", "Family-friendly"], image: "/images/community_littleton.jpg" },
    { id: "golden", name: "Golden", description: "Mountain town living near the city", median: "$925K", range: "$600K - $3.00M", dom: "28", tags: ["Mountain views", "Historic charm"], image: "/images/community_golden.jpg" },
    { id: "evergreen", name: "Evergreen", description: "Mountain retreat with pine forest setting", median: "$850K", range: "$500K - $2.50M", dom: "32", tags: ["Mountain living", "Pine forests"], image: "/images/community_evergreen.jpg" },
    { id: "lakewood", name: "Lakewood", description: "West-metro convenience with foothills access", median: "$675K", range: "$400K - $1.60M", dom: "16", tags: ["West-metro access", "Foothills proximity"], image: "/images/community_lakewood.jpg" },
    { id: "boulder", name: "Boulder", description: "Premium Front Range with mountain lifestyle", median: "$1.95M", range: "$900K - $8.00M", dom: "32", tags: ["Mountain views", "Trail access"], image: "/images/community_boulder.jpg" }
  ];

  const CommunityCard = ({ community, index }: { community: typeof denverCoreCommunities[0], index: number }) => (
    <div 
      onClick={() => onSelectCommunity(community.id)}
      className={`community-card overflow-hidden group cursor-pointer transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={community.image} 
          alt={community.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Median</p>
          <p className="font-display text-2xl font-bold text-white">{community.median}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-dark mb-2">{community.name}</h3>
        <p className="text-dark-lighter text-sm mb-4 line-clamp-2">{community.description}</p>
        <div className="flex items-center gap-2 mb-3">
          <DollarSign size={14} className="text-gold" />
          <span className="text-dark text-sm font-medium">{community.range}</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Clock size={14} className="text-gold" />
          <span className="text-dark text-sm"><span className="font-semibold">{community.dom}</span> DOM</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {community.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-dark-lighter px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        <button className="w-full btn-dark flex items-center justify-center gap-2">
          View Community Guide
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="communities" className="relative w-full py-24 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Neighborhoods</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">Signature Communities</h2>
          <p className="text-dark-lighter text-lg mb-6">Denver luxury homes by neighborhood — median prices, days on market, and active listings. Pick one below or call (720) 663-0446 for off-market inventory.</p>
          {onNavigateToHub && (
            <button 
              onClick={onNavigateToHub}
              className="text-gold font-medium hover:underline inline-flex items-center gap-2"
            >
              View All 32 Denver Neighborhoods
              <ArrowRight size={16} />
            </button>
          )}
        </div>

        {/* Denver Core Luxury Neighborhoods */}
        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-dark mb-8 text-center">Denver Core Luxury Neighborhoods</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {denverCoreCommunities.map((community, index) => (
              <CommunityCard key={community.id} community={community} index={index} />
            ))}
          </div>
        </div>

        {/* Suburban Luxury Markets */}
        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-dark mb-8 text-center">Suburban Luxury Markets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {suburbanCommunities.map((community, index) => (
              <CommunityCard key={community.id} community={community} index={index} />
            ))}
          </div>
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="btn-outline inline-flex items-center gap-2">
            View All Communities
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

// MLS Embed Component
function MLSEmbed({ title = "MLS Listings" }: { title?: string }) {
  return (
    <div className="w-full">
      <iframe
        src="https://matrix.recolorado.com/Matrix/public/IDX.aspx?idx=9d5c6e8a"
        width="100%"
        height="800"
        style={{ border: 'none', borderRadius: '16px' }}
        loading="lazy"
        title={title}
      />
    </div>
  );
}

// Featured Properties Section with MLS Embed option
function FeaturedProperties() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const [showMLS, setShowMLS] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const properties = [
    { image: "/images/featured_kitchen_living.jpg", badges: ["new", "new"], price: "$2.45M", address: "425 University Blvd", community: "Cherry Creek North", beds: 4, baths: 5, sqft: "4,200" },
    { image: "/images/community_home.jpg", badges: ["new", "listed"], price: "$3.85M", address: "2900 E 7th Ave", community: "Hilltop", beds: 5, baths: 6, sqft: "6,100" },
    { image: "/images/featured_bedroom.jpg", badges: ["new", "new"], price: "$1.85M", address: "1750 Wewatta St", community: "Union Station", beds: 2, baths: 2, sqft: "1,850" },
    { image: "/images/seller_home.jpg", badges: ["gated"], price: "$5.20M", address: "3200 S University Blvd", community: "Cherry Hills Village", beds: 6, baths: 7, sqft: "8,500" },
    { image: "/images/buyer_living_room.jpg", badges: [], price: "$1.43M", address: "4501 S Yosemite St", community: "Greenwood Village", beds: 4, baths: 4, sqft: "3,600" },
    { image: "/images/featured_bathroom.jpg", badges: ["new"], price: "$2.95M", address: "775 S Alton Way", community: "Cherry Creek North", beds: 3, baths: 4, sqft: "3,200" }
  ];

  return (
    <section ref={sectionRef} id="listings" className="relative w-full py-24 lg:py-32 bg-gray-50">
      <div className="w-full px-6 lg:px-12">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Featured</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">Featured Properties</h2>
          <p className="text-dark-lighter text-lg">Denver luxury listings — updated daily from MLS. Price, beds, sqft, and neighborhood for each home. Want pocket listings not shown here? Call (720) 663-0446.</p>
        </div>

        {/* Toggle between Featured and MLS */}
        <div className="flex justify-center gap-4 mb-10">
          <button 
            onClick={() => setShowMLS(false)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${!showMLS ? 'bg-gold text-white' : 'bg-white text-dark border border-gray-200'}`}
          >
            Featured Listings
          </button>
          <button 
            onClick={() => setShowMLS(true)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${showMLS ? 'bg-gold text-white' : 'bg-white text-dark border border-gray-200'}`}
          >
            All MLS Listings
          </button>
        </div>

        {showMLS ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4">
            <MLSEmbed title="Denver Metro MLS Listings" />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, index) => (
                <div key={property.address} className={`property-card group cursor-pointer transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="relative h-64 overflow-hidden">
                    <img src={property.image} alt={property.address} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {property.badges.map((badge, i) => (
                        <span key={i} className={`text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider ${badge === 'new' ? 'bg-gold text-white' : badge === 'listed' ? 'bg-emerald-600 text-white' : 'bg-dark text-white'}`}>
                          {badge === 'new' ? 'New' : badge === 'listed' ? 'Just Listed' : 'Gated'}
                        </span>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-dark px-6 py-3 rounded font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-display text-2xl font-bold text-gold mb-1">{property.price}</p>
                    <p className="text-dark font-medium mb-1">{property.address}</p>
                    <p className="text-dark-lighter text-sm mb-4">{property.community}</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <Bed size={16} className="text-gold" />
                        <span className="text-dark text-sm">{property.beds}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath size={16} className="text-gold" />
                        <span className="text-dark text-sm">{property.baths}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize size={16} className="text-gold" />
                        <span className="text-dark text-sm">{property.sqft} sqft</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button onClick={() => setShowMLS(true)} className="btn-outline inline-flex items-center gap-2">
                View All MLS Listings
                <ArrowRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// Luxury Market Snapshot - compact home-page teaser for the full Market Report page
function MarketReportSnapshot() {
  const stats = [
    { value: String(marketSummary.newListings30d), label: 'New $1M+ Listings (30d)' },
    { value: `${marketSummary.medianDOM}`, label: 'Median Days on Market' },
    { value: formatPrice(marketSummary.medianSalePrice), label: 'Median Luxury Sale Price' },
    { value: `${marketSummary.avgInventoryChange.toFixed(1)}%`, label: 'Inventory Change (MoM)' },
  ];
  const topZips = zipData.slice(0, 3);

  return (
    <section id="market-snapshot" className="relative w-full py-14 lg:py-16 bg-dark text-white">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-3">
              Luxury Market Snapshot · {reportAsOf}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Denver's $1M+ Market, <span className="text-gold">This Month</span>
            </h2>
            <p className="text-white/60 mb-6 max-w-lg">
              Inventory is tightening across all {marketSummary.zipCount} luxury ZIP codes we track. Top new-listing
              markets:{' '}
              {topZips.map((z, i) => (
                <span key={z.zip} className="text-white">
                  {z.neighborhood} ({z.newListings30d}){i < topZips.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
            <a href={MARKET_REPORT_HASH} className="btn-primary inline-flex items-center gap-2">
              View Full Market Report
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-bold text-gold mb-1">{s.value}</p>
                <p className="text-white/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Market Intelligence Section - Embedded Report
function MarketIntelligence() {
  return (
    <section id="market" className="relative w-full py-16 lg:py-24 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Market Intelligence</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">Denver Metro Market Insights</h2>
            <p className="text-dark-lighter text-lg max-w-2xl mx-auto">Denver luxury market data — live. Median prices, inventory, and days on market by neighborhood. Free quarterly reports. No email required.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:p-10">
            {/* Market Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">$1.85M</p>
                <p className="text-dark-lighter text-sm">Avg Median Price</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">24</p>
                <p className="text-dark-lighter text-sm">Avg Days on Market</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">282</p>
                <p className="text-dark-lighter text-sm">New Listings</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">3,036</p>
                <p className="text-dark-lighter text-sm">Sold (12 Mo)</p>
              </div>
            </div>

            {/* Neighborhood Price Comparison */}
            <h3 className="font-display text-xl font-semibold text-dark mb-6">Median Price by Neighborhood</h3>
            <div className="space-y-4">
              {[
                { name: "Cherry Hills Village", price: "$4.50M", pct: 100 },
                { name: "Hilltop", price: "$2.80M", pct: 78 },
                { name: "Boulder", price: "$1.95M", pct: 65 },
                { name: "Country Club", price: "$1.95M", pct: 65 },
                { name: "Cherry Creek", price: "$1.85M", pct: 62 },
                { name: "Castle Pines", price: "$1.85M", pct: 62 },
                { name: "Belcaro", price: "$2.20M", pct: 72 },
                { name: "Washington Park", price: "$1.45M", pct: 50 },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <span className="text-sm text-dark w-32 md:w-40 text-right shrink-0">{item.name}</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full flex items-center justify-end pr-3"
                      style={{ width: `${item.pct}%` }}
                    >
                      <span className="text-white text-xs font-semibold">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-dark-lighter text-sm mb-4">Want a detailed report for your neighborhood? Call for a free market analysis.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:7206630446" className="btn-primary inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Request Market Report
                </a>
                <a href={MARKET_REPORT_HASH} className="btn-outline inline-flex items-center gap-2">
                  View Full Market Report
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Buyer's & Seller's Guide Section
function GuidesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const buyerSteps = [
    "Get pre-approved",
    "Define must-haves vs nice-to-haves",
    "Tour 3-5 neighborhoods",
    "Submit a clean offer"
  ];

  const sellerSteps = [
    "Book a pre-listing consult",
    "Make high-ROI improvements",
    "Price with comps, not hope",
    "Market across channels"
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-24 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Built on Clarity</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">Your Guide to Success</h2>
          <p className="text-dark-lighter text-lg">Denver luxury real estate guidance — block by block. Neighborhood comps, honest pricing, and vetted lenders. One call to start. (720) 663-0446.</p>
        </div>

        {/* Feature Cards */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-display text-lg font-semibold text-dark mb-2">Local data</h4>
            <p className="text-dark-lighter text-sm">Median days, comps, and trends per neighborhood.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-display text-lg font-semibold text-dark mb-2">Honest pricing</h4>
            <p className="text-dark-lighter text-sm">Transparent numbers and realistic ranges.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-display text-lg font-semibold text-dark mb-2">Full support</h4>
            <p className="text-dark-lighter text-sm">From tour to close, with vetted lenders & inspectors.</p>
          </div>
        </div>

        {/* Guide Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Buyer's Guide */}
          <div className={`bg-gray-50 rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-48 overflow-hidden">
              <img src="/images/buyers_guide.jpg" alt="Buyer's Guide" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold text-dark mb-3">Buyer's guide</h3>
              <p className="text-dark-lighter mb-6">Buying a luxury home in Denver? Get pre-approved, tour 3–5 neighborhoods, submit a clean offer. We handle negotiation and contracts. Download the free buyer checklist or call (720) 663-0446.</p>
              <div className="space-y-4 mb-8">
                {buyerSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <span className="w-6 h-6 bg-gold/20 text-gold text-xs font-bold rounded-full flex items-center justify-center">{index + 1}</span>
                    <span className="text-dark">{step}</span>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 text-dark font-medium hover:text-gold transition-colors">
                <ArrowRight size={18} />
                Download the checklist
              </button>
            </div>
          </div>

          {/* Seller's Guide */}
          <div className={`bg-gray-50 rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-48 overflow-hidden">
              <img src="/images/sellers_guide.jpg" alt="Seller's Guide" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold text-dark mb-3">Selling guide</h3>
              <p className="text-dark-lighter mb-6">Selling a luxury home in Denver? Free home valuation and pre-listing prep plan. Professional staging, photography, and targeted digital marketing included. Request your CMA — (720) 663-0446.</p>
              <div className="space-y-4 mb-8">
                {sellerSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <span className="w-6 h-6 bg-gold/20 text-gold text-xs font-bold rounded-full flex items-center justify-center">{index + 1}</span>
                    <span className="text-dark">{step}</span>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 text-dark font-medium hover:text-gold transition-colors">
                <ArrowRight size={18} />
                Request a valuation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// City Info Card Section
function CityInfoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { title: "300+ days of sunshine", subtitle: "Outdoor living year-round" },
    { title: "World-class dining", subtitle: "From food halls to fine dining" },
    { title: "Mountain access", subtitle: "Skiing, hiking, and weekend escapes" }
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-24 lg:py-32 bg-gray-50">
      <div className="w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img src="/images/denver_lifestyle.jpg" alt="Denver Lifestyle" className="w-full h-auto" />
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-6">
              Lifestyle, not just location
            </h2>
            <p className="text-dark-lighter text-lg leading-relaxed mb-8">
              Denver lifestyle: 300+ days of sun, ski resorts 90 minutes west, James Beard-level dining in every direction. Search homes by lifestyle — walkable urban, golf course, mountain view, or acreage.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark">{feature.title}</h4>
                    <p className="text-dark-lighter text-sm">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-dark font-medium hover:text-gold transition-colors">
              See lifestyle homes
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Agent Section
function AgentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const specialties = ["Luxury Estates", "Historic Homes", "New Developments", "Investment Properties"];
  const areas = ["Cherry Creek North", "Hilltop", "Cherry Hills Village", "Washington Park"];

  return (
    <section ref={sectionRef} id="agent" className="relative w-full py-24 lg:py-32 bg-gray-50">
      <div className="w-full px-6 lg:px-12">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Your Advisor</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark">Meet Dan Navarro</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card-hover">
                <img src="/images/dan_navarro.jpg" alt="Dan Navarro" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/20 rounded-2xl -z-10" />
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-gold font-medium mb-2">Principal Broker & Founder</p>
            <h3 className="font-display text-3xl font-bold text-dark mb-6">Dan Navarro</h3>
            <p className="text-dark-lighter leading-relaxed mb-8">Dan Navarro — Denver luxury real estate agent. Principal broker, SSC & Company / REALM member. 20+ years selling $1M–$25M homes in Cherry Creek, Hilltop, Cherry Hills, Wash Park, and Castle Pines. Call direct: (720) 663-0446.</p>

            <div className="mb-6">
              <p className="text-xs text-dark-lighter uppercase tracking-wider mb-3">Specialties</p>
              <div className="flex flex-wrap gap-2">
                {specialties.map(specialty => (
                  <span key={specialty} className="bg-white border border-gray-200 text-dark text-sm px-3 py-1.5 rounded">{specialty}</span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-xs text-dark-lighter uppercase tracking-wider mb-3">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {areas.map(area => (
                  <span key={area} className="bg-gold/10 text-gold text-sm px-3 py-1.5 rounded">{area}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:7206630446" className="btn-primary flex items-center gap-2">
                <Phone size={18} />
                Call Dan
              </a>
              <a href="mailto:Dan@SSCandCompany.com" className="btn-outline flex items-center gap-2">
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative w-full py-24 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">Talk to Dan Today</h2>
            <p className="text-dark-lighter text-lg">Buying, selling, or need a home valuation. Same-day response. Call (720) 663-0446, email Dan@SSCandCompany.com, or fill out the form below.</p>
          </div>

          <div className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="tel:3035550123" className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-gold/5 transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Phone size={28} className="text-gold" />
              </div>
              <p className="text-dark-lighter mb-2">Call Directly</p>
              <p className="font-display text-2xl font-bold text-dark">(720) 663-0446</p>
            </a>
            <a href="mailto:Dan@SSCandCompany.com" className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-gold/5 transition-colors">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Mail size={28} className="text-gold" />
              </div>
              <p className="text-dark-lighter mb-2">Send an Email</p>
              <p className="font-display text-xl font-bold text-dark">Dan@SSCandCompany.com</p>
            </a>
          </div>

          <div className={`bg-gray-50 rounded-2xl p-8 lg:p-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-display text-2xl font-bold text-dark mb-8">Send a Message</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm text-dark-lighter mb-2 block">First Name</label>
                <input type="text" placeholder="John" className="w-full" />
              </div>
              <div>
                <label className="text-sm text-dark-lighter mb-2 block">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm text-dark-lighter mb-2 block">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full" />
              </div>
              <div>
                <label className="text-sm text-dark-lighter mb-2 block">Phone</label>
                <input type="tel" placeholder="(720) 663-0446" className="w-full" />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-sm text-dark-lighter mb-2 block">I'm interested in...</label>
              <select className="w-full appearance-none">
                <option>Buying a home</option>
                <option>Selling a home</option>
                <option>Both buying and selling</option>
                <option>Just exploring</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="text-sm text-dark-lighter mb-2 block">Message</label>
              <textarea rows={4} placeholder="Tell us about your dream home..." className="w-full resize-none" />
            </div>
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              Send Message
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What defines luxury real estate in Denver?",
      answer: "Luxury homes in Denver start around $1M. What separates them: location, lot size, privacy, architecture, and finishes. Cherry Creek, Hilltop, and Cherry Hills set the standard."
    },
    {
      question: "Where do wealthy buyers live in Denver?",
      answer: "Cherry Creek, Hilltop, Cherry Hills Village, Country Club, Greenwood Village, Castle Pines, Wash Park, Boulder, and Golden foothills. Price ranges from $1M to $25M depending on the neighborhood."
    },
    {
      question: "What are the best luxury neighborhoods in Denver Metro?",
      answer: "Depends on what you want. Urban walkability — Cherry Creek or LoDo. Estates and privacy — Cherry Hills or Hilltop. Golf and gated — Castle Pines. Family-focused — Greenwood Village or Highlands Ranch. Call to narrow it down."
    },
    {
      question: "Are there modern luxury homes in Denver?",
      answer: "Yes. New construction and modern-design luxury homes are active in Cherry Creek, Sloan's Lake, Hilltop, Central Park, and LoHi. Browse current modern listings or call for off-market options."
    }
  ];

  // FAQ Schema JSON for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section ref={sectionRef} id="faq" className="relative w-full py-24 lg:py-32 bg-gray-50">
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Common Questions</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">Denver Luxury Real Estate FAQs</h2>
            <p className="text-dark-lighter text-lg">Denver luxury real estate — common questions answered. Can't find yours? Call (720) 663-0446.</p>
          </div>

          <div className={`space-y-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display text-lg font-semibold text-dark pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={24} 
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-dark-lighter leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-dark-lighter mb-6">More questions? Call Dan — (720) 663-0446. Same-day response.</p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Schedule a Private Luxury Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="w-full py-16 bg-dark text-white">
      <div className="w-full px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="font-display text-2xl font-bold">
                Denver Metro <span className="text-gold">Luxury</span>
              </p>
              <img src="/images/ssc_logo.png" alt="SSC and Company" className="h-6 mt-2 opacity-90" />
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              Denver Metro Luxury | SSC & Company. Luxury real estate — Denver, CO. Cherry Creek, Hilltop, Cherry Hills Village, Castle Pines, Highlands Ranch, and 25+ metro communities. (720) 663-0446.
            </p>
            <div className="space-y-2">
              <p className="text-white/60 text-sm">2995 E 17th Ave</p>
              <p className="text-white/60 text-sm">Denver, CO 80206</p>
              <p className="text-white/60 text-sm">(720) 663-0446</p>
              <p className="text-white/60 text-sm">Dan@SSCandCompany.com</p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4">Quick Links</p>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-gold transition-colors text-sm">Home</a>
              <a href="#communities" className="block text-white/60 hover:text-gold transition-colors text-sm">Communities</a>
              <a href="#listings" className="block text-white/60 hover:text-gold transition-colors text-sm">Listings</a>
              <a href="#market" className="block text-white/60 hover:text-gold transition-colors text-sm">Market Insights</a>
              <a href={MARKET_REPORT_HASH} className="block text-white/60 hover:text-gold transition-colors text-sm">Market Report</a>
              <a href="#agent" className="block text-white/60 hover:text-gold transition-colors text-sm">About Dan</a>
              <a href="#contact" className="block text-white/60 hover:text-gold transition-colors text-sm">Contact</a>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4">Communities</p>
            <div className="space-y-3">
              <a href="#" className="block text-white/60 hover:text-gold transition-colors text-sm">Cherry Creek North</a>
              <a href="#" className="block text-white/60 hover:text-gold transition-colors text-sm">Hilltop</a>
              <a href="#" className="block text-white/60 hover:text-gold transition-colors text-sm">Washington Park</a>
              <a href="#" className="block text-white/60 hover:text-gold transition-colors text-sm">LoHi</a>
              <a href="#" className="block text-white/60 hover:text-gold transition-colors text-sm">Cherry Hills Village</a>
              <a href="#" className="block text-white/60 hover:text-gold transition-colors text-sm">Castle Pines</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2026 Denver Metro Luxury. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  const [currentView, setCurrentView] = useState<'home' | 'hub' | 'community' | 'neighborhood' | 
    'highlands-ranch' | 'castle-pines' | 'lone-tree' | 'parker' | 'boulder' | 'louisville-superior' |
    'central-park' | 'lodo-highland' | 'capitol-hill' | 'arvada-luxury' | 'golden-foothills' | 'dtc-corridor' |
    'market-report'>(() => (window.location.hash === MARKET_REPORT_HASH ? 'market-report' : 'home'));

  // The Market Report has its own shareable URL (#market-report), and the browser
  // Back button returns to the previous page.
  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === MARKET_REPORT_HASH) {
        setCurrentView('market-report');
        window.scrollTo(0, 0);
      } else {
        setCurrentView((v) => (v === 'market-report' ? 'home' : v));
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  const [selectedCommunityId, setSelectedCommunityId] = useState<string | null>(null);
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState<string | null>(null);

  const handleSelectCommunity = (communityId: string) => {
    // Check for SEO community pages
    if (communityId === 'highlands-ranch') { setCurrentView('highlands-ranch'); window.scrollTo(0, 0); return; }
    if (communityId === 'castle-pines') { setCurrentView('castle-pines'); window.scrollTo(0, 0); return; }
    if (communityId === 'lone-tree') { setCurrentView('lone-tree'); window.scrollTo(0, 0); return; }
    if (communityId === 'parker') { setCurrentView('parker'); window.scrollTo(0, 0); return; }
    if (communityId === 'boulder') { setCurrentView('boulder'); window.scrollTo(0, 0); return; }
    if (communityId === 'louisville-superior') { setCurrentView('louisville-superior'); window.scrollTo(0, 0); return; }
    if (communityId === 'central-park') { setCurrentView('central-park'); window.scrollTo(0, 0); return; }
    if (communityId === 'lodo-highland') { setCurrentView('lodo-highland'); window.scrollTo(0, 0); return; }
    if (communityId === 'capitol-hill') { setCurrentView('capitol-hill'); window.scrollTo(0, 0); return; }
    if (communityId === 'arvada-luxury') { setCurrentView('arvada-luxury'); window.scrollTo(0, 0); return; }
    if (communityId === 'golden-foothills') { setCurrentView('golden-foothills'); window.scrollTo(0, 0); return; }
    if (communityId === 'dtc-corridor') { setCurrentView('dtc-corridor'); window.scrollTo(0, 0); return; }
    
    setSelectedCommunityId(communityId);
    setCurrentView('community');
    window.scrollTo(0, 0);
  };

  const handleNavigateToHub = () => {
    setCurrentView('hub');
    window.scrollTo(0, 0);
  };

  const handleSelectNeighborhood = (neighborhoodId: string) => {
    setSelectedNeighborhoodId(neighborhoodId);
    setCurrentView('neighborhood');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    if (window.location.hash === MARKET_REPORT_HASH) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setCurrentView('home');
    setSelectedCommunityId(null);
    setSelectedNeighborhoodId(null);
    window.scrollTo(0, 0);
  };

  const handleBackToHub = () => {
    setCurrentView('hub');
    setSelectedNeighborhoodId(null);
    window.scrollTo(0, 0);
  };

  if (currentView === 'market-report') return <MarketReportPage onBack={handleBackToHome} />;

  // Render SEO community pages
  if (currentView === 'highlands-ranch') return <HighlandsRanchPage onBack={handleBackToHome} />;
  if (currentView === 'castle-pines') return <CastlePinesPage onBack={handleBackToHome} />;
  if (currentView === 'lone-tree') return <LoneTreePage onBack={handleBackToHome} />;
  if (currentView === 'parker') return <ParkerPage onBack={handleBackToHome} />;
  if (currentView === 'boulder') return <BoulderPage onBack={handleBackToHome} />;
  if (currentView === 'louisville-superior') return <LouisvilleSuperiorPage onBack={handleBackToHome} />;
  if (currentView === 'central-park') return <CentralParkPage onBack={handleBackToHome} />;
  if (currentView === 'lodo-highland') return <LoDoHighlandPage onBack={handleBackToHome} />;
  if (currentView === 'capitol-hill') return <CapitolHillPage onBack={handleBackToHome} />;
  if (currentView === 'arvada-luxury') return <ArvadaLuxuryPage onBack={handleBackToHome} />;
  if (currentView === 'golden-foothills') return <GoldenLakewoodFoothillsPage onBack={handleBackToHome} />;
  if (currentView === 'dtc-corridor') return <DTCCorridorPage onBack={handleBackToHome} />;

  // Render neighborhood detail page
  if (currentView === 'neighborhood' && selectedNeighborhoodId) {
    const neighborhood = getNeighborhoodById(selectedNeighborhoodId);
    if (neighborhood) {
      return (
        <NeighborhoodDetail 
          neighborhood={neighborhood} 
          onBack={handleBackToHub}
          onNavigateToHub={handleNavigateToHub}
        />
      );
    }
  }

  // Render Denver Luxury Hub
  if (currentView === 'hub') {
    return (
      <DenverLuxuryHub 
        onNavigateToCommunity={handleSelectNeighborhood}
        onBackToHome={handleBackToHome}
      />
    );
  }

  // Render community page if selected
  if (currentView === 'community' && selectedCommunityId) {
    const community = communitiesData.find(c => c.id === selectedCommunityId);
    if (community) {
      return (
        <CommunityPage 
          community={community} 
          onBack={handleBackToHome} 
        />
      );
    }
  }

  // Render home page
  return (
    <div className="relative min-h-screen">
      <Navigation onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      <main>
        <HeroSection />
        <QuickFilters />
        <MarketReportSnapshot />
        <CommunitiesSection onSelectCommunity={handleSelectCommunity} onNavigateToHub={handleNavigateToHub} />
        <FeaturedProperties />
        <MarketIntelligence />
        <GuidesSection />
        <CityInfoSection />
        <AgentSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
