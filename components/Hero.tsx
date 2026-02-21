
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary relative border-b-4 border-white overflow-hidden">
      <div className="max-w-full">
        <img 
          src="/banner/Black Minimalist Corporate Professional Profile LinkedIn Banner.gif" 
          alt="College Wishlist Banner" 
          className="w-full h-[200px] md:h-[300px] lg:h-auto object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
