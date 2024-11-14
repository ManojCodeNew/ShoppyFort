import React from 'react';
import '../styles/components/advertisement.scss';

const ads = [
  {
    title: "Winter Wardrobe Sale! ❄️",
    description: "Get up to 50% OFF on cozy sweaters, chic jackets, and winter essentials. Shop now to stay stylish and warm all season long! 🛒 Free Shipping on orders over $50! 🌍 Worldwide delivery available!",
  },
];

const Advertisement = () => {
  return (
    <div className="carousel">
      {ads.map((ad, index) => (
        <div key={index} className="carousel__slide">
          <h2 className="carousel__title">{ad.title}</h2>
          <p className="carousel__description">{ad.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Advertisement;