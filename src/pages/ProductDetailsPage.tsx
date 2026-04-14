import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/context/cart-context"
import { Footer } from "@/components/footer"

const steps = [
  {
    title: "Apply Nano Cleaner",
    description: "Applying the Spray Nano cleaning solution generously on the headlight surface.",
    image: "/step-1.webp",
  },
  {
    title: "Scrub with Steel Wool",
    description:
      "Utilize the steel wool cloth to scrub the headlight thoroughly, ensuring the removal of all dirt and bugs.",
    image: "/step-2.webp",
  },
  {
    title: "Wipe Surface Clean",
    description: "Wipe the headlight surface clean with a suitable cloth.",
    image: "/step-3.webp",
  },
  {
    title: "Add Nano Coat",
    description: "Dispense approximately six squirts of Nano Coat onto the middle of the sponge brush.",
    image: "/step-4.webp",
  },
  {
    title: "Apply with Pressure",
    description:
      "Hold the sponge brush with your index and middle fingers, applying pressure as you coat the headlight surface.",
    image: "/step-5.webp",
  },
  {
    title: "Coat in Horizontal Passes",
    description:
      "Start at either end of the top of the headlight, moving horizontally in one continuous motion. Repeat directly below until the entire headlight is evenly coated.",
    image: "/step-6.webp",
  },
]

export function ProductDetailsPage() {
  const [showMore, setShowMore] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: "small-kit-4-cars",
      name: "Small kit - 4 cars",
      price: 42.99,
      image: "/small-kit.png",
    })
    toast.success("Item added to cart", {
      description: "Small kit - 4 cars",
    })
  }

  return (
    <>
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Card className="overflow-hidden border-border mb-10">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              <div className="bg-secondary/40 p-6 md:p-10 flex items-center justify-center">
                <img
                  src="/small-kit.png"
                  alt="Small kit - 4 cars"
                  className="w-full max-w-md h-auto rounded-2xl object-contain"
                />
              </div>

              <div className="p-6 md:p-10">
                <Badge className="mb-4 bg-primary text-primary-foreground">Best Seller</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Small kit - 4 cars</h1>
                <p className="text-muted-foreground mb-6">
                  Complete headlight restoration kit with Nano Cleaner, Nano Coat, sponge applicator and steel wool
                  cloth.
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-primary">$42.99</span>
                  <span className="text-muted-foreground">(Actual price $39.99 + $3 shipping)</span>
                </div>

                <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart}>
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                </Button>

                <div className="space-y-3 text-sm text-muted-foreground mt-6">
                  <p>
                    Introducing the Newer Lights Small Headlight Restoration Kit - your key to achieving
                    professional-grade clarity from the comfort of your garage. This comprehensive kit comes complete
                    with everything you need to revitalize your headlights and transform your driving experience.
                  </p>
                  <p className="font-semibold text-foreground">What&apos;s Inside:</p>
                  <p>
                    <span className="font-semibold text-foreground">Brush:</span> Precision meets simplicity with our
                    specially designed brush, ensuring optimal application and efficient restoration.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Nano Coat (2oz):</span> Unleash the power of
                    nanotechnology to protect and enhance your headlights, providing a lasting, crystal-clear finish.
                  </p>

                  {showMore && (
                    <>
                      <p>
                        <span className="font-semibold text-foreground">Cleaner (4oz):</span> Our advanced cleaner is
                        formulated to tackle tough grime, oxidation, and haze, restoring your headlights to their
                        original brilliance.
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Steel Wool:</span> The perfect companion for
                        tackling stubborn blemishes and achieving a smooth, polished finish.
                      </p>
                      <p className="font-semibold text-foreground">Kit Benefits:</p>
                      <p>
                        <span className="font-semibold text-foreground">Professional-Grade Results:</span> Trusted by
                        high-end car dealerships and renowned brands, this kit brings that level of expertise directly
                        to you.
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Up to 4 Cars:</span> Each kit is designed to
                        go the extra mile, allowing you to restore the clarity of headlights for multiple vehicles.
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Easy 5-Minute Process:</span> No need for
                        sanding or buffing - our fast and efficient system ensures a hassle-free experience.
                      </p>
                      <p>
                        Upgrade your driving visibility with the Newer Lights Small Headlight Restoration Kit.
                        Rediscover the joy of clear, vibrant headlights that not only enhance the aesthetics of your
                        vehicle but also improve safety on the road. Unleash the power of clarity today!
                      </p>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowMore((prev) => !prev)}
                    className="text-blue-500 font-medium hover:underline"
                  >
                    {showMore ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Instructions</h2>
          <p className="text-muted-foreground mb-8">Follow these six steps for a clean and even restoration.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card key={step.title} className="border-border overflow-hidden">
                <div className="aspect-[4/3] bg-secondary/30 p-2">
                  <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
                </div>
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-primary mb-2">STEP {index + 1}</p>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
