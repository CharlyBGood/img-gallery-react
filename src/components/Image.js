// import { useState } from "react";
import "../stylesheets/VisualArt.css";

export function Image({ src }) {
  // const [imageSrc, setImageSrc] = useState(null);
  // const [isHidden, setIsHidden] = useState(true);

  // const openImg = (e) => {
  //   setImageSrc(e.target.src);
  //   setIsHidden(!isHidden);
  // };

  // const closeImg = (e) => {
  //   setIsHidden(!isHidden);
  // };
  return <img className="gy-img" src={src} alt="digital art by Charly BGood" />;
}
