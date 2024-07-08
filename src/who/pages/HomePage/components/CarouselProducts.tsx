import { CartIconButton } from "../../../components/common";
import { mockProducts } from "../../../utils";

export const CarouselProducts = () => {
  return (
    <section className="bg-[#1b1b1b] WELDING HELMETS WITH A PAPR lg:border-t-2 lg:border-[#FFFFFF]">
      <div className="container mx-auto px-5 py-10">
        <h3 className="text-[#FFFFFF] text-[20px] lg:text-[30px] font-bold mb-8 xl:mb-10">
          WELDING HELMETS WITH A PAPR
        </h3>
        <div className="carrousel overflow-x-auto flex gap-x-4 lg:overflow-auto lg:grid lg:grid-cols-5 xl:gap-x-8">
          {
            mockProducts[0].products.map(product => (
              <div key={product.id} className="flex flex-col min-w-52 lg:min-w-0 bg-[#FFFFFF] rounded-lg lg:col-span-1 cursor-pointer">
                <div className="relative lg:flex lg:justify-center">
                  <img src={product.image} alt={product.name} className="max-w-full lg:max-w-[80%]"/>
                  <span className="px-2 py-1 bg-[#d91023] text-[#FFFFFF] rounded-lg absolute bottom-0 left-2 text-[13px]">
                    Save ${(product.listPrice - product.offerPrice).toLocaleString('en-us',{minimumFractionDigits:2, maximumFractionDigits:2})}
                  </span>
                </div>
                <div className="py-3 px-2 xl:py-4 xl:px-3">
                  <h3 className="text-[15px] h-[67.5px] overflow-hidden line-clamp-3 lg:line-clamp-2 lg:h-auto">{product.name}</h3>
                  <div className="flex flex-col text-[12px] font-medium mt-1 mb-2">
                    <span className="text-[#949494]">{product.brand}</span>
                    <span className="text-[#d91023]">Part Number: {product.partNumber}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[14px] text-[#949494] font-normal">
                      <span className="text-[16px] text-[#e20904] font-bold">${product.offerPrice.toLocaleString('en-us',{minimumFractionDigits:2, maximumFractionDigits:2})}</span> <span className="text-[16px] text-[#6e6464]">(Inc. GST)</span> <br />
                      WAS: <span className="line-through">${product.listPrice.toLocaleString('en-us',{minimumFractionDigits:2, maximumFractionDigits:2})}</span>
                    </p>
                  </div>
                  <button className="w-full rounded-xl px-3 py-2 mt-2 bg-[#d91023] text-[#FFFFFF] flex items-center justify-center hover:bg-red-700">
                    <CartIconButton/>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))
          }
          <div className="col-span-1 flex flex-col items-center min-w-52 lg:min-w-0 cursor-pointer py-3 px-2 xl:py-4 xl:px-3 justify-between">
            <img src={mockProducts[0].image} alt={mockProducts[0].nameCategory} className="object-contain lg:max-w-[70%]" />
            <button className="w-full rounded-xl px-3 py-2 mt-2 bg-[#d91023] text-[#FFFFFF] flex items-center justify-center">See All</button>
          </div>
        </div>
      </div>
    </section>
  )
}
