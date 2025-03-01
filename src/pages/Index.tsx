
import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import WhatIDo from '../components/WhatIDo';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Hero />
      <WhatIDo />
      <div className="section-divider" />
      <Portfolio />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Contact />
    </div>
  );
};

export default Index;
