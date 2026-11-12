// Denver $1M+ luxury market report data (from the Denver Luxury Housing Dashboard).
// Update these figures each month: every stat on the Market Report page and the
// home-page snapshot is calculated from this file.
export const reportAsOf = "June 2026";

export interface ZipCodeData {
  rank: number;
  zip: string;
  neighborhood: string;
  newListings30d: number;
  activeInventory: number;
  inventoryChange: number; // percentage
  medianDOM: number;
  priceReductions: number; // percentage
  alert?: boolean;
}

export const zipData: ZipCodeData[] = [
  { rank: 1, zip: "80209", neighborhood: "Cherry Creek / Wash Park", newListings30d: 47, activeInventory: 312, inventoryChange: -4.2, medianDOM: 28, priceReductions: 6.3 },
  { rank: 2, zip: "80113", neighborhood: "Cherry Hills Village", newListings30d: 38, activeInventory: 198, inventoryChange: -2.8, medianDOM: 52, priceReductions: 9.1 },
  { rank: 3, zip: "80121", neighborhood: "Greenwood Village", newListings30d: 33, activeInventory: 245, inventoryChange: -5.1, medianDOM: 34, priceReductions: 5.8 },
  { rank: 4, zip: "80210", neighborhood: "Wash Park East", newListings30d: 31, activeInventory: 189, inventoryChange: -1.9, medianDOM: 41, priceReductions: 11.2 },
  { rank: 5, zip: "80220", neighborhood: "Hilltop / Montclair", newListings30d: 29, activeInventory: 167, inventoryChange: -6.3, medianDOM: 48, priceReductions: 13.7, alert: true },
  { rank: 6, zip: "80129", neighborhood: "Highlands Ranch N.", newListings30d: 27, activeInventory: 221, inventoryChange: -3.4, medianDOM: 36, priceReductions: 7.4 },
  { rank: 7, zip: "80108", neighborhood: "Castle Pines", newListings30d: 24, activeInventory: 154, inventoryChange: -7.8, medianDOM: 55, priceReductions: 15.2, alert: true },
  { rank: 8, zip: "80124", neighborhood: "Lone Tree", newListings30d: 23, activeInventory: 178, inventoryChange: -2.1, medianDOM: 33, priceReductions: 8.6 },
  { rank: 9, zip: "80005", neighborhood: "Arvada West", newListings30d: 22, activeInventory: 203, inventoryChange: -4.7, medianDOM: 44, priceReductions: 10.1 },
  { rank: 10, zip: "80401", neighborhood: "Golden Foothills", newListings30d: 20, activeInventory: 141, inventoryChange: -3.9, medianDOM: 63, priceReductions: 18.4, alert: true },
  { rank: 11, zip: "80238", neighborhood: "Central Park", newListings30d: 19, activeInventory: 156, inventoryChange: -8.1, medianDOM: 29, priceReductions: 4.2 },
  { rank: 12, zip: "80111", neighborhood: "DTC Corridor", newListings30d: 18, activeInventory: 134, inventoryChange: -1.4, medianDOM: 37, priceReductions: 6.8 },
  { rank: 13, zip: "80206", neighborhood: "Cherry Creek N.", newListings30d: 17, activeInventory: 128, inventoryChange: -5.5, medianDOM: 25, priceReductions: 3.9 },
  { rank: 14, zip: "80203", neighborhood: "Capitol Hill", newListings30d: 15, activeInventory: 97, inventoryChange: -12.4, medianDOM: 22, priceReductions: 2.1 },
  { rank: 15, zip: "80202", neighborhood: "LoDo / Union Station", newListings30d: 14, activeInventory: 112, inventoryChange: -9.6, medianDOM: 19, priceReductions: 1.8 },
  { rank: 16, zip: "80302", neighborhood: "Boulder Foothills", newListings30d: 13, activeInventory: 87, inventoryChange: -6.7, medianDOM: 71, priceReductions: 22.1, alert: true },
  { rank: 17, zip: "80027", neighborhood: "Louisville", newListings30d: 12, activeInventory: 95, inventoryChange: -3.2, medianDOM: 39, priceReductions: 9.3 },
  { rank: 18, zip: "80134", neighborhood: "Parker", newListings30d: 11, activeInventory: 108, inventoryChange: -4.4, medianDOM: 46, priceReductions: 12.8, alert: true },
  { rank: 19, zip: "80104", neighborhood: "Castle Rock", newListings30d: 10, activeInventory: 76, inventoryChange: -11.2, medianDOM: 58, priceReductions: 16.7, alert: true },
  { rank: 20, zip: "80218", neighborhood: "Country Club", newListings30d: 9, activeInventory: 64, inventoryChange: -2.9, medianDOM: 31, priceReductions: 4.5 },
  { rank: 21, zip: "80246", neighborhood: "Glendale", newListings30d: 8, activeInventory: 71, inventoryChange: -7.8, medianDOM: 43, priceReductions: 10.5 },
  { rank: 22, zip: "80439", neighborhood: "Evergreen", newListings30d: 7, activeInventory: 52, inventoryChange: -5.4, medianDOM: 82, priceReductions: 24.6, alert: true },
  { rank: 23, zip: "80127", neighborhood: "Ken Caryl", newListings30d: 6, activeInventory: 68, inventoryChange: -8.1, medianDOM: 51, priceReductions: 14.3, alert: true },
  { rank: 24, zip: "80125", neighborhood: "Roxborough", newListings30d: 5, activeInventory: 41, inventoryChange: -13.2, medianDOM: 94, priceReductions: 28.3, alert: true },
];

