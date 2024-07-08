import { BenefitsSection, CarouselDesktop, CarouselMobile } from "./components"

export const HomePage = () => {
  return (
    <div className="bg-white h-[100vh]">
      <CarouselMobile/>
      <BenefitsSection/>
      <CarouselDesktop/>
    </div>
  )
}
