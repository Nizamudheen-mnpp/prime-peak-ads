import React, { useState, useEffect } from 'react';
import { LOGO_URL, NAV_LINKS } from '../constants';
import { PageView } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
      : 'bg-transparent py-4 lg:py-6'
  }`;

  const textClass = isScrolled ? 'text-prime-blue' : 'text-prime-blue lg:text-prime-blue'; 
  // Design choice: keeping logo/text readable. Hero image will have overlay.
  
  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => onNavigate(PageView.HOME)}
        >
          <img src={LOGO_URL} alt="Primepeak Logo" className="h-10 md:h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.value}
              onClick={() => onNavigate(link.value as PageView)}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-prime-orange ${
                currentPage === link.value ? 'text-prime-orange' : 'text-prime-blue'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate(PageView.CONTACT)}
            className="bg-prime-orange text-white px-6 py-2.5 rounded-full font-semibold hover:bg-prime-blue hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-prime-blue focus:outline-none">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 lg:hidden animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                onNavigate(link.value as PageView);
                setMobileMenuOpen(false);
              }}
              className={`text-left text-lg font-semibold ${
                currentPage === link.value ? 'text-prime-orange' : 'text-prime-blue'
              }`}
            >
              {link.label}
            </button>
          ))}
          <hr className="border-gray-200" />
          <button 
            onClick={() => {
              onNavigate(PageView.CONTACT);
              setMobileMenuOpen(false);
            }}
            className="bg-prime-orange text-white w-full py-3 rounded-lg font-semibold hover:bg-prime-blue transition-colors"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;