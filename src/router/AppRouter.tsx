import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../who/pages/HomePage/HomePage"
import { FreeDeliveryPolicy } from "../who/pages/FreeDeliveryPolicy/FreeDeliveryPolicy"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/freedelivery" element={<FreeDeliveryPolicy/>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
