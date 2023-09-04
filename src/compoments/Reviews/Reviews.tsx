import React from 'react'
import Review from '../Review/Review'



const Reviews = ({reviews}) => {
  return (
    <div>
        {
          Boolean(reviews) && reviews.map((review) => (
            <Review
              key={review.id}
              author={review.author}
              text={review.text}
              rating={review.rating}
            />
          ))
        }
    </div>
  )
}

export default Reviews