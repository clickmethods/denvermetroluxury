import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  BarChart3,
  Clock,
  Home,
  Mail,
  MapPin,
  Phone,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import {
  zipData,
  soldListings,
  marketInsights,
  marketSummary,
  reportAsOf,
  formatPrice,
} from '../data/marketReport';
import type { ZipCodeData } from '../data/marketReport';

interface MarketReportPageProps {
  onBack: () => void;
}

type SortKey = keyof Pick<
  ZipCodeData,
  'rank' | 'zip' | 'neighborhood' | 'newListings30d' | 'activeInventory' | 'inventoryChange' | 'medianDOM' | 'priceReductions'
>;

const columns: { key: SortKey; label: string; align: 'left' | 'right' }[] = [
  { key: 'rank', label: 'Rank', align: 'left' },
  { key: 'zip', label: 'ZIP', align: 'left' },
  { key: 'neighborhood', label: 'Neighborhood', align: 'left' },
  { key: 'newListings30d', label: 'New Listings (30d)', align: 'right' },
  { key: 'activeInventory', label: 'Active Inventory', align: 'right' },
  { key: 'inventoryChange', label: 'Inv. Change (MoM)', align: 'right' },
  { key: 'medianDOM', label: 'Median DOM', align: 'right' },
  { key: 'priceReductions', label: 'Price Reductions', align: 'right' },
];

const pct = (n: number, digits = 1) => `${n > 0 ? '+' : ''}${n.toFixed(digits)}%`;

