"use client"
import Image from "next/image"
import React from "react"
import { Truncatetext } from "../../../utils/truncateText"
import { formatPriceUSD } from "../../../utils/formatPrice"
import { Rating } from "@mui/material"
import { useRouter } from "next/navigation"

interface PropsProductData {
  data: any
}

const ProductCard = ({ data }: PropsProductData) => {
  const router = useRouter()

  // menghitung rata-rata rating produk berdasarkan ulasan yang dimilikinya
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-md p-2 transition hover:scale-105 text-center text-sm"
    >
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
        {/* <div>{TruncateDescription(data.description)}</div> */}
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPriceUSD(data.price)}</div>
      </div>
    </div>
  )
}

export default ProductCard
