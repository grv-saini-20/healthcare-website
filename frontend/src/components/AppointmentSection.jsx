import React, { useState } from 'react';
import { Calendar, Phone, User, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatmentType: '',
    preferredDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Appointment booking data:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          treatmentType: '',
          preferredDate: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full inline-block shadow-sm">
              Book Appointment
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Schedule Your Consultation
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Take the first step towards better health. Our team is ready to provide you with expert medical care and personalized treatment plans.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Emergency Hotline</div>
                  <div className="text-xl font-bold text-gray-900">+91-XXXXXXXXXX</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Working Hours</div>
                  <div className="text-lg font-bold text-gray-900">Mon-Sat: 9 AM - 6 PM</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">24/7 Emergency Services Available</span>
                </div>
                <p className="text-sm text-blue-50">
                  Round-the-clock emergency care for critical medical situations
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="pl-11 h-12 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="pl-11 h-12 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="pl-11 h-12 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatmentType" className="text-gray-700 font-medium">
                    Treatment Type *
                  </Label>
                  <Select
                    required
                    value={formData.treatmentType}
                    onValueChange={(value) => setFormData({ ...formData, treatmentType: value })}
                  >
                    <SelectTrigger className="h-12 border-gray-200">
                      <SelectValue placeholder="Select treatment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cancer">Cancer Surgery</SelectItem>
                      <SelectItem value="breast">Breast Surgery</SelectItem>
                      <SelectItem value="gallbladder">Gall Bladder Surgery</SelectItem>
                      <SelectItem value="hernia">Hernia Surgery</SelectItem>
                      <SelectItem value="piles">Piles & Fistula Treatment</SelectItem>
                      <SelectItem value="gastro">Gastro & Liver Treatment</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="text-gray-700 font-medium">
                    Preferred Date *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="pl-11 h-12 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Additional Message
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your condition or any specific concerns..."
                      className="pl-11 min-h-[100px] border-gray-200 focus:border-blue-500 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Book Appointment
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Appointment Request Submitted!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for choosing Sarwal Hospital. Our team will contact you shortly to confirm your appointment.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-gray-700">
                    For urgent matters, please call: <span className="font-bold text-blue-600">+91-XXXXXXXXXX</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
