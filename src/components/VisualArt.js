import "../stylesheets/VisualArt.css";
import { Image } from "../components/Image";

function VisualArt() {
  return (
    <div className="main-gy-container">
      <h1 className="collage-h1">cRaZy CollaGe World</h1>
      <div className="gy-container">
        <Image src="https://media.giphy.com/media/vuDebpxeqF95dy4k7v/giphy.gif" />
        <Image src="https://media1.giphy.com/media/exPvEKmXHb6dWiTgQv/giphy.gif" />
        <Image src="https://media.giphy.com/media/cLP818k392JZpIFATT/giphy.gif" />
        <Image src="https://media.giphy.com/media/RL0VClRYDycJtJtrnu/giphy.gif" />
        <Image src="https://media.giphy.com/media/xXI7vCRLLviHeO41TF/giphy.gif" />
      </div>
      <div className="buttons">
      <button>
        <a
          href="https://opensea.io/charly_bgood"
          rel="noreferrer"
          target="_BLANK"
        >
          <i className="fa-solid fa-cannabis"></i>
          NFTs
          <i className="fa-solid fa-cannabis"></i>
        </a>
      </button>
      <button>
        <a
          href="https://giphy.com/channel/charly-_bgood"
          rel="noreferrer"
          target="_BLANK"
        >
          <i className="fa-solid fa-cannabis"></i>
          Giphy
          <i className="fa-solid fa-cannabis"></i>
        </a>
      </button>
      </div>

    </div>
  );
}

export default VisualArt;
