import { Zap, Shield, Droplets, Sun } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Accent = "amber" | "sky" | "violet" | "emerald"

const features: {
  icon: typeof Zap
  title: string
  description: string
  accent: Accent
  tag: string
}[] = [
  {
    icon: Zap,
    title: "Quick Application",
    description: "Apply in just 5 minutes with our easy-to-use formula. No special tools required.",
    accent: "amber",
    tag: "5 min",
  },
  {
    icon: Shield,
    title: "Long-Lasting Protection",
    description: "Our UV-resistant coating protects your headlights for years, not months.",
    accent: "sky",
    tag: "UV shield",
  },
  {
    icon: Droplets,
    title: "Professional Formula",
    description: "The same formula trusted by luxury dealerships worldwide since 2009.",
    accent: "violet",
    tag: "Pro grade",
  },
  {
    icon: Sun,
    title: "Crystal Clear Results",
    description: "Remove yellowing, oxidation, and haziness for dramatically improved visibility.",
    accent: "emerald",
    tag: "Clarity",
  },
]

const accentMap: Record<
  Accent,
  { blob: string; iconBg: string; iconRing: string; iconColor: string; topLine: string; tagBorder: string }
> = {
  amber: {
    blob: "bg-amber-500/25 blur-3xl",
    iconBg: "bg-gradient-to-br from-amber-400/35 to-orange-600/15",
    iconRing: "ring-amber-400/35",
    iconColor: "text-amber-100",
    topLine: "from-transparent via-amber-400/80 to-transparent",
    tagBorder: "border-amber-400/25 text-amber-100/90",
  },
  sky: {
    blob: "bg-sky-500/25 blur-3xl",
    iconBg: "bg-gradient-to-br from-sky-400/35 to-blue-700/15",
    iconRing: "ring-sky-400/35",
    iconColor: "text-sky-100",
    topLine: "from-transparent via-sky-400/80 to-transparent",
    tagBorder: "border-sky-400/25 text-sky-100/90",
  },
  violet: {
    blob: "bg-violet-500/25 blur-3xl",
    iconBg: "bg-gradient-to-br from-violet-400/35 to-fuchsia-800/15",
    iconRing: "ring-violet-400/35",
    iconColor: "text-violet-100",
    topLine: "from-transparent via-violet-400/80 to-transparent",
    tagBorder: "border-violet-400/25 text-violet-100/90",
  },
  emerald: {
    blob: "bg-emerald-500/20 blur-3xl",
    iconBg: "bg-gradient-to-br from-emerald-400/35 to-teal-800/15",
    iconRing: "ring-emerald-400/35",
    iconColor: "text-emerald-100",
    topLine: "from-transparent via-emerald-400/80 to-transparent",
    tagBorder: "border-emerald-400/25 text-emerald-100/90",
  },
}

export function Features() {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden bg-zinc-950 py-24 text-zinc-100 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_50%,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[28rem] w-[70%] rounded-full bg-amber-500/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[22rem] w-[60%] rounded-full bg-sky-500/10 blur-[90px]"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-5 border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90"
          >
            Why drivers choose us
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            <span className="text-white">Why </span>
            <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-yellow-200 bg-clip-text text-transparent">
              Newer Lights
            </span>
            <span className="text-white">?</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-zinc-400 md:text-lg">
            Our professional-grade restoration kit delivers dealership-quality results at a fraction of the cost — with
            a finish you have to see to believe.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, index) => {
            const a = accentMap[feature.accent]
            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-xl shadow-black/30 backdrop-blur-sm",
                  "transition duration-300 ease-out will-change-transform",
                  "hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/50",
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    a.blob,
                  )}
                  aria-hidden
                />

                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    a.topLine,
                  )}
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div
                    className={cn(
                      "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 ring-inset",
                      a.iconBg,
                      a.iconRing,
                    )}
                  >
                    <feature.icon className={cn("relative z-[1] h-7 w-7", a.iconColor)} strokeWidth={1.75} />
                  </div>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                      a.tagBorder,
                    )}
                  >
                    {feature.tag}
                  </span>
                </div>

                <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-white md:text-xl">
                  {feature.title}
                </h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
                  {feature.description}
                </p>

                <span
                  className="relative mt-6 font-mono text-[10px] text-zinc-600 transition-colors group-hover:text-zinc-500"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
