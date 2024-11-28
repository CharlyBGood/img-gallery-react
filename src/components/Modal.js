import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  useEffect(() => {
    if (isHidden) return; // Skip adding listener if modal is hidden

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "Escape":
          closeImg();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup on unmount or when modal is closed
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isHidden, handlePrevious, handleNext, closeImg]);

  return (
    <div
      {...swipeHandlers}
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
