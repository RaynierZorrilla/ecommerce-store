import { Link } from "react-router-dom"
import { ArrowLeft, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Footer } from "@/components/footer"

export function CartPage() {
  const { items, removeItem, clearCart, totalPrice } = useCart()

  return (
    <>
      <main className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-6">My cart</h1>

        {items.length === 0 ? (
          <div className="rounded-xl border border-border p-8">
            <p className="text-muted-foreground mb-4">You have no items in your cart.</p>
            <Button asChild>
              <Link to="/product-details">View product</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="rounded-xl border border-border p-4 flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-contain bg-secondary/30 p-2" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  <p className="text-sm text-muted-foreground">Price: ${item.price.toFixed(2)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}

            <div className="rounded-xl border border-border p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
              <div className="flex gap-2">
                <Button asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
                <Button variant="outline" onClick={clearCart}>
                  Clear cart
                </Button>
              </div>
            </div>
          </div>
        )}
        </div>
      </main>
      <Footer />
    </>
  )
}
