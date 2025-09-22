"use client";

import { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What services does your marketing agency provide?",
      answer: "We are a specialized marketing agency focused on shop name board advertisement across India. Our services include acrylic name boards (₹999+), LED glow signs (₹2,999+), ACP signage (₹1,499+), and complete branding solutions. We handle design, manufacturing coordination, and installation nationwide.",
      keywords: "marketing agency services, shop name board advertisement, signage solutions India"
    },
    {
      question: "Which areas do you serve across India?",
      answer: "We provide pan-India coverage for shop name board advertisement. Based in Bengaluru, we serve all major cities including Mumbai, Delhi, Chennai, Kolkata, Hyderabad, Pune, and 50+ other cities. Our network ensures quality service and timely delivery across all Indian states and union territories.",
      keywords: "pan India service, shop name boards nationwide, signage across India, Bengaluru marketing agency"
    },
    {
      question: "What types of name boards do you offer?",
      answer: "Our portfolio includes: Acrylic boards (₹999+), LED illuminated signs (₹2,999+), ACP signage (₹1,499+), 3D letter boards, Metal name plates, Neon signage, Flex boards (₹299+), Vinyl boards, and Custom solutions. All materials are premium quality with professional installation included.",
      keywords: "acrylic boards, LED signs, ACP signage, 3D letters, metal plates, neon signs"
    },
    {
      question: "How long does the complete process take?",
      answer: "Our streamlined process: Consultation (24 hours), Design approval (1-2 days), Manufacturing coordination (3-7 days), Installation (1-2 days). Total timeline: 7-14 days depending on complexity. Rush orders available for urgent requirements with premium charges.",
      keywords: "signage timeline, quick delivery, consultation to installation, manufacturing time"
    },
    {
      question: "Do you provide design services?",
      answer: "Yes! We offer complete design services including brand consultation, 3D mockups, and visual previews. Our design team creates custom solutions that match your brand identity. Free design consultation and unlimited revisions until you're satisfied with the final concept.",
      keywords: "design services, 3D mockups, brand consultation, custom design, free consultation"
    },
    {
      question: "What is included in your pricing?",
      answer: "Our transparent pricing includes: Design consultation, 3D mockup, material costs, manufacturing coordination, transportation, professional installation, and 1-year warranty. No hidden charges. Free installation for orders above ₹2,000. Extended warranty options available.",
      keywords: "transparent pricing, included services, no hidden charges, warranty, free installation"
    },
    {
      question: "How do you ensure quality across India?",
      answer: "We maintain quality through: Vetted manufacturing partners, standardized materials, quality inspections, professional installation teams, photo documentation, and customer feedback systems. All work comes with comprehensive warranty and after-sales support.",
      keywords: "quality assurance, vetted partners, professional installation, warranty, after-sales support"
    },
    {
      question: "Can you handle large commercial projects?",
      answer: "Absolutely! We specialize in large-scale projects including mall signage, hospital wayfinding, corporate branding, and multi-location retail chains. Our project management ensures coordinated execution across multiple cities with consistent branding and timelines.",
      keywords: "commercial projects, mall signage, hospital signage, corporate branding, multi-location retail"
    },
    {
      question: "Do you provide signage for hospitals and clinics?",
      answer: "Yes, we specialize in medical signage: Hospital name boards (₹5,999+), Clinic door plates (₹899+), Department signage (₹1,499/board), Emergency exit signs (₹699+), Doctor chamber plates (₹499+), Floor directories (₹2,999+), Pharmacy signage (₹1,999+). Materials: Antibacterial acrylic, easy-clean surfaces, NABH/JCI compliant designs. Features: Clear visibility, professional appearance, infection control friendly, custom colors matching hospital branding.",
      keywords: "hospital signage, clinic name boards, medical signage, doctor name plates, pharmacy boards, NABH compliant"
    },
    {
      question: "What warranty do you provide on name boards?",
      answer: "Comprehensive warranty coverage: 1-year warranty on all LED/electrical components, 2-year warranty on acrylic boards (against yellowing/cracking), 3-year warranty on ACP boards (weather resistance), 5-year warranty on metal letters (corrosion resistance), Lifetime warranty on design and installation workmanship. Free service calls within Delhi NCR. Replacement guarantee for manufacturing defects. Extended warranty available for commercial installations.",
      keywords: "name board warranty, signage guarantee, LED board warranty, acrylic board warranty, lifetime service"
    },
    {
      question: "Which areas in Delhi NCR do you serve?",
      answer: "We serve entire Delhi NCR: Delhi (all districts), Gurgaon (Cyber City, Golf Course Road, Sohna Road, MG Road), Noida (Sector 18, 62, 63, Knowledge Park), Greater Noida (Alpha, Beta, Gamma sectors), Faridabad (NIT, Old Faridabad, Neharpar), Ghaziabad (Raj Nagar, Vaishali, Indirapuram). Same-day service in most areas. Free site visit for projects above ₹5,000. Installation teams available 6 days a week, 9 AM to 7 PM.",
      keywords: "name board Delhi NCR, signage Gurgaon, Noida signage, Faridabad name boards, Greater Noida signage"
    },
    {
      question: "What is the process for custom name board design?",
      answer: "Custom design process: 1) Free consultation and site measurement, 2) Understand brand requirements and budget, 3) Create 3D mockup and design concepts (within 24 hours), 4) Client approval and quotation finalization, 5) Material sourcing and production (3-7 days), 6) Quality check and testing, 7) Professional installation and testing, 8) 1-year warranty activation. We provide unlimited design revisions until satisfaction. Advanced 3D visualization helps you see exact final appearance.",
      keywords: "custom name board design, 3D mockup, design process, free consultation, custom signage design"
    }
  ];

  return (
    <section className="section-padding bg-white border-t">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ❓ Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Know About{' '}
            <span className="text-gradient">Shop Name Boards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about acrylic name boards, LED signage, ACP boards, GSB boards, pricing, installation, and more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <h3 className="font-bold text-lg text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {faq.keywords.split(', ').map((keyword, keyIndex) => (
                          <span key={keyIndex} className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional SEO Content */}
          <div className="mt-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Still Have Questions About Name Boards?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-4">📞 Call Our Experts</h4>
                <p className="text-gray-600 mb-4">
                  Speak directly with our signage specialists for personalized advice on acrylic boards, LED signage, ACP boards, and custom solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-black">Call:</span>
                    <a href="tel:+919502780854" className="text-orange-600 hover:text-orange-700">+91 9502780854</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-4">📧 Email Support</h4>
                <p className="text-gray-600 mb-4">
                  Send us your requirements, dimensions, and get detailed quotations for all types of name boards and signage solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-black">Email:</span>
                    <a href="mailto:contact@shopnameboards.com" className="text-orange-600 hover:text-orange-700">contact@shopnameboards.com</a>
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