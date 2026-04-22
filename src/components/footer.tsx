import { Instagram, Facebook, Music2, ArrowRight } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/newerlights/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/newerlightsllc/", label: "Facebook" },
  { icon: Music2, href: "https://www.tiktok.com/@newerlightkits6", label: "TikTok" },
]

const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "Products", href: "#product" },
      { label: "Reviews", href: "#testimonials" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 md:hidden"
        style={{ backgroundImage: "url('/red-car.jpg')" }}
        aria-hidden
      />

      <video
        className="absolute inset-0 hidden h-full w-full object-cover opacity-40 md:block"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src="/mp4/sr-car.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%)]"
        aria-hidden
      />

      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-16">
          <div className="mb-14 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                  Ready to upgrade your headlights?
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  Give your car a cleaner, brighter, more premium look.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                  Shop the restoration kit trusted by professionals and drivers who want real results.
                </p>
              </div>

              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
              >
                Get My Kit
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:text-left">
              <img
                src="/newerlights-icon.png"
                alt="Newer Lights"
                className="h-20 w-auto object-contain"
              />

              <p className="mt-5 max-w-md text-base leading-8 text-white/70">
                Professional-grade headlight restoration trusted by drivers, detailers, and dealerships since 2009.
              </p>

              <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-full grid grid-cols-3 gap-x-3 gap-y-0 sm:gap-x-5 md:contents">
              {footerLinks.map((section) => (
                <div key={section.title} className="min-w-0 text-center md:text-left">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white sm:mb-4">
                    {section.title}
                  </h3>

                  <ul className="space-y-2 sm:space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-xs leading-snug text-white/70 transition hover:text-white sm:text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/55">
              © {currentYear} Newerlights LLC. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/55">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}