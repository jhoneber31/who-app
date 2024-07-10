import { useEffect, useRef } from "react";

import Flicking from "@egjs/react-flicking";
import { useNavigate } from "react-router-dom";

import { ProductsCategory } from "../../../utils";
import { CartIconButton } from "../../../components/common";

type RelatedProductsProps = {
  products: ProductsCategory[];
};

export const RelatedProducts = ({ products }: RelatedProductsProps) => {

  const flickingRef = useRef<Flicking>(null);

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/product/${id}`);
  }

  useEffect(() => {
    flickingRef.current?.moveTo(0);
  }, [products])
  

  return (
    <div className="mt-6">
      <div className="w-full flex gap-x-5 justify-center py-3 border-b-2 text-[20px]">
        <span>Related Products</span>
      </div>
      <div className="py-4">
        <div className="overflow-hidden relative">
          <Flicking ref={flickingRef} circular={true} align={"prev"}>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col min-w-52 lg:min-w-0 bg-[#FFFFFF] rounded-lg lg:col-span-1 cursor-pointer max-w-[15rem] mr-4 border-2"
                onClick={() => handleClick(product.id)}
              >
                <div className="relative lg:flex lg:justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full lg:max-w-[80%]"
                  />
                  <span className="px-2 py-1 bg-[#d91023] text-[#FFFFFF] rounded-lg absolute bottom-0 left-2 text-[13px]">
                    Save $
                    {(product.listPrice - product.offerPrice).toLocaleString(
                      "en-us",
                      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                    )}
                  </span>
                </div>
                <div className="py-4 px-3">
                  <h3 className="text-[15px] h-[67.5px] overflow-hidden line-clamp-3 lg:line-clamp-2 lg:h-auto 2xl:h-[45px]">
                    {product.name}
                  </h3>
                  <div className="flex flex-col text-[12px] font-medium mt-1 mb-2">
                    <span className="text-[#949494]">{product.brand}</span>
                    <span className="text-[#d91023]">
                      Part Number: {product.partNumber}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[14px] text-[#949494] font-normal">
                      <span className="text-[16px] text-[#e20904] font-bold">
                        $
                        {product.offerPrice.toLocaleString("en-us", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>{" "}
                      <span className="text-[16px] text-[#6e6464]">
                        (Inc. GST)
                      </span>{" "}
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
                  <button className="w-full rounded-xl px-3 py-2 mt-2 bg-[#d91023] text-[#FFFFFF] flex items-center justify-center hover:bg-red-700">
                    <CartIconButton />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </Flicking>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="w-full sm:w-[15rem] xl:w-[25rem] rounded-xl px-3 py-2 mt-2 bg-[#d91023] text-[#FFFFFF] flex items-center justify-center hover:bg-red-700">
          See All
        </button>
      </div>
    </div>
  );
};
