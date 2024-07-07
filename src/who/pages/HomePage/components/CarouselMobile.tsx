import { useEffect, useRef, useState } from "react";

import { imagesCarouselMain } from "../../../utils";

import Flicking, { FlickingEvents } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay, Fade } from "@egjs/flicking-plugins"; 
import { Link } from "react-router-dom";

export const CarouselMobile = () => {

  const fade = new Fade();

  const flickingRef = useRef<Flicking>(null);

  const autoplay = new AutoPlay({duration: 5000, direction: "NEXT", stopOnHover: false});

  const [currentIndex, setCurrentIndex] = useState<Number>(0);

  const handlePrev = () => {
    flickingRef.current?.prev();
  }

  const handleNext = () => {
    flickingRef.current?.next();
  }

  const handleChange = (e:FlickingEvents["changed"]) => {
    setCurrentIndex(e.index);
  }

  useEffect(() => {

    const flicking = flickingRef.current;
    if (flicking) {
      flicking.on("changed", handleChange);
      return () => {
        flicking.off("changed", handleChange);
      };
    }

  }, [])
  

  return (
    <div className="relative">
      <Flicking 
        ref={flickingRef} 
        plugins={[fade, autoplay]}
        circular={true}
        moveType={"snap"}
        bound={true}
      >
        {
          imagesCarouselMain.map((image, index) => (
            <div className="flex items-center justify-center w-full h-full" key={index}>
              <Link to={image.path}>
                <img src={image.mobile} alt={image.name} />
              </Link>
            </div>
          ))
        }
      </Flicking>
      <button className="text-[24px] absolute top-[50%] z-40 translate-y-[-50%] left-[2%] p-3 text-gray-400" onClick={handlePrev}>
        ❮
      </button>
      <button className="text-[24px] absolute top-[50%] z-40 translate-y-[-50%] right-[2%] p-3 text-gray-400" onClick={handleNext}>
        ❯
      </button>
    </div>

  )
}
