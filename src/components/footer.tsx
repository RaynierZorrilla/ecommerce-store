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
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/newerlights-icon.png" alt="Newer Lights" className="w-24 h-24 object-contain" />
            </a>

            <p className="text-muted-foreground mb-6 max-w-sm text-pretty">
              At Newerlights Headlights Restoration, we are dedicated to enhancing your driving experience by ensuring
              crystal-clear visibility on the road. With a passion for automotive safety and a commitment to
              excellence, we&apos;ve established ourselves as a leading provider of headlight restoration services.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2023 Newerlights LLC All rights reserved.</p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
