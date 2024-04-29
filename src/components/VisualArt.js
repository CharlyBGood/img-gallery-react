// import { useState } from "react";
import { Image } from "./Image";
import { Modal } from "./Modal";
import { srcImgs } from "../db/imgDb";
import "../stylesheets/VisualArt.css";
import { useState } from "react";

function VisualArt() {
  const [imageSrc, setImageSrc] = useState(null);
  const [isModalHidden, setIsModalHidden] = useState(true);

  const currentIndex = srcImgs.findIndex((img) => img === imageSrc);

  const openImg = (e) => {
    setImageSrc(e.target.src);
    setIsModalHidden(false);
  };

  const closeImg = () => {
    setIsModalHidden(true);
  };

  const prev = () => {
    const prevIndex = (currentIndex - 1 + srcImgs.length) % srcImgs.length;
    setImageSrc(srcImgs[prevIndex]);
    console.log("this should pass the url for the prev imgSrc");
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % srcImgs.length;
    setImageSrc(srcImgs[nextIndex]);
    console.log("this should pass the url for the next imgSrc");
  };

  return (
    <div className="main-gy-container">
      <h1 className="collage-h1">VisualArts_Gallery</h1>
      <div className="gy-container">
        {srcImgs.map((img, index) => {
          return <Image key={index} src={img} openImg={openImg} />;
        })}
      </div>
      <Modal
        isHidden={isModalHidden}
        imageSrc={imageSrc}
        closeImg={closeImg}
        handlePrevious={prev}
        handleNext={next}
      />
    </div>
  );
}

export default VisualArt;
