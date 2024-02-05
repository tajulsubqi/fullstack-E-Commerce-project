import { createContext, useContext, useState } from "react"

type CartContextType = {
  cartTotalQty: number
}

interface Props {
  [propName: string]: any
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0)

  const value = {
    cartTotalQty,
  }

  return <CartContext.Provider value={value} />
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider")
  }

  return context
}
