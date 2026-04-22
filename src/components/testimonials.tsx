import { Star, Quote, BadgeCheck } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    image: "/testimonial01.webp",
    name: "Brandon",
    quote:
      "Absolutely outstanding service. The Newer Lights Kit brought a new life to my foggy headlights and made my car look much better.",
  },
  {
    image: "/testimonial02.webp",
    name: "Balbir Cure",
    quote:
      "Newer Lights Kits transformed our headlight restoration services, saved time, and helped us deliver better-looking results to customers.",
  },
  {
    image: "/testimonial03.webp",
    name: "Fidel",
    quote:
      "A real game-changer. My headlights look brighter, cleaner, and I feel much more confident driving at night.",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden py-24"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src="/mp4/car-clean.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/65 to-black/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
            Trusted by real customers
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/75">
            Real feedback from customers who restored their headlights and upgraded
            the look of their vehicles.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm transition duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900">
                  <BadgeCheck className="h-4 w-4 text-red-600" />
                  Verified customer
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-zinc-500">Verified buyer</p>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-3 text-red-600">
                  <Quote className="h-6 w-6" />
                </div>

                <p className="text-sm leading-7 text-zinc-600">
                  {testimonial.quote}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}