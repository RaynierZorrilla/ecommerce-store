import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const carouselImages = [
  "/beforeandafter01.webp",
  "/beforeandafter02.webp",
  "/beforeandafter03.webp",
]

const AUTO_PLAY_INTERVAL_MS = 4500

export function BeforeAfterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, AUTO_PLAY_INTERVAL_MS)

    return () => window.clearInterval(intervalId)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  return (
    <section
      id="before-after"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-white py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-44 w-44 rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600">
            <Sparkles className="h-4 w-4" />
            Real customer results
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            See the Difference Instantly
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
            Restore cloudy, yellowed headlights into a cleaner, sharper finish that makes your car
            look newer and helps improve night-time visibility.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.10)]">
            <div className="grid items-center gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative p-4 md:p-6">
                <div className="relative overflow-hidden rounded-[24px] bg-zinc-100">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={carouselImages[currentIndex]}
                      src={carouselImages[currentIndex]}
                      alt={`Before and after result ${currentIndex + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.01 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />
                  </AnimatePresence>

                  <div className="pointer-events-none absolute inset-x-0 top-4 flex items-center justify-between px-4">
                    <span className="rounded-full bg-black/75 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                      Before
                    </span>
                    <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
                      After
                    </span>
                  </div>

                  <div className="absolute inset-y-0 left-4 flex items-center">
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      className="h-11 w-11 rounded-full border border-white/50 bg-white/85 shadow-md backdrop-blur hover:bg-white"
                      onClick={goToPrevious}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="absolute inset-y-0 right-4 flex items-center">
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      className="h-11 w-11 rounded-full border border-white/50 bg-white/85 shadow-md backdrop-blur hover:bg-white"
                      onClick={goToNext}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          currentIndex === index ? "w-8 bg-red-600" : "w-2.5 bg-white/80"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
                  {carouselImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`overflow-hidden rounded-2xl border-2 transition-all ${
                        currentIndex === index
                          ? "border-red-500 shadow-lg shadow-red-500/20"
                          : "border-transparent opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="h-16 w-24 object-cover md:h-20 md:w-28"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex h-full flex-col justify-center border-t border-zinc-200 p-6 lg:border-l lg:border-t-0 lg:p-10">
                <div className="max-w-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                    Professional restoration
                  </p>

                  <h3 className="mt-3 text-3xl font-bold leading-tight text-zinc-900">
                    Turn dull headlights into a cleaner, brighter finish
                  </h3>

                  <p className="mt-4 text-base leading-7 text-zinc-600">
                    Our restoration kit helps remove oxidation and haze so your headlights look
                    clearer, more polished, and more presentable.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                      <div className="rounded-full bg-red-100 p-2 text-red-600">
                        <Eye className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900">Improved clarity</h4>
                        <p className="text-sm text-zinc-600">
                          Cleaner lenses help your vehicle look more cared for and visible.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                      <div className="rounded-full bg-red-100 p-2 text-red-600">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900">Like-new appearance</h4>
                        <p className="text-sm text-zinc-600">
                          A sharper finish instantly upgrades the front look of the car.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                      <div className="rounded-full bg-red-100 p-2 text-red-600">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900">Trusted results</h4>
                        <p className="text-sm text-zinc-600">
                          Real transformations that help build confidence before purchase.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="/product-details"
                      className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
                    >
                      Get Your Kit Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}