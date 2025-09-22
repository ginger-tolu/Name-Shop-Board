export default function Services() {
  const services = [
    {
      title: "Digital Signage Boards",
      description: "Modern LED and digital display solutions for dynamic content",
      icon: "📺",
      bgGradient: "from-blue-500 to-blue-600",
      bgLight: "from-blue-50 to-blue-100",
      price: "Starting ₹5,999",
      features: ["HD Display", "Remote Control", "Weather Resistant"]
    },
    {
      title: "Acrylic Name Boards",
      description: "Premium acrylic signage with crystal-clear custom designs",
      icon: "🔷",
      bgGradient: "from-green-500 to-green-600",
      bgLight: "from-green-50 to-green-100",
      price: "Starting ₹999",
      features: ["UV Resistant", "Laser Cut", "Multiple Colors"]
    },
    {
      title: "3D Letter Boards",
      description: "Eye-catching dimensional lettering that creates depth",
      icon: "🎭",
      bgGradient: "from-purple-500 to-purple-600",
      bgLight: "from-purple-50 to-purple-100",
      price: "Starting ₹2,499",
      features: ["Metal/Acrylic", "LED Backlit", "Custom Fonts"]
    },
    {
      title: "Metal Name Plates",
      description: "Durable stainless steel and aluminum premium options",
      icon: "⚡",
      bgGradient: "from-gray-500 to-gray-600",
      bgLight: "from-gray-50 to-gray-100",
      price: "Starting ₹1,499",
      features: ["Rust Proof", "Etched Design", "Long Lasting"]
    },
    {
      title: "Illuminated Signage",
      description: "LED backlit boards for maximum visibility day & night",
      icon: "💡",
      bgGradient: "from-yellow-500 to-yellow-600",
      bgLight: "from-yellow-50 to-yellow-100",
      price: "Starting ₹3,999",
      features: ["Energy Efficient", "Auto On/Off", "Bright LEDs"]
    },
    {
      title: "Glass Etching Boards",
      description: "Elegant frosted glass with precision custom etching",
      icon: "🪟",
      bgGradient: "from-indigo-500 to-indigo-600",
      bgLight: "from-indigo-50 to-indigo-100",
      price: "Starting ₹2,999",
      features: ["Tempered Glass", "Frost Finish", "Office Grade"]
    },
    {
      title: "Wooden Name Boards",
      description: "Classic wooden signage with natural premium finish",
      icon: "🌳",
      bgGradient: "from-amber-500 to-amber-600",
      bgLight: "from-amber-50 to-amber-100",
      price: "Starting ₹1,999",
      features: ["Solid Wood", "Engraved Text", "Weather Coat"]
    },
    {
      title: "Flex Banner Boards",
      description: "Cost-effective vinyl and flex printing solutions",
      icon: "🎨",
      bgGradient: "from-teal-500 to-teal-600",
      bgLight: "from-teal-50 to-teal-100",
      price: "Starting ₹299",
      features: ["Vinyl Print", "Large Format", "Quick Setup"]
    },
    {
      title: "Neon Sign Boards",
      description: "Vibrant neon lighting perfect for restaurants & shops",
      icon: "🌈",
      bgGradient: "from-pink-500 to-pink-600",
      bgLight: "from-pink-50 to-pink-100",
      price: "Starting ₹4,999",
      features: ["RGB Colors", "Flexible Tubes", "Remote Control"]
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50 border-t">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🛠️ Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Are You Looking For{' '}
            <span className="text-gradient">Today?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of shop name boards and signage advertisement solutions designed to make your business stand out across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${service.bgLight} h-56 relative flex items-center justify-center p-6`}>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.bgGradient} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-3xl">{service.icon}</span>
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 inline-block">
                    {service.price}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  Popular
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                    Get Quote
                  </button>
                  <button className="px-4 py-2 border border-gray-200 hover:border-orange-500 text-gray-700 hover:text-orange-500 rounded-lg text-sm font-semibold transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We create bespoke signage advertisement solutions tailored to your unique business requirements across India.
            </p>
            <button className="btn-primary">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}