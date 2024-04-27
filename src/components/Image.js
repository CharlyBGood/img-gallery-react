import "../stylesheets/VisualArt.css";
import { useState } from "react";
import { srcImgs } from "../db/imgDb";

export function Image({ src, className }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % srcImgs.length);
    setIsHidden(isHidden);
    console.log('isHidden')
  };

  const handlePrevious = () => {
    const previousIndex = (currentIndex - 1 + srcImgs.length) % srcImgs.length;
    setCurrentIndex(previousIndex);
  };

  const openImg = (e) => {
    setImageSrc(e.target.src);
    setIsHidden(!isHidden);
  };

  const closeImg = (e) => {
    setIsHidden(isHidden);
  };

  return (
    <>
      <div className="gy-item" onClick={openImg}>
        <img
          src={src}
          // className={className}
          className="gy-img"
          alt="digital art by Charly BGood"
        />
      </div>
      <div
        className={isHidden ? "img-modal" : "img-modal-open"}
        onClick={closeImg}
      >
        <button
          className="prev"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          &#10094;
        </button>
        <img
          className="modal-content"
          src={imageSrc}
          alt="digital art by Charly BGood"
        />
        <button className="next" onClick={handleNext} aria-label="Next image">
          &#10095;
        </button>
      </div>
    </>
  );
}
