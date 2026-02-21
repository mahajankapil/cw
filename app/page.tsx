'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Work from './components/Work';
import Stats from './components/Stats';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <Work />
        <Stats />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
