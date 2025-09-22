export default function Footer() {
  const quickLinks = [
    { name: "About Shop Name Boards", href: "#about" },
    { name: "Name Board Services India", href: "#services" },
    { name: "Acrylic LED ACP Products", href: "#products" },
    { name: "Signage Portfolio Gallery", href: "#portfolio" },
    { name: "Contact Signage Experts", href: "#contact" },
    { name: "Free Quote Calculator", href: "#quote" },
    { name: "Installation Service Areas", href: "#areas" },
  ];

  const services = [
    { name: "Acrylic Name Boards India ₹999+", href: "/acrylic-name-boards-india" },
    { name: "LED Glow Sign Boards ₹2999+", href: "/led-glow-sign-boards" },
    { name: "ACP 3D Letter Boards ₹1499+", href: "/acp-3d-letter-boards" },
    { name: "GSB Glow Sign Boards ₹2499+", href: "/gsb-glow-sign-boards" },
    { name: "Flex Board Printing ₹299+", href: "/flex-board-printing" },
    { name: "Vinyl Name Boards ₹499+", href: "/vinyl-name-boards" },
    { name: "Neon Sign Boards ₹4999+", href: "/neon-sign-boards" },
    { name: "Wooden Signage Cafes ₹1999+", href: "/wooden-name-boards" },
    { name: "Metal Name Plates ₹999+", href: "/metal-name-plates" },
    { name: "Digital LED Display ₹15999+", href: "/digital-led-boards" },
  ];

  const bengaluruAreas = [
    "Whitefield", "Electronic City", "Koramangala", "Indiranagar",
    "Jayanagar", "BTM Layout", "HSR Layout", "Marathahalli",
    "Banashankari", "Rajajinagar", "Yelahanka", "JP Nagar", "Malleshwaram"
  ];

  const majorCities = [
    "Mumbai", "Delhi", "Chennai", "Kolkata",
    "Hyderabad", "Pune", "Ahmedabad", "Surat",
    "Jaipur", "Lucknow", "Kanpur", "Nagpur"
  ];

  const states = [
    "Karnataka", "Maharashtra", "Tamil Nadu", "Delhi",
    "Gujarat", "Rajasthan", "Uttar Pradesh", "West Bengal",
    "Telangana", "Kerala", "Madhya Pradesh", "Punjab"
  ];

  const businessTypes = [
    "Restaurant Name Boards", "Shop Signage Solutions", "Office Name Plates",
    "Hospital Signage", "Clinic Door Plates", "Pharmacy Boards",
    "Showroom Signage", "Mall Directory Boards", "Hotel Signage",
    "School Name Boards", "Bank Signage", "Gym Name Boards"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-xl font-bold">Shop Name Boards</span>
                <p className="text-orange-400 text-xs">Best Marketing Agency</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Leading marketing agency for shop name board advertisement across India since 2009. Specializing in acrylic name boards, LED glow sign boards, ACP signage, GSB boards, flex printing, vinyl boards, 3D letters, neon signage, and wooden name boards. Serving 5000+ happy customers pan India.
            </p>
            <div className="flex space-x-3 mb-6">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm text-gray-400">📘</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm text-gray-400">📷</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm text-gray-400">📺</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm text-gray-400">🐦</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-orange-400 mb-2">⭐ Rating: 4.8/5 (847 Reviews)</h4>
              <div className="text-xs text-gray-400">
                <p>✅ Google Business Profile Verified</p>
                <p>✅ JustDial Top Rated Business</p>
                <p>✅ 15+ Years Industry Experience</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Name Board Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-orange-400 text-sm transition-colors block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bengaluru Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Bengaluru Service Areas</h3>
            <ul className="space-y-1">
              {bengaluruAreas.slice(0, 10).map((area, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{area}</span>
                </li>
              ))}
            </ul>
            <a href="/bengaluru-areas" className="text-orange-400 text-sm hover:text-orange-300 mt-2 block">
              View All Bengaluru Areas →
            </a>
          </div>

          {/* Major Cities */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Major Cities</h3>
            <ul className="space-y-1">
              {majorCities.slice(0, 10).map((city, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{city}</span>
                </li>
              ))}
            </ul>
            <a href="/major-cities" className="text-orange-400 text-sm hover:text-orange-300 mt-2 block">
              View All Cities →
            </a>
          </div>

          {/* Contact & Business Types */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Contact Details</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-2">
                <span className="text-orange-400 text-sm mt-0.5">📍</span>
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold">Bengaluru Office:</p>
                  <p>Rukmini Knowledge Park Kattigenaha, Yelahanka, Bellahalli Main Road, Srinivasa Nagar, Bengaluru, Karnataka 560064</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400 text-sm">📞</span>
                <div className="text-gray-300 text-sm">
                  <p>Sales: <a href="tel:+919876543210" className="text-orange-400">+91 98765 43210</a></p>
                  <p>Support: <a href="tel:+918765432109" className="text-orange-400">+91 87654 32109</a></p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400 text-sm">✉️</span>
                <div className="text-gray-300 text-sm">
                  <p><a href="mailto:info@shopnameboards.com" className="text-orange-400">info@shopnameboards.com</a></p>
                  <p><a href="mailto:sales@shopnameboards.com" className="text-orange-400">sales@shopnameboards.com</a></p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400 text-sm">🕒</span>
                <div className="text-gray-300 text-sm">
                  <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-3 text-orange-400 text-lg">Business Types We Serve</h4>
            <div className="grid grid-cols-1 gap-2">
              {businessTypes.slice(0, 8).map((type, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-3 py-2 rounded text-sm">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* States & Additional Areas */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-orange-400 text-lg">States We Serve</h4>
              <div className="flex flex-wrap gap-1">
                {states.map((state, index) => (
                  <span key={index} className="bg-gray-800 text-gray-300 px-3 py-2 rounded text-sm">
                    {state}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-orange-400 text-lg">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a key={index} href={link.href} className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-orange-400 text-lg">Popular Searches</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <p>• Acrylic name board price India</p>
                <p>• LED glow sign board advertisement</p>
                <p>• ACP board with 3D letters cost</p>
                <p>• GSB glow sign board marketing</p>
                <p>• Name board installation service</p>
                <p>• Shop signage design pan India</p>
                <p>• Flex board printing services</p>
                <p>• Neon sign board for restaurant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2024 Shop Name Boards - Best Marketing Agency for Signage Advertisement in India. All rights reserved.</p>
              <p className="mt-1">Leading marketing agency for acrylic name boards, LED glow sign boards, ACP signage, GSB boards, flex printing, and custom signage advertisement solutions.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
              <a href="/sitemap" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Sitemap</a>
              <a href="/refund-policy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}