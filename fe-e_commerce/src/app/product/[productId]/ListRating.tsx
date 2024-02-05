"use client"

import Avatar from "@/components/Avatar"
import Heading from "@/components/Heading"
import { Rating } from "@mui/material"
import moment from "moment"

interface ListRatingProps {
  product: any
}

const ListRating = ({ product }: ListRatingProps) => {
  return (
    <div>
      <Heading title="Product Review" />

      <div className="text-sm-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-300px">
                <div className="flex gap-2 items-center">
                  <Avatar src={review?.user.image} />

                  <div className="font-semibold">{review?.user.name}A</div>
                  <div className="font-light">{moment(review.createdAt).fromNow()}</div>
                </div>

                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                </div>
                <div className="ml-2">
                  {review.comment}
                  <hr className="mt-4 mb-4" />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ListRating
