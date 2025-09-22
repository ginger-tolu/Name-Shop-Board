"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-red-500 text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Didn&apos;t find what you were looking for?
            </h2>
            <p className="text-orange-100 text-lg">
              Get in touch with us for custom signage solutions tailored to your business needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Quote</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="acrylic">Acrylic Name Boards</option>
                      <option value="led">LED Illuminated Signs</option>
                      <option value="3d">3D Letter Boards</option>
                      <option value="metal">Metal Name Plates</option>
                      <option value="digital">Digital Signage</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>

              <div className="bg-gray-50 p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Our Office</h4>
                      <p className="text-gray-600 text-sm">
                        Rukmini Knowledge Park Kattigenaha, Yelahanka<br />
                        Bellahalli Main Road, Srinivasa Nagar<br />
                        Bengaluru, Karnataka 560064
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600 text-sm">+91 9502780854</p>

                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600 text-sm">info@shopnameboards.com</p>
                      <p className="text-gray-600 text-sm">sales@shopnameboards.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600 text-sm">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}