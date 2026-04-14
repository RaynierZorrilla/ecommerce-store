import { Route, Routes } from "react-router-dom"
import { CartDropdown } from "@/components/CartDropdown"
import { CartPage } from "@/pages/CartPage"
import { CheckoutPage } from "@/pages/CheckoutPage"
import { HomePage } from "@/pages/HomePage"
import { ProductDetailsPage } from "@/pages/ProductDetailsPage"

export default function App() {
  return (
    <>
      <CartDropdown />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  )
}
