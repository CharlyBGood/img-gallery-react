import "../stylesheets/VisualArt.css";
import { useState } from "react";
import { srcImgs } from "../db/imgDb";

export function Image({ src }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgLength = [...srcImgs];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % imgLength.length);
    setIsHidden(!isHidden);
    console.log(isHidden);
  };

  const handlePrevious = () => {    
    const previousIndex = (currentIndex - 1 + srcImgs.length) % srcImgs.length;
    setCurrentIndex(previousIndex);
    console.log(previousIndex);
  };

  const openImg = (e) => {
    setImageSrc(e.target.src);
    setIsHidden(!isHidden);
    console.log(isHidden);
  };

  const closeImg = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div className="gy-item">
        <img
          src={src}
          className="gy-img"
          alt="digital art by Charly BGood"
          onClick={openImg}
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
