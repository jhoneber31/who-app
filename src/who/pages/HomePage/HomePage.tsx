import { BenefitsSection, CarouselDesktop, CarouselMobile, CarouselProducts } from "./components"

export const HomePage = () => {
  return (
    <div className="bg-white">
      <CarouselMobile/>
      <BenefitsSection/>
      <CarouselDesktop/>
      <CarouselProducts/>
    </div>
  )
}
