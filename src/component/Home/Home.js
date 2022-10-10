import React from 'react';
import Categories from '../Categories/Categories';
import HeroSection from '../HeroSection/HeroSection';
import Trust from '../Trust/Trust';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Trust></Trust>
      <Categories></Categories>
    </div>
  );
};

export default Home;