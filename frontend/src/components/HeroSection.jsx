import React from 'react';
import { Phone, Calendar, Star, Users, Award } from 'lucide-react';
import { Button } from './ui/button';
import { doctorInfo } from '../data/mockData';

export const HeroSection = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100 animate-fade-in-down">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Trusted Healthcare Provider</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
              {doctorInfo.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 font-medium animate-fade-in-up animation-delay-100">
              {doctorInfo.specialization}
            </p>

            <p className="text-lg text-gray-600 animate-fade-in-up animation-delay-200">
              Advanced Cancer & Laparoscopic Care in Ambala
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-in-up animation-delay-300">
              <div className="flex items-center space-x-2 hover-scale">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-600 fill-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{doctorInfo.rating}</div>
                  <div className="text-sm text-gray-600">{doctorInfo.totalReviews} Reviews</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 hover-scale">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{doctorInfo.patientsServed}</div>
                  <div className="text-sm text-gray-600">Patients Treated</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={scrollToAppointment}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency Call
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4 text-sm text-gray-600 animate-fade-in-up animation-delay-500">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>100% Safe</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Modern Equipment</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img
                src="https://images.unsplash.com/photo-1769147555720-71fc71bfc216"
                alt="Modern Hospital"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 animate-float">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{doctorInfo.experience}</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
