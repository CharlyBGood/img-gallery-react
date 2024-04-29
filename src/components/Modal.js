export function Modal({
  isHidden,
  imageSrc,
  closeImg,
  handlePrevious,
  handleNext,
}) {
  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={isHidden ? "img-modal" : "img-modal-open"}
      onClick={closeImg}
    >
      <img
        className="modal-content"
        src={imageSrc}
        alt="digital art by Charly BGood"
      />
      <button
        className="prev"
        onClick={(e) => {
          handleInsideClick(e);
          handlePrevious();
        }}
        aria-label="Previous image"
      >
        &#8678;
      </button>
      <button
        className="next"
        onClick={(e) => {
          handleInsideClick(e);
          handleNext();
        }}
        aria-label="Next image"
      >
        &#8680;
      </button>
    </div>
  );
}
