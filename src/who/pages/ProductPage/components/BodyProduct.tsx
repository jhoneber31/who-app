import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import Flicking, { FlickingEvents } from "@egjs/react-flicking";

import { ProductsCategory } from "../../../utils";
import { ArrowRigth, StarIcon } from "../../../components/common";

type BodyProductProps = {
  product: ProductsCategory;
};

export const BodyProduct = ({ product }: BodyProductProps) => {
  const [currentIndex, setCurrentIndex] = useState<Number>(0);

  const flickingRef = useRef<Flicking>(null);

  const images = [product.image, product.image];
  const iconStars = Array(5).fill(null);

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
    <>
      <div className="flex flex-row text-[13px] font-medium mb-4">
        <span className="flex items-start text-[#D91023]">
          <Link to="/" className="flex items-center">
            Home <ArrowRigth />
          </Link>
        </span>
        <span className="ml-1 text-[#606060]">{product.name}</span>
      </div>
      <div className="flex flex-col">
        <div className="mb-2 lg:hidden">
          <h3 className="text-[20px] font-medium text-[#000000B3] mb-1">
            {product.name}
          </h3>
          <span className="text-[14px] font-normal text-[#00000066]">
            {product.brand} | Part Number: {product.partNumber}
          </span>
        </div>
        <div className="relative carousel-slider mb-4">
          <Flicking ref={flickingRef} circular={true}>
            {images.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full h-full"
              >
                <img src={image} alt={product.name} />
              </div>
            ))}
          </Flicking>
          <button
            className="text-[24px] absolute top-[50%] z-40 translate-y-[-50%] left-[2%] p-3 text-gray-400"
            onClick={handlePrev}
          >
            ❮
          </button>
          <button
            className="text-[24px] absolute top-[50%] z-40 translate-y-[-50%] right-[2%] p-3 text-gray-400"
            onClick={handleNext}
          >
            ❯
          </button>
          <div className="dots absolute left-[50%] bottom-3 translate-x-[-50%] flex gap-x-2 z-40">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-[10px] h-[10px] rounded-full ${
                  currentIndex === index ? "bg-[#414141]" : "bg-[#C4C4C4]"
                }`}
              ></span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex ga-x-2">
            {
              iconStars.map((_, index) => (
                <StarIcon key={index} />
              ))
            }
          </div>
          <span className="px-2 py-1 bg-[#d91023] text-[#FFFFFF] rounded-lg text-[18px] block w-fit mb-2">
            Save $
            {(product.listPrice - product.offerPrice).toLocaleString("en-us", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <div className="flex flex-col">
            <p className="text-[20px] text-[#949494] font-normal">
              <span className="text-[28px] text-[#e20904] font-bold">
                $
                {product.offerPrice.toLocaleString("en-us", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>{" "}
              <span className="text-[20px] text-[#6e6464]">(Inc. GST)</span>{" "}
              <br />
              WAS:{" "}
              <span className="line-through">
                $
                {product.listPrice.toLocaleString("en-us", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
