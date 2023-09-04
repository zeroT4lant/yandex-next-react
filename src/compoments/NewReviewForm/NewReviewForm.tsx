import React, { useRef } from 'react'

const NewReviewForm = () => {
  const ref = useRef();

  u

  return (
    <div>
      <label>
        Name:
        <input 
          ref={ref}
          type='text'
        />
      </label>
    </div>
  )
}

export default NewReviewForm