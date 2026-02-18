import React from 'react';
import { facilities } from '../data/mockData';

export const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
            Our Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            State-of-the-Art Infrastructure
          </h2>
          <p className="text-lg text-gray-600">
            Modern medical facilities equipped with the latest technology for your safety and comfort
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className={`relative rounded-2xl overflow-hidden shadow-xl group ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index === 0 ? 'h-[400px]' : 'h-[350px]'}`}>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{facility.title}</h3>
                <p className="text-white/90 text-lg">{facility.description}</p>
              </div>

              {/* Hover Badge */}
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                Premium Care
              </div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { label: 'ICU Care', value: '24/7' },
            { label: 'Patient Rooms', value: 'Private' },
            { label: 'Hygiene Standard', value: 'ISO Certified' },
            { label: 'Response Time', value: '< 5 mins' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
              <div className="text-gray-700 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
