import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full inline-block mb-4 shadow-sm">
            Patient Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from patients who have experienced exceptional care
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative scroll-animate hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="border-t border-gray-100 pt-6">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.treatment}</div>
                <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Card */}
        <div className="mt-16 bg-white rounded-2xl p-10 shadow-lg border border-blue-100 max-w-2xl mx-auto scroll-animate">
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="flex items-center justify-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 text-lg">
              Based on <span className="font-bold text-gray-900">450+ verified patient reviews</span>
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              <div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Would Recommend</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
