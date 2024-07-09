
export const ProductsByBrand = () => {
  return (
    <section className="ProductsByBrand bg-[#E5E5E5]">
      <div className="container mx-auto px-5 py-10">
        <h3 className="text-[#484848] text-[20px] lg:text-[30px] font-bold mb-8 xl:mb-10 text-center">
          SHOP WELDING HELMETS BY MOST POPULAR WELDING HELMET BRANDS
        </h3>
        <div className="flex gap-x-6 lg:gap-x-12 lg:justify-center overflow-x-scroll lg:overflow-x-auto">
          <div className="flex flex-col cursor-pointer">
            <img src="https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/3mspeedglas_collection_image-WFLJCTKL.avif"  alt="3M Speedglas Welding Helmets" className="max-w-72 rounded-t-lg" />
            <div className="bg-[#d91023] py-4 px-4 rounded-b-lg">
              <span className="block text-center text-[#FFFFFF]">3M Speedglas Welding Helmets</span>
            </div>
          </div>
          <div className="flex flex-col cursor-pointer">
            <img src="https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/clearwelding-welding-helmets-YPKNG6VV.webp"  alt="Tecmen Welding Helmets" className="max-w-72 rounded-t-lg" />
            <div className="bg-[#d91023] py-4 px-4 rounded-b-lg">
              <span className="block text-center text-[#FFFFFF]">Tecmen Welding Helmets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
