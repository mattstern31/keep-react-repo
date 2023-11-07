'use client'
import { Rating } from '~/src'

const RatingWithProgress = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Rating.Advanced percentFilled={70}>5 Star</Rating.Advanced>
      <Rating.Advanced percentFilled={60}>4 Star</Rating.Advanced>
      <Rating.Advanced percentFilled={50}>3 Star</Rating.Advanced>
      <Rating.Advanced percentFilled={40}>2 Star</Rating.Advanced>
      <Rating.Advanced percentFilled={10}>1 Star</Rating.Advanced>
    </div>
  )
}

const RatingWithProgressCode = `
"use client";
import { Rating } from "keep-react";

export const RatingComponent = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
      <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
      <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
      <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
      <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
    </div>
  );
}
`

export { RatingWithProgress, RatingWithProgressCode }
