import React from 'react';
import { MapPin } from 'lucide-react';
import { hospitalInfo } from '../data/mockData';

export const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Location
          </h2>
          <p className="text-lg text-gray-600">
            Conveniently located in the heart of Ambala for easy access
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] bg-gradient-to-br from-blue-100 to-cyan-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                <div className="text-gray-700 font-medium">
                  <p className="text-lg">Interactive Map</p>
                  <p className="text-sm">Sarwal Hospital, Ambala</p>
                </div>
              </div>
            </div>
            {/* You can replace this with actual Google Maps embed */}
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13721.234567890!2d76.7794!3d30.3782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIyJzQxLjUiTiA3NsKwNDYnNDUuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="opacity-50"
            ></iframe>
          </div>

          {/* Address Details */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sarwal Hospital</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {hospitalInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Contact Number</div>
                <a href={`tel:${hospitalInfo.phone}`} className="text-xl font-bold text-blue-600 hover:text-blue-700">
                  {hospitalInfo.phone}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Emergency Hotline</div>
                <a href={`tel:${hospitalInfo.emergencyPhone}`} className="text-xl font-bold text-red-600 hover:text-red-700">
                  {hospitalInfo.emergencyPhone}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Email</div>
                <a href={`mailto:${hospitalInfo.email}`} className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                  {hospitalInfo.email}
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Operating Hours</h4>
              <p className="text-blue-50">{hospitalInfo.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
