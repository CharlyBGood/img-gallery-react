import "../stylesheets/VisualArt.css";

export function Image({ src, openImg }) {
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
    </>
  );
}
