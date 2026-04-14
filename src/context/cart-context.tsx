import { createContext, useContext, useMemo, useState } from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type AddItemInput = Omit<CartItem, "quantity">

type CartContextValue = {
  items: CartItem[]
  addItem: (item: AddItemInput) => void
  removeItem: (id: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  lastAddedToken: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [lastAddedToken, setLastAddedToken] = useState(0)

  const addItem = (newItem: AddItemInput) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id)
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
    setLastAddedToken((prev) => prev + 1)
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setItems([])

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items],
  )
  const totalPrice = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items],
  )

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, totalItems, totalPrice, lastAddedToken }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
