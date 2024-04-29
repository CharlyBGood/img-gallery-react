export function Modal({ isHidden, imageSrc, closeImg }) {
  return (
    <div
      className={isHidden ? "img-modal" : "img-modal-open"}
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
  );
}
