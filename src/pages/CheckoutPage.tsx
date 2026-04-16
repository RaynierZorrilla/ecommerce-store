import { Link } from "react-router-dom"
import { useMemo, useState } from "react"
import { ArrowLeft, CreditCard, ShieldCheck, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Footer } from "@/components/footer"

export function CheckoutPage() {
  const { items, totalItems, totalPrice } = useCart()
  const [shippingType, setShippingType] = useState<"standard" | "express">("standard")
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "googlepay" | "cashapp" | "amazonpay" | "paypal"
  >("card")

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

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`rounded-lg border px-3 py-3 text-left transition-colors ${
                    paymentMethod === "card"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-border hover:bg-secondary/30"
                  }`}
                >
                  <span className="flex flex-col items-start gap-2 font-semibold">
                    <CreditCard className="h-7 w-7 shrink-0" aria-hidden />
                    <span className="text-sm">Tarjeta</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("googlepay")}
                  className={`rounded-lg border px-3 py-3 text-left transition-colors ${
                    paymentMethod === "googlepay"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-border hover:bg-secondary/30"
                  }`}
                >
                  <span className="flex flex-col items-start gap-2 font-semibold">
                    <img
                      src="/google-pay.png"
                      alt=""
                      className="h-7 w-auto max-w-[92px] object-contain object-left"
                    />
                    <span className="text-sm">Google Pay</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cashapp")}
                  className={`rounded-lg border px-3 py-3 text-left transition-colors ${
                    paymentMethod === "cashapp"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-border hover:bg-secondary/30"
                  }`}
                >
                  <span className="flex flex-col items-start gap-2 font-semibold">
                    <img
                      src="/cash-pay.png"
                      alt=""
                      className="h-8 w-auto max-w-[40px] object-contain object-left"
                    />
                    <span className="text-sm">Cash App Pay</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("amazonpay")}
                  className={`rounded-lg border px-3 py-3 text-left transition-colors ${
                    paymentMethod === "amazonpay"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-border hover:bg-secondary/30"
                  }`}
                >
                  <span className="flex flex-col items-start gap-2 font-semibold">
                    <img
                      src="/amazon-pay.jpg"
                      alt=""
                      className="h-7 w-auto max-w-[100px] object-contain object-left"
                    />
                    <span className="text-sm">Amazon Pay</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`rounded-lg border px-3 py-3 text-left transition-colors ${
                    paymentMethod === "paypal"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-border hover:bg-secondary/30"
                  }`}
                >
                  <span className="flex flex-col items-start gap-2 font-semibold">
                    <img
                      src="/paypal.svg"
                      alt=""
                      className="h-6 w-auto max-w-[88px] object-contain object-left"
                    />
                    <span className="text-sm">PayPal</span>
                  </span>
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-3 rounded-lg border border-border p-4">
                  <label className="text-sm font-medium">Numero de tarjeta</label>
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  />
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Fecha de caducidad</label>
                      <input
                        type="text"
                        placeholder="MM / AA"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Codigo de seguridad</label>
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Pais</label>
                    <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                      <option>Republica Dominicana</option>
                    </select>
                  </div>
                </div>
              )}

              {paymentMethod === "googlepay" && (
                <div className="space-y-3 rounded-lg border border-border p-4">
                  <div className="flex items-center gap-3">
                    <img src="/google-pay.jpg" alt="" className="h-8 w-auto max-w-[100px] object-contain" />
                    <p className="font-medium text-foreground">Google Pay</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Aparecera otro paso para enviar tus datos de pago de forma segura.
                  </p>
                </div>
              )}

              {paymentMethod === "cashapp" && (
                <div className="space-y-3 rounded-lg border border-border p-4">
                  <div className="flex items-center gap-3">
                    <img src="/cash-pay.png" alt="" className="h-10 w-auto max-w-[44px] object-contain" />
                    <p className="font-medium">Se ha seleccionado Cash App Pay.</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Te aparecera un codigo QR para que lo escanees con Cash App.
                  </p>
                </div>
              )}

              {paymentMethod === "amazonpay" && (
                <div className="space-y-3 rounded-lg border border-border p-4">
                  <div className="flex items-center gap-3">
                    <img src="/amazon-pay.jpg" alt="" className="h-8 w-auto max-w-[110px] object-contain" />
                    <p className="font-medium">Se ha seleccionado Amazon Pay.</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Despues del envio, se te redirigira para completar los siguientes pasos de forma segura.
                  </p>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="space-y-3 rounded-lg border border-border p-4">
                  <div className="flex items-center gap-3">
                    <img src="/paypal.svg" alt="" className="h-6 w-auto max-w-[100px] object-contain" />
                    <p className="font-medium">Se ha seleccionado PayPal.</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Al continuar, se abrira PayPal para que completes el pago de forma segura.
                  </p>
                </div>
              )}
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" disabled={items.length === 0}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Make Payment
            </Button>
            <p className="text-center text-sm text-muted-foreground inline-flex w-full justify-center items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              100% Secure & Safe Payments
            </p>
          </div>

          <aside className="rounded-xl border border-border p-6 h-fit">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 className="text-lg font-semibold">Order summary</h3>
              <Link
                to="/cart"
                className="text-sm font-medium text-primary hover:underline shrink-0"
              >
                Editar
              </Link>
            </div>

            {items.length > 0 ? (
              <ul className="space-y-3 text-sm mb-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt=""
                      className="h-14 w-14 rounded-md object-contain bg-secondary/30 p-1 shrink-0 border border-border"
                    />
                    <div className="flex min-w-0 flex-1 items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-medium text-foreground truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
                      </div>
                      <span className="shrink-0 font-medium tabular-nums">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
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
