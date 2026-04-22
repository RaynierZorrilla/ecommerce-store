import { Sparkles, ShieldCheck, Clock3, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-24 md:pt-28">
      <video
        className="absolute inset-0 h-full w-full md:w-full mx-auto object-contain md:object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/mp4/car-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.10),transparent_40%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/75" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Badge className="mb-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/10">
            <Sparkles className="mr-2 h-4 w-4" />
            Trusted Since 2009
          </Badge>

          <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            Restore Your Headlights
            <span className="mt-2 block text-transparent [-webkit-text-stroke:1.5px_white]">
              Like New in 5 Minutes
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80 md:text-2xl md:leading-10">
            Professional-grade headlight restoration kit trusted by drivers,
            detailers, and dealerships. Get crystal-clear headlights without
            expensive replacements.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="h-14 rounded-full bg-red-600 px-8 text-base font-semibold text-white shadow-[0_12px_30px_rgba(255,0,0,0.25)] hover:bg-red-700 md:h-16 md:px-10 md:text-lg"
            >
              <a href="#product" className="inline-flex items-center gap-2">
                Get Your Kit Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 rounded-full border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white md:h-16 md:px-10 md:text-lg"
            >
              <a href="#features">Learn More</a>
            </Button>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 md:gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-red-400" />
              <span>30-Day Guarantee</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
              <Clock3 className="h-4 w-4 text-red-400" />
              <span>5-Minute Application</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-red-400" />
              <span>Professional Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}