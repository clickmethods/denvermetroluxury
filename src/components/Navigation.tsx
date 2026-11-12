import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigateHome?: () => void;
}

export default function Navigation({ onNavigateHome }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}
            className="flex flex-col items-start"
          >
            <span className={`font-display text-xl font-semibold tracking-tight transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}>
              Denver Metro <span className="text-gold">Luxury</span>
            </span>
            <img 
              src="/images/ssc_logo.png" 
              alt="SSC and Company" 
              className={`h-5 mt-1 transition-all duration-300 ${scrolled ? 'invert' : ''}`} 
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a 
              href="#communities" 
              onClick={(e) => handleNavClick(e, 'communities')}
              className={`text-sm transition-colors link-underline ${
                scrolled ? 'text-dark-lighter hover:text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              Communities
            </a>
            <a 
              href="#listings" 
              onClick={(e) => handleNavClick(e, 'listings')}
              className={`text-sm transition-colors link-underline ${
                scrolled ? 'text-dark-lighter hover:text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              Listings
            </a>
            <a 
              href="#market" 
              onClick={(e) => handleNavClick(e, 'market')}
              className={`text-sm transition-colors link-underline ${
                scrolled ? 'text-dark-lighter hover:text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              Market Insights
            </a>
            <a
              href="#market-report"
              className={`text-sm transition-colors link-underline ${
                scrolled ? 'text-dark-lighter hover:text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              Market Report
            </a>
            <a
              href="#agent"
              onClick={(e) => handleNavClick(e, 'agent')}
              className={`text-sm transition-colors link-underline ${
                scrolled ? 'text-dark-lighter hover:text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`text-sm transition-colors link-underline ${
                scrolled ? 'text-dark-lighter hover:text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
            </a>
            <a 
              href="tel:7206630446"
              className={`text-sm py-3 px-5 rounded transition-all ${
                scrolled 
                  ? 'bg-gold text-white hover:bg-gold-dark' 
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              (720) 663-0446
            </a>
          </div>

          <button 
            className={`lg:hidden transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-6 py-6 space-y-4">
            <a href="#communities" onClick={(e) => handleNavClick(e, 'communities')} className="block text-dark-lighter hover:text-gold py-2">Communities</a>
            <a href="#listings" onClick={(e) => handleNavClick(e, 'listings')} className="block text-dark-lighter hover:text-gold py-2">Listings</a>
            <a href="#market" onClick={(e) => handleNavClick(e, 'market')} className="block text-dark-lighter hover:text-gold py-2">Market Insights</a>
            <a href="#market-report" onClick={() => setMobileOpen(false)} className="block text-dark-lighter hover:text-gold py-2">Market Report</a>
            <a href="#agent" onClick={(e) => handleNavClick(e, 'agent')} className="block text-dark-lighter hover:text-gold py-2">About</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block text-dark-lighter hover:text-gold py-2">Contact</a>
            <a href="tel:7206630446" className="btn-primary w-full mt-4 text-center block">(720) 663-0446</a>
          </div>
        </div>
      )}
    </nav>
  );
}
