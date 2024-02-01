"use client"
import Container from "@/components/Container"
import React from "react"
import ProductDetail from "./ProductDetails"
import { Product } from "../../../../utils/Product"
import ListRating from "./ListRating"

interface IParams {
  productId?: string
}

const data = Product
console.log(data)

const Products = ({ params }: { params: IParams }) => {
  // console.log("params", Product)
  return (
    <div className="p-8">
      <Container>
        <ProductDetail data={Product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>List</div>

          <div>
            <ListRating product={Product}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Products
