export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Send Your Requirements",
      description: "Share your design ideas, dimensions, and specifications with our team through our easy form.",
      icon: "📋",
      color: "blue",
      time: "5 mins"
    },
    {
      step: "02",
      title: "Design & Quote",
      description: "We create custom 3D mockups and provide detailed quotations within 24 hours.",
      icon: "🎨",
      color: "green",
      time: "24 hours"
    },
    {
      step: "03",
      title: "Production",
      description: "Our expert craftsmen manufacture your signage using premium materials and cutting-edge technology.",
      icon: "⚙️",
      color: "purple",
      time: "3-7 days"
    },
    {
      step: "04",
      title: "Quality Check & Delivery",
      description: "Rigorous quality inspection followed by safe delivery and professional installation at your location.",
      icon: "🚚",
      color: "orange",
      time: "Same day"
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        light: "from-blue-50 to-blue-100",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        bg: "from-green-500 to-green-600",
        light: "from-green-50 to-green-100",
        text: "text-green-600",
        border: "border-green-200"
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        light: "from-purple-50 to-purple-100",
        text: "text-purple-600",
        border: "border-purple-200"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        light: "from-orange-50 to-orange-100",
        text: "text-orange-600",
        border: "border-orange-200"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="process" className="section-padding bg-white relative overflow-hidden border-t">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Custom Signage in{' '}
            <span className="text-gradient">4 Easy Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures you get professional signage solutions with minimal hassle and maximum quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            return (
              <div key={index} className="group relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gray-200 z-0"></div>
                )}

                <div className="bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-500 transform hover:-translate-y-2 relative z-10">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-6">
                    <div className={`w-8 h-8 bg-gradient-to-br ${colors.bg} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${colors.light} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{step.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Time Badge */}
                    <div className={`inline-flex items-center bg-gray-50 ${colors.text} px-3 py-1 rounded-full text-xs font-medium border ${colors.border}`}>
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.time}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their signage needs. Get started today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Call Us Now
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-orange-400">
            <div className="text-center">
              <div className="text-2xl font-bold">24hrs</div>
              <div className="text-orange-100 text-sm">Design Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-orange-100 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">7-Day</div>
              <div className="text-orange-100 text-sm">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}