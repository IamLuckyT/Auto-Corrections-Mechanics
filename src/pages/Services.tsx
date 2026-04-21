import React from 'react';
import Layout from '../components/Layout';
import { Truck, Zap, Battery, Fuel, Settings, Wrench, Shield, Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      id: 'engineering',
      title: 'Big Truck & Trailer Repairs',
      desc: 'Expert fixes for heavy-duty trucks, trailers, and industrial machines. We keep your fleet moving.',
      icon: <Truck size={32} />,
      featured: true,
      tags: ['Expert Work']
    },
    {
      id: 'sos',
      title: '24/7 Breakdown Help',
      desc: 'Stuck on the road? We come to you any time of the day or night to get you moving again.',
      icon: <Zap size={32} />,
      tags: ['24/7 Help']
    },
    {
      id: 'home_repair',
      title: 'We Fix It Where You Are',
      desc: 'We bring our mobile workshop and tools directly to your location or driveway.',
      icon: <Settings size={32} />,
      tags: ['Convenient']
    },
    {
      id: 'tire_repair',
      title: 'New Tyres & Puncture Repairs',
      desc: 'Quality tyre changes and puncture repairs for all cars and trucks.',
      icon: <Wrench size={32} />,
      tags: ['All Sizes']
    },
    {
      id: 'emergency',
      title: 'Roadside Assistance',
      desc: 'Quick fixes for flat batteries, fuel problems, and other roadside troubles.',
      icon: <Battery size={32} />,
      tags: ['Emergency']
    },
    {
      id: 'air',
      title: 'Brakes & Air Systems',
      desc: 'Safety-first repairs for truck brakes and air pressure lines.',
      icon: <Shield size={32} />,
      tags: ['Safety First']
    },
    {
      id: 'power',
      title: 'Generator Fixes',
      desc: 'Maintenance and repairs for industrial and home power generators.',
      icon: <Zap size={32} />,
      tags: ['Industrial']
    },
    {
      id: 'construction',
      title: 'Help Out In The Field',
      desc: 'We help with farming and construction gear right where they are working.',
      icon: <MapPin size={32} />,
      tags: ['On-Site']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-brand-surface overflow-hidden pt-24 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h1 className="text-display-lg mb-8 uppercase">
                Reliable Help<br />
                <span className="text-brand-primary italic">Wherever</span> You Are.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
                We fix big trucks, but we help everyone. Professional repair services brought directly to you.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md shadow-sm border border-gray-100">
                  <MapPin className="text-brand-primary" size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Zeerust</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md shadow-sm border border-gray-100">
                  <MapPin className="text-brand-primary" size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Mafikeng</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md shadow-sm border border-gray-100">
                  <MapPin className="text-brand-primary" size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Gaborone</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-[250px] md:h-auto md:aspect-video rounded-md overflow-hidden shadow-2xl">
                <img
                  src="img5.jpeg"
                  alt="Auto Correction Mechanics specialized service truck equipped for mobile roadside repairs"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 md:-bottom-6 md:-left-6 bg-brand-primary p-4 md:p-6 text-white rounded-md shadow-xl max-w-xs">
                <p className="font-display font-bold text-[10px] md:text-sm uppercase tracking-widest mb-1 md:mb-2">24/7 Emergency Support</p>
                <p className="text-xl md:text-2xl font-display font-bold italic">AVAILABLE NOW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-headline-lg mb-2 uppercase">How We Can Help</h2>
            <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Professional work. We come to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-md overflow-hidden border border-gray-100">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-8 md:p-10 bg-white flex flex-col transition-all duration-300 hover:z-10 hover:shadow-2xl ${
                  service.featured ? 'lg:col-span-2 md:col-span-2' : ''
                }`}
              >
                <div className="text-brand-primary mb-8">{service.icon}</div>
                <h3 className={`font-display font-bold mb-4 uppercase ${service.featured ? 'text-3xl' : 'text-xl'}`}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-brand-surface px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Dispatch CTA */}
          <div className="mt-12 bg-brand-primary p-8 md:p-12 rounded-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-2xl font-display font-bold mb-2 uppercase italic">EMERGENCY?</h3>
              <p className="opacity-90">We are helping drivers in Zeerust & Mafikeng right now.</p>
            </div>
            <a href="tel:0679470553" className="bg-white text-brand-primary px-10 py-4 rounded-md font-display font-bold flex items-center gap-3 hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="h-[300px] md:h-auto md:aspect-square rounded-md overflow-hidden shadow-xl">
                <img
                  src="img7.jpeg"
                  alt="Professional mechanical tools and equipment used for high quality truck maintenance"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-12 md:left-12 md:right-12 bg-brand-on-surface/90 backdrop-blur-md p-4 md:p-8 text-white rounded-md">
                <h4 className="text-xl md:text-3xl font-display font-bold uppercase italic mb-2">Safe Work</h4>
                <div className="w-8 md:w-12 h-0.5 md:h-1 bg-brand-primary" />
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Core Strength
              </div>
              <h2 className="text-headline-lg mb-8 uppercase">
                We fix big trucks, but <span className="text-brand-primary italic">we help everyone.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Whether you are driving a small car or a big 18-wheeler, our mechanics can handle the job. We know that when your vehicle is standing, you are losing money.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <p className="text-4xl font-display font-bold text-brand-on-surface mb-2">100%</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mobile Service</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-bold text-brand-on-surface mb-2">24/7</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Help */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-headline-lg mb-4 uppercase">WHERE WE HELP</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-16">We get to you fast in these areas</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Auto+Correction+Mechanics+Zeerust" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative p-8 md:p-12 bg-brand-surface rounded-md border border-gray-100 group hover:border-brand-primary/30 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src="map_location.png" 
                  alt="Google Maps location for Auto Correction Mechanics in Zeerust" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
              <div className="relative z-10 text-center">
                <MapPin className="text-brand-primary mx-auto mb-6 transition-transform group-hover:scale-110" size={48} />
                <h3 className="text-3xl font-display font-bold mb-2">Zeerust</h3>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-4">Main Workshop Hub</p>
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">See Map</span>
              </div>
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Auto+Correction+Mechanics+Mafikeng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative p-8 md:p-12 bg-brand-surface rounded-md border border-gray-100 group hover:border-brand-primary/30 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" 
                  alt="Local map coverage for Mafikeng mobile breakdown support" 
                  className="w-full h-full object-cover opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10 text-center">
                <MapPin className="text-brand-primary mx-auto mb-6 transition-transform group-hover:scale-110" size={48} />
                <h3 className="text-3xl font-display font-bold mb-2">Mafikeng</h3>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-4">Dispatch Hub</p>
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">See Map</span>
              </div>
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Auto+Correction+Mechanics+Gaborone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative p-8 md:p-12 bg-brand-surface rounded-md border border-gray-100 group hover:border-brand-primary/30 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=600" 
                  alt="Local map coverage for Gaborone regional support" 
                  className="w-full h-full object-cover opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10 text-center">
                <MapPin className="text-brand-primary mx-auto mb-6 transition-transform group-hover:scale-110" size={48} />
                <h3 className="text-3xl font-display font-bold mb-2">Gaborone</h3>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-4">Regional Hub</p>
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">See Map</span>
              </div>
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Lichtenburg', 'Vryburg', 'Coligny', 'Rustenburg', 'Swartruggens', 'Border Posts'].map((area) => (
              <div key={area} className="p-4 bg-brand-surface rounded-md border border-gray-100 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-600">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
