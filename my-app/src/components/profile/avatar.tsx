import React from 'react'
import Link from 'next/link'



export default function Avatar({location, size} : {location : string, size? : string}) {
  
    return (
    <Link href='/profile'>

    <div className="grid w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
    <img
      className={`object-cover object-center rounded-full ${size ? 'size-'.concat(size) : 'size-10'} `}
      src={`${process.env.NEXT_PUBLIC_API_URL}/${location}`}
      alt={location}
      />
  </div>
      </Link>
    )
}
