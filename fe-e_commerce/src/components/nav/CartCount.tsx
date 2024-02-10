"use client"
import { useCart } from "@/hooks/useCart"
import { useRouter } from "next/navigation"
import React from "react"
import { IoCart } from "react-icons/io5"

const CartCount = () => {
  const { cartTotalQty } = useCart()
  const router = useRouter()

  return (
    <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
      <div className="text-3xl">
        <IoCart />
      </div>
      <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full flex items-center justify-center w-6 h-6">
        {cartTotalQty}
      </span>
    </div>
  )
}

export default CartCount
