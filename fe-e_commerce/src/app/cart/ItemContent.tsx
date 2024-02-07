"use client"
import { CartProductType } from "@/types"
import React from "react"
import { formatPriceUSD } from "../../../utils/formatPrice"
import Link from "next/link"
import { Truncatetext } from "../../../utils/truncateText"
import Image from "next/image"
import { useCart } from "@/hooks/useCart"
import SetQuantity from "@/products/SetQuantity"

interface ItemContentProps {
  item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const { handleRemoveProductFromCart, handleCartQtyIncrease } = useCart()

  return (
    <div className="grid grid-cols-5 text-xs border-t-[1.5px] border-slate-300 py-4 items-center justify-between">
      <div
        className="
      col-span-2
      justify-self-start
      flex
      md:gap-2
      "
      >
        <Link href={`/products/${item.id}`}>
          <div className="relative w-[70px] h-[70px]">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className="flex flex-col justify-between">
          <Link href={`/products/${item.id}`}>{Truncatetext(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div className="w-[70px]">
            <button
              className="text-slate-500 underline"
              onClick={() => handleRemoveProductFromCart(item)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPriceUSD(item.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtyIncrease={() => {
            handleCartQtyIncrease(item)
          }}
          handleQtyDecrease={() => {}}
        />
      </div>
      <div className="justify-self-end">{formatPriceUSD(item.price * item.quantity)}</div>
    </div>
  )
}

export default ItemContent
