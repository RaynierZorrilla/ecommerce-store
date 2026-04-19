import { Instagram, Facebook, Music2 } from "lucide-react"

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
  return (
    <footer className="relative border-t border-white/20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/red-car.jpg')" }}
        aria-hidden
      />
      <video
        className="absolute inset-0 z-0 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src="/mp4/sr-car.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/80" aria-hidden />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <img src="/newerlights-icon.png" alt="Newer Lights" className="w-40 h-40 object-contain" />

            <p className="text-white/80 mb-6 max-w-md text-pretty">
              At Newerlights Headlights Restoration, we are dedicated to enhancing your driving experience by ensuring
              crystal-clear visibility on the road. With a passion for automotive safety and a commitment to
              excellence, we&apos;ve established ourselves as a leading provider of headlight restoration services.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-full grid grid-cols-3 gap-x-3 gap-y-0 sm:gap-x-5 md:contents">
            {footerLinks.map((section, index) => (
              <div key={index} className="min-w-0 text-center md:text-left">
                <h3 className="font-semibold text-white mb-3 text-sm sm:text-base md:mb-4">{section.title}</h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors text-xs leading-snug sm:text-sm"
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

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-white/80">© 2023 Newerlights LLC All rights reserved.</p>

          <div className="flex items-center gap-6 text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
