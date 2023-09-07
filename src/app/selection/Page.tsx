import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


//пример параметров
//params: {slug: ['horror','2021']}
const Page = ({params}: {params : {slug: string[]}}) => {
    const router = useRouter()


    return (
        <>
            <div>Selection</div>
            {[1,2,3].map((id,index) => (<Link key={index} href={`film/${id}`}>{`Film ${id}`}</Link>))}
        </>
)
}

export default Page