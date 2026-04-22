import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

export function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isCartAnimating, setIsCartAnimating] = useState(false)

  const { items, removeItem, totalItems, totalPrice, lastAddedToken } = useCart()

  useEffect(() => {
    setIsVisible(true)
  }, [lastAddedToken])

  useEffect(() => {
    if (lastAddedToken === 0) return

    setIsCartAnimating(true)
    const timeoutId = window.setTimeout(() => {
      setIsCartAnimating(false)
    }, 450)

    return () => window.clearTimeout(timeoutId)
  }, [lastAddedToken])

  if (!isVisible) {
    return (
      <div className="fixed right-5 top-24 z-[60]">
        <button
          type="button"
          onClick={() => setIsVisible(true)}
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white/95 text-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur transition hover:bg-white"
          aria-label="Show cart"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed right-5 top-24 z-[60]">
      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => {
            setIsOpen(false)
            setIsVisible(false)
          }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white/95 text-zinc-700 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur transition hover:bg-white hover:text-zinc-900"
          aria-label="Hide cart"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "group relative inline-flex h-16 items-center gap-3 rounded-2xl bg-zinc-950 px-6 text-white shadow-[0_12px_35px_rgba(0,0,0,0.20)] transition-all duration-300 hover:bg-black",
            isCartAnimating && "cart-bump ring-4 ring-red-500/20"
          )}
          aria-label="Toggle cart"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="text-sm font-semibold md:text-base">Cart</span>

          {totalItems > 0 && (
            <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-white px-2 text-sm font-bold text-zinc-950 shadow-sm">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 w-[380px] max-w-[92vw] overflow-hidden rounded-[28px] border border-zinc-200 bg-white/95 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900">Items added</h3>
              <p className="mt-1 text-sm text-zinc-500">
                {items.length === 0
                  ? "Your cart is currently empty."
                  : `${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`}
              </p>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 px-5 py-8 text-center">
              <p className="text-sm text-zinc-500">Your cart is empty.</p>
              <p className="mt-2 text-sm text-zinc-400">
                Add a kit to get started.
              </p>
            </div>
          ) : (
            <ul className="mb-5 max-h-72 space-y-3 overflow-auto pr-1">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-3"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-zinc-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white hover:text-zinc-900"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="border-t border-zinc-200 pt-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-medium text-zinc-600">Total</span>
              <span className="text-2xl font-bold text-zinc-950">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                asChild
                variant="outline"
                className="h-14 rounded-2xl border-zinc-200 text-base font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/cart">View cart</Link>
              </Button>

              <Button
                asChild
                className="h-14 rounded-2xl bg-zinc-950 text-base font-semibold text-white hover:bg-black"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/checkout">Complete Order</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}