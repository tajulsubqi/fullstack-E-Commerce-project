// "use client"
import { Rating } from "@mui/material"
import Image from "next/image"
import React from "react"

interface ProductDetailProps {
  data: any
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />
}

const ProductDetails = ({ data }: ProductDetailProps) => {
  console.log(data)

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>

      <div className="flex flex-col gap-2 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium">{data.name}</h2>

        <div className="flex gap-3">
          <Rating name="read-only" value={productRating} readOnly />
          <div>{data.reviews.length} reviews</div>
        </div>

        <Horizontal />
        <div className="text-justify">{data.description}HH</div>
        <Horizontal />

        <div>
          <span className="font-semibold ">CATEGORY: </span>
          {data.category}
        </div>

        <div>
          <span className="font-semibold">BRAND: </span>
          {data.brand}
        </div>

        <div className={data.inStock ? "text-green-500" : "text-red-500"}>
          {data.inStock ? "In stock" : "Out of stock"}
          <Horizontal />
        </div>

        <Horizontal />
        <div>color</div>
        <Horizontal />

        <Horizontal />
        <div>quantity</div>
        <Horizontal />

        <div>add to cart</div>
      </div>
    </div>
  )
}

export default ProductDetails
