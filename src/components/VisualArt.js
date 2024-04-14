import { useState } from "react";
import { Image } from "./Image";
import { imgs } from "../db/imgDb";
import "../stylesheets/VisualArt.css";

function VisualArt() {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % imgs.length);
  };

  const handlePrevious = () => {
    const previousIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    setCurrentIndex(previousIndex);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((currentIndex + 1) % imgs.length);
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <div className="main_container">
      <h1 className="collage-h1">VisualArts_Gallery</h1>
      <button
        className="prev"
        onClick={handlePrevious}
        aria-label="Previous image"
      >
        &#10094;
      </button>
      <div className="carousel">
        <Image src={imgs[currentIndex]} className="current" />
      </div>
      <button className="next" onClick={handleNext} aria-label="Next image">
        &#10095;
      </button>
    </div>
  );
}

export default VisualArt;
