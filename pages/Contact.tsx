
import React from 'react';
import { CONTACT_INFO, WHATSAPP_URL } from '../constants';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in">
       {/* Header */}
       <div className="bg-prime-blue py-16 text-center text-white">
         <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">We'd love to hear about your project.</p>
         </div>
      </div>

      <section className="py-20 bg-prime-cream relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            
            {/* Contact Info Card */}
            <div className="bg-prime-blue text-white p-12 relative overflow-hidden flex flex-col items-center text-center">
               <div className="absolute top-0 right-0 w-64 h-64 bg-prime-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-prime-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
               
               <div className="relative z-10 w-full">
                 <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                 <p className="text-gray-300 mb-10 max-w-xl mx-auto">
                   Ready to elevate your brand? Contact us today via phone, email, or WhatsApp, and our team will assist you immediately.
                 </p>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full max-w-4xl mx-auto mb-12">
                   {/* Phone */}
                   <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="bg-prime-orange p-3 rounded-full mb-4">
                        <Phone size={24} className="text-white" />
                      </div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Phone</p>
                      <p className="font-medium text-lg">{CONTACT_INFO.phone}</p>
                   </div>
                   
                   {/* Email */}
                   <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="bg-prime-orange p-3 rounded-full mb-4">
                        <Mail size={24} className="text-white" />
                      </div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Email</p>
                      <p className="font-medium text-lg break-all">{CONTACT_INFO.email}</p>
                   </div>

                   {/* Location */}
                   <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="bg-prime-orange p-3 rounded-full mb-4">
                        <MapPin size={24} className="text-white" />
                      </div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Location</p>
                      <p className="font-medium text-lg">{CONTACT_INFO.address}</p>
                   </div>
                 </div>

                 <button 
                   onClick={() => window.open(WHATSAPP_URL, '_blank')}
                   className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                 >
                   <MessageCircle className="mr-2" size={24} />
                   Chat on WhatsApp
                 </button>

                 <div className="mt-12">
                    <p className="text-sm text-gray-400 mb-4">Follow us for updates:</p>
                    <div className="flex justify-center space-x-4">
                      <a href="https://www.instagram.com/primepeakadvertising?utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-prime-orange hover:border-prime-orange transition-colors text-xs font-bold">
                        IN
                      </a>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.697464303456!2d54.531853875323635!3d24.35416297843846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e47c17d33d935%3A0x6a13d33f78943729!2sShabiya%2010%2C%20Musaffah%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1709825484123!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%)' }} 
          loading="lazy"
        ></iframe>
        {/* Overlay to match theme */}
        <div className="absolute inset-0 pointer-events-none border-t-4 border-prime-orange"></div>
      </section>
    </div>
  );
};

export default Contact;