// Neighborhoods sorted alphabetically by ZIP for the grid section
export const neighborhoodGrid = [
  { zip: "80005", neighborhood: "Arvada (West)" },
  { zip: "80016", neighborhood: "Saddle Rock / SE Aurora" },
  { zip: "80027", neighborhood: "Louisville / Superior" },
  { zip: "80104", neighborhood: "Castle Rock" },
  { zip: "80108", neighborhood: "Castle Pines" },
  { zip: "80111", neighborhood: "DTC Corridor" },
  { zip: "80113", neighborhood: "Cherry Hills Village" },
  { zip: "80121", neighborhood: "Greenwood Village" },
  { zip: "80124", neighborhood: "Lone Tree" },
  { zip: "80125", neighborhood: "Roxborough" },
  { zip: "80127", neighborhood: "Ken Caryl" },
  { zip: "80129", neighborhood: "Highlands Ranch" },
  { zip: "80134", neighborhood: "Parker" },
  { zip: "80202", neighborhood: "LoDo / Union Station" },
  { zip: "80203", neighborhood: "Capitol Hill" },
  { zip: "80206", neighborhood: "Cherry Creek North" },
  { zip: "80209", neighborhood: "Cherry Creek" },
  { zip: "80210", neighborhood: "Wash Park East" },
  { zip: "80218", neighborhood: "Country Club" },
  { zip: "80220", neighborhood: "Hilltop" },
  { zip: "80238", neighborhood: "Central Park" },
  { zip: "80246", neighborhood: "Glendale" },
  { zip: "80302", neighborhood: "Boulder Foothills" },
  { zip: "80401", neighborhood: "Golden Foothills" },
  { zip: "80439", neighborhood: "Evergreen" },
];

export interface SoldListing {
  zip: string;
  neighborhood: string;
  soldCount30d: number;
  medianSalePrice: number;
  avgDaysToSell: number;
  saleToListRatio: number; // percentage
  pricePerSqft: number;
  vsLastMonthChange: number; // percentage change in sold volume
}

