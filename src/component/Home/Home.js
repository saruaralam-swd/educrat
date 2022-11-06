import React from 'react';
import Categories from '../Categories/Categories';
import HeroSection from '../HeroSection/HeroSection';
import SimpleInput from '../SimpleInput/SimpleInput';
import Trust from '../Trust/Trust';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Trust />
      <Categories />
      <SimpleInput />
    </div>
  );
};

export default Home;