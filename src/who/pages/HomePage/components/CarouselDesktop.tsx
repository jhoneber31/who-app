import { useEffect, useRef, useState } from "react";

import { imagesCarouselMain } from "../../../utils";

import Flicking, { FlickingEvents } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay, Fade, Parallax } from "@egjs/flicking-plugins";
import { Link } from "react-router-dom";

export const CarouselDesktop = () => {
  const fade = new Fade();

  const parallax = new Parallax();

  const flickingRef = useRef<Flicking>(null);

  const autoplay = new AutoPlay({
    duration: 5000,
    direction: "NEXT",
    stopOnHover: false,
  });

  const [currentIndex, setCurrentIndex] = useState<Number>(0);

  const handlePrev = () => {
    flickingRef.current?.prev();
  };

  const handleNext = () => {
    flickingRef.current?.next();
  };

  const handleChange = (e: FlickingEvents["changed"]) => {
    setCurrentIndex(e.index);
  };

  useEffect(() => {
    const flicking = flickingRef.current;
    if (flicking) {
      flicking.on("changed", handleChange);
      return () => {
        flicking.off("changed", handleChange);
      };
    }
  }, []);

  return (
    <section className="carousel-slider-mobile hidden lg:block">
      <div className="relative">
        <Flicking
          ref={flickingRef}
          plugins={[parallax, autoplay]}
          circular={true}
          moveType={"snap"}
        >
          {imagesCarouselMain.map((image, index) => (
            <div
              className="flex items-center justify-center w-full h-full"
              key={index}
            >
              <Link to={image.path}>
                <img src={image.desktop} alt={image.name} />
              </Link>
            </div>
          ))}
        </Flicking>
        <button
          className="text-[32px] absolute top-[50%] z-40 translate-y-[-50%] left-[2%] p-3 text-gray-400"
          onClick={handlePrev}
        >
          ❮
        </button>
        <button
          className="text-[32px] absolute top-[50%] z-40 translate-y-[-50%] right-[2%] p-3 text-gray-400"
          onClick={handleNext}
        >
          ❯
        </button>
        <div className="dots absolute left-[50%] bottom-3 translate-x-[-50%] flex gap-x-2 z-40">
          {imagesCarouselMain.map((_, index) => (
            <span
              key={index}
              className={`w-[10px] h-[10px] rounded-full ${
                currentIndex === index ? "bg-white" : "bg-[#ffffff80]"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};
