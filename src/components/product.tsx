import { Link } from "react-router-dom"
import {
  Check,
  Star,
  ShoppingCart,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const features = [
  "Professional-grade restoration formula",
  "UV protective coating included",
  "Works on all headlight types",
  "Complete application kit included",
  "Easy 5-minute application",
  "Lasts up to 3 years",
]

export function Product() {
  return (
    <section
      id="product"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-white py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-20 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600">
            Best-selling restoration kit
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            Our Best-Selling Kit
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            Everything you need to restore faded headlights and give your car a
            cleaner, sharper, more professional look.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-zinc-100 p-6 pt-24 sm:min-h-[420px] sm:p-8 sm:pt-8 lg:p-10">
                <div className="absolute left-4 top-6 sm:left-8 sm:top-8">
                  <Badge className="rounded-full bg-zinc-950 px-3 py-1 text-xs text-white hover:bg-zinc-950 sm:px-4 sm:py-1.5 sm:text-sm">
                    Most Popular
                  </Badge>
                </div>

                <div className="absolute right-4 top-6 sm:right-8 sm:top-8">
                  <Badge className="rounded-full bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-600 sm:px-4 sm:py-1.5 sm:text-sm">
                    Limited-Time Offer
                  </Badge>
                </div>

                <div className="absolute h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

                <Link to="/product-details" className="relative">
                  <motion.img
                    src="/small-kit.png"
                    alt="Newer Lights Restoration Kit"
                    className="mx-auto h-[260px] w-[260px] rounded-3xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-[1.03] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  />
                </Link>
              </div>

              <div className="p-8 lg:p-10">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-zinc-700">
                    4.9/5 rating
                  </span>
                  <span className="text-sm text-zinc-500">(2,847 reviews)</span>
                </div>

                <Link to="/product-details">
                  <h3 className="text-3xl font-extrabold leading-tight text-zinc-900">
                    Newer Lights Restoration Kit
                  </h3>
                </Link>

                <p className="mt-4 text-base leading-7 text-zinc-600">
                  Restore cloudy, yellowed headlights with a professional-grade
                  kit designed to improve clarity, enhance appearance, and help
                  protect against future oxidation.
                </p>

                <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/60 p-5">
                  <div className="flex flex-wrap items-end gap-3">
                    <span className="text-5xl font-black tracking-tight text-zinc-950">
                      $42.99
                    </span>
                    <span className="pb-1 text-xl text-zinc-400 line-through">
                      $79.99
                    </span>
                    <Badge className="rounded-full bg-red-600 px-3 py-1 text-white hover:bg-red-600">
                      46% OFF
                    </Badge>
                  </div>

                  <p className="mt-2 text-sm font-medium text-red-600">
                    Save $37 today
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-zinc-700"
                    >
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 h-14 w-full rounded-full bg-red-600 text-base font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
                >
                  <Link to="/product-details">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    View Product Details
                  </Link>
                </Button>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm text-zinc-700">
                    <Truck className="h-4 w-4 text-red-600" />
                    Fast shipping
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm text-zinc-700">
                    <ShieldCheck className="h-4 w-4 text-red-600" />
                    Secure checkout
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm text-zinc-700">
                    <BadgeDollarSign className="h-4 w-4 text-red-600" />
                    Great value
                  </div>
                </div>

                <p className="mt-5 text-center text-sm text-zinc-500">
                  Free shipping on orders over $50
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}