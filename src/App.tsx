import { Route, Routes } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { ProductDetailsPage } from "@/pages/ProductDetailsPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
    </Routes>
  )
}
