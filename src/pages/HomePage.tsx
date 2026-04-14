import { About } from "@/components/about"
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
      <Features />
      <Product />
      <Testimonials />
      <About />
      <Footer />
    </main>
  )
}
