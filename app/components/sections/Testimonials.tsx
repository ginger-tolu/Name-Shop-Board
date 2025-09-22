"use client";

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Electronics",
      location: "Mumbai",
      rating: 5,
      comment: "Excellent quality acrylic name board! Professional team delivered exactly what we wanted.",
      image: "R",
      service: "Acrylic Board"
    },
    {
      name: "Priya Sharma",
      business: "Sharma Boutique",
      location: "Delhi",
      rating: 5,
      comment: "Amazing LED signage work! The board has significantly increased our evening visibility.",
      image: "P",
      service: "LED Signage"
    },
    {
      name: "Mohammed Ali",
      business: "Ali Restaurant",
      location: "Bangalore",
      rating: 5,
      comment: "Professional service and timely delivery. The 3D letters look fantastic and attracted new customers.",
      image: "M",
      service: "3D Letters"
    },
    {
      name: "Sunita Patel",
      business: "Patel Clinic",
      location: "Pune",
      rating: 5,
      comment: "Great work on our clinic's name board. Clean installation and excellent customer service.",
      image: "S",
      service: "ACP Board"
    },
    {
      name: "Amit Singh",
      business: "Singh Hardware",
      location: "Chennai",
      rating: 5,
      comment: "Quick delivery and affordable pricing. The metal name plate looks premium and durable.",
      image: "A",
      service: "Metal Plate"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Customer Reviews
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            5000+ satisfied customers across India trust us for their signage needs.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-100 rounded-full -ml-12 -mb-12 opacity-50"></div>

            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-bold shadow-lg">
                    {testimonials[currentTestimonial].image}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                    {testimonials[currentTestimonial].comment}
                  </blockquote>

                  {/* Client Info */}
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-orange-500 font-medium">
                      {testimonials[currentTestimonial].business}
                    </p>
                    <div className="flex justify-center lg:justify-start items-center space-x-4 text-sm text-gray-500">
                      <span>📍 {testimonials[currentTestimonial].location}</span>
                      <span>🎯 {testimonials[currentTestimonial].service}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index
                  ? 'bg-orange-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4.8/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">5000+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-sm text-gray-600">Cities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}