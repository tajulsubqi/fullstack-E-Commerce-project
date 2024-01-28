"use client"
import Image from "next/image"
import React from "react"
import { TruncateDescription, Truncatetext } from "../../../utils/truncateText"

interface PropsProductData {
  data: any
}

const ProductCard = ({ data }: PropsProductData) => {
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-md p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.images[0].image}
            alt="product"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="font-bold mt-5 text">{Truncatetext(data.name)}</div>
        <div>{TruncateDescription(data.description)}</div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default ProductCard
