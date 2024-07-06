import { Route, Routes } from "react-router-dom"
import { HomePage } from "../who/pages/HomePage/HomePage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  )
}
