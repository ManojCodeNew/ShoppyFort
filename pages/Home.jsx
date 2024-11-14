import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import Advertisement from '../components/Advertisement';
import ProductGrid from '../components/ProductGrid';


const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Advertisement />
      <FeaturedCategories />
      <ProductGrid />
      <Advertisement />
    </div>
  );
};

export default Home;