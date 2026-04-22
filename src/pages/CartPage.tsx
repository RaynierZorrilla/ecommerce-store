import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Trash2,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  ShoppingBag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export function CartPage() {
  const { items, removeItem, clearCart, totalPrice } = useCart()

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
              My cart
            </h1>
            <p className="mt-3 text-base text-zinc-600 md:text-lg">
              Review your items before continuing to checkout.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.05)] md:p-10">
              <div className="flex flex-col items-start">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <ShoppingBag className="h-6 w-6" />
                </div>

                <h2 className="text-2xl font-bold text-zinc-900">Your cart is empty</h2>
                <p className="mt-3 max-w-md text-zinc-600">
                  Add your restoration kit to continue and bring your headlights back to life.
                </p>

                <Button
                  asChild
                  className="mt-6 rounded-full bg-red-600 px-6 text-white hover:bg-red-700"
                >
                  <Link to="/product-details">View product</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="rounded-[28px] border border-zinc-200 bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-zinc-50 p-3 shadow-sm">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h2 className="text-xl font-bold text-zinc-900">
                              {item.name}
                            </h2>
                            <p className="mt-1 text-sm text-zinc-500">
                              Professional headlight restoration kit
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <div className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700">
                            Quantity: <span className="font-semibold">{item.quantity}</span>
                          </div>
                          <div className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700">
                            Price: <span className="font-semibold">${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="h-fit rounded-[28px] border border-zinc-200 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] md:p-7">
                <h2 className="text-2xl font-bold text-zinc-900">Order summary</h2>

                <div className="mt-6 space-y-4 border-b border-zinc-200 pb-5">
                  <div className="flex items-center justify-between text-sm text-zinc-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-zinc-600">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-medium text-zinc-700">Total</span>
                  <span className="text-3xl font-black tracking-tight text-zinc-950">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <Button
                    asChild
                    className="h-14 w-full rounded-full bg-red-600 text-base font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-700"
                  >
                    <Link to="/checkout">Checkout</Link>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="h-14 w-full rounded-full border-zinc-200 text-base font-semibold"
                  >
                    Clear cart
                  </Button>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
                    <ShieldCheck className="h-4 w-4 text-red-600" />
                    Secure checkout
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
                    <Truck className="h-4 w-4 text-red-600" />
                    Fast shipping available
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
                    <BadgeDollarSign className="h-4 w-4 text-red-600" />
                    Professional-grade value
                  </div>
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