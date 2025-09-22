export default function FeaturedProducts() {
  const products = [
    {
      title: "Premium Acrylic Name Board",
      originalPrice: "₹1,999",
      salePrice: "₹999",
      description: "High-quality transparent acrylic with precision laser cutting and vibrant printing. Perfect for modern offices.",
      features: ["UV Resistant", "Laser Cut", "Multiple Colors", "5-Year Warranty"],
      bgGradient: "from-blue-500 to-cyan-500",
      bgLight: "from-blue-50 to-cyan-50",
      icon: "🔷",
      badge: "BEST SELLER",
      rating: 4.8,
      reviews: 124
    },
    {
      title: "LED Illuminated Sign Board",
      originalPrice: "₹7,999",
      salePrice: "₹5,999",
      description: "Energy-efficient LED backlighting with premium tempered glass for maximum impact and visibility.",
      features: ["LED Backlit", "Tempered Glass", "Remote Control", "Energy Efficient"],
      bgGradient: "from-green-500 to-emerald-500",
      bgLight: "from-green-50 to-emerald-50",
      icon: "💡",
      badge: "PREMIUM",
      rating: 4.9,
      reviews: 89
    },
    {
      title: "3D Metal Letter Board",
      originalPrice: "₹4,999",
      salePrice: "₹3,499",
      description: "Durable stainless steel construction with modern 3D lettering design that creates stunning visual depth.",
      features: ["Stainless Steel", "3D Design", "Weather Proof", "Custom Fonts"],
      bgGradient: "from-purple-500 to-violet-500",
      bgLight: "from-purple-50 to-violet-50",
      icon: "🎭",
      badge: "TRENDING",
      rating: 4.7,
      reviews: 67
    },
  ];

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⭐ Featured Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Most Popular{' '}
            <span className="text-gradient">Signage Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our best-selling shop name board designs that combine style, durability, and affordability. Trusted by thousands of businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 transform hover:-translate-y-3">
                {/* Product Image/Preview */}
                <div className={`bg-gradient-to-br ${product.bgLight} h-72 relative flex items-center justify-center p-8`}>
                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      {product.badge}
                    </span>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                      {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.salePrice.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                    </div>
                  </div>

                  {/* Product Showcase */}
                  <div className="text-center relative">
                    <div className={`w-32 h-32 bg-gradient-to-br ${product.bgGradient} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-3`}>
                      <span className="text-white text-5xl">{product.icon}</span>
                    </div>

                    {/* Mock signage preview */}
                    <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs mx-auto">
                      <div className="h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 font-semibold text-sm">Your Business Name</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ⭐
                        </span>
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Title and Price */}
                  <h3 className="font-bold text-2xl text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {product.title}
                  </h3>

                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl font-bold text-orange-600">{product.salePrice}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Get Free Quote
                    </button>
                    <button className="w-full border-2 border-gray-200 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                      View Details & Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CTA */}
          <div className="bg-white rounded-3xl p-8 card-shadow">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We create custom signage solutions tailored to your unique business needs. From concept to installation, we&apos;ve got you covered.
            </p>
            <button className="btn-primary">
              Request Custom Design
            </button>
          </div>

          {/* Guarantee */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xl">✅</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Quality Guarantee</h4>
                <p className="text-gray-600 text-sm">All products come with comprehensive warranty and quality assurance.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-xl">🚚</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Free Installation</h4>
                <p className="text-gray-600 text-sm">Professional installation included with every order above ₹2,000.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 text-xl">🎨</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Free Design Service</h4>
                <p className="text-gray-600 text-sm">Get 3D mockups and design consultations at no extra cost.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}