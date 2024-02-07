"use client"
import Heading from "@/components/Heading"
import Button from "@/components/products/Button"
import { useCart } from "@/hooks/useCart"
import Link from "next/link"
import React from "react"
import { MdArrowBack } from "react-icons/md"
import ItemContent from "./ItemContent"

const CartClient = () => {
  const { cartProducts } = useCart()

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link href={"/"} className="text-slate-500 flex gap-2 items-center mt-2">
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Heading title="Shopping Cart" center />
      <div>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
          <div className="col-span-2 justify-self-start">PRODUCT</div>
          <div className="justify-self-center">PRICE</div>
          <div className="justify-self-center">QUANTITY</div>
          <div className="justify-self-end">TOTAL</div>
        </div>

        {cartProducts &&
          cartProducts.map((item) => <ItemContent key={item.id} item={item} />)}
        <div className="col-span-5 border-t-[1.5px] border-slate-300 py-4 flex justify-between">
          <div className="w-[90px]">
            <Button label="Clear Cart" small outline />
          </div>

          <div className="text-sm flex flex-col gap-1">
            <div className="flex justify-between w-full font-semibold">
              <span>Subtotal</span>
              <span>$1000</span>
            </div>
            <p className="text-slate-500">Taxes and shipping calculate at checkout</p>

            <div>
              <Button label="Checkout" onClick={() => {}} />
            </div>

            <div>
              <Link href={"/"} className="text-slate-500 flex gap-2 items-center">
                <MdArrowBack />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartClient
