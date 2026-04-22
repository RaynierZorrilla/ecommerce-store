import { useEffect, useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#features", label: "Benefits" },
    { href: "#product", label: "Product" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#about", label: "About" },
  ]

  return (
    <>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "top-8 border-b border-black/5 bg-white/88 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "top-8 bg-white/75 backdrop-blur-md"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-18 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/newerlights-icon.png"
                alt="Newer Lights"
                className="h-10 w-auto object-contain md:h-11"
              />
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-zinc-950"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Button
                asChild
                className="rounded-full bg-red-600 px-5 text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
              >
                <a href="#product" className="inline-flex items-center gap-2">
                  Get My Kit
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition hover:bg-zinc-50 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="pb-4 md:hidden">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}

                  <Button
                    asChild
                    className="mt-3 rounded-full bg-red-600 text-white hover:bg-red-700"
                  >
                    <a href="#product" onClick={() => setIsMenuOpen(false)}>
                      Get My Kit
                    </a>
                  </Button>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}