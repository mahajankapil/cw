
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex-shrink-0 flex flex-col justify-center leading-none">
            <span className="font-display font-black text-xl md:text-2xl tracking-wide text-black uppercase block">College</span>
            <span className="font-display font-black text-2xl md:text-4xl tracking-wide text-white uppercase block -mt-1">Wishlist</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a className="font-bold text-lg text-black hover:text-white transition-colors" href="#brands">Brands</a>
            <a className="font-bold text-lg text-black hover:text-white transition-colors" href="#services">Our Services</a>
            <a className="font-bold text-lg text-black hover:text-white transition-colors" href="#work">Our Work</a>
            <a className="font-bold text-lg text-black hover:text-white transition-colors" href="#contact">ContactUs</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
