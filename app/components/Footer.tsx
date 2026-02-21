
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="font-display font-black text-xl text-primary uppercase">College</span>
              <span className="font-display font-black text-2xl text-white uppercase">Wishlist</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Empowering students and developers with cutting-edge software solutions. 
              From web development to AI automation, we bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-colors">
                <span className="material-icons text-sm">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-colors">
                <span className="material-icons text-sm">alternate_email</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-colors">
                <span className="material-icons text-sm">language</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-gray-900 transition-colors">
                <span className="material-icons text-sm">camera_alt</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors text-sm">Services</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-primary transition-colors text-sm">Our Work</a></li>
              <li><a href="#story" className="text-gray-300 hover:text-primary transition-colors text-sm">Our Story</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4 uppercase tracking-wide">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">App Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">AI Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">UI/UX Design</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 College Wishlist. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
