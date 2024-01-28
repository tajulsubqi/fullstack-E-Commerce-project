"use client"

import { CartProductType, SelectedImgType } from "@/types"

interface SetColorProps {
  images: SelectedImgType[]
  cartProduct: CartProductType
  handelColorSelect: (value: SelectedImgType) => void
}

const SetColor = ({ images, cartProduct, handelColorSelect }: SetColorProps) => {
  return (
    <div className="flex gap-4 items-center">
      <span className="font-semibold">COLOR: </span>
      <div className="flex gap-1">
        {images.map((image) => {
          return (
            <div
              key={image.color}
              onClick={() => handelColorSelect(image)}
              className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center ${
                cartProduct.selectedImg.color === image.color ? "border-2" : "border-none"
              }`}
            >
              <div
                style={{ backgroundColor: image.color }}
                className="h-5 w-5 rounded-full cursor-pointer border-2 border-slate-300"
              ></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SetColor
