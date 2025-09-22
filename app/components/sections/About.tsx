export default function About() {
  const features = [
    {
      icon: "🎯",
      title: "Expert Marketing",
      description: "15+ years of experience in shop name board advertisement across India"
    },
    {
      icon: "🏆",
      title: "Quality Assurance",
      description: "Premium materials and professional installation guaranteed for all projects"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick turnaround time with efficient project management and execution"
    },
    {
      icon: "💯",
      title: "Customer Satisfaction",
      description: "5000+ happy clients with 4.8/5 rating across India"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Clients" },
    { number: "50+", label: "Cities Served" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                📊 About Our Agency
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Leading Marketing Agency for
                <span className="text-gradient block">Shop Name Boards</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Marketing agency based in Bengaluru, specializing in shop name board advertisement across India since 2009.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 lg:p-6 hover:bg-orange-50 transition-colors group">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                Get Free Consultation
              </button>
              <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                View Our Portfolio
              </button>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl lg:rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-sm">
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Service Icons */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white bg-opacity-80 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xl">🏪</span>
                  </div>
                  <div className="text-xs font-medium text-gray-700">Acrylic</div>
                </div>
                <div className="bg-white bg-opacity-80 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xl">💡</span>
                  </div>
                  <div className="text-xs font-medium text-gray-700">LED Signs</div>
                </div>
                <div className="bg-white bg-opacity-80 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xl">🔩</span>
                  </div>
                  <div className="text-xs font-medium text-gray-700">Metal</div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-2 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold ">
                Pan India Service
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500 rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12">
              <span className="text-white text-xl">📈</span>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-2xl shadow-xl flex items-center justify-center transform rotate-12">
              <span className="text-white text-lg">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}