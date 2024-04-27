// import { useState } from "react";
import { Image } from "./Image";
import { srcImgs } from "../db/imgDb";
import "../stylesheets/VisualArt.css";

function VisualArt() {
  const imgLength = [...srcImgs];

  return (
    <div className="main-gy-container">
      <h1 className="collage-h1">VisualArts_Gallery</h1>
      <div className="gy-container">
        {/* <Image src={srcImgs[currentIndex]} className="current" /> */}
        {imgLength.map((img) => {
          return <Image src={img} />;
        })}
      </div>
    </div>
  );
}

export default VisualArt;
