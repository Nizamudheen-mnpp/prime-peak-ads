import React from 'react';
import { PageView } from '../types';
import { CONTACT_INFO } from '../constants';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-prime-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="inline-block w-fit">
               <Logo isLight={true} />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Helping brands create memorable impressions through customized promotional solutions and premium corporate gifts.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/10 p-2 rounded-full hover:bg-prime-orange transition-colors duration-300">
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-prime-orange pl-3">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button onClick={() => onNavigate(PageView.HOME)} className="hover:text-prime-orange transition-colors text-sm">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate(PageView.ABOUT)} className="hover:text-prime-orange transition-colors text-sm">About Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate(PageView.CONTACT)} className="hover:text-prime-orange transition-colors text-sm">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-prime-orange pl-3">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="text-sm">Corporate Gifting</li>
              <li className="text-sm">Promotional Products</li>
              <li className="text-sm">Event Merchandising</li>
              <li className="text-sm">Custom Branding</li>
              <li className="text-sm">Printing Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-prime-orange pl-3">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-prime-orange shrink-0 mt-1" />
                <span className="text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-prime-orange shrink-0" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-prime-orange shrink-0" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Primepeak Advertising Gifts L.L.C. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;