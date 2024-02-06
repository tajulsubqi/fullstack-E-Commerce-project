import Banner from "@/components/Banner"
import Container from "@/components/Container"
import React from "react"
import { productsData } from "../../../utils/ProductData"
import ProductCard from "@/components/products/ProductCard"

const HomePage = () => {
  // console.log(productsData)

  return (
    <Container>
      <div className="mt-8">
        <Banner />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg-:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {productsData.map((data) => {
          return (
            <div key={data.id}>
              <ProductCard data={data} />
            </div>
          )
        })}
      </div>

      <div></div>
    </Container>
  )
}

export default HomePage
