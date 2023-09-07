import React from "react";
import {headers,cookies} from 'next/headers'

export default function Home() {
  const headerList = headers();
  const cookieStore = cookies();

  return (
      <div>
        <div>Main page</div>
      </div>
  )
}
