import "../stylesheets/VisualArt.css";
import React, { useState, useEffect } from 'react';
import { Image } from '../components/Image';
import { imgs } from "./db/imgDb";

function VisualArt() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imgs.length);
      setNextIndex((nextIndex + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, nextIndex]);

  return (
    <div className="main-gy-container">
      <h1 className="collage-h1">cRaZy CollaGe World</h1>
      <div className="gy-container">
        <div className="carousel">
          <Image src={imgs[currentIndex]} className="current" />
          <Image src={imgs[nextIndex]} className="next" />
        </div>
      </div>
    </div>
  );
}

export default VisualArt;
