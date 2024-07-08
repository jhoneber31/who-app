import { mockProducts } from "../../utils"
import { BenefitsSection, BlogSection, CarouselDesktop, CarouselMobile, OurPartners, ProductsByBrand, ProductsByCategory } from "./components"

export const HomePage = () => {

  const product = mockProducts;

  return (
    <div className="bg-white">
      <CarouselMobile/>
      <BenefitsSection/>
      <CarouselDesktop/>
      <ProductsByCategory {...product[0]} backgroundColor={"#1b1b1b"}/>
      <ProductsByCategory {...product[1]} backgroundColor={"#E5E5E5"}/>
      <ProductsByCategory {...product[2]} backgroundColor={"#1b1b1b"}/>
      <ProductsByBrand/>
      <OurPartners/>
      <BlogSection/>
    </div>
  )
}
