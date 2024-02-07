"use client"
import Container from "@/components/Container"
import React from "react"
import ProductDetail from "./ProductDetails"
import ListRating from "./ListRating"
import { productsData } from "../../../../utils/ProductData"

interface IParams {
  productId?: string
}

const Products = ({ params }: { params: IParams }) => {
  // ngambil data dari params
  const product = productsData.find((product) => product.id === params.productId)

  return (
    <div className="p-8">
      <Container>
        <ProductDetail data={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>List</div>

          <div>
            <ListRating product={product} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Products
