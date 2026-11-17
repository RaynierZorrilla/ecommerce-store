import { Link } from "react-router-dom"

export default function NewerLightsPremiumRedesign() {
  const benefits = [
    {
      title: "Conduce con más seguridad de noche",
      text: "Ve más lejos y reacciona más rápido con un haz de luz más brillante y amplio, diseñado para la conducción diaria.",
      icon: "👀",
    },
    {
      title: "Instalación fácil: conecta y listo",
      text: "Sin configuraciones complicadas. Renueva tus luces en minutos con un acabado limpio y moderno.",
      icon: "⚡",
    },
    {
      title: "Diseñadas para la lluvia y las carreteras oscuras",
      text: "Mejora la visibilidad con poca luz para que conduzcas con más confianza.",
      icon: "🌧️",
    },
    {
      title: "Estilo de primera, rendimiento real",
      text: "Dale a tu vehículo una apariencia más definida y mejora la visibilidad nocturna.",
      icon: "🚗",
    },
  ]

  const stats = [
    { label: "Conductores que renovaron sus luces", value: "1,200+" },
    { label: "Tiempo promedio de instalación", value: "15 min" },
    { label: "Satisfacción del cliente", value: "4.9/5" },
  ]

  const reviews = [
    {
      name: "Michael R.",
      text: "Una diferencia enorme en carreteras oscuras. El vehículo luce mejor y la visibilidad es de otro nivel.",
    },
    {
      name: "Daniel T.",
      text: "La instalación fue más fácil de lo esperado. El sitio lo explicó claramente y el producto se siente de gran calidad.",
    },
    {
      name: "Chris M.",
      text: "Debió ser mi primera mejora. Ahora me siento mucho más seguro al conducir de noche.",
    },
  ]

  const faqs = [
    {
      q: "¿Son compatibles con mi vehículo?",
      a: "Añade una herramienta o un aviso de compatibilidad cerca del botón de compra para que los clientes sepan qué funciona con su modelo.",
    },
    {
      q: "¿Es difícil instalarlas?",
      a: "Para nada. La mayoría de los clientes pueden instalarlas rápidamente: solo hay que conectarlas.",
    },
    {
      q: "¿Qué pasa si no estoy satisfecho?",
      a: "Añade una sección de garantía de devolución del dinero para resolver dudas y generar confianza.",
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 text-center text-sm font-medium text-white/90">
          Envío gratis hoy • Garantía de 30 días • Pago seguro
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24 lg:gap-16">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Luces LED de alta calidad para conducir más seguro de noche
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Deja de conducir a ciegas de noche.
              <span className="block text-white/70">Disfruta de una visión más clara y luminosa.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Dale a tu vehículo un estilo más definido y un haz de luz más potente con una mejora de iluminación diseñada para ofrecer visibilidad, confianza y una experiencia de conducción superior.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/product-details"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-black shadow-2xl transition hover:-translate-y-0.5"
              >
                Renovar mis luces
              </Link>
              <Link
                to="/product-details"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Ver la diferencia
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/65">
              <span>✔ Conecta y listo</span>
              <span>✔ Envío rápido</span>
              <span>✔ Pago seguro</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative flex h-full items-end overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                  alt="Vehículo de lujo con luces renovadas"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="relative z-10 w-full p-6 md:p-8">
                  <div className="grid gap-3 rounded-3xl border border-white/10 bg-black/45 p-4 backdrop-blur md:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">Antes</p>
                      <p className="mt-1 text-lg font-semibold text-white/70">Poca visibilidad</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">Después</p>
                      <p className="mt-1 text-lg font-semibold">Una vista de la carretera más clara y luminosa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl font-semibold md:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm text-white/65">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">Por qué nos eligen</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Diseñadas para mejorar tanto la confianza como la iluminación.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-4 md:grid-cols-2 md:px-6 md:py-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">Comparación</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Por qué tus luces actuales se han quedado atrás</h2>
          <div className="mt-8 grid gap-4">
            {[
              ["Luces de fábrica o desgastadas", "Menor iluminación en carreteras oscuras"],
              ["Poca visibilidad con mal tiempo", "Menos confianza al conducir"],
              ["Apariencia anticuada", "El vehículo luce menos moderno"],
              ["Más dificultad para distinguir los detalles de la carretera", "Mayor tiempo de reacción"],
            ].map(([left, right]) => (
              <div key={left} className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 p-4">
                <div className="text-white/55">{left}</div>
                <div className="font-medium">{right}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">Oferta</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Haz que la oferta sea irresistible</h2>
          <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6">
            <div className="flex items-end gap-3">
              <span className="text-4xl font-semibold">$89</span>
              <span className="pb-1 text-lg text-white/40 line-through">$129</span>
            </div>
            <p className="mt-3 text-white/65">Solo hoy: envío gratis + garantía de 30 días.</p>
            <Link
              to="/product-details"
              className="mt-6 flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:-translate-y-0.5"
            >
              Aprovechar esta oferta
            </Link>
            <div className="mt-4 text-center text-sm text-white/45">Aquí va el mensaje de existencias limitadas</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">Opiniones de clientes</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">La confianza real impulsa la compra.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-lg">★★★★★</div>
              <p className="mt-4 text-sm leading-6 text-white/70">“{review.text}”</p>
              <p className="mt-5 font-medium">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">Preguntas frecuentes</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Resolvemos tus dudas.</h2>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Las respuestas claras facilitan la decisión antes de pagar.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-black/25 p-6">
                <h3 className="text-lg font-semibold leading-snug">{faq.q}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-neutral-950 to-black">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">¿Listo para conducir más seguro de noche?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/65 md:text-lg">
            Mejora tu haz de luz, renueva tu estilo y conduce con más confianza al anochecer.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/product-details"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black shadow-2xl transition hover:-translate-y-0.5 sm:w-auto"
            >
              Renovar mis luces
            </Link>
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Volver a la tienda
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
