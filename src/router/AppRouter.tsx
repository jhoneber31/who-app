import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../who/pages/HomePage/HomePage"
import { FreeDeliveryPolicy } from "../who/pages/FreeDeliveryPolicy/FreeDeliveryPolicy"
import { ProductPage } from "../who/pages/ProductPage/ProductPage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/freedelivery" element={<FreeDeliveryPolicy/>} />
      <Route path="/product/:id" element={<ProductPage/>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
