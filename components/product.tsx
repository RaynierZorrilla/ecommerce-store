import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  "Professional-grade restoration formula",
  "UV protective coating included",
  "Works on all headlight types",
  "Complete application kit",
  "Easy 5-minute application",
  "Lasts up to 3 years",
]

export function Product() {
  return (
    <section id="product" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Best-Selling Kit
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to restore your headlights to like-new condition.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="relative bg-secondary/50 p-8 flex items-center justify-center min-h-[300px]">
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                  <div className="text-center">
                    <Image
                      src="/small-kit.png"
                      alt="Newer Lights Restoration Kit"
                      width={320}
                      height={320}
                      className="mx-auto rounded-2xl object-contain"
                      priority
                    />
                    <p className="mt-4 text-sm text-muted-foreground">Headlight Restoration Kit</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(2,847 reviews)</span>
                  </div>
                  
                  <Link href="/product-details">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Newer Lights Restoration Kit
                  </h3>
                  </Link>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-primary">$42.99</span>
                    <span className="text-lg text-muted-foreground line-through">$79.99</span>
                    <Badge variant="secondary" className="ml-2">46% OFF</Badge>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild size="lg" className="w-full text-lg py-6">
                    <Link href="/product-details">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      View Product Details
                    </Link>
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Free shipping on orders over $50
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
