// import { useState } from "react";
import { Image } from "./Image";
import { Modal } from "./Modal";
import { srcImgs } from "../db/imgDb";
import "../stylesheets/VisualArt.css";
import { useState } from "react";

function VisualArt() {
  const [imageSrc, setImageSrc] = useState(null);
  const [isModalHidden, setIsModalHidden] = useState(true);

  const openImg = (e) => {
    setImageSrc(e.target.src);
    setIsModalHidden(false);
  };

  const closeImg = () => {
    setIsModalHidden(true);
  };
  return (
    <div className="main-gy-container">
      <h1 className="collage-h1">VisualArts_Gallery</h1>
      <div className="gy-container">
        {srcImgs.map((img, index) => {
          return <Image key={index} src={img} openImg={openImg} />;
        })}
      </div>
      <Modal isHidden={isModalHidden} imageSrc={imageSrc} closeImg={closeImg} />
    </div>
  );
}

export default VisualArt;
