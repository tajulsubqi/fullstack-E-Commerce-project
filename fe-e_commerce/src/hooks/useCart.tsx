"use client"

import { CartProductType } from "@/types"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

type CartContextType = {
  cartTotalQty: number
  cartTotalAmount: number
  cartProducts: CartProductType[] | null
  handleAddProductToCart: (product: CartProductType) => void
  handleRemoveProductFromCart: (product: CartProductType) => void
  handleCartQtyIncrease: (product: CartProductType) => void
  handleCartQtyDecrease: (product: CartProductType) => void
  handleClearCart: () => void
}

export const CartContext = createContext<CartContextType | null>(null)

interface Props {
  [propName: string]: any
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0)
  const [cartTotalAmount, setCartTotalAmount] = useState(0)
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([])

  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItems")
    const cProducts: CartProductType[] = JSON.parse(cartItems)
    setCartProducts(cProducts)
  }, [])

  // get total qty and total amount
  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc: any, item: any) => {
            const itemTotal = item.price * item.quantity
            acc.total += itemTotal
            acc.qty += item.quantity

            return acc
          },
          {
            total: 0,
            qty: 0,
          },
        )

        setCartTotalQty(qty)
        setCartTotalAmount(total)
      }
    }
    getTotals()
  }, [cartProducts])

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart

      if (prev) {
        updatedCart = [...prev, product]
      } else {
        updatedCart = [product]
      }

      //notification success
      toast.success("Product added to cart successfully")
      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart))
      return updatedCart
    })
  }, [])

  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item: any) => {
          return item.id !== product.id
        })

        setCartProducts(filteredProducts)

        //notification removed
        toast.success("Product Removed")
        localStorage.setItem("eShopCartItems", JSON.stringify(filteredProducts))
      }
    },
    [cartProducts],
  )

  // handle qty Increase
  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      if (product.quantity === 99) {
        return toast.error("Max quantity reached")
      }

      if (cartProducts) {
        const updatedCart = [...cartProducts]
        const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity++
          setCartProducts(updatedCart)
          localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart))
        }
      }
    },
    [cartProducts, setCartProducts],
  )

  // handle qty Decrease
  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      if (product.quantity === 1) {
        return toast.error("Min quantity reached")
      }

      if (cartProducts) {
        const updatedCart = [...cartProducts]
        const existingIndex = cartProducts.findIndex(
          (item: any) => item.id === product.id,
        )

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity--
          setCartProducts(updatedCart)
          localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart))
        }
      }
    },
    [cartProducts, setCartProducts],
  )

  //clear cart
  const handleClearCart = useCallback(() => {
    setCartProducts([])
    setCartTotalQty(0)
    localStorage.setItem("eShopCartItems", JSON.stringify(null))
  }, [cartProducts])

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
    cartTotalAmount,
  }

  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider")
  }

  return context
}
