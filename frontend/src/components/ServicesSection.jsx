import React from 'react';
import { Activity, HeartPulse, Droplet, ShieldPlus, Stethoscope, ClipboardPlus, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { services } from '../data/mockData';

const iconMap = {
  activity: Activity,
  'heart-pulse': HeartPulse,
  droplet: Droplet,
  'shield-plus': ShieldPlus,
  stethoscope: Stethoscope,
  'clipboard-plus': ClipboardPlus
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Surgical Care
          </h2>
          <p className="text-lg text-gray-600">
            Expert treatment across multiple specialties with advanced surgical techniques and personalized care
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Learn More Link */}
                <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-10 shadow-lg border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Treatment You Need?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our expert team is here to help you. Book a consultation to discuss your condition and get personalized treatment recommendations.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            onClick={() => {
              const element = document.getElementById('appointment');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
