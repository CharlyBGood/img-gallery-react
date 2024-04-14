import "../stylesheets/VisualArt.css";

export function Image({ src, className }) {
  return (
    <img src={src} className={className} alt="digital art by Charly BGood" />
  );
}
