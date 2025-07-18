import Image from 'next/image'
import React from 'react'


export default function Search() {
  return (
    <div className='bg-inputGray py-2 px-4 flex items-center gap-4 rounded-full'>
        <Image src={"icons/explore.svg"} alt="" width={16} height={16} />
        <input type="text" placeholder='جستجو' className='bg-transparent outline-none placeholder:text-gray' />
    </div>
  )
}