export interface Neighborhood {
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

export const neighborhoodsData: Neighborhood[] = [
  {
    id: "cherry-creek-north",
    name: "Cherry Creek North",
    tagline: "Denver's premier upscale neighborhood with luxury shopping and dining",
    description: "Cherry Creek is Denver's premier upscale neighborhood, renowned for its luxury shopping and dining scene. Residential streets here are lined with a mix of cozy early-20th-century bungalows and new multi-million-dollar homes.",
    longDescription: "At the heart of the community is Cherry Creek North, a 16-block district with over 320 upscale galleries, designer shops, and eateries that make it 'the region's premier shopping and dining neighborhood'. With annual events like the Cherry Creek Arts Festival and easy bike path access to parks, Cherry Creek offers an elegant urban lifestyle at the center of it all. The neighborhood attracts affluent buyers seeking walkability, luxury amenities, and proximity to Denver's best retail and dining experiences.",
    medianPrice: "$1.85M",
    priceRange: "$800K - $8.00M",
    dom: "28",
    lifestyle: "Luxury Retail",
    image: "/images/neighborhood_cherry_creek_north.jpg",
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
    nearby: ["Cherry Creek Mall", "Cherry Creek North", "Washington Park", "Glendale", "Hilltop"],
    schools: ["Cherry Creek High School", "Steele Elementary", "Merrill Middle School"],
    commute: "15 minutes to Downtown Denver, Easy I-25 access",
    architecture: ["Historic Bungalows", "Modern Luxury Homes", "High-Rise Condos", "Townhomes"]
  },
  {
    id: "hilltop",
    name: "Hilltop",
    tagline: "Prestigious estate living with panoramic mountain views",
    description: "Hilltop and Crestmoor are prestigious east Denver neighborhoods known for quiet, tree-lined streets and a blend of historic and contemporary homes.",
    longDescription: "Hilltop, true to its name, sits on slightly higher ground and features many distinctive homes – from 1930s Tudors and mid-century ranches to multi-level modern builds. Notably, the neighborhood is home to the Cranmer Park landmark (with its famed sundial and Front Range panorama) and lies adjacent to new development in Lowry and the shops of Cherry Creek. With their strong residential character and proximity to top schools and amenities, Hilltop and Crestmoor are sought-after by families seeking luxury and community.",
    medianPrice: "$2.80M",
    priceRange: "$1.50M - $12.00M",
    dom: "35",
    lifestyle: "Estate Living",
    image: "/images/neighborhood_hilltop.jpg",
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
    nearby: ["Cranmer Park", "Cherry Creek", "Lowry", "Crestmoor", "Glendale"],
    schools: ["George Washington High School", "Steele Elementary", "Merrill Middle School"],
    commute: "20 minutes to Downtown Denver, Close to I-25 and I-225",
    architecture: ["Tudor Revival", "Mid-Century Ranch", "Modern Estate Homes", "Contemporary"]
  },
  {
    id: "belcaro",
    name: "Belcaro",
    tagline: "Elegant custom estates near Cherry Creek",
    description: "Belcaro and Bonnie Brae are adjacent upscale neighborhoods offering peaceful, leafy streets in the heart of the city.",
    longDescription: "Belcaro is known for its expansive lots and predominance of ranch-style homes, including large custom rebuilds often priced well into seven figures. Many homes feature mid-century modern designs with large windows and open floor plans. The neighborhood offers a suburban feel while being just minutes from Cherry Creek's shopping and dining. Belcaro attracts buyers seeking space, privacy, and proximity to urban amenities.",
    medianPrice: "$1.40M",
    priceRange: "$900K - $3.50M",
    dom: "22",
    lifestyle: "Suburban Elegance",
    image: "/images/neighborhood_belcaro.jpg",
    features: [
      "Expansive lots",
      "Ranch-style homes",
      "Custom rebuilds",
      "Mid-century modern designs",
      "Large windows",
      "Open floor plans",
      "Near Cherry Creek",
      "Quiet residential streets"
    ],
    nearby: ["Cherry Creek", "Washington Park", "Glendale", "I-25"],
    schools: ["South High School", "Steele Elementary", "Merrill Middle School"],
    commute: "15 minutes to Downtown Denver, Easy I-25 access",
    architecture: ["Ranch Style", "Mid-Century Modern", "Custom Estates", "Contemporary"]
  },
  {
    id: "country-club",
    name: "Denver Country Club",
    tagline: "Historic mansions on tree-lined boulevards",
    description: "Denver's Country Club neighborhood is a historic enclave known for its lush, secluded ambiance and grand estates.",
    longDescription: "Nowhere else in the city does a canopy of 100-year-old American elms spread quite so magnificently over broad parkways and elegant mansions. Stately Spanish-style gateways mark the entrances to this exclusive community, as if to 'protect' its quiet, old-world atmosphere. Many homes here date to the early 20th century, featuring refined Mediterranean and Tudor architectural designs by noted architects. Despite its tranquil, tucked-away feel, Country Club is only blocks from the boutiques of Cherry Creek and minutes from downtown, blending prestige with convenience.",
    medianPrice: "$2.00M",
    priceRange: "$1.20M - $8.00M",
    dom: "40",
    lifestyle: "Historic Prestige",
    image: "/images/neighborhood_country_club.jpg",
    features: [
      "100-year-old American elm canopy",
      "Grand estates",
      "Spanish-style gateways",
      "Quiet, old-world atmosphere",
      "Early 20th century homes",
      "Mediterranean architecture",
      "Tudor designs",
      "Blocks from Cherry Creek"
    ],
    nearby: ["Cherry Creek", "Washington Park", "Downtown Denver", "Cheesman Park"],
    schools: ["East High School", "Steele Elementary", "Morey Middle School"],
    commute: "10 minutes to Downtown Denver, Walkable to Cherry Creek",
    architecture: ["Mediterranean", "Tudor Revival", "Spanish Colonial", "Historic Mansions"]
  },
  {
    id: "washington-park",
    name: "Washington Park",
    tagline: "Active lifestyle around Denver's crown jewel park",
    description: "Washington Park (fondly 'Wash Park') is a beloved neighborhood centered around one of Denver's finest parks.",
    longDescription: "Classic bungalows and Denver Squares (early 1900s box-style homes), along with a growing number of large new-build luxury homes, characterize this area. The neighborhood's namesake park is a 165-acre oasis with two lakes, flower gardens, bike paths, and sports facilities – a haven for cyclists, joggers, volleyball leagues, tennis players and families alike. With charming local shopping/dining districts on its periphery and a strong community feel, Wash Park remains one of Denver's most coveted neighborhoods for an active yet relaxed lifestyle.",
    medianPrice: "$1.45M",
    priceRange: "$700K - $5.00M",
    dom: "12",
    lifestyle: "Active Outdoor",
    image: "/images/neighborhood_washington_park.jpg",
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
    nearby: ["Washington Park", "Old South Gaylord Street", "Platt Park", "Cherry Creek", "I-25"],
    schools: ["South High School", "Steele Elementary", "Merrill Middle School"],
    commute: "15 minutes to Downtown Denver, Easy I-25 access",
    architecture: ["Classic Bungalows", "Denver Square", "New Luxury Builds", "Victorian"]
  },
  {
    id: "observatory-park",
    name: "Observatory Park",
    tagline: "Academic atmosphere near DU",
    description: "Observatory Park is a quiet residential neighborhood centered around its namesake park and the historic Chamberlin Observatory.",
    longDescription: "The neighborhood offers a mix of mid-century homes, ranch-style properties, and newer custom builds. Its proximity to the University of Denver creates an academic atmosphere with access to cultural events, lectures, and sporting events. The area attracts professors, students, and families who appreciate the quiet streets, strong sense of community, and easy access to both downtown Denver and the DTC. Observatory Park itself provides green space for recreation and community gatherings.",
    medianPrice: "$900K",
    priceRange: "$600K - $2.00M",
    dom: "18",
    lifestyle: "Academic Community",
    image: "/images/neighborhood_observatory_park.jpg",
    features: [
      "Near University of Denver",
      "Chamberlin Observatory",
      "Observatory Park",
      "Quiet residential streets",
      "Academic atmosphere",
      "Cultural events access",
      "Strong community",
      "Easy DTC access"
    ],
    nearby: ["University of Denver", "Cherry Creek", "I-25", "DTC"],
    schools: ["South High School", "Steele Elementary", "Merrill Middle School"],
    commute: "15 minutes to Downtown Denver, 10 minutes to DTC",
    architecture: ["Mid-Century", "Ranch Style", "Custom Builds", "Traditional"]
  },
  {
    id: "sloans-lake",
    name: "Sloan's Lake",
    tagline: "Modern townhomes with lake and city views",
    description: "Sloan's Lake is Denver's largest lake and the centerpiece of a vibrant, evolving neighborhood.",
    longDescription: "The area has seen significant development in recent years, with modern townhomes and condos offering stunning views of both the lake and downtown Denver skyline. The neighborhood attracts young professionals and families who enjoy outdoor activities like paddleboarding, running around the lake, and visiting the nearby breweries and restaurants. With its mix of historic homes and new construction, Sloan's Lake offers an urban lifestyle with a waterfront twist.",
    medianPrice: "$700K",
    priceRange: "$450K - $2.00M",
    dom: "14",
    lifestyle: "Urban Waterfront",
    image: "/images/neighborhood_sloans_lake.jpg",
    features: [
      "Denver's largest lake",
      "Lake and city views",
      "Modern townhomes",
      "Waterfront activities",
      "Paddleboarding",
      "Running trails",
      "Nearby breweries",
      "Mix of historic and new"
    ],
    nearby: ["Sloan's Lake Park", "Highlands", "Downtown Denver", "Edgewater"],
    schools: ["North High School", "Steele Elementary", "Lake Middle School"],
    commute: "15 minutes to Downtown Denver, Easy I-70 access",
    architecture: ["Modern Townhomes", "Historic Homes", "Condos", "New Construction"]
  },
  {
    id: "bonnie-brae",
    name: "Bonnie Brae",
    tagline: "Charming village atmosphere with curved streets",
    description: "The curved streets of Bonnie Brae center on a small oval park, creating a serene, almost village-like ambience.",
    longDescription: "Many homes in Bonnie Brae date to the 1920s–30s and showcase styles from Cape Cod cottages to English Tudors and Art Moderne designs. A quaint 'Main Street' along University Blvd features the neighborhood's iconic ice cream parlor and cozy eateries, giving the area a charming, communal feel. Together with adjacent Belcaro, Bonnie Brae provides a mix of suburban tranquility and vintage character in the middle of Denver.",
    medianPrice: "$1.40M",
    priceRange: "$900K - $3.00M",
    dom: "20",
    lifestyle: "Village Charm",
    image: "/images/neighborhood_bonnie_brae.jpg",
    features: [
      "Curved streets",
      "Oval park center",
      "Village-like atmosphere",
      "1920s-30s homes",
      "Cape Cod cottages",
      "English Tudors",
      "Art Moderne designs",
      "University Blvd shops"
    ],
    nearby: ["Washington Park", "Cherry Creek", "I-25", "Glendale"],
    schools: ["South High School", "Steele Elementary", "Merrill Middle School"],
    commute: "15 minutes to Downtown Denver, Easy I-25 access",
    architecture: ["Cape Cod", "English Tudor", "Art Moderne", "Traditional"]
  },
  {
    id: "greenwood-village",
    name: "Greenwood Village",
    tagline: "Affluent suburban living near DTC",
    description: "Greenwood Village, located just south of Denver and adjacent to the Denver Tech Center, has evolved from rural farmland into a dynamic blend of upscale residential and business areas.",
    longDescription: "Today, Greenwood Village offers some of the most diverse housing opportunities in metro Denver – from sleek condos to magnificent luxury estates in gated enclaves. The community boasts a high quality of life with approximately 300 acres of parks and open space, miles of walking/biking trails (including the High Line Canal), and low crime rates. It's a hub for affluent, active lifestyles: residents enjoy fine dining, high-end shopping, and cultural events, as well as membership at exclusive clubs like the Glenmoor Country Club.",
    medianPrice: "$1.65M",
    priceRange: "$900K - $6.00M",
    dom: "28",
    lifestyle: "Affluent Suburban",
    image: "/images/neighborhood_greenwood_village.jpg",
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
    nearby: ["Denver Tech Center", "Park Meadows Mall", "Glenmoor Country Club", "High Line Canal", "I-25"],
    schools: ["Cherry Creek High School", "West Middle School", "High Plains Elementary"],
    commute: "20 minutes to Downtown Denver, Minutes to DTC",
    architecture: ["Luxury Estates", "Gated Communities", "Modern Homes", "Traditional"]
  },
  {
    id: "cherry-hills-village",
    name: "Cherry Hills Village",
    tagline: "Colorado's most exclusive address",
    description: "Cherry Hills Village is an exclusive residential enclave just south of Denver, synonymous with luxury living and privacy.",
    longDescription: "This small city is often described as 'western elegance meets high-end living', feeling like a pastoral countryside retreat minutes from the urban core. Cherry Hills is characterized by magnificent estates – from French Country manors to modern mansions – nestled among rolling lawns and equestrian trails. It consistently ranks among the most prestigious and wealthiest communities in Colorado (and even the United States). Residents enjoy top-rated schools and easy access to nearby country clubs, including the renowned Cherry Hills Country Club which has hosted U.S. Open and PGA tournaments.",
    medianPrice: "$4.50M",
    priceRange: "$2.00M - $25.00M",
    dom: "45",
    lifestyle: "Ultra-Luxury",
    image: "/images/neighborhood_cherry_hills_village.jpg",
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
    nearby: ["Cherry Hills Country Club", "Denver Tech Center", "Greenwood Village", "High Line Canal", "I-25"],
    schools: ["Cherry Creek High School", "West Middle School", "High Plains Elementary"],
    commute: "25 minutes to Downtown Denver, 15 minutes to DTC",
    architecture: ["French Country", "Modern Mansions", "Equestrian Estates", "Traditional"]
  },
  {
    id: "castle-pines",
    name: "Castle Pines Village",
    tagline: "Gated luxury with championship golf",
    description: "Castle Pines Village is a gated luxury community nestled among towering pines and dramatic rocky bluffs, about 20 miles south of Denver.",
    longDescription: "It is among the most coveted communities in Colorado, known for panoramic mountain views, wildflower-dotted meadows, and some of the finest residences in the state. The neighborhood is defined by two Jack Nicklaus-designed golf courses – the Country Club at Castle Pines and Castle Pines Golf Club – which wind through the landscape, offering world-class golfing and a stunning backdrop for the homes. Castle Pines Village has been acclaimed for its first-class amenities and active lifestyle: residents enjoy tennis, swimming, fitness facilities, and an extensive network of private hiking and biking trails, all within a 24/7 secure, gated environment.",
    medianPrice: "$1.85M",
    priceRange: "$950K - $6.00M",
    dom: "35",
    lifestyle: "Golf & Nature",
    image: "/images/neighborhood_castle_pines.jpg",
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
    nearby: ["Castle Pines Golf Club", "Castle Rock", "Denver Tech Center", "Park Meadows", "I-25"],
    schools: ["Rock Canyon High School", "Castle Rock Middle School", "Castle Pines Elementary"],
    commute: "30 minutes to Downtown Denver, 20 minutes to DTC",
    architecture: ["Mountain Contemporary", "Traditional", "Craftsman", "Luxury Estates"]
  },
  {
    id: "the-highlands",
    name: "The Highlands",
    tagline: "Trendy urban neighborhood with skyline views",
    description: "The Highlands, including the Lower Highland (LoHi) area, is a hip neighborhood perched just above downtown with stellar skyline views.",
    longDescription: "This thriving area has become 'the place to be' for young urbanites, thanks to a boom in new housing that blends with historic Victorian homes. Its popularity has driven vibrant growth in eateries, craft breweries, and boutiques. New pedestrian bridges (like the iconic Highland Bridge over I-25) have improved connectivity to downtown, spurring redevelopment and prosperity in LoHi. With its eclectic mix of old and new and a lively neighborhood spirit, the Highlands offers an urban experience with laid-back charm.",
    medianPrice: "$950K",
    priceRange: "$550K - $3.20M",
    dom: "14",
    lifestyle: "Urban Trendy",
    image: "/images/neighborhood_the_highlands.jpg",
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
    nearby: ["Downtown Denver", "Highland Bridge", "LoDo", "Confluence Park", "Sloan's Lake"],
    schools: ["North High School", "Steele Elementary", "Lake Middle School"],
    commute: "10 minutes to Downtown Denver, Easy I-25 access",
    architecture: ["Victorian", "Modern Townhomes", "Contemporary", "Mixed-Use"]
  }
];

// Additional neighborhoods (simplified for now, can be expanded)
export const additionalNeighborhoods = [
  "Cory-Merrill", "Crestmoor", "Congress Park", "LoHi", "RiNo", 
  "Union Station", "Downtown/LoDo", "Park Hill", "Stapleton", "Lowry",
  "Glendale", "Hale", "Montclair", "Mayfair", "Virginia Village", 
  "Goldsmith", "Southmoor Park", "Hampden", "Belleview", "Green Valley Ranch"
];

export function getNeighborhoodById(id: string): Neighborhood | undefined {
  return neighborhoodsData.find(n => n.id === id);
}
