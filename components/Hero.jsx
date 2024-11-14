import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from 'lucide-react';
import '../styles/components/hero.scss';
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';

const Hero = () => {
  const [banners, setBanners] = useState([
    {
      id: 'banner1',
      title: 'End of Season Sale',
      subtitle: 'Up to 70% OFF on selected items',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80',
      link: '/products',
    },
    {
      id: 'banner2',
      title: 'New Arrivals',
      subtitle: 'Discover the latest collection',
      image: 'https://images.unsplash.com/photo-1585914924626-15adac1e6402?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/products'
    },
    {
      id: 'banner3',
      title: 'Exclusive Deals',
      subtitle: 'Special discounts for members',
      image: 'https://media.istockphoto.com/id/653842950/photo/colorful-clothes-on-hangers-in-a-luxury-fashion-store-with-backlight-effect.jpg?s=2048x2048&w=is&k=20&c=SEJfijTSG2bsoAmbxEacH_lRemNEazyMfXpJG-rvJ_w=',
      link: '/exclusive-deals',
    },
  ]);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (banners.length > 1) {
      const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [banners.length]);

  if (isLoading) {
    return (
      <div className="hero-loading">
        <Loader className="spinner" />
        <p>Loading banners...</p>
      </div>
    );
  }

  const banner = banners[currentBanner];

  return (
    <>
    <BsArrowLeftCircleFill className="arrow-left arrow"/>
    <div className="hero" style={{ backgroundImage: `url(${banner.image})` }}>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>{banner.title}</h1>
            {banner.subtitle && <p>{banner.subtitle}</p>}
            {banner.link && (
              <Link to={banner.link} className="cta-button">
                Shop Now
              </Link>
            )}
          </div>
        </div>
      </div>

      {banners.length > 1 && (
        <div className="hero-dots">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentBanner ? 'active' : ''}`}
              onClick={() => setCurrentBanner(index)}
            />
          ))}
        </div>
      )}
    </div>
    <BsArrowRightCircleFill className="arrow-right arrow"/>
    
    </>
  );
};

export default Hero;
