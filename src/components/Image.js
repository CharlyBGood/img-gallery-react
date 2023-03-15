import { useState } from "react";
import "../stylesheets/VisualArt.css";

export function Image({ src }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  const openImg = (e) => {
    setImageSrc(e.target.src);
    setIsHidden(!isHidden);
  };

  const closeImg = (e) => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <div className="gy-item" onClick={openImg}>
        <img
          className="gy-img"
          src={src}
          alt="digital art by Charly BGood"
        />
      </div>
      <div
        className={isHidden ? "img-modal" : "img-modal-open"}
        onClick={closeImg}
      >
        <img
          className="modal-content"
          src={imageSrc}
          alt="digital art by Charly BGood"
        />
      </div>
    </>
  );
}
