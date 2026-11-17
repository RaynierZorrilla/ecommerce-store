import {
  Zap,
  ShieldCheck,
  Sparkles,
  Eye,
} from "lucide-react"

import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "Restaura en minutos",
    description:
      "Consigue faros mucho más transparentes con una aplicación rápida y sencilla.",
  },
  {
    icon: ShieldCheck,
    title: "Protección duradera",
    description:
      "La protección resistente a los rayos UV ayuda a prevenir el amarilleamiento y la oxidación.",
  },
  {
    icon: Sparkles,
    title: "Haz que tu vehículo luzca más nuevo",
    description:
      "Mejora al instante la apariencia de tu vehículo con un acabado más limpio.",
  },
  {
    icon: Eye,
    title: "Mejor visibilidad nocturna",
    description:
      "Unos faros más limpios ayudan a mejorar la claridad y la confianza al conducir de noche.",
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-zinc-50 to-white" />

      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600">
            Una solución de restauración confiable
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
            Por qué los conductores eligen Newer Lights
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Restaura los faros opacos con una solución profesional diseñada para mejorar la claridad, la apariencia y la protección a largo plazo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_20px_60px_rgba(255,0,0,0.08)]"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-red-500/5 blur-3xl transition-all duration-300 group-hover:bg-red-500/10" />

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <feature.icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-zinc-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-50 rounded-[32px] border border-zinc-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-4xl font-black text-zinc-900">5 min</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Aplicación rápida
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-black text-zinc-900">2009</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Fórmula de restauración confiable
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-black text-zinc-900">Protección UV</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Capa de protección duradera
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}