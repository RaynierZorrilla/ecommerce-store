import { Link } from "react-router-dom"
import { useMemo, useState } from "react"
import {
  ArrowLeft,
  CreditCard,
  ShieldCheck,
  ShoppingCart,
  Lock,
  Truck,
  BadgeDollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

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
      <main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <Link
            to="/cart"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al carrito
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
              Finalizar compra
            </h1>
            <p className="mt-3 text-base text-zinc-600 md:text-lg">
              Completa tu pedido de forma segura y recibe tu kit de restauración rápidamente.
            </p>
          </div>

          <section className="grid gap-6 lg:grid-cols-[1.65fr_0.9fr]">
            <div className="rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)] md:p-8">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900">Información del cliente</h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500"
                  />
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500 sm:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Dirección"
                    className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500 sm:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Ciudad / País"
                    className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500"
                  />
                  <input
                    type="text"
                    placeholder="Código postal"
                    className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="mt-8 border-t border-zinc-200 pt-8">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold text-zinc-900">Envío</h2>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setShippingType("standard")}
                    className={`rounded-2xl border p-4 text-left transition ${
                      shippingType === "standard"
                        ? "border-red-500 bg-red-50"
                        : "border-zinc-200 bg-white hover:bg-zinc-50"
                    }`}
                  >
                    <p className="font-semibold text-zinc-900">Envío estándar</p>
                    <p className="mt-1 text-sm text-zinc-500">$4.99</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShippingType("express")}
                    className={`rounded-2xl border p-4 text-left transition ${
                      shippingType === "express"
                        ? "border-red-500 bg-red-50"
                        : "border-zinc-200 bg-white hover:bg-zinc-50"
                    }`}
                  >
                    <p className="font-semibold text-zinc-900">Envío exprés</p>
                    <p className="mt-1 text-sm text-zinc-500">$9.99</p>
                  </button>
                </div>
              </div>

              <div className="mt-8 border-t border-zinc-200 pt-8">
                <h2 className="text-2xl font-bold text-zinc-900">Método de pago</h2>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`rounded-2xl border p-4 text-left transition ${
                      paymentMethod === "card"
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-zinc-200 bg-white hover:bg-zinc-50"
                    }`}
                  >
                    <span className="flex flex-col items-start gap-3 font-semibold">
                      <CreditCard className="h-7 w-7 shrink-0" />
                      <span className="text-sm">Tarjeta</span>
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("googlepay")}
                    className={`rounded-2xl border p-4 text-left transition ${
                      paymentMethod === "googlepay"
                        ? "border-red-500 bg-red-50"
                        : "border-zinc-200 bg-white hover:bg-zinc-50"
                    }`}
                  >
                    <span className="flex flex-col items-start gap-3 font-semibold">
                      <img src="/google-pay.png" alt="" className="h-7 w-auto max-w-[92px] object-contain object-left" />
                      <span className="text-sm text-zinc-900">Google Pay</span>
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cashapp")}
                    className={`rounded-2xl border p-4 text-left transition ${
                      paymentMethod === "cashapp"
                        ? "border-red-500 bg-red-50"
                        : "border-zinc-200 bg-white hover:bg-zinc-50"
                    }`}
                  >
                    <span className="flex flex-col items-start gap-3 font-semibold">
                      <img src="/cash-pay.png" alt="" className="h-8 w-auto max-w-[40px] object-contain object-left" />
                      <span className="text-sm text-zinc-900">Cash App Pay</span>
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("amazonpay")}
                    className={`rounded-2xl border p-4 text-left transition ${
                      paymentMethod === "amazonpay"
                        ? "border-red-500 bg-red-50"
                        : "border-zinc-200 bg-white hover:bg-zinc-50"
                    }`}
                  >
                    <span className="flex flex-col items-start gap-3 font-semibold">
                      <img src="/amazon-pay.jpg" alt="" className="h-7 w-auto max-w-[100px] object-contain object-left" />
                      <span className="text-sm text-zinc-900">Amazon Pay</span>
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`rounded-2xl border p-4 text-left transition ${
                      paymentMethod === "paypal"
                        ? "border-red-500 bg-red-50"
                        : "border-zinc-200 bg-white hover:bg-zinc-50"
                    }`}
                  >
                    <span className="flex flex-col items-start gap-3 font-semibold">
                      <img src="/paypal.svg" alt="" className="h-6 w-auto max-w-[88px] object-contain object-left" />
                      <span className="text-sm text-zinc-900">PayPal</span>
                    </span>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="mt-5 rounded-[28px] border border-zinc-200 bg-zinc-50/70 p-5">
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-900">
                          Número de tarjeta
                        </label>
                        <input
                          type="text"
                          placeholder="1234 1234 1234 1234"
                          className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500"
                        />
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-900">
                            Fecha de vencimiento
                          </label>
                          <input
                            type="text"
                            placeholder="MM / AA"
                            className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-zinc-900">
                            Código de seguridad
                          </label>
                          <input
                            type="text"
                            placeholder="CVC"
                            className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-900">
                          País
                        </label>
                        <select className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition focus:border-red-500">
                          <option>República Dominicana</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod !== "card" && (
                  <div className="mt-5 rounded-[28px] border border-zinc-200 bg-zinc-50/70 p-5">
                    <p className="text-sm leading-7 text-zinc-600">
                      {paymentMethod === "googlepay" &&
                        "Al continuar, aparecerá un paso de pago seguro con Google Pay."}
                      {paymentMethod === "cashapp" &&
                        "Aparecerá un código QR de Cash App para que completes el pago de forma segura."}
                      {paymentMethod === "amazonpay" &&
                        "Serás redirigido a Amazon Pay para continuar el pago de forma segura."}
                      {paymentMethod === "paypal" &&
                        "Serás redirigido a PayPal para completar tu pago de forma segura."}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <Button
                  className="h-14 w-full rounded-full bg-red-600 text-base font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-700"
                  disabled={items.length === 0}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Completar pago
                </Button>

                <p className="mt-4 inline-flex w-full items-center justify-center gap-2 text-sm text-zinc-500">
                  <ShieldCheck className="h-4 w-4" />
                  Pagos 100 % seguros
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)] md:p-7 lg:sticky lg:top-28">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-zinc-900">Resumen del pedido</h3>
                <Link
                  to="/cart"
                  className="text-sm font-semibold text-red-600 transition hover:underline"
                >
                  Editar
                </Link>
              </div>

              {items.length > 0 ? (
                <ul className="mb-5 space-y-4">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="flex min-w-0 flex-1 items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate font-semibold text-zinc-900">{item.name}</p>
                          <p className="text-sm text-zinc-500">Cant.: {item.quantity}</p>
                        </div>
                        <span className="shrink-0 font-semibold tabular-nums text-zinc-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mb-4 text-sm text-zinc-500">No hay productos en tu carrito.</p>
              )}

              <div className="space-y-3 border-t border-zinc-200 pt-5 text-sm">
                <p className="flex justify-between">
                  <span className="text-zinc-500">Productos</span>
                  <span className="font-medium text-zinc-900">{totalItems}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-zinc-500">Subtotal</span>
                  <span className="font-medium text-zinc-900">${totalPrice.toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-zinc-500">Descuento</span>
                  <span className="font-medium text-zinc-900">-${discount.toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-zinc-500">Envío</span>
                  <span className="font-medium text-zinc-900">
                    ${totalItems > 0 ? shippingCost.toFixed(2) : "0.00"}
                  </span>
                </p>

                <div className="mt-4 border-t border-zinc-200 pt-4">
                  <p className="flex justify-between text-lg font-bold">
                    <span className="text-zinc-900">Total</span>
                    <span className="text-zinc-950">${orderTotal.toFixed(2)}</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
                  <Lock className="h-4 w-4 text-red-600" />
                  Pago cifrado
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
                  <Truck className="h-4 w-4 text-red-600" />
                  Envío rápido disponible
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
                  <BadgeDollarSign className="h-4 w-4 text-red-600" />
                  Calidad profesional al mejor precio
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