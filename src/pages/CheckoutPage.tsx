import { Link } from "react-router-dom"
import { useMemo, useState } from "react"
import { Apple, ArrowLeft, CreditCard, ShieldCheck, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Footer } from "@/components/footer"

export function CheckoutPage() {
  const { items, totalItems, totalPrice } = useCart()
  const [shippingType, setShippingType] = useState<"standard" | "express">("standard")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "applepay">("card")

  const discount = useMemo(() => (totalPrice >= 80 ? totalPrice * 0.1 : 0), [totalPrice])
  const shippingCost = shippingType === "express" ? 9.99 : 4.99
  const orderTotal = Math.max(totalPrice - discount, 0) + (totalItems > 0 ? shippingCost : 0)

  return (
    <>
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to cart
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <section className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 rounded-xl border border-border p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Customer information</h2>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="sm:col-span-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="sm:col-span-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Ciudad / Pais"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Postal code"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <h2 className="text-xl font-semibold">Payment method</h2>
              <div className="grid sm:grid-cols-3 gap-2 text-sm">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`rounded-md border px-3 py-2 ${
                    paymentMethod === "card" ? "border-primary bg-primary/10" : "border-border"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Card (Visa/MasterCard)
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`rounded-md border px-3 py-2 ${
                    paymentMethod === "paypal" ? "border-primary bg-primary/10" : "border-border"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Wallet className="h-4 w-4" />
                    PayPal
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("applepay")}
                  className={`rounded-md border px-3 py-2 ${
                    paymentMethod === "applepay" ? "border-primary bg-primary/10" : "border-border"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Apple className="h-4 w-4" />
                    Apple Pay
                  </span>
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="grid sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="sm:col-span-3 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                </div>
              )}
            </div>

            <Button className="w-full sm:w-auto" disabled={items.length === 0}>
              Complete Order
            </Button>
          </div>

          <aside className="rounded-xl border border-border p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">Order summary</h3>

            {items.length > 0 ? (
              <ul className="space-y-3 text-sm mb-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between gap-2">
                    <span className="truncate">
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground mb-4">There are no products in your cart.</p>
            )}

            <div className="space-y-3 text-sm">
              <p className="flex justify-between">
                <span className="text-muted-foreground">Items</span>
                <span>{totalItems}</span>
              </p>
              <p className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${totalPrice.toFixed(2)}</span></p>
              <p className="flex justify-between">
                <span className="text-muted-foreground">Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>${totalItems > 0 ? shippingCost.toFixed(2) : "0.00"}</span>
              </p>
              <div className="border-t border-border pt-3 mt-3">
                <p className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span className="text-primary">${orderTotal.toFixed(2)}</span>
                </p>
              </div>
            </div>
          </aside>
        </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
