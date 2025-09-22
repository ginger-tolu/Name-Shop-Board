import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 lg:py-16 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">


              <h1 className="text-3xl md:text-4xl lg:text-[3.60rem]  font-bold text-gray-900 leading-tight">
                Best Shop Name Board Marketing Agency in{' '}
                <span className="text-gradient">India</span>
              </h1>

              <p className="text-lg  text-gray-600 leading-relaxed max-w-lg">
                Professional signage advertisement services across India. Starting from ₹999 for acrylic boards.
                <span className="font-semibold text-orange-600"> Free Design & Installation!</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
              <div className="flex items-center space-x-3 bg-white p-3 lg:p-4 rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-sm">Premium Materials</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 lg:p-4 rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-sm">Custom Designs</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 lg:p-4 rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-sm">Expert Installation</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors">
                Get Free Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Portfolio
              </button>
            </div>

            <div className="flex items-center justify-between sm:justify-start sm:space-x-8 pt-4">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-gray-900">15+</div>
                <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-xs lg:text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-xs lg:text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="relative">
              {/* Main showcase card */}
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-8 lg:p-10 relative z-10 w-full max-w-lg">
                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  {/* Acrylic Board Sample */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl lg:rounded-2xl h-40 lg:h-48 flex flex-col items-center justify-center p-5 lg:p-6 group hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/acrylic-boards.png"
                        alt="Acrylic Boards"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"

                        priority={false}
                      />
                      <span className="text-white text-lg lg:text-xl hidden">🏪</span>
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-blue-700">Acrylic Boards</span>
                  </div>

                  {/* LED Board Sample */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl lg:rounded-2xl h-40 lg:h-48 flex flex-col items-center justify-center p-5 lg:p-6 group hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-500 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/led-signs.png"
                        alt="LED Signs"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"

                        priority={false}
                      />
                      <span className="text-white text-lg lg:text-xl hidden">💡</span>
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-green-700">LED Signs</span>
                  </div>

                  {/* Metal Board Sample */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl lg:rounded-2xl h-40 lg:h-48 flex flex-col items-center justify-center p-5 lg:p-6 group hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-purple-500 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/metal-plates.png"
                        alt="Metal Plates"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"

                        priority={false}
                      />
                      <span className="text-white text-lg lg:text-xl hidden">🔩</span>
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-purple-700">Metal Plates</span>
                  </div>

                  {/* 3D Letters Sample */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl lg:rounded-2xl h-40 lg:h-48 flex flex-col items-center justify-center p-5 lg:p-6 group hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-500 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/3d-letters.png"
                        alt="3D Letters"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"

                        priority={false}
                      />
                      <span className="text-white text-lg lg:text-xl hidden">📝</span>
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-orange-700">3D Letters</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-20 lg:h-20 bg-orange-500 rounded-xl lg:rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 z-20">
                <span className="text-white text-lg lg:text-xl">✨</span>
              </div>
              <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-14 h-14 lg:w-16 lg:h-16 bg-blue-500 rounded-xl lg:rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12 z-20">
                <span className="text-white text-sm lg:text-lg">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}