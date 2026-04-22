import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  ShoppingCart,
  Star,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  CheckCircle2,
} from "lucide-react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

const steps = [
  {
    title: "Apply Nano Cleaner",
    description: "Spray the Nano Cleaner generously over the headlight surface.",
    image: "/step-1.webp",
  },
  {
    title: "Scrub with Steel Wool",
    description: "Scrub thoroughly to remove oxidation, dirt, and surface buildup.",
    image: "/step-2.webp",
  },
  {
    title: "Wipe Surface Clean",
    description: "Use a clean cloth to wipe away residue before coating.",
    image: "/step-3.webp",
  },
  {
    title: "Add Nano Coat",
    description: "Dispense about six squirts of Nano Coat onto the sponge brush.",
    image: "/step-4.webp",
  },
  {
    title: "Apply with Pressure",
    description: "Use firm pressure to spread the coating smoothly across the headlight.",
    image: "/step-5.webp",
  },
  {
    title: "Coat in Horizontal Passes",
    description: "Apply in continuous horizontal motions until evenly coated.",
    image: "/step-6.webp",
  },
]

const quickBenefits = [
  "Works on up to 4 cars",
  "Easy 5-minute application",
  "No sanding machine required",
  "Professional-grade finish",
]

export function ProductDetailsPage() {
  const [showMore, setShowMore] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: "small-kit-4-cars",
      name: "Small kit - 4 cars",
      price: 42.99,
      image: "/small-kit.png",
    })

    toast.success("Item added to cart", {
      description: "Small kit - 4 cars",
    })
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-zinc-100 p-6 pt-24 sm:min-h-[420px] sm:p-8 sm:pt-8 md:p-12">
                <div className="absolute h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
                <div className="absolute left-4 top-6 sm:left-6 sm:top-6">
                  <Badge className="rounded-full bg-zinc-950 px-3 py-1 text-xs text-white hover:bg-zinc-950 sm:px-4 sm:py-1.5 sm:text-sm">
                    Best Seller
                  </Badge>
                </div>
                <div className="absolute right-4 top-6 sm:right-6 sm:top-6">
                  <Badge className="rounded-full bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-600 sm:px-4 sm:py-1.5 sm:text-sm">
                    4 Cars per Kit
                  </Badge>
                </div>

                <motion.img
                  src="/small-kit.png"
                  alt="Small kit - 4 cars"
                  className="relative w-full max-w-[350px] rounded-[28px] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.14)] sm:max-w-md md:max-w-lg"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                />
              </div>

              <div className="p-8 md:p-10 lg:p-12">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-zinc-700">4.9/5 rating</span>
                  <span className="text-sm text-zinc-500">(2,847 reviews)</span>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
                  Small kit - 4 cars
                </h1>

                <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600">
                  Complete headlight restoration kit with Nano Cleaner, Nano Coat,
                  sponge applicator, and steel wool cloth for a clearer, more
                  professional finish.
                </p>

                <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/60 p-5">
                  <div className="flex flex-wrap items-end gap-3">
                    <span className="text-5xl font-black tracking-tight text-zinc-950">
                      $42.99
                    </span>
                    <span className="pb-1 text-lg text-zinc-500">
                      (Actual price $39.99 + $3 shipping)
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-red-600">
                    Professional-grade restoration at a fraction of detailing shop cost
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {quickBenefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-14 rounded-full bg-red-600 px-8 text-base font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-700"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>

                  <a
                    href="#instructions"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-zinc-200 px-8 text-base font-semibold text-zinc-800 transition hover:bg-zinc-50"
                  >
                    View Instructions
                  </a>
                </div>

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

                <div className="mt-8 rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
                  <p className="text-sm leading-7 text-zinc-600">
                    Introducing the Newer Lights Small Headlight Restoration Kit —
                    your key to achieving professional-grade clarity from the comfort
                    of your garage. This kit includes everything you need to restore
                    faded headlights and improve the appearance of your vehicle.
                  </p>

                  <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                    <p className="font-semibold text-zinc-900">What&apos;s Inside:</p>
                    <p>
                      <span className="font-semibold text-zinc-900">Brush:</span> Designed for
                      easy, precise application.
                    </p>
                    <p>
                      <span className="font-semibold text-zinc-900">Nano Coat (2oz):</span> Adds
                      protection and a crystal-clear finish.
                    </p>

                    {showMore && (
                      <>
                        <p>
                          <span className="font-semibold text-zinc-900">Cleaner (4oz):</span>{" "}
                          Helps remove grime, oxidation, and haze.
                        </p>
                        <p>
                          <span className="font-semibold text-zinc-900">Steel Wool:</span> Helps
                          smooth the surface and remove stubborn buildup.
                        </p>
                        <p className="font-semibold text-zinc-900">Why it stands out:</p>
                        <p>Trusted by detailers and used for professional-looking results.</p>
                        <p>Each kit can restore up to 4 vehicles.</p>
                        <p>No sanding machine or complicated process required.</p>
                      </>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowMore((prev) => !prev)}
                    className="mt-4 font-medium text-red-600 transition hover:underline"
                  >
                    {showMore ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section id="instructions" className="pt-16 md:pt-20">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                Instructions
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-zinc-600">
                Follow these six steps for a clean, even, professional-looking restoration.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="bg-zinc-100 p-3">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="aspect-[4/3] w-full rounded-[20px] object-cover object-center"
                    />
                  </div>

                  <div className="p-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                      Step {index + 1}
                    </p>
                    <h3 className="text-xl font-bold text-zinc-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}