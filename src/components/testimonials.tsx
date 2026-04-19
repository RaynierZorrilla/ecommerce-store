import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Michael R.",
    role: "BMW Owner",
    content:
      "I was about to spend $800 on new headlights. This kit made them look brand new for a fraction of the price. Absolutely incredible results!",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Mercedes Owner",
    content:
      "The application was so easy, and the results speak for themselves. My headlights haven't looked this good since I bought the car.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Porsche Owner",
    content:
      "Professional quality at home. I've tried other products before, but nothing compares to Newer Lights. Highly recommended!",
    rating: 5,
  },
]

function LiquidGlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[1.75rem] p-px",
        "bg-gradient-to-br from-white/45 via-white/12 to-white/5",
        "shadow-[0_8px_40px_-12px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.35)]",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "relative h-full rounded-[1.7rem] px-6 py-7",
          "bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-150",
          "border border-white/[0.18]",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.7rem]",
          "before:bg-gradient-to-br before:from-white/25 before:via-transparent before:to-transparent before:opacity-60",
        ].join(" ")}
      >
        <div className="relative z-[1]">{children}</div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative isolate min-h-[32rem] overflow-hidden py-20">
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
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/55 via-black/45 to-black/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(255,255,255,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white drop-shadow-sm md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-white/85 drop-shadow-sm">
            Join thousands of satisfied customers who have restored their headlights with our kit.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <LiquidGlassCard key={index}>
              <Quote className="mb-4 h-8 w-8 text-white/35" strokeWidth={1.25} />

              <div className="mb-4 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400/90 text-amber-300/90" />
                ))}
              </div>

              <p className="mb-6 text-pretty text-[15px] leading-relaxed text-white/92">{testimonial.content}</p>

              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.role}</p>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
