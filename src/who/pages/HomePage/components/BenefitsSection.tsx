import { clientBenefits } from "../../../utils"

export const BenefitsSection = () => {
  return (
    <section className="benefits-mobile bg-[#D91023] border-y-2 border-[#FFFFFF]">
      <div className="grid grid-cols-2 px-5 py-4 gap-4 lg:container lg:mx-auto lg:grid-cols-4">
        {
          clientBenefits.map((benefit,index) => (
            <div className="text-[#FFFFFF] col-span-1 flex flex-col items-center gap-y-2 lg:gap-x-3 xl:gap-x-8 lg:flex-row" key={index}>
              <img src={benefit.image} alt={benefit.title} />
              <div className="flex flex-col gap-y-2 lg:gap-y-0">
                <h3 className="text-[12px] text-center font-semibold xl:text-[14px] lg:text-start">{benefit.title}</h3>
                <p className="text-[12px] text-center font-light xl:text-[14px] lg:text-start">{benefit.subtitle}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
