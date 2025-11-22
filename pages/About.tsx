import React from 'react';
import { TEAM } from '../constants';
import { Shield, Target, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in">
      
      {/* Header */}
      <div className="bg-prime-blue py-20 text-center text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
         <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Primepeak</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Your trusted partner in corporate branding and advertising gifts.</p>
         </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Office Meeting" 
               className="rounded-2xl shadow-2xl z-10 relative"
             />
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-prime-orange/10 rounded-full -z-0 hidden md:block"></div>
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-prime-blue/10 rounded-full -z-0 hidden md:block"></div>
          </div>
          <div>
            <span className="text-prime-orange font-bold uppercase tracking-wider text-sm">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-prime-blue mt-3 mb-6">Elevating Brands Through Creative Gifting</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Primepeak Advertising Gifts L.L.C is a premier provider of promotional products and corporate gifts based in Dubai. With years of experience in the industry, we specialize in helping businesses connect with their clients, employees, and partners through meaningful, high-quality merchandise.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our approach is simple: we listen to your needs, understand your brand identity, and deliver solutions that leave a lasting impact. From bespoke executive gifts to large-scale event giveaways, we handle it all with precision and care.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-prime-orange pl-4">
                <h4 className="text-3xl font-bold text-prime-blue">10+</h4>
                <p className="text-gray-500 text-sm uppercase">Years Experience</p>
              </div>
              <div className="border-l-4 border-prime-orange pl-4">
                <h4 className="text-3xl font-bold text-prime-blue">500+</h4>
                <p className="text-gray-500 text-sm uppercase">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-prime-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-prime-blue w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-white">
                <Target size={30} />
              </div>
              <h3 className="text-2xl font-bold text-prime-blue mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative and high-quality promotional solutions that empower businesses to build stronger relationships and enhance their brand visibility across the globe.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-prime-orange w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-white">
                <Shield size={30} />
              </div>
              <h3 className="text-2xl font-bold text-prime-blue mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading advertising and corporate gifting agency recognized for creativity, reliability, and excellence in customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-prime-blue mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
               <div className="mx-auto bg-prime-gray w-20 h-20 rounded-full flex items-center justify-center mb-4 text-prime-orange">
                 <Shield size={32} />
               </div>
               <h4 className="text-xl font-bold text-prime-blue mb-2">Integrity</h4>
               <p className="text-gray-500 text-sm">We operate with honesty and transparency in every transaction.</p>
            </div>
            <div className="p-6">
               <div className="mx-auto bg-prime-gray w-20 h-20 rounded-full flex items-center justify-center mb-4 text-prime-orange">
                 <Heart size={32} />
               </div>
               <h4 className="text-xl font-bold text-prime-blue mb-2">Passion</h4>
               <p className="text-gray-500 text-sm">We are passionate about design and delivering the best for our clients.</p>
            </div>
            <div className="p-6">
               <div className="mx-auto bg-prime-gray w-20 h-20 rounded-full flex items-center justify-center mb-4 text-prime-orange">
                 <Users size={32} />
               </div>
               <h4 className="text-xl font-bold text-prime-blue mb-2">Collaboration</h4>
               <p className="text-gray-500 text-sm">We work closely with you to bring your vision to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-prime-blue text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
             <p className="text-gray-300 mt-4">The experts behind your brand's success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full border-4 border-prime-orange/30">
                   <img 
                     src={member.imageUrl} 
                     alt={member.name} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                   />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-prime-orange text-sm font-semibold uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;