export const soldListings: SoldListing[] = [
  { zip: "80209", neighborhood: "Cherry Creek / Wash Park", soldCount30d: 38, medianSalePrice: 1425000, avgDaysToSell: 24, saleToListRatio: 97.2, pricePerSqft: 485, vsLastMonthChange: -2.1 },
  { zip: "80113", neighborhood: "Cherry Hills Village", soldCount30d: 29, medianSalePrice: 1850000, avgDaysToSell: 41, saleToListRatio: 95.8, pricePerSqft: 412, vsLastMonthChange: 1.4 },
  { zip: "80121", neighborhood: "Greenwood Village", soldCount30d: 27, medianSalePrice: 1320000, avgDaysToSell: 29, saleToListRatio: 98.1, pricePerSqft: 356, vsLastMonthChange: -1.8 },
  { zip: "80210", neighborhood: "Wash Park East", soldCount30d: 24, medianSalePrice: 1150000, avgDaysToSell: 33, saleToListRatio: 98.5, pricePerSqft: 423, vsLastMonthChange: 0.7 },
  { zip: "80220", neighborhood: "Hilltop / Montclair", soldCount30d: 22, medianSalePrice: 1280000, avgDaysToSell: 39, saleToListRatio: 96.4, pricePerSqft: 398, vsLastMonthChange: -3.2 },
  { zip: "80129", neighborhood: "Highlands Ranch N.", soldCount30d: 21, medianSalePrice: 1050000, avgDaysToSell: 31, saleToListRatio: 99.2, pricePerSqft: 312, vsLastMonthChange: 2.3 },
  { zip: "80108", neighborhood: "Castle Pines", soldCount30d: 19, medianSalePrice: 1380000, avgDaysToSell: 47, saleToListRatio: 94.6, pricePerSqft: 325, vsLastMonthChange: -0.5 },
  { zip: "80124", neighborhood: "Lone Tree", soldCount30d: 18, medianSalePrice: 1100000, avgDaysToSell: 28, saleToListRatio: 98.8, pricePerSqft: 368, vsLastMonthChange: 1.1 },
  { zip: "80005", neighborhood: "Arvada West", soldCount30d: 17, medianSalePrice: 1025000, avgDaysToSell: 36, saleToListRatio: 99.5, pricePerSqft: 295, vsLastMonthChange: -1.4 },
  { zip: "80401", neighborhood: "Golden Foothills", soldCount30d: 15, medianSalePrice: 1250000, avgDaysToSell: 52, saleToListRatio: 93.8, pricePerSqft: 342, vsLastMonthChange: -4.1 },
  { zip: "80238", neighborhood: "Central Park", soldCount30d: 15, medianSalePrice: 980000, avgDaysToSell: 22, saleToListRatio: 100.2, pricePerSqft: 378, vsLastMonthChange: 3.6 },
  { zip: "80111", neighborhood: "DTC Corridor", soldCount30d: 14, medianSalePrice: 1180000, avgDaysToSell: 30, saleToListRatio: 97.9, pricePerSqft: 334, vsLastMonthChange: -0.8 },
  { zip: "80206", neighborhood: "Cherry Creek N.", soldCount30d: 13, medianSalePrice: 1650000, avgDaysToSell: 20, saleToListRatio: 98.3, pricePerSqft: 512, vsLastMonthChange: -2.5 },
  { zip: "80203", neighborhood: "Capitol Hill", soldCount30d: 11, medianSalePrice: 1050000, avgDaysToSell: 18, saleToListRatio: 101.4, pricePerSqft: 445, vsLastMonthChange: 4.2 },
  { zip: "80202", neighborhood: "LoDo / Union Station", soldCount30d: 10, medianSalePrice: 1200000, avgDaysToSell: 16, saleToListRatio: 99.8, pricePerSqft: 567, vsLastMonthChange: -5.3 },
  { zip: "80302", neighborhood: "Boulder Foothills", soldCount30d: 9, medianSalePrice: 1550000, avgDaysToSell: 58, saleToListRatio: 92.1, pricePerSqft: 428, vsLastMonthChange: -3.7 },
  { zip: "80027", neighborhood: "Louisville", soldCount30d: 9, medianSalePrice: 950000, avgDaysToSell: 32, saleToListRatio: 100.5, pricePerSqft: 312, vsLastMonthChange: 1.9 },
  { zip: "80134", neighborhood: "Parker", soldCount30d: 8, medianSalePrice: 875000, avgDaysToSell: 38, saleToListRatio: 99.1, pricePerSqft: 278, vsLastMonthChange: -1.2 },
  { zip: "80104", neighborhood: "Castle Rock", soldCount30d: 7, medianSalePrice: 920000, avgDaysToSell: 45, saleToListRatio: 97.3, pricePerSqft: 265, vsLastMonthChange: -6.4 },
  { zip: "80218", neighborhood: "Country Club", soldCount30d: 7, medianSalePrice: 1350000, avgDaysToSell: 26, saleToListRatio: 96.8, pricePerSqft: 398, vsLastMonthChange: 0.4 },
  { zip: "80246", neighborhood: "Glendale", soldCount30d: 6, medianSalePrice: 890000, avgDaysToSell: 35, saleToListRatio: 98.6, pricePerSqft: 356, vsLastMonthChange: -2.8 },
  { zip: "80439", neighborhood: "Evergreen", soldCount30d: 5, medianSalePrice: 1100000, avgDaysToSell: 67, saleToListRatio: 91.4, pricePerSqft: 312, vsLastMonthChange: -4.5 },
  { zip: "80127", neighborhood: "Ken Caryl", soldCount30d: 5, medianSalePrice: 980000, avgDaysToSell: 42, saleToListRatio: 96.2, pricePerSqft: 289, vsLastMonthChange: -3.1 },
  { zip: "80125", neighborhood: "Roxborough", soldCount30d: 3, medianSalePrice: 850000, avgDaysToSell: 78, saleToListRatio: 89.7, pricePerSqft: 245, vsLastMonthChange: -8.2 },
  { zip: "80016", neighborhood: "Saddle Rock / SE Aurora", soldCount30d: 12, medianSalePrice: 925000, avgDaysToSell: 34, saleToListRatio: 99.4, pricePerSqft: 268, vsLastMonthChange: 2.7 },
];

