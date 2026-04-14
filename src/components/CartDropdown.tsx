import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { items, removeItem, totalItems, totalPrice, lastAddedToken } = useCart()

  useEffect(() => {
    setIsVisible(true)
  }, [lastAddedToken])

  if (!isVisible) {
    return (
      <div className="fixed top-24 right-5 z-[60]">
        <button
          type="button"
          onClick={() => setIsVisible(true)}
          className="rounded-md border border-border bg-background p-2 shadow-md hover:bg-secondary/50"
          aria-label="Show cart"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed top-24 right-5 z-[60]">
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            setIsOpen(false)
            setIsVisible(false)
          }}
          className="rounded-md border border-border bg-background p-2 shadow-sm hover:bg-secondary/50"
          aria-label="Hide cart"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <Button onClick={() => setIsOpen((prev) => !prev)} className="relative">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart
          {totalItems > 0 && (
            <span className="ml-2 inline-flex items-center justify-center rounded-full bg-white text-primary text-xs font-bold min-w-5 h-5 px-1">
              {totalItems}
            </span>
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="mt-2 w-[350px] max-w-[90vw] rounded-xl border border-border bg-background shadow-lg p-4">
          <h3 className="font-semibold text-foreground mb-3">Items added</h3>

          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground mb-4">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3 max-h-72 overflow-auto mb-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="h-12 w-12 rounded-md object-contain bg-secondary/30 p-1" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="border-t border-border pt-3 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Total: ${totalPrice.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button asChild size="sm" variant="outline" onClick={() => setIsOpen(false)}>
                <Link to="/cart">View cart</Link>
              </Button>
              <Button asChild size="sm" onClick={() => setIsOpen(false)}>
                <Link to="/checkout">Complete Order</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
