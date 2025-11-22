import React from 'react';
import { PageView } from '../types';
import { SERVICES, PRODUCTS } from '../constants';
import { ArrowRight, CheckCircle, Megaphone, Gift, Printer, Calendar, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {

  const getIcon = (name: string) => {
    switch (name) {
      case 'Megaphone': return <Megaphone size={32} />;
      case 'Gift': return <Gift size={32} />;
      case 'Printer': return <Printer size={32} />;
      case 'Calendar': return <Calendar size={32} />;
      default: return <Star size={32} />;
    }
  };

  return (
    <div className="animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          }}
        ></div>
        <div className="absolute inset-0 bg-prime-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-prime-blue/90"></div>

        {/* Content */}
        <div className="relative container mx-auto px-6 text-center text-white z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Creative Advertising & <br/>
            <span className="text-prime-orange">Premium Corporate Gifts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            We help brands create memorable impressions through customized promotional solutions that resonate with your audience.
          </p>
          <button 
            onClick={() => onNavigate(PageView.CONTACT)}
            className="bg-prime-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-prime-orange transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-prime-orange font-bold uppercase tracking-wider text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-prime-blue mt-2">Our Expertise</h2>
            <div className="w-20 h-1 bg-prime-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-prime-cream p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-prime-orange mb-6 shadow-sm group-hover:bg-prime-orange group-hover:text-white transition-colors duration-300">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-xl font-bold text-prime-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gift Items */}
      <section className="py-20 bg-prime-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <span className="text-prime-orange font-bold uppercase tracking-wider text-sm">Our Collections</span>
               <h2 className="text-3xl md:text-4xl font-bold text-prime-blue mt-2">Featured Products</h2>
            </div>
            <button 
              onClick={() => onNavigate(PageView.CONTACT)} 
              className="hidden md:flex items-center text-prime-blue font-semibold hover:text-prime-orange transition-colors mt-4 md:mt-0"
            >
              View Full Catalog <ArrowRight className="ml-2" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-prime-blue px-4 py-2 rounded-full text-sm font-bold shadow-lg">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-prime-orange uppercase tracking-wide">{product.category}</span>
                  <h3 className="text-lg font-bold text-prime-blue mt-1 mb-2">{product.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <button onClick={() => onNavigate(PageView.CONTACT)} className="text-prime-blue font-semibold hover:text-prime-orange inline-flex items-center">
              View Full Catalog <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-prime-blue text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-prime-orange font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                We Deliver Excellence in Every Detail
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                At Primepeak, we understand that corporate gifting is an art. We combine quality, creativity, and reliability to ensure your brand stands out.
              </p>
              <button 
                onClick={() => onNavigate(PageView.ABOUT)}
                className="bg-transparent border-2 border-prime-orange text-prime-orange px-8 py-3 rounded-full font-bold hover:bg-prime-orange hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Premium Quality", desc: "Sourced from top manufacturers worldwide." },
                { title: "On-Time Delivery", desc: "Strict adherence to timelines for your events." },
                { title: "Creative Branding", desc: "Innovative customization to match your identity." },
                { title: "Affordable Pricing", desc: "Competitive rates without compromising quality." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                  <div className="bg-prime-orange w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;