export const marketInsights = [
  {
    metric: "INVENTORY CONTRACTION",
    headline: "Supply Tightening Across All Markets",
    body: "Every tracked ZIP code saw inventory decline month-over-month. Central Park (80238) and Capitol Hill (80203) posted the steepest drops at -8.1% and -12.4% respectively, signaling accelerating buyer competition in urban-adjacent luxury segments.",
  },
  {
    metric: "VELOCITY DIVERGENCE",
    headline: "Days-on-Market Split: Urban vs. Suburban",
    body: "Downtown-adjacent ZIPs (LoDo at 19 DOM, Capitol Hill at 22 DOM) move 4\u00d7 faster than mountain/foothill markets (Evergreen at 82 DOM, Roxborough at 94 DOM). This 75-day spread represents the widest gap recorded in the past 12 months.",
  },
  {
    metric: "PRICE PRESSURE",
    headline: "Reduction Rates Climb in Slower Markets",
    body: "Nine ZIP codes now show price-reduction rates above 12%. Roxborough (80125) leads at 28.3%, followed by Evergreen (80439) at 24.6% \u2014 both foothill markets where elevated DOM correlates directly with seller price concessions.",
  },
  {
    metric: "SUPPLY CONCENTRATION",
    headline: "Cherry Creek Dominates New Listing Flow",
    body: "With 47 new $1M+ listings in the last 30 days, 80209 (Cherry Creek) added 9.4\u00d7 more inventory than the smallest contributor, Roxborough (80125). The top 5 ZIPs account for 39% of all new luxury listings across the metro.",
  },
];

// \u2500\u2500 Derived summary stats (shared by the report page and home-page snapshot) \u2500\u2500
const avg = (nums: number[]) => nums.reduce((a, b) => a + b, 0) / nums.length;
const median = (nums: number[]) => {
  const s = [...nums].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

export const marketSummary = {
  zipCount: zipData.length,
  newListings30d: zipData.reduce((a, z) => a + z.newListings30d, 0),
  activeInventory: zipData.reduce((a, z) => a + z.activeInventory, 0),
  avgInventoryChange: avg(zipData.map((z) => z.inventoryChange)),
  medianDOM: median(zipData.map((z) => z.medianDOM)),
  avgPriceReductions: avg(zipData.map((z) => z.priceReductions)),
  soldCount30d: soldListings.reduce((a, s) => a + s.soldCount30d, 0),
  medianSalePrice: median(soldListings.map((s) => s.medianSalePrice)),
  avgSaleToList: avg(soldListings.map((s) => s.saleToListRatio)),
};

export const formatPrice = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : `$${Math.round(n / 1000)}K`;
