// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import './Hero.css';
import ted1 from '../images/ted1.jpeg';
import ted2 from '../images/ted2.jpeg';
import ted3 from '../images/ted3.jpeg';
import ted5 from '../images/ted5.jpeg';

const images = [ted1, ted2, ted3, ted5];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        if (prevImage === images.length - 1) {
          clearInterval(intervalId);
          return prevImage;
        }
        return prevImage + 1;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line">Management</span>
          <span className="line">Interaction</span>
          <span className="line">Cell</span>
        </h1>
        <p className="hero-subtitle">Empowering Future Leaders</p>
        <button className="hero-cta">Explore Events</button>
      </div>
    </div>
  );
}

export default Hero;