import React from 'react';
export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-2">Annu Beauty Salon</h3>
            <p className="text-gray-400 text-sm">
              20+ years of elevating your natural beauty.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#work" className="hover:text-[#C9A961] transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-[#C9A961] transition-colors">
              About
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#C9A961] transition-colors">
              
              Testimonials
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Annu Beauty Salon. All rights
            reserved.
          </p>
          <p>Designed for elegance.</p>
        </div>
      </div>
    </footer>);

}