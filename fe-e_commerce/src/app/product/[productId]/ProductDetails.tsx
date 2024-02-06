import React, { useCallback, useEffect, useState } from "react"
import { Rating } from "@mui/material"
import SetColor from "@/components/products/SetColor"
import SetQuantity from "@/components/products/SetQuantity"
import { CartProductType, SelectedImgType } from "@/types"
import Button from "@/components/products/Button"
import ProductImage from "@/components/products/ProductImages"
import { useCart } from "@/hooks/useCart"
import { MdCheckCircle } from "react-icons/md"
import { useRouter } from "next/navigation"

interface ProductDetailProps {
  data: any
}

const Horizontal: React.FC = () => {
  return <hr className="w-[30%] my-2" />
}

const ProductDetails: React.FC<ProductDetailProps> = ({ data }) => {
  const { handleAddProductToCart, cartProducts, cartTotalQty } = useCart()

  const [isProductInCart, setIsProductInCart] = useState(false)

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: data.id,
    name: data.name,
    description: data.description,
    category: data.category,
    brand: data.brand,
    selectedImg: { ...data.images[0] },
    quantity: 1,
    price: data.price,
  })

  const router = useRouter()

  console.log(cartProducts)

  useEffect(() => {
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex((item) => item.id === data.id)

      if (existingIndex > -1) {
        setIsProductInCart(true)
      }
    }
  }, [cartProducts])

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length

  const handleColorSelect = useCallback(
    (colorValue: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: colorValue }
      })
    },
    [cartProduct.selectedImg],
  )

  // handle qty tambah dan kurang
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
      <div>
        <ProductImage
          cartProduct={cartProduct}
          product={data}
          handleColorSelect={handleColorSelect}
        />
      </div>

      <div className="flex flex-col gap-2 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium">{data.name}</h2>

        <div className="flex gap-3">
          <Rating name="read-only" value={productRating} readOnly />
          <div>{data.reviews.length} reviews</div>
        </div>

        <Horizontal />
        <div className="text-justify">{data.description}</div>
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
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-2">
              <MdCheckCircle size={24} className="text-green-500" />
              <span>Product added to cart</span>
            </p>
            <div className="max-w-[300px]">
              <Button label="View Cartart" outline onClick={() => router.push("/cart")} />
            </div>
          </>
        ) : (
          <>
            <SetColor
              cartProduct={cartProduct}
              images={data.images}
              handelColorSelect={handleColorSelect}
            />
            <Horizontal />

            <Horizontal />
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
            />
            <Horizontal />

            <div className="max-w-[300px]">
              <Button
                label="Add To Cart"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
