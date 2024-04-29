// import { useState } from "react";
import { Image } from "./Image";
import { srcImgs } from "../db/imgDb";
import "../stylesheets/VisualArt.css";
import { useState } from "react";

function VisualArt() {
  const [imageSrc, setImageSrc] = useState(null);
  const [isModalHidden, setIsModalHidden] = useState(true);

  const openImg = (e) => {
    setImageSrc(e.target.src);
    setIsModalHidden(!isModalHidden);
  };

  const closeImg = () => {
    setIsModalHidden(!isModalHidden);
  };
  return (
    <div className="main-gy-container">
      <h1 className="collage-h1">VisualArts_Gallery</h1>
      <div className="gy-container">
        {srcImgs.map((img, index) => {
          return <Image key={index} src={img} openImg={openImg} />;
        })}
      </div>
      <div
        className={isModalHidden ? "img-modal" : "img-modal-open"}
        onClick={closeImg}
      >
        <button
          className="prev"
          // onClick={handlePrevious}
          aria-label="Previous image"
        >
          &#10094;
        </button>
        <img
          className="modal-content"
          src={imageSrc}
          alt="digital art by Charly BGood"
        />
        <button
          className="next"
          // onClick={handleNext}
          aria-label="Next image"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default VisualArt;
