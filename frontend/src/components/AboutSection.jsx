import React from 'react';
import { CheckCircle, Award, GraduationCap, Users } from 'lucide-react';
import { doctorInfo } from '../data/mockData';

export const AboutSection = () => {
  const highlights = [
    'Specialized in Advanced Cancer Surgical Procedures',
    'Expert in Minimally Invasive Laparoscopic Surgeries',
    'Trained in Latest Surgical Techniques and Technologies',
    'Member of National Surgical Associations',
    'Dedicated to Patient-Centered Care'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={doctorInfo.image}
                alt={doctorInfo.name}
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cyan-100 rounded-full -z-10"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                About Doctor
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Meet {doctorInfo.name}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              With over {doctorInfo.experience} of dedicated experience in oncological and laparoscopic surgery, 
              {doctorInfo.name} is committed to providing world-class surgical care to patients in Ambala and surrounding regions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Dr. Sarwal specializes in advanced cancer surgeries, including breast cancer, gastric cancer, and 
              colorectal cancer procedures. His expertise in minimally invasive laparoscopic techniques ensures 
              faster recovery times and better outcomes for patients.
            </p>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <GraduationCap className="w-10 h-10 text-blue-600 mb-3" />
                <div className="text-2xl font-bold text-gray-900">MBBS, MS</div>
                <div className="text-sm text-gray-600">Surgical Oncology</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <Users className="w-10 h-10 text-cyan-600 mb-3" />
                <div className="text-2xl font-bold text-gray-900">{doctorInfo.patientsServed}</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Achievement Badge */}
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 rounded-xl mt-6">
              <Award className="w-12 h-12" />
              <div>
                <div className="font-bold text-lg">Excellence in Healthcare</div>
                <div className="text-sm opacity-90">Recognized for Outstanding Patient Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
