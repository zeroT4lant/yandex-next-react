import React from 'react'

type Review = {
  author : string,
  text : string,
  rating : number
}

const Review: React.FC<Review> = ({author,text,rating}) => {
  return (
    <div >
        <span>{author}</span>
        <span>{text}</span>
        <span>{rating}</span>
    </div>
  )
}

export default Review