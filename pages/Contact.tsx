import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

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
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Contact Info Column */}
            <div className="bg-prime-blue text-white p-10 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-prime-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
               
               <div>
                 <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                 <p className="text-gray-300 mb-10">
                   Fill out the form and our team will get back to you within 24 hours.
                 </p>

                 <ul className="space-y-8">
                   <li className="flex items-start space-x-4">
                     <div className="bg-white/10 p-3 rounded-lg">
                        <Phone size={24} className="text-prime-orange" />
                     </div>
                     <div>
                       <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Phone</p>
                       <p className="font-medium text-lg">{CONTACT_INFO.phone}</p>
                     </div>
                   </li>
                   <li className="flex items-start space-x-4">
                     <div className="bg-white/10 p-3 rounded-lg">
                        <Mail size={24} className="text-prime-orange" />
                     </div>
                     <div>
                       <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Email</p>
                       <p className="font-medium text-lg">{CONTACT_INFO.email}</p>
                     </div>
                   </li>
                   <li className="flex items-start space-x-4">
                     <div className="bg-white/10 p-3 rounded-lg">
                        <MapPin size={24} className="text-prime-orange" />
                     </div>
                     <div>
                       <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Location</p>
                       <p className="font-medium text-lg w-2/3">{CONTACT_INFO.address}</p>
                     </div>
                   </li>
                 </ul>
               </div>

               <div className="mt-12 lg:mt-0">
                 <p className="text-sm text-gray-400">Follow us for updates:</p>
                 <div className="flex space-x-4 mt-4">
                   {['FB', 'IN', 'LN', 'TW'].map(social => (
                     <span key={social} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-prime-orange hover:border-prime-orange transition-colors cursor-pointer text-xs font-bold">
                       {social}
                     </span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Form Column */}
            <div className="p-10 lg:w-3/5 bg-white">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Send size={40} className="text-green-600" />
                   </div>
                   <h3 className="text-2xl font-bold text-prime-blue mb-2">Message Sent!</h3>
                   <p className="text-gray-500">Thank you for contacting Primepeak. We will be in touch shortly.</p>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="mt-8 text-prime-orange font-bold underline"
                   >
                     Send another message
                   </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-prime-blue mb-8">Let's Create Something Outstanding Together</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-prime-orange focus:ring-2 focus:ring-prime-orange/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-prime-orange focus:ring-2 focus:ring-prime-orange/20 outline-none transition-all"
                          placeholder="+971..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-prime-orange focus:ring-2 focus:ring-prime-orange/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                      <textarea 
                        name="message"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-prime-orange focus:ring-2 focus:ring-prime-orange/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-prime-orange text-white font-bold py-4 rounded-lg hover:bg-prime-blue transition-colors duration-300 shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269224!2d55.27218771500953!3d25.197196983896188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e533e1e4f6bb!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1623456789012!5m2!1sen!2sae" 
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