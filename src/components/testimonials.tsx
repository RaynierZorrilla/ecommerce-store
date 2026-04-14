import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Michael R.",
    role: "BMW Owner",
    content:
      "I was about to spend $800 on new headlights. This kit made them look brand new for a fraction of the price. Absolutely incredible results!",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Mercedes Owner",
    content:
      "The application was so easy, and the results speak for themselves. My headlights haven&apos;t looked this good since I bought the car.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Porsche Owner",
    content:
      "Professional quality at home. I&apos;ve tried other products before, but nothing compares to Newer Lights. Highly recommended!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-white/85 max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied customers who have restored their headlights with our kit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-foreground mb-6 text-pretty">{testimonial.content}</p>

                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
