import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from 'lucide-react';
import '../styles/components/hero.scss';

const Hero = () => {
  const [banners, setBanners] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length > 1) {
      const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [banners.length]);

  const fetchBanners = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/banners?position=hero');
      if (!response.ok) throw new Error('Failed to fetch banners');
      const data = await response.json();
      setBanners(data);
    } catch (error) {
      // Fallback banner for development
      setBanners([{
        id: 'default',
        title: 'Start of Season Sale',
        subtitle: '70% OFF on all premium brands',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80',
        link: '/products'
      },{
        id: 'default',
        title: 'Middle of Season Sale',
        subtitle: '70% OFF on all premium brands',
        image: 'https://media.istockphoto.com/id/1474764768/photo/smart-warehouse-inventory-management-system-concept.jpg?s=612x612&w=0&k=20&c=S3FqWmAMhvGQkeQH7J5RRDkxBeY-gIHjnEmCp181ubo=',
        link: '/products'
      },
      {
        id: 'default',
        title: 'End of Season Sale',
        subtitle: '70% OFF on all premium brands',
        image: 'https://media.istockphoto.com/id/1362549295/photo/food-market-in-smartphone-grocery-food-buying-online-and-delivery-app-concept.jpg?s=612x612&w=0&k=20&c=jBv0gxE4g_HTCfFgIMdMDEfSuiwqF_UWnQZlB2J8xeI=',
        link: '/products'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="hero-loading">
        <Loader className="spinner" />
        <p>Loading banners...</p>
      </div>
    );
  }

  if (banners.length === 0) return null;

  const banner = banners[currentBanner];

  return (
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
  );
};

export default Hero;