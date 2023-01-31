import React from "react"
import cl from "@/styles/components/UI/Reviews.module.scss"
import Rate from "./Rate"

interface ReviewsProps {
  reviews: number
  rate: number
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, rate }) => {
  let suffix = ""
  if (reviews > 5) {
    suffix = "ов"
  }
  if (reviews > 1 && reviews < 5) {
    suffix = "a"
  }
  return (
    <div className={cl.reviews}>
      <Rate rate={rate} />
      <a href="#">
        {reviews} отзыв{suffix}
      </a>
    </div>
  )
}

export default Reviews
