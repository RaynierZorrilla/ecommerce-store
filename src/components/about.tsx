import { Badge } from "@/components/ui/badge"

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500K+", label: "Kits Sold" },
  { value: "4.9", label: "Average Rating" },
  { value: "98%", label: "Satisfaction" },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Our Story
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Trusted by Professionals Since 2009</h2>

          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            What started as a solution for our own detailing business has grown into the most trusted headlight
            restoration brand in the industry. Our formula is the same one used by luxury dealerships and
            professional detailers worldwide.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
