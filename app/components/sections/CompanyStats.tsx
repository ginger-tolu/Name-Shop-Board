export default function CompanyStats() {
  const stats = [
    {
      number: "15+",
      label: "Years of Industry Experience",
      description: "Established expertise in signage solutions",
    },
    {
      number: "5000+",
      label: "Happy Customers",
      description: "Satisfied clients across multiple industries",
    },
    {
      number: "1500+",
      label: "Projects Completed",
      description: "Successfully delivered signage projects",
    },
  ];

  const features = [
    "High-Quality Materials",
    "Expert Craftsmanship",
    "On-Time Delivery",
    "Competitive Pricing",
    "Custom Design Solutions",
    "Professional Installation",
    "Post-Installation Support",
    "Wide Range of Options"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <span className="text-orange-500 font-bold text-xl">O</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">ORCHID</h2>
                <p className="text-orange-100">COMPANY PROFILE</p>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              OUR STRENGTHS IN NUMBERS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-orange-100 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-black">
            <h4 className="text-2xl font-bold mb-6">EVERYTHING IN PRINT</h4>
            <p className=" mb-6 leading-relaxed">
              We provide comprehensive signage solutions from concept to installation. Our experienced team ensures
              every project meets the highest standards of quality and craftsmanship.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-200 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-sm">Google</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-400 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">J</span>
                </div>
                <span className="text-sm">JustDial</span>
                <span className="text-orange-200 text-sm">4.6</span>
              </div>
              <div className="text-sm">Trusted by 49</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}