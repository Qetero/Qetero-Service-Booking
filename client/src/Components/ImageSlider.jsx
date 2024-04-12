import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
const ImageSlider = ({ images, showAll }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="relative">
      <img
        src={images[imageIndex]}
        alt=""
        onClick={showAll}
        className="cursor-pointer aspect-[3/2]"
      />
      <MdNavigateBefore
        className="absolute top-1/2 left-1 text-4xl cursor-pointer bg-white/50 rounded-full"
        onClick={() => {
          if (imageIndex > 0) setImageIndex((prev) => prev - 1);
        }}
      />
      <MdNavigateNext
        onClick={() => {
          if (imageIndex < images.length - 1) setImageIndex((prev) => prev + 1);
        }}
        className="absolute top-1/2 right-1 text-4xl cursor-pointer bg-white/50 rounded-full"
      />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 space-x-2">
        {[...Array(images.length)].map((i, j) => (
          <span
            key={j}
            className={`inline-block w-2 h-2 rounded-full cursor-pointer ease-out ${
              imageIndex == j ? "scale-125 bg-white" : "bg-white/60"
            }`}
            onClick={() => setImageIndex(j)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
