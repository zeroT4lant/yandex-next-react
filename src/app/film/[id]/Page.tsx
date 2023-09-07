import React from 'react'

const Page = ({params}: {params: {id: number}}) => {
  throw new Error();

  return (
    <div>{`Film id= ${params.id}`}</div>
  )
}

export default Page