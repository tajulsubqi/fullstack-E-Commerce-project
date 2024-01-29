"use client"
import SetColor from "@/components/products/SetColor"
import SetQuantity from "@/components/products/SetQuantity"
import { CartProductType, SelectedImgType } from "@/types"
// import { CartProductType, SelectedImgType } from "@/types"
import { Rating } from "@mui/material"
import React, { useCallback, useState } from "react"

interface ProductDetailProps {
  data: any
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />
}

const ProductDetails: React.FC<ProductDetailProps> = ({ data }) => {
  // console.log(data)
  const [cartProduct, setCartProduct] = useState<CartProductType[]>({
    id: data.id,
    name: data.name,
    description: data.description,
    category: data.category,
    brand: data.brand,
    selectedImg: { ...data.images[0] },
    quantity: 1,
    price: data.price,
  })

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length

  const handleColorSelect = useCallback(
    (colorValue: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: colorValue }
      })
      console.log(colorValue)
    },
    [cartProduct.selectedImg],
  )

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 }
    })
  }, [cartProduct])

  const handleQtyDecrease = useCallback(() => {
    setCartProduct((prev) => {
      if (prev.quantity === 1) return prev

      return { ...prev, quantity: prev.quantity - 1 }
    })
  }, [cartProduct])

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
        <SetColor
          cartProduct={cartProduct}
          images={data.images}
          handelColorSelect={handleColorSelect}
        />
        <Horizontal />

        <Horizontal />
        {/* <div>quantity</div> */}
        <SetQuantity
          cartProduct={cartProduct}
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease}
        />
        <Horizontal />

        <div>add to cart</div>
      </div>
    </div>
  )
}

export default ProductDetails
