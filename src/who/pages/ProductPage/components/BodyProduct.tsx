import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import Flicking, { FlickingEvents } from "@egjs/react-flicking";

import { ProductsCategory } from "../../../utils";
import {
  ArrowRigth,
  CartIconButton,
  IconDeliveryPackage,
  StarIcon,
} from "../../../components/common";

type BodyProductProps = {
  product: ProductsCategory;
};

export const BodyProduct = ({ product }: BodyProductProps) => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const flickingRef = useRef<Flicking>(null);

  const images = [product.image, product.image,product.image,product.image];
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

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    flickingRef.current?.moveTo(index);
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
      <div className="flex flex-row text-[13px] font-medium mb-4 xl:text-[16px]">
        <span className="flex items-start text-[#D91023]">
          <Link to="/" className="flex items-center">
            Home <ArrowRigth />
          </Link>
        </span>
        <span className="ml-1 text-[#606060]">{product.name}</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-6">
        <div className="mb-4 lg:hidden">
          <h3 className="text-[20px] font-medium text-[#000000B3] mb-1">
            {product.name}
          </h3>
          <span className="text-[14px] font-normal text-[#00000066]">
            {product.brand} | Part Number: {product.partNumber}
          </span>
        </div>
        <div className="sm:flex sm:gap-x-6 mb-4 lg:flex-1">
          <div className="hidden sm:flex sm:flex-col gap-y-3 w-[400px] h-[400px] md:h-[500px] lg:h-auto overflow-y-scroll lg:overflow-y-auto">
            {
              images.map((image, index) => (
                <div 
                  key={index} 
                  className={`p-2 cursor-pointer ${currentIndex ===index ? 'border-2 rounded-2xl border-[#9CA3AF]' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img src={image} alt={product.name} className="" />
                </div>
              ))
            }
          </div>
          <div className="relative carousel-slider">
            <Flicking ref={flickingRef} circular={true}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-full h-full"
                >
                  <img 
                    src={image} 
                    alt={product.name} 
                  />
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
        </div>
        <div className="lg:flex-1">
          <div className="mb-4 hidden lg:block">
            <h3 className="text-[20px] font-medium text-[#000000B3] mb-1 xl:text-[25px]">
              {product.name}
            </h3>
            <span className="text-[14px] font-normal text-[#00000066] xl:text-[18px]">
              {product.brand} | Part Number: {product.partNumber}
            </span>
          </div>
          <div className="flex flex-col mb-3">
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
              <span className="px-2 py-1 bg-[#d91023] text-[#FFFFFF] rounded-lg text-[18px] w-fit ml-3">
                Save $
                {(product.listPrice - product.offerPrice).toLocaleString("en-us", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
          </div>
          <div className="flex gap-x-1 items-center mb-3">
            {iconStars.map((_, index) => (
              <StarIcon key={index} />
            ))}
            <span className="translate-y-[2px]">(10)</span>
          </div>
          <div className="rounded-lg bg-[#E5E5E5] px-4 py-4 flex flex-col items-start gap-y-2 mb-5">
            <span className="flex gap-x-4">
              <IconDeliveryPackage />
              FREE shipping on all your orders over $200!
            </span>
            <p className="font-normal text-[14px]">
              Make a purchase of more than $200 and we will cover shipping
              anywhere in Australia!
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center pr-2">
              <img
                src="https://cdn.shopify.com/s/files/1/3009/5686/files/icon-call-who.png"
                alt="call-icon"
                width={40}
              />
              <span className="text-center text-[14px] font-medium mt-3 mb-2">
                Quotes/Bulk Prices Available
              </span>
              <p className="text-center text-[12px] font-normal">
                (Orders of 3 helmets or more)
              </p>
            </div>
            <div className="flex flex-col items-center px-2 border-x-2">
              <img
                src="https://cdn.shopify.com/s/files/1/3009/5686/files/quote-who.png"
                alt="quote-icon"
                width={40}
              />
              <span className="text-center text-[14px] font-medium mt-3 mb-2">
                Prices Already Include GST
              </span>
              <p className="text-center text-[12px] font-normal">
                (No hidden surprises at checkout)
              </p>
            </div>
            <div className="flex flex-col items-center pl-2">
              <img
                src="https://cdn.shopify.com/s/files/1/3009/5686/files/delivery-free-who.png"
                alt="delivery-icon"
                width={40}
              />
              <span className="text-center text-[14px] font-medium mt-3 mb-2">
                Fast, Safe, Secure Delivery
              </span>
              <p className="text-center text-[12px] font-normal">
                (Across Australia)
              </p>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 w-full bg-[#FFFFFF] px-5 py-4 z-40 flex justify-between lg:hidden">
            <div className="flex items-center border-2 rounded-lg">
              <span className="flex items-center justify-center text-[#d91023] text-[35px] font-normal h-full w-[2.5rem]">
                -
              </span>
              <input
                type="text"
                className="max-w-[3.5rem] h-full border-x-2 px-2 text-center"
                value={1}
              />
              <span className="flex items-center justify-center text-[#d91023] text-[35px] font-normal h-full w-[2.5rem]">
                +
              </span>
            </div>
            <button className="w-[11rem] rounded-2xl px-3 py-1 bg-[#d91023] text-[#FFFFFF] flex items-center justify-center hover:bg-red-700">
              <CartIconButton />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
