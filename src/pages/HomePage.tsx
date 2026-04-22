import { About } from "@/components/about"
import { BeforeAfterCarousel } from "@/components/before-after-carousel"
import BrandCarousel from "@/components/BrandCarousel"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Product } from "@/components/product"
import { Testimonials } from "@/components/testimonials"

export function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BrandCarousel />
      <Features />
      <Product />
      <BeforeAfterCarousel />
      <Testimonials />
      <About />
      <Footer />
    </main>
  )
}
