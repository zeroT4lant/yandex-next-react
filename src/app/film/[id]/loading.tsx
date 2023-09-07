import React, { Suspense } from 'react'
import Page from './Page'

const Loading = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  )
}

export default Loading