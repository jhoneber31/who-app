import { mockPartners } from "../../../utils"

export const OurPartners = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="container mx-auto px-5 py-10">
        <h3 className="text-[#484848] text-[20px] lg:text-[30px] font-bold mb-8 xl:mb-10 text-center">
          OUR PARTNERS
        </h3>
        <div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 max-w-[60rem] lg:gap-x-40 lg:gap-y-20 mx-auto">
            {
              mockPartners.map(partner => (
                <div className="col-span-1 flex justify-center" key={partner.id}>
                  <img src={partner.image} alt={partner.name} className="object-contain max-w-full h-full" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
