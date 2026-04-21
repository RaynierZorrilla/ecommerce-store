import { Zap, Shield, Droplets, Sun } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Quick Application",
    description: "Apply in just 5 minutes with our easy-to-use formula. No special tools required.",
  },
  {
    icon: Shield,
    title: "Long-Lasting Protection",
    description: "Our UV-resistant coating protects your headlights for years, not months.",
  },
  {
    icon: Droplets,
    title: "Professional Formula",
    description: "The same formula trusted by luxury dealerships worldwide since 2009.",
  },
  {
    icon: Sun,
    title: "Crystal Clear Results",
    description: "Remove yellowing, oxidation, and haziness for dramatically improved visibility.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Newer Lights?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our professional-grade restoration kit delivers dealership-quality results at a fraction of the cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
