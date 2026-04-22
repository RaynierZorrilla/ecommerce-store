import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Sparkles, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  {
    value: "15+",
    label: "Years Experience",
    icon: Award,
  },
  {
    value: "500K+",
    label: "Kits Sold",
    icon: Users,
  },
  {
    value: "4.9",
    label: "Average Rating",
    icon: Sparkles,
  },
  {
    value: "98%",
    label: "Satisfaction",
    icon: ShieldCheck,
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-white py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <Badge className="mb-6 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50">
            Our Story
          </Badge>

          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            Trusted by Professionals Since 2009
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-zinc-600 md:text-xl">
            What started as a solution for our own detailing business has grown
            into one of the most trusted names in headlight restoration. Our
            professional-grade formula is used by luxury dealerships, detailers,
            and drivers who want cleaner, clearer, longer-lasting results.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-[28px] border border-zinc-200 bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-[0_20px_60px_rgba(255,0,0,0.08)]"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <stat.icon className="h-6 w-6" />
                </div>

                <div className="text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
                  {stat.value}
                </div>

                <div className="mt-3 text-sm font-medium text-zinc-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 mx-auto max-w-3xl rounded-[28px] border border-zinc-200 bg-white/80 px-6 py-5 text-sm leading-7 text-zinc-600 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm md:text-base">
            Built from real-world detailing experience and refined over the years
            to deliver a premium restoration finish trusted by professionals and
            everyday drivers alike.
          </div>
        </div>
      </div>
    </section>
  )
}