/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCalApi } from "@calcom/embed-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">📞</span>
                <a href="tel:+919502780854" className="hover:text-orange-400 transition-colors">
                  +91 9502780854
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">✉️</span>
                <a href="mailto:contact@shopnameboards.com" className="hover:text-orange-400 transition-colors">
                  contact@shopnameboards.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img src="/icon-192x192.svg" alt="Shop Name Logo" className="h-12 w-12 object-contain" />
                <div >
                  <span className="text-2xl font-bold text-gray-800 block leading-tight">SHOP NAME</span>
                  <span className="text-lg font-semibold text-orange-500 block leading-tight">BOARDS</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 font-medium text-sm transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                data-cal-namespace="30min"
                data-cal-link="cheqmate-tech/30min"
                data-cal-config='{"layout":"month_view"}'
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                BOOK A MEETING
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col space-y-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="w-6 h-0.5 bg-gray-600"></span>
              <span className="w-6 h-0.5 bg-gray-600"></span>
              <span className="w-6 h-0.5 bg-gray-600"></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                data-cal-namespace="30min"
                data-cal-link="cheqmate-tech/30min"
                data-cal-config='{"layout":"month_view"}'
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors mt-4"
              >
                BOOK A MEETING
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}