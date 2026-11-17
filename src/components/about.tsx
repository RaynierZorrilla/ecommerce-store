import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Sparkles, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  {
    value: "15+",
    label: "Años de experiencia",
    icon: Award,
  },
  {
    value: "500K+",
    label: "Kits vendidos",
    icon: Users,
  },
  {
    value: "4.9",
    label: "Valoración promedio",
    icon: Sparkles,
  },
  {
    value: "98%",
    label: "Satisfacción",
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
            Nuestra historia
          </Badge>

          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            La confianza de los profesionales desde 2009
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-zinc-600 md:text-xl">
            Lo que comenzó como una solución para nuestro propio negocio de estética automotriz se ha convertido en una de las marcas de mayor confianza en restauración de faros. Nuestra fórmula profesional es utilizada por concesionarios de lujo, especialistas y conductores que buscan resultados más limpios, transparentes y duraderos.
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
            Creada a partir de nuestra experiencia en estética automotriz y perfeccionada con los años para ofrecer un acabado de alta calidad en el que confían tanto profesionales como conductores.
          </div>
        </div>
      </div>
    </section>
  )
}