export default function MarketReportPage({ onBack }: MarketReportPageProps) {
  const [sortKey, setSortKey] = useState<SortKey>('rank');
  const [sortAsc, setSortAsc] = useState(true);
  const [showAllSold, setShowAllSold] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = `Denver Luxury Market Report (${reportAsOf}) | Denver Metro Luxury`;
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const sortedZips = useMemo(() => {
    const rows = [...zipData];
    rows.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const cmp = typeof av === 'number' && typeof bv === 'number' ? av - bv : String(av).localeCompare(String(bv));
      return sortAsc ? cmp : -cmp;
    });
    return rows;
  }, [sortKey, sortAsc]);

  const sortedSold = useMemo(
    () => [...soldListings].sort((a, b) => b.soldCount30d - a.soldCount30d),
    []
  );

  const maxNew = Math.max(...zipData.map((z) => z.newListings30d));
  const alertCount = zipData.filter((z) => z.alert).length;

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      // Numbers read best biggest-first, except rank and text columns
      setSortAsc(key === 'rank' || key === 'zip' || key === 'neighborhood');
    }
  };

  const kpis = [
    { icon: MapPin, value: String(marketSummary.zipCount), label: '$1M+ ZIP Codes Tracked' },
    { icon: Home, value: String(marketSummary.newListings30d), label: 'New Luxury Listings (30d)' },
    { icon: TrendingDown, value: pct(marketSummary.avgInventoryChange), label: 'Avg. Inventory Change (MoM)' },
    { icon: Clock, value: `${marketSummary.medianDOM}`, label: 'Median Days on Market' },
    { icon: BarChart3, value: `${marketSummary.avgPriceReductions.toFixed(1)}%`, label: 'Avg. Price Reduction Rate' },
    { icon: TrendingUp, value: String(marketSummary.soldCount30d), label: 'Luxury Homes Sold (30d)' },
    { icon: Home, value: formatPrice(marketSummary.medianSalePrice), label: 'Median Sale Price' },
    { icon: BarChart3, value: `${marketSummary.avgSaleToList.toFixed(1)}%`, label: 'Avg. Sale-to-List Ratio' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigateHome={onBack} />

      {/* Hero */}
      <section className="relative w-full pt-20">
        <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <img
            src="/images/market_aerial.jpg"
            alt="Aerial view of Denver luxury neighborhoods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="max-w-4xl">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">
                Denver Luxury Market Report · {reportAsOf}
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Denver's Million-Dollar ZIP Codes
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8">
                Active inventory shifts, days-on-market signals, and price-reduction pressure across{' '}
                {marketSummary.zipCount} luxury ZIP codes where median list prices exceed $1M.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#rankings" className="btn-primary inline-flex items-center gap-2">
                  View ZIP Rankings
                  <ArrowDown size={18} />
                </a>
                <a
                  href="tel:7206630446"
                  className="border-2 border-white/30 text-white px-8 py-4 font-medium tracking-wide transition-all duration-200 rounded hover:bg-white/10 inline-flex items-center gap-2"
                >
                  <Phone size={18} />
                  Get a Custom Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Snapshot */}
      <section className="w-full py-16 lg:py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Market Snapshot</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">The $1M+ Market at a Glance</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {kpis.map((k) => (
                <div key={k.label} className="market-card text-center">
                  <k.icon className="w-5 h-5 text-gold mx-auto mb-3" />
                  <p className="font-display text-3xl md:text-4xl font-bold text-dark mb-1">{k.value}</p>
                  <p className="text-dark-lighter text-sm">{k.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section id="rankings" className="w-full py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">ZIP Code Rankings</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
                Where Luxury Supply Is Moving
              </h2>
              <p className="text-dark-lighter text-lg max-w-3xl">
                Ranked by new $1M+ listings added in the last 30 days. Select any column heading to sort. Rows marked in red
                are on watch: {alertCount} ZIPs show price reductions above 12% or extended days on market.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 shadow-card overflow-x-auto">
              <table className="w-full min-w-[860px] text-sm">
                <thead>
                  <tr className="bg-dark text-white">
                    {columns.map((c) => {
                      const active = sortKey === c.key;
                      const Icon = active ? (sortAsc ? ArrowUp : ArrowDown) : ArrowUpDown;
                      return (
                        <th
                          key={c.key}
                          className={`px-4 py-4 font-medium whitespace-nowrap ${c.align === 'right' ? 'text-right' : 'text-left'}`}
                        >
                          <button
                            onClick={() => handleSort(c.key)}
                            className={`inline-flex items-center gap-1.5 transition-colors hover:text-gold ${
                              active ? 'text-gold' : 'text-white/80'
                            }`}
                          >
                            {c.label}
                            <Icon size={14} />
                          </button>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {sortedZips.map((row) => (
                    <tr
                      key={row.zip}
                      className={`border-t border-gray-100 transition-colors hover:bg-gold/5 ${
                        row.alert ? 'border-l-4 border-l-red-500' : 'border-l-4 border-l-transparent'
                      }`}
                    >
                      <td className="px-4 py-4 font-display font-semibold text-gold">{row.rank}</td>
                      <td className="px-4 py-4 font-mono text-dark">{row.zip}</td>
                      <td className="px-4 py-4 text-dark font-medium">{row.neighborhood}</td>
                      <td className="px-4 py-4 text-right font-mono text-dark">{row.newListings30d}</td>
                      <td className="px-4 py-4 text-right font-mono text-dark">{row.activeInventory}</td>
                      <td className="px-4 py-4 text-right font-mono text-red-600">{pct(row.inventoryChange)}</td>
                      <td
                        className={`px-4 py-4 text-right font-mono ${
                          row.medianDOM <= 60 ? 'text-emerald-600' : 'text-red-600'
                        }`}
                      >
                        {row.medianDOM}
                      </td>
                      <td
                        className={`px-4 py-4 text-right font-mono ${
                          row.priceReductions > 12 ? 'text-red-600 font-semibold' : 'text-dark'
                        }`}
                      >
                        {row.priceReductions.toFixed(1)}%
                        {row.priceReductions > 12 && <AlertTriangle size={13} className="inline ml-1 -mt-0.5" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-6 mt-5 text-xs text-dark-lighter">
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-red-500" /> Watch list
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-emerald-600" /> 60 days or fewer on market
              </span>
              <span className="inline-flex items-center gap-2">
                <AlertTriangle size={12} className="text-red-600" /> Price reductions above 12%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* New listing volume */}
      <section className="w-full py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Supply Concentration</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">New $1M+ Listings by ZIP</h2>
              <p className="text-dark-lighter text-lg max-w-3xl">
                {marketSummary.newListings30d} new luxury listings hit the market in the last 30 days. Here's where they
                came from.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="space-y-3">
                {zipData.map((z) => (
                  <div key={z.zip} className="flex items-center gap-4">
                    <span className="text-sm text-dark w-36 md:w-56 text-right shrink-0 truncate">
                      {z.neighborhood} <span className="font-mono text-dark-lighter text-xs">{z.zip}</span>
                    </span>
                    <div className="flex-1 h-7 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full flex items-center justify-end pr-3 min-w-[2.5rem]"
                        style={{ width: `${(z.newListings30d / maxNew) * 100}%` }}
                      >
                        <span className="text-white text-xs font-semibold">{z.newListings30d}</span>
                      </div>
                    </div>
                    <span className="hidden md:inline font-mono text-xs text-dark-lighter w-12 text-right">
                      {((z.newListings30d / marketSummary.newListings30d) * 100).toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Sold */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Recently Sold</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">Closed Luxury Sales, Last 30 Days</h2>
              <p className="text-dark-lighter text-lg max-w-3xl">
                What buyers actually paid: sale prices, speed, and how close homes closed to their asking price.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(showAllSold ? sortedSold : sortedSold.slice(0, 9)).map((s) => {
                const overAsk = s.saleToListRatio >= 100;
                return (
                  <div key={s.zip} className="market-card card-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-display font-semibold text-dark">{s.neighborhood}</p>
                        <p className="font-mono text-xs text-dark-lighter">{s.zip}</p>
                      </div>
                      <span className={overAsk ? 'badge-listed' : 'badge-gated'}>{s.saleToListRatio.toFixed(1)}% of list</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-gold mb-4">{formatPrice(s.medianSalePrice)}</p>
                    <div className="grid grid-cols-3 gap-2 text-center border-t border-gray-100 pt-4">
                      <div>
                        <p className="font-mono text-dark font-medium">{s.soldCount30d}</p>
                        <p className="text-[11px] text-dark-lighter">Sold</p>
                      </div>
                      <div>
                        <p className="font-mono text-dark font-medium">{s.avgDaysToSell}</p>
                        <p className="text-[11px] text-dark-lighter">Days to Sell</p>
                      </div>
                      <div>
                        <p className="font-mono text-dark font-medium">${s.pricePerSqft}</p>
                        <p className="text-[11px] text-dark-lighter">Per Sq Ft</p>
                      </div>
                    </div>
                    <p
                      className={`text-xs mt-3 text-center ${s.vsLastMonthChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}
                    >
                      Sales volume {pct(s.vsLastMonthChange)} vs. last month
                    </p>
                  </div>
                );
              })}
            </div>
            {sortedSold.length > 9 && (
              <div className="text-center mt-10">
                <button onClick={() => setShowAllSold(!showAllSold)} className="btn-outline inline-flex items-center gap-2">
                  {showAllSold ? 'Show Fewer' : `Show All ${sortedSold.length} ZIP Codes`}
                  {showAllSold ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="w-full py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">Market Insights</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">What the Numbers Mean</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {marketInsights.map((ins, i) => (
                <div key={ins.metric} className="bg-white rounded-2xl p-8 border border-gray-100 card-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-gold text-xl font-bold">0{i + 1}</span>
                    <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">{ins.metric}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-dark mb-3">{ins.headline}</h3>
                  <p className="text-dark-lighter leading-relaxed">{ins.body}</p>
                </div>
              ))}
            </div>
            <p className="text-dark-lighter text-xs text-center mt-10 max-w-3xl mx-auto">
              Report period: 30 days ending {reportAsOf}. Figures cover ZIP codes with median list prices above $1M and
              are provided for general information only. They are not an appraisal. Contact Dan for verified MLS data
              on a specific home or neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 lg:py-28 bg-dark text-white">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Want This Report for Your Neighborhood?</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Get a custom market analysis for your home or the neighborhoods you're considering, from Dan Navarro.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7206630446" className="btn-primary flex items-center gap-2">
              <Phone size={18} />
              (720) 663-0446
            </a>
            <a
              href="mailto:Dan@SSCandCompany.com"
              className="border-2 border-white/30 text-white px-8 py-4 font-medium rounded hover:bg-white/10 transition-colors flex items-center gap-2"
            >
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
            <p className="text-white/60 text-sm mb-6">Curated luxury real estate in the Denver metro area</p>
            <button onClick={onBack} className="text-white/60 hover:text-gold transition-colors text-sm">
              ← Back to Home
            </button>
            <p className="text-white/40 text-sm mt-6">© 2026 Denver Metro Luxury. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
